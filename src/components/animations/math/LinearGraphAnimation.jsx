import React, { useState, useEffect } from 'react';

const LinearGraphAnimation = ({ playing }) => {
  const [drawProgress, setDrawProgress] = useState(0);
  const [showIntercepts, setShowIntercepts] = useState(false);
  const [showShaded, setShowShaded] = useState(false);

  useEffect(() => {
    if (!playing) { setDrawProgress(0); setShowIntercepts(false); setShowShaded(false); return; }
    const interval = setInterval(() => {
      setDrawProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + 1.5;
      });
    }, 25);
    const t1 = setTimeout(() => setShowIntercepts(true), 2000);
    const t2 = setTimeout(() => setShowShaded(true), 3000);
    return () => { clearInterval(interval); clearTimeout(t1); clearTimeout(t2); };
  }, [playing]);

  // Line: 2x + 3y = 12 → y = (12 - 2x)/3
  const ox = 80, oy = 280, scaleX = 42, scaleY = 50;
  const toSvgX = x => ox + x * scaleX;
  const toSvgY = y => oy - y * scaleY;

  const linePoints = [];
  for (let x = -1; x <= 7.5; x += 0.25) {
    const y = (12 - 2 * x) / 3;
    if (y >= -1.5 && y <= 5.5) linePoints.push({ x, y });
  }

  const drawnCount = Math.ceil(linePoints.length * drawProgress / 100);
  const pathD = linePoints.slice(0, drawnCount).map((pt, i) =>
    `${i === 0 ? 'M' : 'L'} ${toSvgX(pt.x)} ${toSvgY(pt.y)}`
  ).join(' ');

  const keyPts = [
    { x: 0, y: 4, label: 'y-intercept (0, 4)', color: '#8b5cf6' },
    { x: 3, y: 2, label: '(3, 2)', color: '#f59e0b' },
    { x: 6, y: 0, label: 'x-intercept (6, 0)', color: '#ec4899' },
  ];

  // Solution table values
  const tableVals = [
    { x: 0, y: 4 },
    { x: 3, y: 2 },
    { x: 6, y: 0 },
  ];

  return (
    <svg viewBox="0 0 800 380" className="w-full h-full" style={{ background: 'linear-gradient(180deg, #ecfdf5 0%, #d1fae5 100%)' }}>
      <defs>
        <linearGradient id="linGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
        </linearGradient>
        <filter id="linGlow">
          <feGaussianBlur stdDeviation="3" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Title */}
      <text x="280" y="24" textAnchor="middle" fill="#1e293b" fontSize="15" fontWeight="bold" fontFamily="serif">
        Graph of a Linear Equation
      </text>
      <rect x="140" y="30" width="280" height="22" rx="6" fill="#0ea5e9" opacity="0.08" />
      <text x="280" y="47" textAnchor="middle" fill="#0369a1" fontSize="12" fontWeight="bold">
        2x + 3y = 12 → y = (12 − 2x)/3
      </text>

      {/* Grid */}
      {[-1,0,1,2,3,4,5,6,7].map(i => (
        <g key={`gx${i}`}>
          <line x1={toSvgX(i)} y1="60" x2={toSvgX(i)} y2={oy + 20} stroke="#d1d5db" strokeWidth="0.5" />
          <text x={toSvgX(i)} y={oy + 18} textAnchor="middle" fill="#6b7280" fontSize="10" fontWeight="bold">{i}</text>
        </g>
      ))}
      {[-1,0,1,2,3,4,5].map(i => (
        <g key={`gy${i}`}>
          <line x1={ox - 10} y1={toSvgY(i)} x2="450" y2={toSvgY(i)} stroke="#d1d5db" strokeWidth="0.5" />
          <text x={ox - 15} y={toSvgY(i) + 4} textAnchor="end" fill="#6b7280" fontSize="10" fontWeight="bold">{i}</text>
        </g>
      ))}

      {/* Shaded area (triangle formed by line and axes) */}
      {showShaded && (
        <path
          d={`M ${toSvgX(0)} ${toSvgY(4)} L ${toSvgX(6)} ${toSvgY(0)} L ${toSvgX(0)} ${toSvgY(0)} Z`}
          fill="url(#linGrad)" opacity="0.6"
        />
      )}

      {/* Axes */}
      <line x1={ox - 20} y1={oy} x2="450" y2={oy} stroke="#1e3a5f" strokeWidth="2" />
      <line x1={ox} y1={oy + 20} x2={ox} y2="60" stroke="#1e3a5f" strokeWidth="2" />
      <polygon points={`450,${oy} 444,${oy-4} 444,${oy+4}`} fill="#1e3a5f" />
      <polygon points={`${ox},60 ${ox-4},68 ${ox+4},68`} fill="#1e3a5f" />
      <text x="460" y={oy + 4} fill="#1e3a5f" fontSize="13" fontWeight="bold">x</text>
      <text x={ox + 6} y="58" fill="#1e3a5f" fontSize="13" fontWeight="bold">y</text>

      {/* Line drawn progressively */}
      {pathD && (
        <path d={pathD} fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
      )}

      {/* Key points */}
      {showIntercepts && keyPts.map((pt, i) => {
        const sx = toSvgX(pt.x);
        const sy = toSvgY(pt.y);
        return (
          <g key={i}>
            <circle cx={sx} cy={sy} r="9" fill={pt.color} filter="url(#linGlow)">
              <animate attributeName="r" values="9;12;9" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <circle cx={sx} cy={sy} r="3" fill="white" />
            <rect x={sx + 12} y={sy - 12} width={pt.label.length * 6.5 + 8} height="18" rx="5" fill={pt.color} opacity="0.15" />
            <text x={sx + 16} y={sy + 2} fill={pt.color} fontSize="10" fontWeight="bold">
              {pt.label}
            </text>
          </g>
        );
      })}

      {/* Solution table on the right */}
      <rect x="510" y="75" width="260" height="170" rx="14" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="640" y="100" textAnchor="middle" fill="#1e3a5f" fontSize="13" fontWeight="bold">Solution Table</text>
      
      {/* Table header */}
      <rect x="530" y="110" width="70" height="24" rx="4" fill="#1e3a5f" opacity="0.08" />
      <text x="565" y="127" textAnchor="middle" fill="#1e3a5f" fontSize="11" fontWeight="bold">x</text>
      <rect x="610" y="110" width="70" height="24" rx="4" fill="#1e3a5f" opacity="0.08" />
      <text x="645" y="127" textAnchor="middle" fill="#1e3a5f" fontSize="11" fontWeight="bold">y</text>
      <rect x="690" y="110" width="60" height="24" rx="4" fill="#1e3a5f" opacity="0.08" />
      <text x="720" y="127" textAnchor="middle" fill="#1e3a5f" fontSize="11" fontWeight="bold">(x,y)</text>

      {/* Table rows */}
      {tableVals.map((v, i) => {
        const rowY = 142 + i * 30;
        const show = showIntercepts || drawProgress > (i + 1) * 30;
        return show ? (
          <g key={`row${i}`}>
            <text x="565" y={rowY + 16} textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">{v.x}</text>
            <text x="645" y={rowY + 16} textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">{v.y}</text>
            <text x="720" y={rowY + 16} textAnchor="middle" fill={keyPts[i].color} fontSize="11" fontWeight="bold">({v.x}, {v.y})</text>
            <line x1="530" y1={rowY + 22} x2="750" y2={rowY + 22} stroke="#f1f5f9" strokeWidth="1" />
          </g>
        ) : null;
      })}

      {/* Slope info */}
      <rect x="510" y="260" width="260" height="80" rx="14" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="640" y="282" textAnchor="middle" fill="#1e3a5f" fontSize="12" fontWeight="bold">Properties</text>
      <text x="535" y="302" fill="#64748b" fontSize="11">Slope (m) = −2/3</text>
      <text x="535" y="320" fill="#64748b" fontSize="11">y-intercept = 4</text>
      <text x="535" y="338" fill="#64748b" fontSize="11">x-intercept = 6</text>

      {/* Bottom */}
      {drawProgress >= 100 && (
        <g>
          <rect x="50" y="348" width="420" height="26" rx="8" fill="#0ea5e9" opacity="0.1" />
          <text x="260" y="366" textAnchor="middle" fill="#0369a1" fontSize="12" fontWeight="bold">
            📐 Every linear equation graphs as a straight line!
          </text>
        </g>
      )}
    </svg>
  );
};

export default LinearGraphAnimation;
