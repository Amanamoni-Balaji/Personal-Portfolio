import React, { useEffect, useRef } from 'react';

export default function CinematicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle parameters
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
    const particles = [];

    // Mouse coordinates with easing
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Initialize particles in 3D perspective space
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2, // depth factor
        size: Math.random() * 1.6 + 0.6,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        baseAlpha: Math.random() * 0.35 + 0.1,
        color: i % 4 === 0 ? 'rgba(56, 189, 248,' : i % 4 === 1 ? 'rgba(99, 102, 241,' : i % 4 === 2 ? 'rgba(52, 211, 153,' : 'rgba(255, 255, 255,'
      });
    }

    const render = () => {
      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Subtle dynamic spotlight following cursor
      const spotlightGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width * 0.35, 400)
      );
      spotlightGradient.addColorStop(0, 'rgba(59, 130, 246, 0.045)');
      spotlightGradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.02)');
      spotlightGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = spotlightGradient;
      ctx.fillRect(0, 0, width, height);

      // Render 3D perspective particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Parallax offset based on cursor and depth
        const parallaxX = (mouse.x - width / 2) * (p.z * 0.025);
        const parallaxY = (mouse.y - height / 2) * (p.z * 0.025);

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const drawX = p.x + parallaxX;
        const drawY = p.y + parallaxY;
        const radius = p.size * p.z;

        ctx.beginPath();
        ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.baseAlpha * p.z})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
