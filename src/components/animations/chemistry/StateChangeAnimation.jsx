import React from 'react';
import { motion } from 'framer-motion';

const StateChangeAnimation = ({ playing }) => {
    // We'll simulate 9 particles arranged in a grid for Solid
    // Spread out uniformly for Liquid
    // Bouncing around randomly for Gas

    const particles = Array.from({ length: 9 }).map((_, i) => ({ id: i }));

    const solidPositions = [
        { x: 350, y: 150 }, { x: 400, y: 150 }, { x: 450, y: 150 },
        { x: 350, y: 200 }, { x: 400, y: 200 }, { x: 450, y: 200 },
        { x: 350, y: 250 }, { x: 400, y: 250 }, { x: 450, y: 250 },
    ];

    const liquidPositions = [
        { x: 310, y: 180 }, { x: 405, y: 140 }, { x: 480, y: 170 },
        { x: 340, y: 240 }, { x: 410, y: 220 }, { x: 490, y: 230 },
        { x: 320, y: 280 }, { x: 395, y: 270 }, { x: 470, y: 290 },
    ];

    const gasPositions = [
        { x: 100, y: 100 }, { x: 500, y: 50 }, { x: 700, y: 150 },
        { x: 200, y: 300 }, { x: 400, y: 350 }, { x: 600, y: 300 },
        { x: 150, y: 200 }, { x: 650, y: 50 }, { x: 350, y: 80 },
    ];

    const containerVariants = {
        solid: { transition: { staggerChildren: 0.1 } },
        liquid: { transition: { staggerChildren: 0.1 } },
        gas: { transition: { staggerChildren: 0.1 } },
    };

    const getTargetPosition = (i) => {
        if (!playing) return solidPositions[i];
        // Simple mock logic: if playing, transition to liquid then gas. 
        // In real app we could use 'step' prop, but let's just animate sequence here.
        return [solidPositions[i], liquidPositions[i], gasPositions[i]];
    };

    return (
        <svg viewBox="0 0 800 400" className="w-full h-full">
            <defs>
                <radialGradient id="particleGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00A8E8" />
                    <stop offset="100%" stopColor="#1E3A5F" />
                </radialGradient>
            </defs>

            {/* Box */}
            <rect x="50" y="20" width="700" height="360" fill="none" stroke="#CBD5E1" strokeWidth="2" rx="20" />

            {/* States Indicator */}
            <text x="350" y="50" className="text-xl font-bold fill-primary">
                {!playing ? "SOLID (Fixed Pattern)" : "Heating... (Liquid -> Gas)"}
            </text>

            <motion.g variants={containerVariants}>
                {particles.map((p, i) => (
                    <motion.circle
                        key={p.id}
                        r="20"
                        fill="url(#particleGrad)"
                        initial={solidPositions[i]}
                        animate={
                            playing
                                ? {
                                    x: [solidPositions[i].x, liquidPositions[i].x, gasPositions[i].x, gasPositions[i].x + Math.random() * 50 - 25],
                                    y: [solidPositions[i].y, liquidPositions[i].y, gasPositions[i].y, gasPositions[i].y + Math.random() * 50 - 25]
                                }
                                : solidPositions[i]
                        }
                        transition={playing ? { duration: 6, times: [0, 0.4, 0.8, 1], ease: "easeInOut" } : { duration: 0.5 }}
                    />
                ))}
            </motion.g>

            {/* Heat source appearing at bottom */}
            {playing && (
                <motion.rect
                    x="300" y="380" width="200" height="15" fill="#E63946" rx="5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scaleX: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )}
        </svg>
    );
};

export default StateChangeAnimation;
