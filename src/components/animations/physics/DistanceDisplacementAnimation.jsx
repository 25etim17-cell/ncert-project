import React from 'react';
import { motion } from 'framer-motion';

const DistanceDisplacementAnimation = ({ playing }) => {
    return (
        <svg viewBox="0 0 800 400" className="w-full h-full">
            <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#1E3A5F" />
                </marker>
                <marker id="red-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#E63946" />
                </marker>
            </defs>

            <text x="50" y="50" className="text-2xl font-bold fill-gray-800 dark:fill-gray-200">Start</text>
            <circle cx="70" cy="80" r="8" className="fill-primary" />

            <text x="650" y="350" className="text-2xl font-bold fill-gray-800 dark:fill-gray-200">End</text>
            <circle cx="680" cy="320" r="8" className="fill-primary" />

            {/* Distance Curved Path */}
            {playing && (
                <>
                    <motion.path
                        d="M 70 80 Q 300 0, 500 200 T 680 320"
                        fill="transparent"
                        stroke="#457B9D" /* Blue */
                        strokeWidth="4"
                        strokeDasharray="10 10"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 4, ease: "easeInOut" }}
                    />
                    <motion.text
                        x="400" y="100"
                        className="text-lg font-bold fill-blue-600 dark:fill-blue-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                    >
                        Distance (Actual Path) = 8 km
                    </motion.text>
                </>
            )}

            {/* Displacement Straight Path */}
            {playing && (
                <>
                    <motion.line
                        x1="70" y1="80" x2="680" y2="320"
                        stroke="#E63946" /* Red */
                        strokeWidth="6"
                        markerEnd="url(#red-arrow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 4, duration: 1.5, ease: "easeOut" }}
                    />
                    <motion.text
                        x="350" y="240"
                        className="text-lg font-bold fill-red-600 dark:fill-red-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5.5, duration: 1 }}
                    >
                        Displacement (Shortest) = 5 km
                    </motion.text>
                </>
            )}
        </svg>
    );
};

export default DistanceDisplacementAnimation;
