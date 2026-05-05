import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTestStore } from '../../store/testStore';
import MCQTest from './MCQTest';
import MatchTheFollowing from './MatchTheFollowing';
import TestResult from './TestResult';
import { Clock } from 'lucide-react';

const TestPage = () => {
  const { inProgress, isSubmitted, questions, timeLeft, decrementTimer, submitTest, currentTestConfig } = useTestStore();
  const navigate = useNavigate();

  // Redirect if no test is active
  useEffect(() => {
    if (!inProgress && !isSubmitted) {
      navigate('/custom-test');
    }
  }, [inProgress, isSubmitted, navigate]);

  // Timer logic
  useEffect(() => {
    if (inProgress && !isSubmitted && timeLeft > 0) {
      const timer = setInterval(() => decrementTimer(), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && inProgress && !isSubmitted) {
      submitTest();
    }
  }, [inProgress, isSubmitted, timeLeft, decrementTimer, submitTest]);

  if (!inProgress && !isSubmitted) return null;

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const isTimeRunningOut = timeLeft > 0 && timeLeft < 120;

  if (isSubmitted) {
    return <TestResult />;
  }

  return (
    <div className="max-w-4xl mx-auto py-6">
      {/* Sticky Header */}
      <div className="sticky top-20 z-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-4 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white" style={{ fontFamily: "'Merriweather', serif" }}>
            {currentTestConfig?.title || "Test"}
          </h1>
          <p className="text-sm text-gray-500">{questions.length} Questions</p>
        </div>

        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 font-mono text-xl font-bold px-4 py-2 rounded-xl border ${isTimeRunningOut ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900/50 animate-pulse' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600'}`}>
            <Clock className="w-5 h-5" />
            {mins.toString().padStart(2, '0')}:{secs.toString().padStart(2, '0')}
          </div>
          <button
            onClick={submitTest}
            className="px-6 py-2 bg-[#00A8E8] text-white font-bold rounded-xl shadow-md hover:opacity-90 transition-colors"
          >
            Submit Test
          </button>
        </div>
      </div>

      <div className="space-y-8 pb-32">
        {questions.map((q, index) => {
          if (q.type === 'mcq') {
            return <MCQTest key={q.id} question={q} index={index} />;
          } else if (q.type === 'match') {
            return <MatchTheFollowing key={q.id} question={q} index={index} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default TestPage;
