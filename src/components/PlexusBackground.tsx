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
    size: number;
    color: string;
}

const PlexusBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const width = window.innerWidth;
        const height = window.innerHeight;

        // ── Fast Path: Web Worker + OffscreenCanvas (Background Thread) ──
        // Pushes the heavy O(n²) calculation off the main thread.
        const supportsOffscreen = typeof canvas.transferControlToOffscreen === 'function';

        if (supportsOffscreen) {
            const offscreen = canvas.transferControlToOffscreen();
            const worker = new Worker(
                new URL('../workers/plexusWorker.ts', import.meta.url),
                { type: 'module' }
            );

            worker.postMessage(
                { type: 'init', canvas: offscreen, width, height },
                [offscreen]
            );

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

            document.addEventListener('visibilitychange', handleVisibility);
            window.addEventListener('resize', handleResize);

            return () => {
                document.removeEventListener('visibilitychange', handleVisibility);
                window.removeEventListener('resize', handleResize);
                worker.postMessage({ type: 'destroy' });
                worker.terminate();
            };
        }

        // ── Fallback Path: Main Thread ──
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let w = width;
        let h = height;
        canvas.width = w;
        canvas.height = h;

        const particles: Particle[] = [];
        // Original density and count is retained here
        const particleCount = Math.floor((w * h) / 18000) + 40;
        const connectionDistance = 150;
        const connectionDistSq = connectionDistance * connectionDistance;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: 1.5 + Math.random() * 2,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
            });
        }

        let animationFrameId: number;
        let paused = false;

        const handleVisibility = () => {
            paused = document.hidden;
            if (!paused) {
                animationFrameId = requestAnimationFrame(render);
            }
        };
        document.addEventListener('visibilitychange', handleVisibility);

        const render = () => {
            if (paused) return;

            ctx.clearRect(0, 0, w, h);

            for (let i = 0; i < particleCount; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;
            }

            // Draw line connections 
            ctx.lineWidth = 0.8;
            for (let i = 0; i < particleCount; i++) {
                const p = particles[i];
                for (let j = i + 1; j < particleCount; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distSq = dx * dx + dy * dy;

                    // Faster distance check using squared distance
                    if (distSq < connectionDistSq) {
                        const dist = Math.sqrt(distSq);
                        const opacity = (1 - dist / connectionDistance) * 0.3;
                        ctx.strokeStyle = p.color;
                        ctx.globalAlpha = opacity;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particle points
            ctx.globalAlpha = 0.6;
            for (let i = 0; i < particleCount; i++) {
                const p = particles[i];
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1.0;

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
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('visibilitychange', handleVisibility);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-[0] opacity-50"
            style={{ mixBlendMode: 'screen', willChange: 'contents' }}
        />
    );
};

export default PlexusBackground;
