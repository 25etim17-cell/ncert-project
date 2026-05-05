import React, { useState, useEffect } from 'react';

const NumberLineAnimation = ({ playing }) => {
  const [phase, setPhase] = useState(0);
  const [pulseR, setPulseR] = useState(0);

  useEffect(() => {
    if (!playing) { setPhase(0); return; }
    const interval = setInterval(() => {
      setPhase(prev => (prev >= 5 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [playing]);

  useEffect(() => {
    const pulse = setInterval(() => {
      setPulseR(prev => (prev + 1) % 60);
    }, 30);
    return () => clearInterval(pulse);
  }, []);

  const baseY = 180;
  const startX = 40;
  const endX = 760;
  const scale = 80;
  const originX = 400;

  const integers = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  const rationals = [
    { val: -1.5, label: '-3/2', color: '#3b82f6' },
    { val: 0.5, label: '1/2', color: '#3b82f6' },
    { val: 2.5, label: '5/2', color: '#3b82f6' },
  ];
  const irrationals = [
    { val: 1.414, label: '√2', approx: '1.414...', color: '#ef4444' },
    { val: 1.732, label: '√3', approx: '1.732...', color: '#f97316' },
    { val: 2.236, label: '√5', approx: '2.236...', color: '#ec4899' },
    { val: 3.14159, label: 'π', approx: '3.141...', color: '#8b5cf6' },
  ];

  const xPos = (val) => originX + val * scale;
  const pulseAmt = Math.sin(pulseR * 0.1) * 2;

  return (
    <svg viewBox="0 0 800 380" className="w-full h-full" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      {/* Background decoration */}
      <defs>
        <linearGradient id="nlGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Title */}
      <text x="400" y="32" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="bold" fontFamily="serif">
        The Real Number Line
      </text>
      <text x="400" y="52" textAnchor="middle" fill="#64748b" fontSize="11">
        Rationals + Irrationals = Real Numbers
      </text>

      {/* Number line base */}
      <rect x={startX} y={baseY - 2} width={endX - startX} height="4" rx="2" fill="url(#nlGrad)" />
      <line x1={startX} y1={baseY} x2={endX} y2={baseY} stroke="#334155" strokeWidth="2.5" />
      {/* Arrow tips */}
      <polygon points={`${startX - 8},${baseY} ${startX + 4},${baseY - 5} ${startX + 4},${baseY + 5}`} fill="#334155" />
      <polygon points={`${endX + 8},${baseY} ${endX - 4},${baseY - 5} ${endX - 4},${baseY + 5}`} fill="#334155" />

      {/* Integer ticks */}
      {integers.map(n => {
        const x = xPos(n);
        return (
          <g key={n}>
            <line x1={x} y1={baseY - 12} x2={x} y2={baseY + 12} stroke="#334155" strokeWidth={n === 0 ? 3 : 1.5} />
            <text x={x} y={baseY + 30} textAnchor="middle" fill="#334155" fontSize="13" fontWeight={n === 0 ? 'bold' : 'normal'}>
              {n}
            </text>
          </g>
        );
      })}

      {/* Phase 1+: Rational numbers (blue) */}
      {playing && phase >= 1 && rationals.map((r, i) => {
        const x = xPos(r.val);
        return (
          <g key={`r${i}`}>
            <line x1={x} y1={baseY - 8} x2={x} y2={baseY - 45 - i * 8} stroke={r.color} strokeWidth="1" strokeDasharray="3,2" opacity="0.6" />
            <circle cx={x} cy={baseY} r={6 + (phase === 1 ? pulseAmt : 0)} fill={r.color} filter={phase === 1 ? "url(#glow)" : ""}>
              {phase === 1 && <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />}
            </circle>
            <rect x={x - 20} y={baseY - 62 - i * 8} width="40" height="18" rx="4" fill={r.color} opacity="0.15" />
            <text x={x} y={baseY - 48 - i * 8} textAnchor="middle" fill={r.color} fontSize="11" fontWeight="bold">
              {r.label}
            </text>
          </g>
        );
      })}

      {/* Phase 2+: Irrational numbers (warm colors) */}
      {playing && phase >= 2 && irrationals.map((ir, i) => {
        const x = xPos(ir.val);
        const yOff = 35 + i * 22;
        return (
          <g key={`ir${i}`}>
            <line x1={x} y1={baseY + 8} x2={x} y2={baseY + yOff - 8} stroke={ir.color} strokeWidth="1" strokeDasharray="3,2" opacity="0.5" />
            <circle cx={x} cy={baseY} r={7 + (phase === 2 ? pulseAmt : 0)} fill={ir.color} filter={phase === 2 ? "url(#glow)" : ""} />
            <rect x={x - 35} y={baseY + yOff - 10} width="70" height="20" rx="5" fill={ir.color} opacity="0.12" />
            <text x={x} y={baseY + yOff + 5} textAnchor="middle" fill={ir.color} fontSize="10" fontWeight="bold">
              {ir.label} ≈ {ir.approx}
            </text>
          </g>
        );
      })}

      {/* Legend boxes */}
      {playing && phase >= 1 && (
        <g>
          <rect x="40" y="320" width="140" height="30" rx="8" fill="#3b82f6" opacity="0.12" />
          <circle cx="60" cy="335" r="5" fill="#3b82f6" />
          <text x="75" y="339" fill="#3b82f6" fontSize="11" fontWeight="bold">Rational Numbers</text>
        </g>
      )}
      {playing && phase >= 2 && (
        <g>
          <rect x="200" y="320" width="140" height="30" rx="8" fill="#ef4444" opacity="0.12" />
          <circle cx="220" cy="335" r="5" fill="#ef4444" />
          <text x="235" y="339" fill="#ef4444" fontSize="11" fontWeight="bold">Irrational Numbers</text>
        </g>
      )}

      {/* Final message */}
      {playing && phase >= 3 && (
        <g>
          <rect x="400" y="320" width="350" height="30" rx="8" fill="#22c55e" opacity="0.12" />
          <text x="575" y="340" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="bold">
            ✓ Together they COMPLETELY fill the number line!
          </text>
        </g>
      )}
    </svg>
  );
};

export default NumberLineAnimation;
