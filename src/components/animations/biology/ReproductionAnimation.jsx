import React from 'react';
import { motion } from 'framer-motion';

const ReproductionAnimation = ({ playing }) => {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center p-4 bg-gradient-to-br from-violet-50 to-pink-50 rounded-xl overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center gap-4">
        {/* Title */}
        <div className="text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Cell Division — Binary Fission (Amoeba)</div>

        {/* Fission stages */}
        <div className="flex items-center gap-3">
          {/* Stage 1: Single cell */}
          <motion.div
            animate={playing ? { scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-14 h-14 bg-purple-200 rounded-full border-2 border-purple-400">
              <div className="absolute top-3 left-3 w-5 h-5 bg-purple-500 rounded-full" />
            </div>
            <span className="text-[9px] font-bold text-gray-500 mt-1">Parent Cell</span>
          </motion.div>

          {playing && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg"
            >→</motion.span>
          )}

          {/* Stage 2: Elongating */}
          {playing && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-20 h-12 bg-purple-200 rounded-full border-2 border-purple-400">
                <div className="absolute top-2 left-3 w-4 h-4 bg-purple-500 rounded-full" />
                <div className="absolute top-2 right-3 w-4 h-4 bg-purple-500 rounded-full" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 border-l border-dashed border-purple-400" />
              </div>
              <span className="text-[9px] font-bold text-gray-500 mt-1">Dividing</span>
            </motion.div>
          )}

          {playing && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="text-gray-400 text-lg"
            >→</motion.span>
          )}

          {/* Stage 3: Two cells */}
          {playing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="flex flex-col items-center"
            >
              <div className="flex gap-1">
                <motion.div
                  animate={{ x: [-2, 0, -2] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="relative w-10 h-10 bg-purple-200 rounded-full border-2 border-purple-400"
                >
                  <div className="absolute top-2 left-2 w-3 h-3 bg-purple-500 rounded-full" />
                </motion.div>
                <motion.div
                  animate={{ x: [2, 0, 2] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="relative w-10 h-10 bg-purple-200 rounded-full border-2 border-purple-400"
                >
                  <div className="absolute top-2 left-2 w-3 h-3 bg-purple-500 rounded-full" />
                </motion.div>
              </div>
              <span className="text-[9px] font-bold text-gray-500 mt-1">2 Daughter Cells</span>
            </motion.div>
          )}
        </div>

        {/* Budding section */}
        {playing && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="w-full"
          >
            <div className="text-xs font-bold text-pink-600 bg-pink-100 px-3 py-1 rounded-full text-center mb-2">Budding (Yeast)</div>
            <div className="flex items-center justify-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-pink-200 rounded-full border-2 border-pink-400" />
                <motion.div
                  animate={{ scale: [0.3, 0.6, 0.8], x: [0, 4, 8] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -right-3 top-2 w-6 h-6 bg-pink-200 rounded-full border-2 border-pink-400"
                />
              </div>
              <span className="text-[9px] text-gray-500 max-w-[120px]">Small bud grows on parent, detaches to form new organism</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ReproductionAnimation;
