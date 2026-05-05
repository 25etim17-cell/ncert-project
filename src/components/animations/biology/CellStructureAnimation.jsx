import React from 'react';
import { motion } from 'framer-motion';

const CellStructureAnimation = ({ playing }) => {
  const organelles = [
    { name: 'Nucleus', color: 'bg-purple-500', x: '50%', y: '45%', size: 'w-16 h-16', ring: true },
    { name: 'Mitochondria', color: 'bg-red-400', x: '25%', y: '30%', size: 'w-10 h-6', rounded: 'rounded-[40%]' },
    { name: 'Mitochondria', color: 'bg-red-400', x: '72%', y: '62%', size: 'w-10 h-6', rounded: 'rounded-[40%]' },
    { name: 'Ribosome', color: 'bg-yellow-500', x: '35%', y: '60%', size: 'w-3 h-3' },
    { name: 'Ribosome', color: 'bg-yellow-500', x: '40%', y: '65%', size: 'w-3 h-3' },
    { name: 'Ribosome', color: 'bg-yellow-500', x: '60%', y: '55%', size: 'w-3 h-3' },
    { name: 'Golgi', color: 'bg-amber-400', x: '70%', y: '35%', size: 'w-12 h-4', rounded: 'rounded-full' },
    { name: 'Lysosome', color: 'bg-orange-500', x: '30%', y: '45%', size: 'w-5 h-5' },
    { name: 'Vacuole', color: 'bg-blue-200', x: '55%', y: '70%', size: 'w-12 h-10', rounded: 'rounded-[30%]', border: true },
    { name: 'ER', color: 'bg-green-300', x: '42%', y: '35%', size: 'w-20 h-3', rounded: 'rounded-full' },
    { name: 'ER', color: 'bg-green-300', x: '45%', y: '40%', size: 'w-16 h-3', rounded: 'rounded-full' },
  ];

  const labels = [
    { name: 'Nucleus', x: '50%', y: '25%', color: 'text-purple-700 bg-purple-50' },
    { name: 'Mitochondria', x: '15%', y: '18%', color: 'text-red-600 bg-red-50' },
    { name: 'Golgi Body', x: '75%', y: '22%', color: 'text-amber-700 bg-amber-50' },
    { name: 'ER', x: '30%', y: '22%', color: 'text-green-700 bg-green-50' },
    { name: 'Vacuole', x: '62%', y: '82%', color: 'text-blue-600 bg-blue-50' },
    { name: 'Lysosome', x: '15%', y: '50%', color: 'text-orange-600 bg-orange-50' },
  ];

  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl overflow-hidden">
      <div className="relative w-full max-w-md h-72">
        {/* Cell membrane */}
        <motion.div
          animate={playing ? { scale: [1, 1.02, 1] } : {}}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute inset-0 rounded-[45%] border-4 border-teal-400 bg-teal-50/60"
        />
        {/* Cell wall label */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-[10px] font-bold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">
          Cell Membrane
        </div>

        {/* Organelles */}
        {organelles.map((org, i) => (
          <motion.div
            key={i}
            animate={playing ? {
              x: [0, (i % 2 ? 4 : -4), 0],
              y: [0, (i % 3 ? -3 : 3), 0],
            } : {}}
            transition={{ repeat: Infinity, duration: 2 + i * 0.3, ease: 'easeInOut' }}
            className={`absolute ${org.size} ${org.color} ${org.rounded || 'rounded-full'} ${org.border ? 'border-2 border-blue-300' : ''}`}
            style={{ left: org.x, top: org.y, transform: 'translate(-50%, -50%)' }}
          >
            {org.ring && (
              <div className="absolute inset-1 rounded-full border-2 border-purple-300 bg-purple-200 flex items-center justify-center">
                <div className="w-3 h-3 bg-purple-700 rounded-full" />
              </div>
            )}
          </motion.div>
        ))}

        {/* Labels */}
        {playing && labels.map((lbl, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.3 }}
            className={`absolute text-[9px] font-bold px-1.5 py-0.5 rounded ${lbl.color} pointer-events-none whitespace-nowrap`}
            style={{ left: lbl.x, top: lbl.y, transform: 'translate(-50%, -50%)' }}
          >
            {lbl.name}
          </motion.div>
        ))}

        {/* Cytoplasm label */}
        <div className="absolute bottom-2 right-4 text-[9px] font-bold text-teal-500 italic">Cytoplasm</div>
      </div>
    </div>
  );
};

export default CellStructureAnimation;
