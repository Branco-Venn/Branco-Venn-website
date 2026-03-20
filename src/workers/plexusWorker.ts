// Web Worker: Handles ALL plexus physics and rendering off the main thread.
// The main thread does nothing — zero CPU used for animation on the UI thread.

const COLORS = [
    '#3B82F6', '#6366F1', '#8B5CF6', '#F97316', '#EF4444', '#F59E0B',
];

interface Particle {
    x: number;
    y: number;
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

function initParticles() {
    particles = [];
    // Density based on screen size
    particleCount = Math.floor((width * height) / 18000) + 40;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: 1.5 + Math.random() * 2,
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

    // Draw lines first so they are under points
    for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Check distances to other particles
        for (let j = i + 1; j < particleCount; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
                ctx.beginPath();
                // Opacity fades out as distance increases
                const opacity = (1 - dist / 150) * 0.3;
                ctx.strokeStyle = p.color;
                ctx.globalAlpha = opacity;
                ctx.lineWidth = 0.8;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
                ctx.globalAlpha = 1.0;
            }
        }
    }

    // Draw points
    for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
    }

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
