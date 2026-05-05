import React, { useState, useEffect } from 'react';

const ElectronConfigAnimation = ({ playing }) => {
  const [activeShell, setActiveShell] = useState(0);
  const shells = [
    { name: 'K', max: 2, radius: 40, color: '#ef4444' },
    { name: 'L', max: 8, radius: 75, color: '#3b82f6' },
    { name: 'M', max: 18, radius: 110, color: '#22c55e' },
    { name: 'N', max: 32, radius: 140, color: '#f59e0b' }
  ];
  
  // Sodium: 2, 8, 1
  const electrons = [2, 8, 1, 0];

  useEffect(() => {
    if (!playing) { setActiveShell(0); return; }
    const interval = setInterval(() => {
      setActiveShell(prev => (prev + 1) % 4);
    }, 1200);
    return () => clearInterval(interval);
  }, [playing]);

  const cx = 200, cy = 160;

  return (
    <svg viewBox="0 0 400 320" className="w-full h-64 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl">
      {/* Title */}
      <text x="200" y="20" textAnchor="middle" fill="#1e3a5f" fontSize="13" fontWeight="bold">
        Sodium (Na) — Atomic Number: 11
      </text>
      
      {/* Nucleus */}
      <circle cx={cx} cy={cy} r="22" fill="#1e3a5f" />
      <text x={cx} y={cy + 1} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">11p+</text>
      <text x={cx} y={cy + 11} textAnchor="middle" fill="white" fontSize="8">12n</text>

      {/* Shells */}
      {shells.map((shell, si) => {
        const isActive = si === activeShell;
        return (
          <g key={si}>
            <circle 
              cx={cx} cy={cy} r={shell.radius} 
              fill="none" 
              stroke={shell.color} 
              strokeWidth={isActive ? 2.5 : 1} 
              strokeDasharray={isActive ? "none" : "4,3"}
              opacity={isActive ? 1 : 0.4}
            />
            {/* Shell label */}
            <text 
              x={cx + shell.radius + 5} y={cy - 5} 
              fill={shell.color} fontSize="10" fontWeight="bold"
              opacity={isActive ? 1 : 0.5}
            >
              {shell.name} ({electrons[si]})
            </text>
            
            {/* Electrons */}
            {Array.from({ length: electrons[si] }).map((_, ei) => {
              const angle = (2 * Math.PI * ei) / Math.max(electrons[si], 1);
              const ex = cx + shell.radius * Math.cos(angle);
              const ey = cy + shell.radius * Math.sin(angle);
              return (
                <g key={ei}>
                  <circle cx={ex} cy={ey} r="6" fill={shell.color} opacity={isActive ? 1 : 0.5}>
                    {playing && (
                      <animateTransform 
                        attributeName="transform" 
                        type="rotate" 
                        from={`0 ${cx} ${cy}`} 
                        to={`360 ${cx} ${cy}`} 
                        dur={`${3 + si}s`} 
                        repeatCount="indefinite"
                      />
                    )}
                  </circle>
                  <text x={ex} y={ey + 3} textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">
                    e⁻
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Configuration */}
      <rect x="10" y="285" width="380" height="28" rx="6" fill="white" opacity="0.9" />
      <text x="200" y="304" textAnchor="middle" fill="#1e3a5f" fontSize="12" fontWeight="bold">
        Electronic Configuration: 2, 8, 1 | Valency: 1
      </text>
    </svg>
  );
};

export default ElectronConfigAnimation;
