import React from 'react';
import { useTestStore } from '../../store/testStore';

const MCQTest = ({ question, index }) => {
  const { answers, setAnswer, isSubmitted } = useTestStore();
  const selected = answers[question.id];
  const isCorrect = selected === question.correct;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 mb-6 shadow-sm">
      <div className="flex gap-4 items-start mb-6">
        <span className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center font-bold text-sm">
          {index + 1}
        </span>
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-relaxed">
            {question.question}
          </h3>
          <span className="text-xs font-medium text-gray-400 dark:text-gray-500 mt-1 block px-2 py-0.5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded inline-block">
            {question.ncertRef}
          </span>
        </div>
      </div>

      <div className="space-y-3 ml-12">
        {question.options.map((opt, i) => {
          const isSelected = selected === opt;
          const showSuccess = isSubmitted && opt === question.correct;
          const showError = isSubmitted && isSelected && !isCorrect;

          let btnClass = "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300";
          if (isSelected && !isSubmitted) btnClass = "border-[#00A8E8] bg-[#00A8E8]/10 text-[#00A8E8] dark:bg-[#00A8E8]/20";
          if (showSuccess) btnClass = "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400";
          if (showError) btnClass = "border-red-500 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400";

          return (
            <button
              key={i}
              disabled={isSubmitted}
              onClick={() => setAnswer(question.id, opt)}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-colors flex items-center justify-between ${btnClass}`}
            >
              <span>{opt}</span>
              {isSelected && !isSubmitted && <span className="w-3 h-3 rounded-full bg-[#00A8E8]"></span>}
              {showSuccess && <span className="w-3 h-3 rounded-full bg-green-500"></span>}
              {showError && <span className="w-3 h-3 rounded-full bg-red-500"></span>}
            </button>
          );
        })}
      </div>

      {isSubmitted && (
        <div className={`mt-6 ml-12 p-4 rounded-xl border ${isCorrect ? 'bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-800' : 'bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-800'}`}>
          <p className="font-bold mb-2 dark:text-white">Explanation</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">{question.explanation}</p>
          {question.examTip && (
            <p className="mt-2 text-xs font-bold text-[#F4A261]">
              Exam Tip: {question.examTip}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MCQTest;
