import React, { useState, useEffect } from 'react';

const DiscriminantAnimation = ({ playing }) => {
  const [activeCase, setActiveCase] = useState(0);

  useEffect(() => {
    if (!playing) { setActiveCase(0); return; }
    const interval = setInterval(() => {
      setActiveCase(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, [playing]);

  const cases = [
    { a: 1, b: -4, c: 3, d: 4, label: 'D > 0', desc: 'Two distinct real roots', roots: 'x = 1, x = 3', color: '#22c55e', bg: '#f0fdf4' },
    { a: 1, b: -4, c: 4, d: 0, label: 'D = 0', desc: 'One repeated real root', roots: 'x = 2 (repeated)', color: '#f59e0b', bg: '#fffbeb' },
    { a: 1, b: -4, c: 5, d: -4, label: 'D < 0', desc: 'No real roots', roots: 'No real solution', color: '#ef4444', bg: '#fef2f2' },
  ];

  const makePath = (a, b, c, offsetX) => {
    const pts = [];
    for (let x = -0.5; x <= 4.5; x += 0.15) {
      pts.push({ x, y: a * x * x + b * x + c });
    }
    return pts.map((p, i) => {
      const sx = offsetX + p.x * 42;
      const sy = 200 - p.y * 28;
      return `${i === 0 ? 'M' : 'L'} ${sx} ${sy}`;
    }).join(' ');
  };

  return (
    <svg viewBox="0 0 800 380" className="w-full h-full" style={{ background: 'linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%)' }}>
      <defs>
        <filter id="discGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Title */}
      <text x="400" y="28" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="bold" fontFamily="serif">
        Nature of Roots — Discriminant
      </text>
      <rect x="280" y="36" width="240" height="24" rx="6" fill="#1e3a5f" opacity="0.08" />
      <text x="400" y="53" textAnchor="middle" fill="#1e3a5f" fontSize="14" fontWeight="bold">
        D = b² − 4ac
      </text>

      {/* Three panels */}
      {cases.map((c, ci) => {
        const offsetX = 30 + ci * 260;
        const isActive = ci === activeCase;
        const pathD = makePath(c.a, c.b, c.c, offsetX);

        return (
          <g key={ci}>
            {/* Panel background */}
            <rect
              x={offsetX - 15} y="68" width="235" height="290" rx="16"
              fill={isActive ? c.bg : '#fff'}
              stroke={isActive ? c.color : '#e2e8f0'}
              strokeWidth={isActive ? 2.5 : 1}
              opacity={isActive ? 1 : 0.6}
            />

            {/* Panel header */}
            <rect x={offsetX + 30} y="78" width="120" height="28" rx="8" fill={c.color} opacity={isActive ? 1 : 0.4} />
            <text x={offsetX + 90} y="97" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
              {c.label}
            </text>

            {/* x-axis */}
            <line x1={offsetX - 5} y1="200" x2={offsetX + 210} y2="200" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Curve */}
            <path d={pathD} fill="none" stroke={c.color} strokeWidth={isActive ? 3.5 : 2} strokeLinecap="round" opacity={isActive ? 1 : 0.5} />

            {/* Root markers for D > 0 */}
            {ci === 0 && isActive && playing && (
              <g>
                <circle cx={offsetX + 1 * 42} cy="200" r="8" fill="#22c55e" filter="url(#discGlow)">
                  <animate attributeName="r" values="8;11;8" dur="1s" repeatCount="indefinite" />
                </circle>
                <circle cx={offsetX + 3 * 42} cy="200" r="8" fill="#22c55e" filter="url(#discGlow)">
                  <animate attributeName="r" values="8;11;8" dur="1s" repeatCount="indefinite" />
                </circle>
              </g>
            )}

            {/* Root marker for D = 0 (one touching point) */}
            {ci === 1 && isActive && playing && (
              <circle cx={offsetX + 2 * 42} cy="200" r="8" fill="#f59e0b" filter="url(#discGlow)">
                <animate attributeName="r" values="8;11;8" dur="1s" repeatCount="indefinite" />
              </circle>
            )}

            {/* No crossing marker for D < 0 */}
            {ci === 2 && isActive && playing && (
              <g>
                <line x1={offsetX + 70} y1="160" x2={offsetX + 110} y2="200" stroke="#ef444480" strokeWidth="2" />
                <line x1={offsetX + 110} y1="160" x2={offsetX + 70} y2="200" stroke="#ef444480" strokeWidth="2" />
              </g>
            )}

            {/* Description */}
            <text x={offsetX + 90} y="245" textAnchor="middle" fill={c.color} fontSize="11" fontWeight="bold">
              {c.desc}
            </text>

            {/* Roots */}
            <rect x={offsetX + 15} y="258" width="160" height="22" rx="6" fill={c.color} opacity="0.1" />
            <text x={offsetX + 95} y="274" textAnchor="middle" fill={c.color} fontSize="10" fontWeight="bold">
              {c.roots}
            </text>

            {/* D value */}
            <text x={offsetX + 90} y="300" textAnchor="middle" fill="#64748b" fontSize="10">
              D = (-4)² - 4(1)({c.c}) = {c.d}
            </text>

            {/* Equation */}
            <text x={offsetX + 90} y="320" textAnchor="middle" fill="#94a3b8" fontSize="9">
              x² − 4x + {c.c} = 0
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default DiscriminantAnimation;
