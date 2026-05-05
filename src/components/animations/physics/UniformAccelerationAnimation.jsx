import React from 'react';
import { motion } from 'framer-motion';

const UniformAccelerationAnimation = ({ playing }) => {
  // Shows a ball accelerating - increasing gaps between positions
  const positions = [100, 120, 160, 220, 300, 400, 520];

  return (
    <svg viewBox="0 0 800 400" className="w-full h-full">
      <text x="400" y="30" textAnchor="middle" className="text-lg font-bold" fill="#1E3A5F">Uniform Acceleration</text>
      <text x="400" y="52" textAnchor="middle" className="text-sm" fill="#64748B">Equal increase in velocity in equal intervals of time</text>

      {/* Ground line */}
      <line x1="50" y1="250" x2="750" y2="250" stroke="#CBD5E1" strokeWidth="2" />

      {/* Time markers */}
      {positions.map((pos, i) => (
        <g key={i}>
          <line x1={pos} y1="245" x2={pos} y2="255" stroke="#94A3B8" strokeWidth="1" />
          <text x={pos} y="275" textAnchor="middle" className="text-xs" fill="#64748B">t={i}s</text>
        </g>
      ))}

      {/* Ball at each position (showing history) */}
      {playing && positions.map((pos, i) => (
        <motion.g key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === positions.length - 1 ? 1 : 0.3 }}
          transition={{ delay: i * 0.5, duration: 0.3 }}
        >
          <circle cx={pos} cy={220} r="15" fill={i === positions.length - 1 ? '#00A8E8' : '#CBD5E1'} />
        </motion.g>
      ))}

      {/* Moving ball */}
      {playing && (
        <motion.circle
          r="15" cy="220" fill="#00A8E8"
          initial={{ cx: positions[0] }}
          animate={{ cx: positions }}
          transition={{ duration: 3.5, times: [0, 0.05, 0.12, 0.22, 0.38, 0.6, 1], ease: "easeIn" }}
        />
      )}

      {/* Gap annotations */}
      {playing && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>
          {positions.slice(1).map((pos, i) => {
            const gap = pos - positions[i];
            return (
              <g key={`gap-${i}`}>
                <line x1={positions[i]} y1={300 + i * 12} x2={pos} y2={300 + i * 12} stroke="#F4A261" strokeWidth="2" />
                <text x={(positions[i] + pos) / 2} y={298 + i * 12} textAnchor="middle" className="text-xs font-bold" fill="#F4A261">
                  {gap}m
                </text>
              </g>
            );
          })}
          <text x="400" y="390" textAnchor="middle" className="text-sm font-bold" fill="#1E3A5F">
            Gaps increase → velocity is increasing → acceleration!
          </text>
        </motion.g>
      )}
    </svg>
  );
};

export default UniformAccelerationAnimation;
