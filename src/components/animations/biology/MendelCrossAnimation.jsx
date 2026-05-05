import React from 'react';
import { motion } from 'framer-motion';

const MendelCrossAnimation = ({ playing }) => {
  const f2 = [
    { geno: 'TT', pheno: 'Tall', color: 'bg-green-400', ratio: '1' },
    { geno: 'Tt', pheno: 'Tall', color: 'bg-green-300', ratio: '2' },
    { geno: 'tt', pheno: 'Dwarf', color: 'bg-yellow-300', ratio: '1' },
  ];

  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center p-4 bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center gap-3">
        {/* Parents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={playing ? { opacity: 1 } : { opacity: 0.5 }}
          className="flex items-center gap-8"
        >
          <div className="text-center">
            <div className="w-12 h-16 bg-green-500 rounded-t-full rounded-b-lg mx-auto border-2 border-green-700" />
            <div className="text-[10px] font-bold mt-1 text-green-700">Parent: Tall (Tt)</div>
          </div>
          <span className="text-lg font-bold text-gray-400">×</span>
          <div className="text-center">
            <div className="w-12 h-16 bg-green-500 rounded-t-full rounded-b-lg mx-auto border-2 border-green-700" />
            <div className="text-[10px] font-bold mt-1 text-green-700">Parent: Tall (Tt)</div>
          </div>
        </motion.div>

        {/* Arrow */}
        {playing && (
          <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <span className="text-gray-400 text-xl">↓</span>
          </motion.div>
        )}

        {/* Punnett Square */}
        {playing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
          >
            <table className="text-center text-xs">
              <thead>
                <tr>
                  <th className="p-2 bg-gray-50 border-b border-r border-gray-200"></th>
                  <th className="p-2 bg-green-50 border-b border-r border-gray-200 font-bold text-green-700">T</th>
                  <th className="p-2 bg-green-50 border-b border-gray-200 font-bold text-green-700">t</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 bg-green-50 border-r border-b border-gray-200 font-bold text-green-700">T</td>
                  <motion.td animate={{ backgroundColor: ['#dcfce7', '#bbf7d0', '#dcfce7'] }} transition={{ repeat: Infinity, duration: 2 }}
                    className="p-2 border-r border-b border-gray-200 font-bold text-green-800">TT</motion.td>
                  <motion.td animate={{ backgroundColor: ['#dcfce7', '#bbf7d0', '#dcfce7'] }} transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
                    className="p-2 border-b border-gray-200 font-bold text-green-700">Tt</motion.td>
                </tr>
                <tr>
                  <td className="p-2 bg-green-50 border-r border-gray-200 font-bold text-green-700">t</td>
                  <motion.td animate={{ backgroundColor: ['#dcfce7', '#bbf7d0', '#dcfce7'] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
                    className="p-2 border-r border-gray-200 font-bold text-green-700">Tt</motion.td>
                  <motion.td animate={{ backgroundColor: ['#fef9c3', '#fef08a', '#fef9c3'] }} transition={{ repeat: Infinity, duration: 2, delay: 0.9 }}
                    className="p-2 font-bold text-yellow-700">tt</motion.td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        )}

        {/* F2 Result */}
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center gap-3"
          >
            {f2.map((g, i) => (
              <motion.div
                key={i}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8 + i * 0.2 }}
                className="text-center"
              >
                <div className={`w-8 h-10 ${g.color} rounded-t-full rounded-b-lg mx-auto border ${g.pheno === 'Tall' ? 'border-green-600' : 'border-yellow-600'}`} 
                  style={{ height: g.pheno === 'Tall' ? 40 : 24 }} />
                <div className="text-[9px] font-bold mt-1 text-gray-700">{g.geno}</div>
                <div className="text-[8px] text-gray-500">{g.pheno}</div>
              </motion.div>
            ))}
            <div className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-full ml-2">
              Ratio 3:1
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MendelCrossAnimation;
