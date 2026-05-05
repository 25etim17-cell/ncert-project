import React from 'react';
import { motion } from 'framer-motion';

const OhmsLawAnimation = ({ playing, step }) => {
  // V = IR visualization
  const voltages = [2, 4, 6, 8, 10];
  const R = 2; // Ohms
  const currents = voltages.map(v => v / R);

  const toX = (v) => 150 + v * 50;
  const toY = (i) => 320 - i * 50;

  return (
    <svg viewBox="0 0 800 400" className="w-full h-full">
      <text x="400" y="30" textAnchor="middle" className="text-lg font-bold" fill="#1E3A5F">Ohm's Law: V = IR</text>

      {/* Axes */}
      <line x1="150" y1="320" x2="700" y2="320" stroke="#1E3A5F" strokeWidth="2" />
      <line x1="150" y1="320" x2="150" y2="50" stroke="#1E3A5F" strokeWidth="2" />
      <text x="425" y="370" textAnchor="middle" className="text-sm font-bold" fill="#1E3A5F">Voltage (V)</text>
      <text x="85" y="180" className="text-sm font-bold" fill="#1E3A5F" transform="rotate(-90 85,180)">Current (A)</text>

      {/* Voltage ticks */}
      {voltages.map(v => (
        <g key={`vt-${v}`}>
          <line x1={toX(v)} y1="315" x2={toX(v)} y2="325" stroke="#64748B" strokeWidth="1" />
          <text x={toX(v)} y="340" textAnchor="middle" className="text-xs" fill="#64748B">{v}</text>
        </g>
      ))}

      {/* Current ticks */}
      {[1, 2, 3, 4, 5].map(i => (
        <g key={`ct-${i}`}>
          <line x1="145" y1={toY(i)} x2="155" y2={toY(i)} stroke="#64748B" strokeWidth="1" />
          <text x="135" y={toY(i) + 4} textAnchor="end" className="text-xs" fill="#64748B">{i}</text>
        </g>
      ))}

      {/* Data points */}
      {playing && voltages.map((v, idx) => (
        <motion.circle
          key={`pt-${idx}`}
          cx={toX(v)}
          cy={toY(currents[idx])}
          r="6"
          fill="#00A8E8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.4, duration: 0.3 }}
        />
      ))}

      {/* Best fit line */}
      {playing && step >= 1 && (
        <motion.line
          x1={toX(0)} y1={toY(0)}
          x2={toX(10)} y2={toY(5)}
          stroke="#EF4444" strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
      )}

      {/* Label */}
      {playing && step >= 2 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <rect x="500" y="80" width="250" height="100" rx="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1" />
          <text x="625" y="110" textAnchor="middle" className="text-sm font-bold" fill="#EF4444">Straight line → V ∝ I</text>
          <text x="625" y="135" textAnchor="middle" className="text-sm font-bold" fill="#1E3A5F">Slope = R = {R} Ω</text>
          <text x="625" y="165" textAnchor="middle" className="text-sm" fill="#64748B">V = IR (Ohm's Law verified)</text>
        </motion.g>
      )}

      {/* Circuit diagram at top right */}
      {playing && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <rect x="550" y="220" width="180" height="80" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
          <text x="640" y="245" textAnchor="middle" className="text-xs font-bold" fill="#1E3A5F">Simple Circuit</text>
          <text x="640" y="265" textAnchor="middle" className="text-xs" fill="#64748B">🔋 Battery → 🔌 Resistor</text>
          <text x="640" y="285" textAnchor="middle" className="text-xs" fill="#64748B">R = {R}Ω (constant)</text>
        </motion.g>
      )}
    </svg>
  );
};

export default OhmsLawAnimation;
