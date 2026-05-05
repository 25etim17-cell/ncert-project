import React from 'react';
import { motion } from 'framer-motion';

const ReactionTypeAnimation = ({ playing, step }) => {
  // Shows different reaction types: Combination, Decomposition, Displacement
  return (
    <svg viewBox="0 0 800 400" className="w-full h-full">
      <text x="400" y="30" textAnchor="middle" className="text-lg font-bold" fill="#1E3A5F">Types of Chemical Reactions</text>

      {/* Combination: A + B → AB */}
      <rect x="30" y="60" width="230" height="130" rx="16" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="2" />
      <text x="145" y="85" textAnchor="middle" className="text-sm font-bold" fill="#1E3A5F">Combination</text>
      {playing && (
        <>
          <motion.circle cx="80" cy="130" r="20" fill="#00A8E8"
            initial={{ x: 0 }} animate={{ x: 40 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} />
          <motion.circle cx="200" cy="130" r="20" fill="#F4A261"
            initial={{ x: 0 }} animate={{ x: -40 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} />
          <text x="90" y="175" className="text-xs font-bold" fill="#64748B">A + B → AB</text>
        </>
      )}
      {!playing && <text x="145" y="135" textAnchor="middle" className="text-sm" fill="#94A3B8">Press Play</text>}

      {/* Decomposition: AB → A + B */}
      <rect x="285" y="60" width="230" height="130" rx="16" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="2" />
      <text x="400" y="85" textAnchor="middle" className="text-sm font-bold" fill="#1E3A5F">Decomposition</text>
      {playing && (
        <>
          <motion.circle cx="380" cy="130" r="20" fill="#00A8E8"
            initial={{ x: 0 }} animate={{ x: -30 }} transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }} />
          <motion.circle cx="420" cy="130" r="20" fill="#F4A261"
            initial={{ x: 0 }} animate={{ x: 30 }} transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }} />
          <text x="340" y="175" className="text-xs font-bold" fill="#64748B">AB → A + B</text>
        </>
      )}

      {/* Displacement: A + BC → AC + B */}
      <rect x="540" y="60" width="230" height="130" rx="16" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="2" />
      <text x="655" y="85" textAnchor="middle" className="text-sm font-bold" fill="#1E3A5F">Displacement</text>
      {playing && (
        <>
          <motion.circle cx="590" cy="120" r="15" fill="#EF4444"
            initial={{ x: 0 }} animate={{ x: 60 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
          <motion.circle cx="660" cy="120" r="15" fill="#00A8E8"
            initial={{ x: 0 }} animate={{ x: -20 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
          <circle cx="690" cy="120" r="15" fill="#F4A261" />
          <text x="600" y="175" className="text-xs font-bold" fill="#64748B">A + BC → AC + B</text>
        </>
      )}

      {/* Balancing equation visual at bottom */}
      <rect x="100" y="220" width="600" height="150" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
      <text x="400" y="250" textAnchor="middle" className="text-sm font-bold" fill="#1E3A5F">Key Principle: Mass is Conserved</text>
      
      {playing && (
        <>
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            {/* Left side of equation */}
            <rect x="160" y="270" width="100" height="60" rx="8" fill="#00A8E8" opacity="0.2" stroke="#00A8E8" />
            <text x="210" y="305" textAnchor="middle" className="text-lg font-bold" fill="#00A8E8">2H₂</text>
            <text x="280" y="305" textAnchor="middle" className="text-2xl font-bold" fill="#64748B">+</text>
            <rect x="300" y="270" width="80" height="60" rx="8" fill="#F4A261" opacity="0.2" stroke="#F4A261" />
            <text x="340" y="305" textAnchor="middle" className="text-lg font-bold" fill="#F4A261">O₂</text>
            
            {/* Arrow */}
            <text x="420" y="305" textAnchor="middle" className="text-2xl font-bold" fill="#1E3A5F">→</text>
            
            {/* Right side */}
            <rect x="460" y="270" width="120" height="60" rx="8" fill="#22C55E" opacity="0.2" stroke="#22C55E" />
            <text x="520" y="305" textAnchor="middle" className="text-lg font-bold" fill="#22C55E">2H₂O</text>
          </motion.g>

          <motion.text x="400" y="360" textAnchor="middle" className="text-xs font-bold" fill="#64748B"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
            Atoms on left = Atoms on right (Balanced!)
          </motion.text>
        </>
      )}
    </svg>
  );
};

export default ReactionTypeAnimation;
