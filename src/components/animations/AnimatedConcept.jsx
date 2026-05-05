import React, { useState } from 'react';
import { Play, RotateCcw, SkipForward } from 'lucide-react';

const AnimatedConcept = ({ title, ncertRef, caption, maxSteps = 0, children }) => {
    const [playing, setPlaying] = useState(false);
    const [step, setStep] = useState(0);

    const handlePlay = () => {
        setPlaying(true);
    };

    const handleNextStep = () => {
        if (step < maxSteps) {
            setStep(s => s + 1);
        }
    };

    const handleReplay = () => {
        setPlaying(false);
        setStep(0);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 md:p-8 my-10 shadow-sm relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h4 className="text-xl font-heading font-bold text-gray-800 dark:text-gray-100">{title}</h4>
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{ncertRef}</span>
                </div>
                <div className="flex bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 p-1 mt-4 md:mt-0">
                    <button
                        onClick={handlePlay}
                        disabled={playing && maxSteps === 0}
                        className={`p-2 px-4 rounded-full text-sm font-bold flex items-center gap-2 transition-colors ${playing && maxSteps === 0 ? 'bg-gray-100 text-gray-400' : 'hover:bg-green-50 text-green-600'}`}
                    >
                        <Play className="w-4 h-4" /> Play
                    </button>

                    {maxSteps > 0 && (
                        <button
                            onClick={handleNextStep}
                            disabled={step >= maxSteps}
                            className={`p-2 px-4 border-l border-gray-100 dark:border-gray-700 text-sm font-bold flex items-center gap-2 transition-colors ${step >= maxSteps ? 'text-gray-400' : 'hover:bg-blue-50 text-blue-600'}`}
                        >
                            <SkipForward className="w-4 h-4" /> Next Step
                        </button>
                    )}

                    <button
                        onClick={handleReplay}
                        className="p-2 px-4 border-l border-gray-100 dark:border-gray-700 text-sm font-bold flex items-center gap-2 hover:bg-orange-50 text-orange-600 transition-colors"
                    >
                        <RotateCcw className="w-4 h-4" /> Replay
                    </button>
                </div>
            </div>

            <div className="w-full h-[300px] md:h-[400px] bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden flex items-center justify-center">
                {/* Render the specific animation SVG passing down playing and step props */}
                {children({ playing, step })}
            </div>

            <p className="mt-6 text-center text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 inline-block px-4 py-2 rounded-lg mx-auto table">
                {caption}
            </p>
        </div>
    );
};

export default AnimatedConcept;
