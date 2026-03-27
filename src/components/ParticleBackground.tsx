import React, { useEffect, useRef } from 'react';

const COLORS = [
    '#3B82F6', // Blue
    '#6366F1', // Indigo
    '#8B5CF6', // Violet
    '#F97316', // Orange
    '#EF4444', // Red
    '#F59E0B', // Amber
];

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseAngle: number;
    driftSpeed: number;
    color: string;
    size: number;
    baseOpacity: number;
    phase: number;
}

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const width = window.innerWidth;
        const height = window.innerHeight;

        // ── Fast Path: Web Worker + OffscreenCanvas (Background Thread) ──
        // Offloads heavy particle calculations so UI and scrolling are buttery smooth.
        const supportsOffscreen = typeof canvas.transferControlToOffscreen === 'function';

        if (supportsOffscreen) {
            const offscreen = canvas.transferControlToOffscreen();
            const worker = new Worker(
                new URL('../workers/particleWorker.ts', import.meta.url),
                { type: 'module' }
            );

            worker.postMessage(
                { type: 'init', canvas: offscreen, width, height },
                [offscreen]
            );

            const handleMouseMove = (e: MouseEvent) => {
                worker.postMessage({ type: 'mousemove', x: e.clientX, y: e.clientY });
            };
            const handleMouseLeave = () => {
                worker.postMessage({ type: 'mouseleave' });
            };
            const handleVisibility = () => {
                worker.postMessage({ type: document.hidden ? 'pause' : 'resume' });
            };
            const handleResize = () => {
                worker.postMessage({
                    type: 'resize',
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };

            window.addEventListener('mousemove', handleMouseMove, { passive: true });
            document.body.addEventListener('mouseleave', handleMouseLeave);
            document.addEventListener('visibilitychange', handleVisibility);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                document.body.removeEventListener('mouseleave', handleMouseLeave);
                document.removeEventListener('visibilitychange', handleVisibility);
                window.removeEventListener('resize', handleResize);
                worker.postMessage({ type: 'destroy' });
                worker.terminate();
            };
        }

        // ── Fallback Path: Main Thread (If OffscreenCanvas not supported e.g. old Safari) ──
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = width;
        let h = height;
        canvas.width = w;
        canvas.height = h;

        const particles: Particle[] = [];
        // Maintain original particle count for the intended visual density
        const particleCount = Math.floor((w * h) / 4000);

        let mouseX = -1000;
        let mouseY = -1000;
        let prevMouseX = -1000;
        let prevMouseY = -1000;

        const handleMouseMove = (e: MouseEvent) => {
            if (prevMouseX === -1000) {
                prevMouseX = e.clientX;
                prevMouseY = e.clientY;
            } else {
                prevMouseX = mouseX;
                prevMouseY = mouseY;
            }
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
            prevMouseX = -1000;
            prevMouseY = -1000;
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * w;
            const y = Math.random() * h;

            const dx = x - (-w * 0.2);
            const dy = y - (h * 1.2);
            const baseAngle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.5;

            particles.push({
                x,
                y,
                vx: 0,
                vy: 0,
                baseAngle,
                driftSpeed: 0.8 + Math.random() * 1.0,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                size: 1 + Math.random() * 2.5,
                baseOpacity: 0.15 + Math.random() * 0.6,
                phase: Math.random() * Math.PI * 2,
            });
        }

        let animationFrameId: number;
        let time = 0;
        let lastTime: number | null = null;
        let paused = false;

        const handleVisibility = () => {
            paused = document.hidden;
            if (!paused) {
                lastTime = null;
                animationFrameId = requestAnimationFrame(render);
            }
        };
        document.addEventListener('visibilitychange', handleVisibility);

        const render = (timestamp: number) => {
            if (paused) return;
            if (!lastTime) lastTime = timestamp;
            let dt = timestamp - lastTime;
            if (dt > 200) dt = 8.333; // Optimized for 120Hz displays
            const dtMod = dt / 8.333; // Multiplier: 1.0 at 120Hz, ~2.4 at 50Hz
            lastTime = timestamp;

            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.clearRect(0, 0, w, h);

            time += 0.05 * dtMod;

            const mouseVx = (mouseX - prevMouseX) / dtMod;
            const mouseVy = (mouseY - prevMouseY) / dtMod;
            const mouseSpeed = Math.sqrt(mouseVx * mouseVx + mouseVy * mouseVy);

            const decay = Math.min(1, 0.3 * dtMod);
            prevMouseX += (mouseX - prevMouseX) * decay;
            prevMouseY += (mouseY - prevMouseY) * decay;

            particles.forEach((p) => {
                const currentAngle = p.baseAngle + Math.sin(time * 0.5 + p.phase) * 0.3;
                const targetVx = Math.cos(currentAngle) * p.driftSpeed;
                const targetVy = Math.sin(currentAngle) * p.driftSpeed;
                const friction = Math.min(1, 0.04 * dtMod);
                p.vx += (targetVx - p.vx) * friction;
                p.vy += (targetVy - p.vy) * friction;

                if (mouseX > 0) {
                    const dx = p.x - mouseX;
                    const dy = p.y - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const interactionRadius = 250;
                    if (dist < interactionRadius) {
                        const force = Math.pow((interactionRadius - dist) / interactionRadius, 1.5);
                        const repelPower = 1.5;
                        p.vx += (dx / dist) * force * repelPower * dtMod;
                        p.vy += (dy / dist) * force * repelPower * dtMod;
                        if (mouseSpeed > 0) {
                            const clampSpeed = Math.min(mouseSpeed, 50);
                            p.vx += (mouseVx / clampSpeed) * force * 1.0 * dtMod;
                            p.vy += (mouseVy / clampSpeed) * force * 1.0 * dtMod;
                        }
                    }
                }

                p.x += p.vx * dtMod;
                p.y += p.vy * dtMod;
                if (p.x < -50) p.x = w + 50;
                else if (p.x > w + 50) p.x = -50;
                if (p.y < -50) p.y = h + 50;
                else if (p.y > h + 50) p.y = -50;

                ctx.beginPath();
                let lookBackX = p.vx * 3.5;
                let lookBackY = p.vy * 3.5;
                const currentSpd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (currentSpd < 0.5) {
                    lookBackX = Math.cos(currentAngle) * 2;
                    lookBackY = Math.sin(currentAngle) * 2;
                }
                ctx.moveTo(p.x - lookBackX, p.y - lookBackY);
                ctx.lineTo(p.x, p.y);
                ctx.strokeStyle = p.color;
                const intensity = Math.min(1, currentSpd / 5);
                ctx.globalAlpha = p.baseOpacity + intensity * 0.4;
                ctx.lineWidth = p.size;
                ctx.lineCap = 'round';
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        const handleResize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('visibilitychange', handleVisibility);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ mixBlendMode: 'screen', willChange: 'contents' }}
        />
    );
};

export default ParticleBackground;
