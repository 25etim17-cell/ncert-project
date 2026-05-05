import React from 'react';
import { motion } from 'framer-motion';

const TissueAnimation = ({ playing }) => {
  const plantTissues = [
    { name: 'Parenchyma', cells: 'rounded-lg', color: 'bg-green-200 border-green-400', desc: 'Thin walls, stores food' },
    { name: 'Collenchyma', cells: 'rounded-tl-xl rounded-br-xl', color: 'bg-green-300 border-green-500', desc: 'Thick corners, flexible' },
    { name: 'Sclerenchyma', cells: 'rounded-none', color: 'bg-green-700 border-green-900', desc: 'Thick walls, dead, rigid' },
  ];

  const animalTissues = [
    { name: 'Epithelial', shape: 'flat', color: 'bg-pink-200 border-pink-400' },
    { name: 'Muscle', shape: 'spindle', color: 'bg-red-300 border-red-500' },
    { name: 'Nerve', shape: 'branched', color: 'bg-yellow-200 border-yellow-400' },
  ];

  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-lg">
        {/* Plant Tissues */}
        <div className="flex-1">
          <div className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full text-center mb-3">🌱 Plant Tissues</div>
          <div className="space-y-3">
            {plantTissues.map((t, ti) => (
              <motion.div
                key={ti}
                initial={{ opacity: 0, x: -20 }}
                animate={playing ? { opacity: 1, x: 0 } : { opacity: 0.4 }}
                transition={{ delay: ti * 0.4 }}
                className="flex items-center gap-2"
              >
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, ci) => (
                    <motion.div
                      key={ci}
                      animate={playing ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 2, delay: ci * 0.2 }}
                      className={`w-5 h-5 border ${t.color} ${t.cells}`}
                    />
                  ))}
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-700">{t.name}</div>
                  <div className="text-[8px] text-gray-500">{t.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-200" />

        {/* Animal Tissues */}
        <div className="flex-1">
          <div className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full text-center mb-3">🧬 Animal Tissues</div>
          <div className="space-y-3">
            {/* Epithelial - flat cells */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={playing ? { opacity: 1, x: 0 } : { opacity: 0.4 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-3 bg-pink-200 border border-pink-400 rounded-sm" />
                ))}
              </div>
              <div className="text-[10px] font-bold text-gray-700">Epithelial</div>
            </motion.div>

            {/* Muscle - spindle cells */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={playing ? { opacity: 1, x: 0 } : { opacity: 0.4 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-2"
            >
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={playing ? { scaleX: [1, 1.15, 1] } : {}}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                    className="w-8 h-3 bg-red-300 border border-red-500 rounded-full"
                  />
                ))}
              </div>
              <div className="text-[10px] font-bold text-gray-700">Muscle</div>
            </motion.div>

            {/* Nerve - branched */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={playing ? { opacity: 1, x: 0 } : { opacity: 0.4 }}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-2"
            >
              <svg width="80" height="30" viewBox="0 0 80 30">
                <motion.line x1="5" y1="10" x2="25" y2="15" stroke="#EAB308" strokeWidth="2" 
                  animate={playing ? { opacity: [0.5, 1, 0.5] } : {}} transition={{ repeat: Infinity, duration: 1 }} />
                <motion.line x1="5" y1="20" x2="25" y2="15" stroke="#EAB308" strokeWidth="2" 
                  animate={playing ? { opacity: [0.5, 1, 0.5] } : {}} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} />
                <circle cx="30" cy="15" r="6" fill="#FDE047" stroke="#EAB308" strokeWidth="1.5" />
                <motion.line x1="36" y1="15" x2="75" y2="15" stroke="#EAB308" strokeWidth="2"
                  animate={playing ? { strokeDashoffset: [0, -10] } : {}} 
                  strokeDasharray="4 3" transition={{ repeat: Infinity, duration: 0.5 }} />
              </svg>
              <div className="text-[10px] font-bold text-gray-700">Neuron</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TissueAnimation;
