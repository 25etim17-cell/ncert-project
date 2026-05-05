import React from 'react';
import { Sigma, Milestone, ThumbsUp } from 'lucide-react';

const ExamSection = ({ examData }) => {
    if (!examData) return <div className="p-10 text-center">No exam data available for this chapter.</div>;

    return (
        <div className="space-y-8 pb-12">

            {/* Formulas */}
            {examData.formulas && examData.formulas.length > 0 && (
                <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                            <Sigma className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-heading font-bold text-gray-800 dark:text-white">Important Formulas</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {examData.formulas.map((item, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 flex items-center gap-4 hover:border-secondary/50 transition-colors">
                                <div className="font-mono text-lg font-bold text-primary dark:text-blue-400 bg-white dark:bg-gray-800 py-2 px-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                                    {item.formula}
                                </div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Derivations & Board Focus */}
            {examData.derivations && examData.derivations.length > 0 && (
                <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-accent/10 rounded-lg text-accent">
                            <Milestone className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-heading font-bold text-gray-800 dark:text-white">Important Derivations</h2>
                    </div>
                    <ul className="space-y-3">
                        {examData.derivations.map((der, idx) => (
                            <li key={idx} className="flex items-start gap-3 bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-800/50">
                                <span className="font-bold text-red-500 bg-white dark:bg-gray-800 px-2 py-0.5 rounded text-xs mt-0.5">BOARD</span>
                                <span className="text-gray-700 dark:text-gray-300 font-medium">{der}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Quick Tips */}
            {examData.tips && examData.tips.length > 0 && (
                <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                            <ThumbsUp className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-heading font-bold text-gray-800 dark:text-white">Exam Tricks & Tips</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        {examData.tips.map((tip, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-gray-900 border-l-4 border-green-500 p-4 rounded-r-xl text-gray-700 dark:text-gray-300">
                                {tip}
                            </div>
                        ))}
                    </div>
                </section>
            )}

        </div>
    );
};

export default ExamSection;
