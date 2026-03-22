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
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles: Particle[] = [];
        // Density based on screen size
        const particleCount = Math.floor((width * height) / 18000) + 40;

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

        const render = () => {
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

            requestAnimationFrame(render);
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        const animId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 pointer-events-none z-[0] opacity-50" 
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default PlexusBackground;
