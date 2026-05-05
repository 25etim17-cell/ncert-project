import React from 'react';
import { motion } from 'framer-motion';

const BalancingEquationAnimation = ({ playing, step }) => {
  return (
    <svg viewBox="0 0 800 400" className="w-full h-full">
      <text x="400" y="35" textAnchor="middle" className="text-lg font-bold" fill="#1E3A5F">Balancing a Chemical Equation</text>

      {/* Unbalanced */}
      <rect x="50" y="60" width="700" height="100" rx="16" fill={playing && step >= 1 ? '#FEF2F2' : '#F8FAFC'} stroke={playing && step >= 1 ? '#FECACA' : '#E2E8F0'} strokeWidth="2" />
      <text x="80" y="90" className="text-xs font-bold" fill="#EF4444">UNBALANCED</text>
      <text x="400" y="125" textAnchor="middle" className="text-xl font-bold" fill="#1E3A5F">
        Fe + H₂O → Fe₃O₄ + H₂
      </text>

      {/* Arrow */}
      {playing && step >= 1 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <text x="400" y="190" textAnchor="middle" className="text-3xl" fill="#00A8E8">↓</text>
          <text x="400" y="210" textAnchor="middle" className="text-xs font-bold" fill="#00A8E8">Count and balance atoms</text>
        </motion.g>
      )}

      {/* Step by step counting */}
      {playing && step >= 2 && (
        <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <rect x="50" y="225" width="320" height="80" rx="12" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
          <text x="210" y="250" textAnchor="middle" className="text-xs font-bold" fill="#1E3A5F">Left Side (Reactants)</text>
          <text x="210" y="275" textAnchor="middle" className="text-sm" fill="#64748B">Fe=1, H=2, O=1</text>
          
          <rect x="430" y="225" width="320" height="80" rx="12" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="1" />
          <text x="590" y="250" textAnchor="middle" className="text-xs font-bold" fill="#1E3A5F">Right Side (Products)</text>
          <text x="590" y="275" textAnchor="middle" className="text-sm" fill="#64748B">Fe=3, O=4, H=2</text>
        </motion.g>
      )}

      {/* Balanced result */}
      {playing && step >= 3 && (
        <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <rect x="50" y="320" width="700" height="70" rx="16" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="2" />
          <text x="80" y="348" className="text-xs font-bold" fill="#22C55E">✓ BALANCED</text>
          <text x="460" y="358" textAnchor="middle" className="text-xl font-bold" fill="#1E3A5F">
            3Fe + 4H₂O → Fe₃O₄ + 4H₂
          </text>
        </motion.g>
      )}
    </svg>
  );
};

export default BalancingEquationAnimation;
