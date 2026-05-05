import React from 'react';
import { motion } from 'framer-motion';

const VelocityTimeGraphAnimation = ({ playing, step }) => {
    // Step 0: Empty axes
    // Step 1: Uniform velocity (flat line)
    // Step 2: Uniform acceleration (rising line)
    // Step 3: Uniform deceleration (falling line)

    return (
        <svg viewBox="0 0 800 400" className="w-full h-full p-4">
            {/* Axes */}
            <line x1="50" y1="350" x2="750" y2="350" stroke="#212529" strokeWidth="4" />
            <line x1="50" y1="350" x2="50" y2="50" stroke="#212529" strokeWidth="4" />

            <text x="350" y="380" className="text-xl font-bold fill-gray-800 dark:fill-gray-200">Time (s)</text>
            <text x="20" y="180" className="text-xl font-bold fill-gray-800 dark:fill-gray-200" transform="rotate(-90 20,180)">Velocity (m/s)</text>

            {/* Grid lines (optional, basic ones) */}
            <line x1="50" y1="200" x2="750" y2="200" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="5 5" />

            {playing && step >= 1 && (
                <>
                    <motion.line
                        x1="50" y1="200" x2="300" y2="200"
                        stroke="#1E3A5F"
                        strokeWidth="5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.text x="120" y="180" className="text-lg font-bold fill-primary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                        Uniform Velocity (a = 0)
                    </motion.text>
                </>
            )}

            {playing && step >= 2 && (
                <>
                    <motion.line
                        x1="300" y1="200" x2="550" y2="80"
                        stroke="#E63946"
                        strokeWidth="5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.text x="380" y="120" className="text-lg font-bold fill-red-600 dark:fill-red-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                        Constant Acceleration
                    </motion.text>
                </>
            )}

            {playing && step >= 3 && (
                <>
                    <motion.line
                        x1="550" y1="80" x2="700" y2="350"
                        stroke="#00A8E8"
                        strokeWidth="5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.text x="580" y="240" className="text-lg font-bold fill-secondary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                        Deceleration
                    </motion.text>
                </>
            )}
        </svg>
    );
};

export default VelocityTimeGraphAnimation;
