import React, { useState, useEffect } from 'react';

const ParabolaAnimation = ({ playing, step }) => {
  const [drawProgress, setDrawProgress] = useState(0);
  const [showZeroes, setShowZeroes] = useState(false);
  const [showVertex, setShowVertex] = useState(false);
  const [dragX, setDragX] = useState(null);

  useEffect(() => {
    if (!playing) { setDrawProgress(0); setShowZeroes(false); setShowVertex(false); return; }
    const interval = setInterval(() => {
      setDrawProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + 2;
      });
    }, 30);
    setTimeout(() => setShowZeroes(true), 1800);
    setTimeout(() => setShowVertex(true), 2800);
    return () => clearInterval(interval);
  }, [playing]);

  // y = x² - 4x + 3 = (x-1)(x-3), vertex at (2, -1)
  const points = [];
  for (let x = -0.5; x <= 4.5; x += 0.1) {
    points.push({ x, y: x * x - 4 * x + 3 });
  }

  const toSvgX = (x) => 120 + x * 120;
  const toSvgY = (y) => 230 - y * 50;

  const drawnCount = Math.ceil(points.length * drawProgress / 100);
  const pathD = points.slice(0, drawnCount).map((p, i) =>
    `${i === 0 ? 'M' : 'L'} ${toSvgX(p.x)} ${toSvgY(p.y)}`
  ).join(' ');

  // Traced point
  const tracedPt = dragX !== null ? { x: dragX, y: dragX * dragX - 4 * dragX + 3 } : null;

  return (
    <svg viewBox="0 0 800 380" className="w-full h-full" style={{ background: 'linear-gradient(180deg, #fefce8 0%, #fef9c3 100%)' }}>
      <defs>
        <linearGradient id="parGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00A8E8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00A8E8" stopOpacity="0" />
        </linearGradient>
        <filter id="parGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Title */}
      <text x="400" y="28" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="bold" fontFamily="serif">
        Zeroes of a Quadratic Polynomial
      </text>
      <rect x="240" y="36" width="320" height="24" rx="6" fill="#1e3a5f" opacity="0.08" />
      <text x="400" y="53" textAnchor="middle" fill="#1e3a5f" fontSize="13" fontWeight="bold">
        p(x) = x² − 4x + 3 = (x−1)(x−3)
      </text>

      {/* Grid */}
      {[-1, 0, 1, 2, 3, 4, 5].map(n => (
        <g key={n}>
          <line x1={toSvgX(n)} y1="70" x2={toSvgX(n)} y2="320" stroke="#e2e8f0" strokeWidth="1" />
          <text x={toSvgX(n)} y="345" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="bold">{n}</text>
        </g>
      ))}
      {[-2, -1, 0, 1, 2, 3, 4].map(n => (
        <line key={`y${n}`} x1="60" y1={toSvgY(n)} x2="720" y2={toSvgY(n)} stroke="#e2e8f0" strokeWidth="1" />
      ))}

      {/* Axes */}
      <line x1="60" y1="230" x2="720" y2="230" stroke="#475569" strokeWidth="2.5" />
      <line x1="120" y1="70" x2="120" y2="320" stroke="#475569" strokeWidth="2.5" />
      <text x="730" y="234" fill="#475569" fontSize="13" fontWeight="bold">x</text>
      <text x="125" y="65" fill="#475569" fontSize="13" fontWeight="bold">y</text>

      {/* Filled area under curve */}
      {drawProgress > 60 && (
        <path d={`${pathD} L ${toSvgX(4.5)} 230 L ${toSvgX(-0.5)} 230 Z`} fill="url(#parGrad)" opacity="0.4" />
      )}

      {/* Parabola curve */}
      <path d={pathD} fill="none" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />

      {/* Zero 1: x=1 */}
      {showZeroes && (
        <g>
          <circle cx={toSvgX(1)} cy={toSvgY(0)} r="10" fill="#ef4444" filter="url(#parGlow)">
            <animate attributeName="r" values="10;13;10" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <line x1={toSvgX(1)} y1={toSvgY(0) + 12} x2={toSvgX(1)} y2={toSvgY(0) + 40} stroke="#ef4444" strokeWidth="1.5" />
          <rect x={toSvgX(1) - 35} y={toSvgY(0) + 42} width="70" height="22" rx="6" fill="#ef4444" />
          <text x={toSvgX(1)} y={toSvgY(0) + 58} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
            Zero: x = 1
          </text>
        </g>
      )}

      {/* Zero 2: x=3 */}
      {showZeroes && (
        <g>
          <circle cx={toSvgX(3)} cy={toSvgY(0)} r="10" fill="#ef4444" filter="url(#parGlow)">
            <animate attributeName="r" values="10;13;10" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <line x1={toSvgX(3)} y1={toSvgY(0) + 12} x2={toSvgX(3)} y2={toSvgY(0) + 40} stroke="#ef4444" strokeWidth="1.5" />
          <rect x={toSvgX(3) - 35} y={toSvgY(0) + 42} width="70" height="22" rx="6" fill="#ef4444" />
          <text x={toSvgX(3)} y={toSvgY(0) + 58} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
            Zero: x = 3
          </text>
        </g>
      )}

      {/* Vertex */}
      {showVertex && (
        <g>
          <circle cx={toSvgX(2)} cy={toSvgY(-1)} r="8" fill="#f59e0b" filter="url(#parGlow)" />
          <line x1={toSvgX(2)} y1={toSvgY(-1) - 10} x2={toSvgX(2)} y2={toSvgY(-1) - 30} stroke="#f59e0b" strokeWidth="1.5" />
          <rect x={toSvgX(2) - 42} y={toSvgY(-1) - 52} width="85" height="22" rx="6" fill="#f59e0b" />
          <text x={toSvgX(2)} y={toSvgY(-1) - 36} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
            Vertex (2, −1)
          </text>
          {/* Axis of symmetry */}
          <line x1={toSvgX(2)} y1="70" x2={toSvgX(2)} y2="320" stroke="#f59e0b" strokeWidth="1" strokeDasharray="6,4" opacity="0.4" />
        </g>
      )}

      {/* Bottom info */}
      {playing && drawProgress >= 100 && (
        <g>
          <rect x="150" y="346" width="500" height="28" rx="8" fill="#0284c7" opacity="0.1" />
          <text x="400" y="365" textAnchor="middle" fill="#0284c7" fontSize="12" fontWeight="bold">
            🎯 Zeroes = where the curve crosses the x-axis (y = 0)
          </text>
        </g>
      )}
    </svg>
  );
};

export default ParabolaAnimation;
