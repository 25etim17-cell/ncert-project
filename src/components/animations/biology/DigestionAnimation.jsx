import React from 'react';
import { motion } from 'framer-motion';

const DigestionAnimation = ({ playing }) => {
  const organs = [
    { name: 'Mouth', enzyme: 'Amylase', action: 'Starch → Maltose', y: 0, color: 'bg-pink-300', icon: '👄' },
    { name: 'Stomach', enzyme: 'Pepsin + HCl', action: 'Proteins → Peptides', y: 1, color: 'bg-red-300', icon: '🫘' },
    { name: 'Small Intestine', enzyme: 'Bile + Lipase', action: 'Fats → Fatty Acids', y: 2, color: 'bg-orange-300', icon: '🧬' },
    { name: 'Large Intestine', enzyme: '—', action: 'Water Absorption', y: 3, color: 'bg-amber-200', icon: '💧' },
  ];

  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center p-4 bg-gradient-to-b from-pink-50 to-orange-50 rounded-xl overflow-hidden">
      <div className="relative w-full max-w-sm">
        {/* Tube */}
        <div className="absolute left-8 top-6 bottom-2 w-1 bg-gradient-to-b from-pink-300 via-red-300 to-amber-300 rounded-full" />

        {organs.map((organ, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={playing ? { opacity: 1, x: 0 } : { opacity: 0.5, x: 0 }}
            transition={{ delay: i * 0.5, duration: 0.4 }}
            className="flex items-center gap-4 mb-4 relative"
          >
            {/* Node */}
            <motion.div
              animate={playing ? { scale: [1, 1.2, 1] } : {}}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
              className={`w-8 h-8 rounded-full ${organ.color} flex items-center justify-center text-sm z-10 border-2 border-white shadow-sm`}
            >
              {organ.icon}
            </motion.div>

            {/* Info card */}
            <div className="bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100 flex-1">
              <div className="text-xs font-bold text-gray-800">{organ.name}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">
                <span className="font-semibold text-blue-600">{organ.enzyme}</span>
                {organ.action !== '—' && (
                  <span className="ml-1">→ {organ.action}</span>
                )}
              </div>
            </div>

            {/* Food particle moving */}
            {playing && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: [0, 40, 80], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.6 + 0.5 }}
                className="absolute left-12 w-2 h-2 bg-green-400 rounded-full"
              />
            )}
          </motion.div>
        ))}

        {/* Absorption arrow */}
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-center mt-2"
          >
            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              ✓ Nutrients absorbed into blood via villi
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DigestionAnimation;
