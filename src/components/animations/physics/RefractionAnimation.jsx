import React from 'react';
import { motion } from 'framer-motion';

const RefractionAnimation = ({ playing }) => {
  return (
    <svg viewBox="0 0 800 400" className="w-full h-full">
      <text x="400" y="30" textAnchor="middle" className="text-lg font-bold" fill="#1E3A5F">Refraction of Light</text>

      {/* Air region */}
      <rect x="50" y="50" width="700" height="150" rx="0" fill="#EFF6FF" />
      <text x="100" y="80" className="text-sm font-bold" fill="#00A8E8">AIR (Rarer medium)</text>

      {/* Glass region */}
      <rect x="50" y="200" width="700" height="160" rx="0" fill="#DBEAFE" />
      <text x="100" y="230" className="text-sm font-bold" fill="#1E3A5F">GLASS (Denser medium)</text>

      {/* Interface line */}
      <line x1="50" y1="200" x2="750" y2="200" stroke="#1E3A5F" strokeWidth="3" />

      {/* Normal (dashed) */}
      <line x1="400" y1="60" x2="400" y2="350" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="6 4" />
      <text x="420" y="70" className="text-xs" fill="#94A3B8">Normal</text>

      {/* Incident ray */}
      {playing && (
        <motion.line
          x1="250" y1="60" x2="400" y2="200"
          stroke="#EF4444" strokeWidth="3"
          markerEnd="url(#arrowRed)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
      )}

      {/* Refracted ray - bends towards normal (denser medium) */}
      {playing && (
        <motion.line
          x1="400" y1="200" x2="500" y2="350"
          stroke="#22C55E" strokeWidth="3"
          markerEnd="url(#arrowGreen)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />
      )}

      {/* Angle labels */}
      {playing && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
          <path d="M 400 160 A 40 40 0 0 0 375 175" fill="none" stroke="#EF4444" strokeWidth="2" />
          <text x="360" y="155" className="text-xs font-bold" fill="#EF4444">∠i</text>
          
          <path d="M 400 240 A 40 40 0 0 1 415 255" fill="none" stroke="#22C55E" strokeWidth="2" />
          <text x="420" y="260" className="text-xs font-bold" fill="#22C55E">∠r</text>
          
          <text x="550" y="130" className="text-sm font-bold" fill="#1E3A5F">∠i {">"} ∠r</text>
          <text x="550" y="150" className="text-xs" fill="#64748B">Light bends towards normal</text>
          <text x="550" y="168" className="text-xs" fill="#64748B">in denser medium</text>
        </motion.g>
      )}

      <defs>
        <marker id="arrowRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
        </marker>
        <marker id="arrowGreen" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#22C55E" />
        </marker>
      </defs>
    </svg>
  );
};

export default RefractionAnimation;
