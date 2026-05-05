import React, { useState, useEffect } from 'react';

const SumOfAPAnimation = ({ playing, step }) => {
  const [phase, setPhase] = useState(0);
  const [highlightPair, setHighlightPair] = useState(-1);

  const n = 10;
  const terms = Array.from({ length: n }, (_, i) => i + 1);

  useEffect(() => {
    if (!playing) { setPhase(0); setHighlightPair(-1); return; }
    
    // Phase 1: bars grow
    setPhase(1);
    
    // Phase 2: show pairing (after 1.5s)
    const t1 = setTimeout(() => setPhase(2), 1500);
    
    // Highlight pairs one by one
    const pairTimers = [];
    for (let i = 0; i < 5; i++) {
      pairTimers.push(setTimeout(() => setHighlightPair(i), 2000 + i * 600));
    }
    
    // Phase 3: show result
    const t2 = setTimeout(() => setPhase(3), 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      pairTimers.forEach(clearTimeout);
    };
  }, [playing]);

  const barW = 52;
  const gap = 12;
  const startX = 60;
  const baseY = 260;
  const maxH = 200;

  const pairColors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#22c55e'];

  return (
    <svg viewBox="0 0 800 380" className="w-full h-full" style={{ background: 'linear-gradient(180deg, #faf5ff 0%, #ede9fe 100%)' }}>
      <defs>
        {pairColors.map((col, i) => (
          <linearGradient key={i} id={`barGrad${i}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={col} stopOpacity="0.9" />
            <stop offset="100%" stopColor={col} stopOpacity="0.6" />
          </linearGradient>
        ))}
        <linearGradient id="barDefault" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Title */}
      <text x="400" y="28" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="bold" fontFamily="serif">
        Gauss's Trick — Sum of an A.P.
      </text>
      <rect x="220" y="36" width="360" height="24" rx="6" fill="#8b5cf6" opacity="0.08" />
      <text x="400" y="53" textAnchor="middle" fill="#6d28d9" fontSize="12" fontWeight="bold">
        AP: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 → S = n/2 × (first + last)
      </text>

      {/* Bars */}
      {terms.map((t, i) => {
        const x = startX + i * (barW + gap);
        const h = (t / n) * maxH;
        const pairIdx = i < 5 ? i : 9 - i;
        const isPaired = phase >= 2 && highlightPair >= pairIdx;
        const fillColor = isPaired ? `url(#barGrad${pairIdx})` : 'url(#barDefault)';

        return (
          <g key={i}>
            {/* Bar */}
            <rect
              x={x} y={playing ? baseY - h : baseY}
              width={barW} height={playing ? h : 0}
              rx="6" fill={fillColor}
              style={{ transition: 'all 0.5s ease-out', transitionDelay: `${i * 80}ms` }}
            />
            
            {/* Value inside bar */}
            {playing && h > 30 && (
              <text
                x={x + barW / 2} y={baseY - h + 20}
                textAnchor="middle" fill="white" fontSize="14" fontWeight="bold"
                style={{ transition: 'opacity 0.3s', transitionDelay: `${i * 80 + 300}ms` }}
              >
                {t}
              </text>
            )}

            {/* Value below bar */}
            <text
              x={x + barW / 2} y={baseY + 18}
              textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold"
            >
              {playing ? t : ''}
            </text>
          </g>
        );
      })}

      {/* Pairing arcs */}
      {phase >= 2 && Array.from({ length: 5 }).map((_, i) => {
        if (highlightPair < i) return null;
        const x1 = startX + i * (barW + gap) + barW / 2;
        const x2 = startX + (9 - i) * (barW + gap) + barW / 2;
        const midX = (x1 + x2) / 2;
        const arcY = baseY + 35 + i * 18;
        
        return (
          <g key={`pair${i}`}>
            {/* Arc connecting pair */}
            <path
              d={`M ${x1} ${baseY + 22} Q ${midX} ${arcY + 15} ${x2} ${baseY + 22}`}
              fill="none" stroke={pairColors[i]} strokeWidth="2" strokeDasharray="4,3"
              opacity="0.7"
            />
            {/* Sum badge */}
            <rect x={midX - 18} y={arcY - 2} width="36" height="18" rx="9" fill={pairColors[i]} />
            <text x={midX} y={arcY + 12} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              = {terms[i] + terms[9 - i]}
            </text>
          </g>
        );
      })}

      {/* Result */}
      {phase >= 3 && (
        <g>
          <rect x="180" y="340" width="440" height="32" rx="10" fill="#22c55e" opacity="0.15" />
          <text x="400" y="362" textAnchor="middle" fill="#16a34a" fontSize="14" fontWeight="bold">
            ✨ S = 10/2 × (1 + 10) = 5 × 11 = 55
          </text>
        </g>
      )}
    </svg>
  );
};

export default SumOfAPAnimation;
