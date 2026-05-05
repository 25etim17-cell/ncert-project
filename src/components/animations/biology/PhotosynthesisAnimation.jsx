import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

const PhotosynthesisAnimation = ({ playing }) => {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center p-6 bg-green-50 rounded-xl overflow-hidden">
      <div className="relative w-full max-w-lg h-full flex flex-col items-center">
        
        {/* Sun */}
        <motion.div 
            animate={playing ? { scale: [1, 1.1, 1], rotate: 360 } : {}}
            transition={{ repeat: Infinity, duration: 10 }}
            className="absolute -top-4 -right-4"
        >
            <Sun className="w-16 h-16 text-yellow-500" />
        </motion.div>

        {/* Plant */}
        <div className="relative mt-20">
            <motion.div 
                animate={playing ? { scaleY: [1, 1.02, 1] } : {}}
                className="w-4 h-40 bg-green-700 rounded-full"
            ></motion.div>
            <motion.div 
                animate={playing ? { rotate: [-5, 5, -5] } : {}}
                className="absolute top-10 -left-16 w-32 h-16 bg-green-500 rounded-full origin-right"
            ></motion.div>
            <motion.div 
                animate={playing ? { rotate: [5, -5, 5] } : {}}
                className="absolute top-20 -right-16 w-32 h-16 bg-green-500 rounded-full origin-left"
            ></motion.div>
        </div>

        {/* Inputs/Outputs */}
        {playing && (
            <>
                {/* Sunlight */}
                <motion.div 
                    initial={{ x: 100, y: -50, opacity: 0 }}
                    animate={{ x: 20, y: 60, opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute font-bold text-yellow-600 text-sm"
                >Energy</motion.div>

                {/* CO2 */}
                <motion.div 
                    initial={{ x: -150, y: 100, opacity: 0 }}
                    animate={{ x: -30, y: 100, opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                    className="absolute font-bold text-blue-600 text-sm"
                >CO₂</motion.div>

                {/* H2O */}
                <motion.div 
                    initial={{ y: 250, opacity: 0 }}
                    animate={{ y: 150, opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="absolute font-bold text-blue-400 text-sm"
                >H₂O</motion.div>

                {/* O2 */}
                <motion.div 
                    initial={{ x: 30, y: 100, opacity: 0 }}
                    animate={{ x: 150, y: 80, opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                    className="absolute font-bold text-green-600 text-sm"
                >Oxygen</motion.div>
            </>
        )}
      </div>
    </div>
  );
};

export default PhotosynthesisAnimation;
