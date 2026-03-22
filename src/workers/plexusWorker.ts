// Web Worker: Handles ALL plexus physics and rendering off the main thread.
// The main thread does nothing — zero CPU used for animation on the UI thread.

// Colors updated to match the minimal, deep-space aesthetic from the reference image.
const COLORS = [
    'rgba(255, 255, 255, 0.8)',
    'rgba(255, 255, 255, 0.5)',
    'rgba(200, 200, 200, 0.4)'
];

interface Particle {
    x: number;
    y: number;
    z: number; // Simulate subtle 3D depth for the "Plexus" cluster look
    vx: number;
    vy: number;
    size: number;
    color: string;
}

let ctx: OffscreenCanvasRenderingContext2D | null = null;
let width = 0;
let height = 0;
let particles: Particle[] = [];
let particleCount = 0;
let animationFrameId: number;
let paused = false;
let mouseX = -1000;
let mouseY = -1000;

function initParticles() {
    particles = [];
    // Much sparser density to match the minimal elegant look in the screenshot
    particleCount = Math.floor((width * height) / 30000) + 15;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            z: Math.random() * 2,
            vx: (Math.random() - 0.5) * 0.15, // Slower, more elegant floating motion
            vy: (Math.random() - 0.5) * 0.15,
            size: Math.random() < 0.2 ? 2.5 : 1 + Math.random() * 1.0, // A few distinct bright nodes, mostly small ones
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
    }
}

function render() {
    if (paused || !ctx) {
        animationFrameId = requestAnimationFrame(render);
        return;
    }

    ctx.clearRect(0, 0, width, height);

    // Draw lines
    ctx.lineWidth = 0.5; // Very crisp, thin lines
    for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Gentle bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Optional subtle interactive pull towards mouse to make it "work"
        if (mouseX > 0) {
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
                p.x -= (dx / dist) * 0.2; // slight parallax pull
                p.y -= (dy / dist) * 0.2;
            }
        }

        // Draw connections
        for (let j = i + 1; j < particleCount; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Much larger connection distance to allow geometric shapes
            const maxDist = 250; 
            
            if (dist < maxDist) {
                // Opacity fades out gently
                const opacity = (1 - dist / maxDist) * 0.25;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
        
        // Connect to mouse if close enough (foreground interactive feel)
        if (mouseX > 0) {
            const mx = mouseX - p.x;
            const my = mouseY - p.y;
            const mDist = Math.sqrt(mx * mx + my * my);
            if (mDist < 200) {
                const opacity = (1 - mDist / 200) * 0.3;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouseX, mouseY);
                ctx.stroke();
            }
        }
    }

    // Draw points (Nodes)
    for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.fillStyle = p.color;
        // Scale size slightly by Z to give faux 3D parallax feel
        const renderSize = p.size * (1 + p.z * 0.2); 
        ctx.arc(p.x, p.y, renderSize, 0, Math.PI * 2);
        
        // subtle glow for larger nodes
        if (p.size > 2) {
            ctx.shadowBlur = 4;
            ctx.shadowColor = 'rgba(255,255,255,0.5)';
        } else {
            ctx.shadowBlur = 0;
        }
        
        ctx.fill();
    }
    
    // Reset shadow
    ctx.shadowBlur = 0;

    animationFrameId = requestAnimationFrame(render);
}

// Listen for messages from the main thread
self.onmessage = (e: MessageEvent) => {
    const { type } = e.data;

    switch (type) {
        case 'init': {
            const offscreen: OffscreenCanvas = e.data.canvas;
            width = e.data.width;
            height = e.data.height;
            offscreen.width = width;
            offscreen.height = height;
            ctx = offscreen.getContext('2d');
            initParticles();
            animationFrameId = requestAnimationFrame(render);
            break;
        }
        case 'resize':
            width = e.data.width;
            height = e.data.height;
            if (ctx) {
                (ctx.canvas as OffscreenCanvas).width = width;
                (ctx.canvas as OffscreenCanvas).height = height;
            }
            break;
        case 'mousemove':
            mouseX = e.data.x;
            mouseY = e.data.y;
            break;
        case 'mouseleave':
            mouseX = -1000;
            mouseY = -1000;
            break;
        case 'pause':
            paused = true;
            break;
        case 'resume':
            paused = false;
            break;
        case 'destroy':
            cancelAnimationFrame(animationFrameId);
            break;
    }
};
