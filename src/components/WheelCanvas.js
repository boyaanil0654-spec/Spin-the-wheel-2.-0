import React, { useRef, useEffect } from 'react';
import Confetti from 'react-canvas-confetti';
import { useHaptic } from '../hooks/useHaptic';

const WheelCanvas = ({ wheel, spin }) => {
  const canvasRef = useRef(null);
  const { triggerHaptic } = useHaptic();
  const [confetti, setConfetti] = React.useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // Draw 3D wheel with segments, neon edges, shadows
    const drawWheel = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 150;
      wheel.segments.forEach((seg, i) => {
        const angle = (2 * Math.PI) / wheel.segments.length;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, i * angle, (i + 1) * angle);
        ctx.fillStyle = seg.color;
        ctx.fill();
        ctx.strokeStyle = '#00ffff'; // Neon edge
        ctx.lineWidth = 3;
        ctx.stroke();
        // Add 3D shadow/highlight
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 10;
      });
    };
    drawWheel();
  }, [wheel]);

  const handleSpin = () => {
    triggerHaptic('spin');
    spin().then(() => {
      setConfetti(true); // Celebration
      setTimeout(() => setConfetti(false), 3000);
    });
  };

  return (
    <div className="wheel-container">
      <canvas ref={canvasRef} width={400} height={400} className="wheel-canvas" />
      <button className="spin-button magnetic" onClick={handleSpin}>Spin!</button>
      {confetti && <Confetti />}
    </div>
  );
};

export default WheelCanvas;
