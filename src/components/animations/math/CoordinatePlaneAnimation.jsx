import React, { useState, useEffect } from 'react';

const CoordinatePlaneAnimation = ({ playing }) => {
  const [currentPoint, setCurrentPoint] = useState(-1);
  const [showAll, setShowAll] = useState(false);

  const points = [
    { x: 3, y: 4, label: 'A(3, 4)', q: 'I', color: '#3b82f6', emoji: '🔵' },
    { x: -2, y: 3, label: 'B(-2, 3)', q: 'II', color: '#22c55e', emoji: '🟢' },
    { x: -3, y: -2, label: 'C(-3, -2)', q: 'III', color: '#f59e0b', emoji: '🟡' },
    { x: 4, y: -3, label: 'D(4, -3)', q: 'IV', color: '#ef4444', emoji: '🔴' }
  ];

  useEffect(() => {
    if (!playing) { setCurrentPoint(-1); setShowAll(false); return; }
    
    const timers = [];
    points.forEach((_, i) => {
      timers.push(setTimeout(() => setCurrentPoint(i), 800 + i * 1200));
    });
    timers.push(setTimeout(() => setShowAll(true), 800 + points.length * 1200));

    return () => timers.forEach(clearTimeout);
  }, [playing]);

  const ox = 400, oy = 190;
  const scale = 32;

  const toSvg = (px, py) => ({
    sx: ox + px * scale,
    sy: oy - py * scale
  });

  // Quadrant background colors
  const qColors = [
    { x: ox, y: 30, w: 370, h: oy - 30, fill: '#3b82f6', label: 'Q I (+, +)' },
    { x: 30, y: 30, w: ox - 30, h: oy - 30, fill: '#22c55e', label: 'Q II (−, +)' },
    { x: 30, y: oy, w: ox - 30, h: 340 - oy, fill: '#f59e0b', label: 'Q III (−, −)' },
    { x: ox, y: oy, w: 370, h: 340 - oy, fill: '#ef4444', label: 'Q IV (+, −)' },
  ];

  return (
    <svg viewBox="0 0 800 380" className="w-full h-full" style={{ background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)' }}>
      <defs>
        <filter id="coordGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Title */}
      <text x="400" y="22" textAnchor="middle" fill="#1e293b" fontSize="15" fontWeight="bold" fontFamily="serif">
        Cartesian Coordinate System — Plotting Points
      </text>

      {/* Quadrant backgrounds */}
      {qColors.map((q, i) => (
        <rect key={i} x={q.x} y={q.y} width={q.w} height={q.h} fill={q.fill} opacity="0.04" />
      ))}

      {/* Grid */}
      {[-6,-5,-4,-3,-2,-1,1,2,3,4,5,6].map(i => (
        <g key={i}>
          <line x1={ox + i*scale} y1="30" x2={ox + i*scale} y2="340" stroke="#e2e8f0" strokeWidth="0.5" />
          <line x1="30" y1={oy - i*scale} x2="770" y2={oy - i*scale} stroke="#e2e8f0" strokeWidth="0.5" />
          <text x={ox + i*scale} y={oy + 16} textAnchor="middle" fill="#94a3b8" fontSize="10">{i}</text>
          {i !== 0 && <text x={ox - 14} y={oy - i*scale + 4} textAnchor="end" fill="#94a3b8" fontSize="10">{i}</text>}
        </g>
      ))}

      {/* Axes */}
      <line x1="30" y1={oy} x2="770" y2={oy} stroke="#334155" strokeWidth="2" />
      <line x1={ox} y1="30" x2={ox} y2="340" stroke="#334155" strokeWidth="2" />
      <polygon points={`770,${oy} 762,${oy-5} 762,${oy+5}`} fill="#334155" />
      <polygon points={`${ox},30 ${ox-5},38 ${ox+5},38`} fill="#334155" />
      <text x="778" y={oy + 4} fill="#334155" fontSize="14" fontWeight="bold">X</text>
      <text x={ox + 8} y="28" fill="#334155" fontSize="14" fontWeight="bold">Y</text>
      <text x={ox - 14} y={oy + 16} fill="#334155" fontSize="11" fontWeight="bold">O</text>

      {/* Quadrant labels */}
      {qColors.map((q, i) => {
        const lx = i % 2 === 0 ? ox + 150 : ox - 170;
        const ly = i < 2 ? 55 : 320;
        return (
          <text key={`ql${i}`} x={lx} y={ly} textAnchor="middle" fill={q.fill} fontSize="11" fontWeight="bold" opacity="0.35">
            {q.label}
          </text>
        );
      })}

      {/* Points */}
      {points.map((pt, i) => {
        const { sx, sy } = toSvg(pt.x, pt.y);
        const isVisible = i <= currentPoint;
        const isActive = i === currentPoint && !showAll;

        if (!isVisible) return null;

        return (
          <g key={i}>
            {/* Projection lines */}
            <line x1={sx} y1={sy} x2={sx} y2={oy} stroke={pt.color} strokeWidth="1.5" strokeDasharray="5,3" opacity="0.5" />
            <line x1={sx} y1={sy} x2={ox} y2={sy} stroke={pt.color} strokeWidth="1.5" strokeDasharray="5,3" opacity="0.5" />

            {/* Projection dots on axes */}
            <circle cx={sx} cy={oy} r="3" fill={pt.color} opacity="0.5" />
            <circle cx={ox} cy={sy} r="3" fill={pt.color} opacity="0.5" />

            {/* Main point */}
            <circle cx={sx} cy={sy} r={isActive ? 10 : 8} fill={pt.color} filter={isActive ? 'url(#coordGlow)' : ''}>
              {isActive && <animate attributeName="r" values="10;13;10" dur="0.8s" repeatCount="indefinite" />}
            </circle>
            <circle cx={sx} cy={sy} r="3" fill="white" />

            {/* Label */}
            <rect x={sx + 12} y={sy - 20} width={pt.label.length * 8 + 10} height="20" rx="5" fill={pt.color} opacity="0.15" />
            <text x={sx + 17} y={sy - 5} fill={pt.color} fontSize="12" fontWeight="bold">
              {pt.label}
            </text>
          </g>
        );
      })}

      {/* Bottom info panel */}
      {playing && currentPoint >= 0 && (
        <g>
          <rect x="100" y="350" width="600" height="26" rx="8" fill={showAll ? '#1e3a5f' : points[Math.min(currentPoint, 3)].color} opacity="0.1" />
          <text x="400" y="368" textAnchor="middle" fill={showAll ? '#1e3a5f' : points[Math.min(currentPoint, 3)].color} fontSize="12" fontWeight="bold">
            {showAll
              ? '✅ All 4 points plotted — one in each quadrant!'
              : `${points[currentPoint].label} lies in Quadrant ${points[currentPoint].q}`
            }
          </text>
        </g>
      )}
    </svg>
  );
};

export default CoordinatePlaneAnimation;
