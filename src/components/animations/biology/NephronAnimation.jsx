import React from 'react';
import { motion } from 'framer-motion';

const NephronAnimation = ({ playing }) => {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden">
      <div className="relative w-full max-w-sm h-64">
        {/* Bowman's Capsule */}
        <motion.div
          animate={playing ? { scale: [1, 1.03, 1] } : {}}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-4 left-4 w-20 h-20 rounded-full border-3 border-blue-400 bg-blue-100/50"
        >
          {/* Glomerulus */}
          <div className="absolute inset-3 flex flex-wrap gap-0.5 items-center justify-center">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={playing ? { backgroundColor: ['#f87171', '#ef4444', '#f87171'] } : {}}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.15 }}
                className="w-3 h-3 bg-red-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Labels */}
        {playing && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="absolute top-0 left-28 text-[9px] font-bold text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">
              Bowman's Capsule
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="absolute top-10 left-28 text-[9px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
              Glomerulus (filtration)
            </motion.div>
          </>
        )}

        {/* Tubule path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 250">
          <motion.path
            d="M 85 55 Q 130 30, 180 55 Q 230 80, 250 130 Q 270 180, 230 210 Q 190 240, 150 210 Q 110 180, 140 150 Q 170 120, 200 150 Q 220 170, 240 200"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={playing ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          {/* Flow particles */}
          {playing && [...Array(4)].map((_, i) => (
            <motion.circle
              key={i}
              r="3"
              fill="#fbbf24"
              initial={{ offsetDistance: '0%' }}
              animate={{ offsetDistance: '100%' }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.7 }}
            >
              <animateMotion
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
                path="M 85 55 Q 130 30, 180 55 Q 230 80, 250 130 Q 270 180, 230 210 Q 190 240, 150 210 Q 110 180, 140 150 Q 170 120, 200 150 Q 220 170, 240 200"
              />
            </motion.circle>
          ))}
        </svg>

        {/* Process labels */}
        {playing && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="absolute top-16 right-4 text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
              Reabsorption (glucose, water)
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
              className="absolute bottom-8 right-4 text-[9px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
              → Urine formed
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
              className="absolute bottom-4 left-4 text-[9px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">
              Secretion (extra waste added)
            </motion.div>
          </>
        )}

        {/* Blood in/out arrows */}
        <div className="absolute top-6 left-0 text-[8px] font-bold text-red-500">Blood in →</div>
        {playing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="absolute top-16 left-0 text-[8px] font-bold text-blue-500">
            ← Clean blood
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NephronAnimation;
