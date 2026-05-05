import React, { useState, useEffect } from 'react';
import { useTestStore } from '../../store/testStore';

const MatchTheFollowing = ({ question, index }) => {
    const { answers, setAnswer, isSubmitted } = useTestStore();
    const [localPairs, setLocalPairs] = useState(answers[question.id] || {});

    // Update store when local pairs change
    useEffect(() => {
        setAnswer(question.id, localPairs);
    }, [localPairs, question.id, setAnswer]);

    const handleSelect = (idxA, idxB) => {
        if (isSubmitted) return;
        setLocalPairs(prev => ({
            ...prev,
            [idxA]: idxB
        }));
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 mb-6 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                </span>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-relaxed pt-1">
                    Match the following correctly
                </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 ml-12">
                {/* Column A */}
                <div className="space-y-3">
                    <h4 className="font-bold text-sm text-center text-gray-500 bg-gray-100 dark:bg-gray-900 py-2 rounded-lg">Column A</h4>
                    {question.columnA.map((item, idx) => {
                        const selectedBIdx = localPairs[idx];
                        const isPairCorrect = isSubmitted && question.correctPairs[idx] === selectedBIdx;
                        const isPairWrong = isSubmitted && selectedBIdx !== undefined && !isPairCorrect;

                        return (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium w-full text-center text-gray-800 dark:text-gray-200">
                                    {item}
                                </div>
                                {/* Arrow */}
                                <div className="text-gray-400">→</div>
                            </div>
                        );
                    })}
                </div>

                {/* Column B Selections */}
                <div className="space-y-3">
                    <h4 className="font-bold text-sm text-center text-gray-500 bg-gray-100 dark:bg-gray-900 py-2 rounded-lg">Select Match from B</h4>
                    {question.columnA.map((_, idxA) => {
                        const selectedBIdx = localPairs[idxA];
                        const isPairCorrect = isSubmitted && question.correctPairs[idxA] === selectedBIdx;
                        const isPairWrong = isSubmitted && selectedBIdx !== undefined && !isPairCorrect;

                        let selectClass = "w-full px-3 py-3 rounded-xl border-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary/50 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white";
                        if (isPairCorrect) selectClass = "w-full px-3 py-3 rounded-xl border-2 text-sm font-medium focus:outline-none bg-green-50 border-green-500 text-green-700 dark:bg-green-900/20 dark:text-green-400";
                        if (isPairWrong) selectClass = "w-full px-3 py-3 rounded-xl border-2 text-sm font-medium focus:outline-none bg-red-50 border-red-500 text-red-700 dark:bg-red-900/20 dark:text-red-400";

                        return (
                            <div key={idxA} className="flex flex-col">
                                <select
                                    value={selectedBIdx !== undefined ? selectedBIdx : ""}
                                    onChange={(e) => handleSelect(idxA, parseInt(e.target.value))}
                                    disabled={isSubmitted}
                                    className={selectClass}
                                >
                                    <option value="" disabled>-- Select Match --</option>
                                    {question.columnB.map((opt, idxB) => (
                                        <option key={idxB} value={idxB}>{opt}</option>
                                    ))}
                                </select>
                                {isSubmitted && isPairWrong && (
                                    <div className="text-xs text-green-600 mt-1 pl-1 font-bold">
                                        Correct: {question.columnB[question.correctPairs[idxA]]}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MatchTheFollowing;
