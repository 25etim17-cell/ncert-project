import React from 'react';
import { motion } from 'framer-motion';

const DiffusionAnimation = ({ playing }) => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    startX: 150 + Math.random() * 50,
    startY: 100 + Math.random() * 200,
    endX: 150 + Math.random() * 500,
    endY: 50 + Math.random() * 300,
    color: i < 6 ? '#00A8E8' : '#F4A261',
  }));

  return (
    <svg viewBox="0 0 800 400" className="w-full h-full">
      {/* Container */}
      <rect x="100" y="30" width="600" height="340" rx="20" fill="none" stroke="#CBD5E1" strokeWidth="2" />
      
      {/* Divider (dashed, representing a removable barrier) */}
      <line x1="400" y1="30" x2="400" y2="370" stroke="#94A3B8" strokeWidth="2" strokeDasharray="8 4" />
      
      <text x="200" y="25" className="text-sm font-bold" fill="#1E3A5F">Perfume drops</text>
      <text x="500" y="25" className="text-sm font-bold" fill="#94A3B8">Air</text>

      {particles.map((p) => (
        <motion.circle
          key={p.id}
          r="10"
          fill={p.color}
          opacity="0.8"
          initial={{ cx: p.startX, cy: p.startY }}
          animate={playing ? {
            cx: [p.startX, p.startX + 100, p.endX, p.endX - 50 + Math.random() * 100],
            cy: [p.startY, p.startY - 50, p.endY, p.endY + 30 - Math.random() * 60],
          } : { cx: p.startX, cy: p.startY }}
          transition={playing ? { duration: 4 + Math.random() * 2, ease: "easeInOut" } : { duration: 0.5 }}
        />
      ))}

      {playing && (
        <motion.text
          x="400" y="390"
          textAnchor="middle"
          className="text-sm font-bold"
          fill="#1E3A5F"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Particles spread from high to low concentration
        </motion.text>
      )}
    </svg>
  );
};

export default DiffusionAnimation;
