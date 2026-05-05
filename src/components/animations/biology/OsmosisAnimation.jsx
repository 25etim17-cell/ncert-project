import React from 'react';
import { motion } from 'framer-motion';

const OsmosisAnimation = ({ playing, step }) => {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center p-6 bg-white rounded-xl">
      <div className="relative w-full h-full max-w-lg flex items-center justify-center gap-8 border-l-2 border-r-2 border-slate-200">
        
        {/* Semi-permeable membrane */}
        <div className="absolute inset-y-0 left-1/2 w-1 bg-slate-300 border-l border-dashed border-slate-400"></div>

        {/* Molecules container */}
        <div className="flex w-full justify-between px-10 relative z-10">
          
          {/* Left Side: High Water Concentration */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-blue-500 mb-4 bg-blue-50 px-2 py-1 rounded">High Water Conc.</span>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={playing ? { x: [0, 10, -5, 0], y: [0, -5, 10, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                  className="w-3 h-3 bg-blue-400 rounded-full"
                ></motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Low Water Concentration */}
          <div className="flex flex-col items-center">
             <span className="text-xs font-bold text-orange-500 mb-4 bg-orange-50 px-2 py-1 rounded">Low Water Conc.</span>
             <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-blue-400 rounded-full"
                ></motion.div>
              ))}
              {/* Solute molecules */}
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-orange-500 rounded-sm"></div>
              ))}
            </div>
          </div>

        </div>

        {/* Migration Effect */}
        {playing && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 pointer-events-none"
            >
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: "40%", y: (i * 20) + "%", opacity: 0 }}
                        animate={{ x: "60%", opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                        className="absolute w-2 h-2 bg-blue-300 rounded-full"
                    ></motion.div>
                ))}
            </motion.div>
        )}
      </div>
    </div>
  );
};

export default OsmosisAnimation;
