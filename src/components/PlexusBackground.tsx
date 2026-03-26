import React, { useEffect, useRef } from 'react';
import { useHighPerformanceAnimation } from '@/hooks/useHighPerformanceAnimation';

const COLORS = [
    'rgba(255, 255, 255, 0.8)',
    'rgba(255, 255, 255, 0.5)',
    'rgba(200, 200, 200, 0.4)'
];

interface Particle {
    x: number;
    y: number;
    z: number;
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

        // ── Fallback Path: Main Thread ──
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let w = width;
        let h = height;
        canvas.width = w;
        canvas.height = h;

        const particles: Particle[] = [];
        const particleCount = Math.floor((w * h) / 30000) + 15;
        const connectionDistSq = 250 * 250;

        let mouseX = -1000;
        let mouseY = -1000;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                z: Math.random() * 2,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                size: Math.random() < 0.2 ? 2.5 : 1 + Math.random() * 1.0,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
            });
        }

        const { start, stop, pause, resume } = useHighPerformanceAnimation({
            targetFPS: 144,
            enableSmoothing: true,
            onFrame: (deltaTime, smoothedDelta) => {
                ctx.clearRect(0, 0, w, h);
                ctx.lineWidth = 0.5;

                // Normalize deltaTime for consistent animation speed
                const dt = smoothedDelta / 6.944; // Normalize to ~144Hz baseline

                // Update & Draw Lines & Interactivity
                for (let i = 0; i < particleCount; i++) {
                    const p = particles[i];
                    p.x += p.vx * dt;
                    p.y += p.vy * dt;

                    if (p.x < 0 || p.x > w) p.vx *= -1;
                    if (p.y < 0 || p.y > h) p.vy *= -1;

                    if (mouseX > 0) {
                        const dx = p.x - mouseX;
                        const dy = p.y - mouseY;
                        if (dx*dx + dy*dy < 40000) {
                            const dist = Math.sqrt(dx*dx + dy*dy);
                            p.x -= (dx/dist) * 0.2 * dt;
                            p.y -= (dy/dist) * 0.2 * dt;
                        }
                    }

                    for (let j = i + 1; j < particleCount; j++) {
                        const p2 = particles[j];
                        const dx = p.x - p2.x;
                        const dy = p.y - p2.y;
                        const distSq = dx * dx + dy * dy;

                        if (distSq < connectionDistSq) {
                            const dist = Math.sqrt(distSq);
                            const opacity = (1 - dist / 250) * 0.25;
                            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                        }
                    }
                    
                    if (mouseX > 0) {
                        const mx = mouseX - p.x;
                        const my = mouseY - p.y;
                        const mDistSq = mx*mx + my*my;
                        if (mDistSq < 40000) {
                            const mDist = Math.sqrt(mDistSq);
                            const opacity = (1 - mDist / 200) * 0.3;
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(mouseX, mouseY);
                            ctx.stroke();
                        }
                    }
                }

                // Draw particle points
                for (let i = 0; i < particleCount; i++) {
                    const p = particles[i];
                    ctx.beginPath();
                    ctx.fillStyle = p.color;
                    const renderSize = p.size * (1 + p.z * 0.2);
                    ctx.arc(p.x, p.y, renderSize, 0, Math.PI * 2);
                    
                    if (p.size > 2) {
                        ctx.shadowBlur = 4;
                        ctx.shadowColor = 'rgba(255,255,255,0.5)';
                    } else {
                        ctx.shadowBlur = 0;
                    }
                    ctx.fill();
                }
                
                ctx.shadowBlur = 0;
            }
        });

        const handleVisibility = () => {
            if (document.hidden) {
                pause();
            } else {
                resume();
            }
        };
        document.addEventListener('visibilitychange', handleVisibility);

        start();

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
            stop();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-10" // Brought up in z-index & full opacity to feel interactive
            style={{ mixBlendMode: 'screen', willChange: 'contents' }}
        />
    );
};

export default PlexusBackground;
