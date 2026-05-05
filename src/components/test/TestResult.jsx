import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTestStore } from '../../store/testStore';
import useAuthStore from '../../store/useAuthStore';
import useProgressStore from '../../store/useProgressStore';
import { Trophy, ArrowLeft } from 'lucide-react';
import MCQTest from './MCQTest';
import MatchTheFollowing from './MatchTheFollowing';
import { motion } from 'framer-motion';

const TestResult = () => {
  const { score, questions, resetTest, currentTestConfig, answers } = useTestStore();
  const navigate = useNavigate();

  const { isAuthenticated } = useAuthStore();
  const { saveQuizScore, quizScores } = useProgressStore();

  const totalPossible = questions.reduce((acc, q) => {
    if (q.type === 'mcq') return acc + 1;
    if (q.type === 'match') return acc + 1;
    return acc;
  }, 0);

  const hasSavedRef = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Save quiz score once when component mounts
    if (isAuthenticated && currentTestConfig?.title && totalPossible > 0 && !hasSavedRef.current) {
      hasSavedRef.current = true;
      
      const analysis = questions.map(q => {
        let isCorrect = false;
        if (q.type === 'mcq') isCorrect = answers[q.id] === q.correct;
        if (q.type === 'match') {
            const userPairs = answers[q.id] || {};
            isCorrect = Object.keys(q.correctPairs).every(key => userPairs[key] === q.correctPairs[key]);
        }
        return { question: q.question || q.id, isCorrect };
      });

      saveQuizScore(currentTestConfig.title, score, totalPossible, analysis);
    }
  }, [isAuthenticated, currentTestConfig, score, totalPossible, saveQuizScore, questions, answers]);



  const percentage = totalPossible > 0 ? Math.round((score / totalPossible) * 100) : 0;

  let message = "Keep studying! You can do better.";
  let badgeClass = "bg-red-100 text-red-600";
  if (percentage >= 80) {
    message = "Excellent work! Concept mastered.";
    badgeClass = "bg-green-100 text-green-600";
  } else if (percentage >= 50) {
    message = "Good effort. Review the mistakes.";
    badgeClass = "bg-yellow-100 text-yellow-600";
  }

  const handleExit = () => {
    resetTest();
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-3xl p-10 flex flex-col items-center text-center shadow-lg border border-gray-200 dark:border-gray-700 mb-12"
      >
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-inner ${badgeClass}`}>
          <Trophy className="w-12 h-12" />
        </div>

        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
          {score.toFixed(1)} / {totalPossible}
        </h1>
        <p className="text-xl font-bold text-gray-500 dark:text-gray-400 mb-6">{percentage}% Score</p>

        <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-8">{message}</p>

        <div className="flex gap-4">
          <button
            onClick={handleExit}
            className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Back Home
          </button>
        </div>
      </motion.div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6" style={{ fontFamily: "'Merriweather', serif" }}>Review Answers</h2>
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

export default TestResult;
