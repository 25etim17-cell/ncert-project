import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Circle, BookOpen, Atom, FlaskConical, Zap, ChevronRight, XCircle, LogOut, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import useAuthStore from '../store/useAuthStore';
import useProgressStore from '../store/useProgressStore';
import { getFullContentStructure } from '../data/progressMapping';

const ProgressDashboard = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const { completedConcepts, quizScores, fetchProgress } = useProgressStore();
  const navigate = useNavigate();
  const [activeClass, setActiveClass] = useState('9');
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
    } else {
      window.scrollTo(0, 0);
      fetchProgress();
    }
  }, [isAuthenticated, navigate, fetchProgress]);

  if (!isAuthenticated) return null;

  const contentStructure = getFullContentStructure();
  const totalConcepts = completedConcepts?.length || 0;
  const totalQuizzes = quizScores?.length || 0;

  const subjectMeta = {
    Physics: { icon: Atom, color: '#3b82f6', gradient: 'from-blue-500 to-cyan-500' },
    Chemistry: { icon: FlaskConical, color: '#22c55e', gradient: 'from-green-500 to-emerald-500' },
    Biology: { icon: Zap, color: '#14b8a6', gradient: 'from-teal-500 to-cyan-500' },
  };

  const recentQuizzes = [...quizScores].sort((a, b) => new Date(b.dateCompleted) - new Date(a.dateCompleted));

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="max-w-6xl mx-auto space-y-10">

      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-3xl overflow-hidden gradient-mesh p-8 md:p-10"
      >
        <div className="absolute inset-0 animate-shimmer" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur flex items-center justify-center text-white text-2xl font-extrabold border border-white/10 shadow-lg">
              {(user?.fullname || user?.username || '?')[0].toUpperCase()}
            </div>
            <div>
              <p className="text-blue-200/60 text-sm font-medium">{greeting}</p>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                {user?.fullname || user?.username}
              </h1>
            </div>
          </div>
          <button
            onClick={() => { logout(); navigate('/'); }}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur text-white/80 font-semibold rounded-xl border border-white/10 hover:bg-white/20 transition-all text-sm"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </motion.div>

      {/* Stat Cards */}
      <div className="grid md:grid-cols-2 gap-6 stagger-children">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="animate-slide-up card-hover bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 flex items-center justify-between"
        >
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Topics Mastered</p>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2">{totalConcepts}</h2>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-blue-500" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="animate-slide-up card-hover bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 flex items-center justify-between"
        >
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tests Completed</p>
            <h2 className="text-4xl font-extrabold text-[#F4A261] mt-2">{totalQuizzes}</h2>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center">
            <TrendingUp className="w-7 h-7 text-[#F4A261]" />
          </div>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT: Content Browser */}
        <div className="lg:col-span-2 space-y-8">

          {/* Class Toggle */}
          <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl w-fit">
            {['9', '10'].map(cls => (
              <button
                key={cls}
                onClick={() => { setActiveClass(cls); setExpandedSubject(null); }}
                className={`px-8 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  activeClass === cls
                    ? 'bg-white dark:bg-gray-700 text-[#00A8E8] shadow-md'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Class {cls}
              </button>
            ))}
          </div>

          {/* Subject Buttons */}
          <div className="grid md:grid-cols-3 gap-4">
            {Object.keys(contentStructure[activeClass]).map(subject => {
              const meta = subjectMeta[subject] || {};
              const Icon = meta.icon || BookOpen;
              const isActive = expandedSubject === subject;

              return (
                <button
                  key={subject}
                  onClick={() => setExpandedSubject(isActive ? null : subject)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-200 ${
                    isActive
                      ? `bg-gradient-to-br ${meta.gradient} text-white border-transparent shadow-lg`
                      : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                    isActive ? 'bg-white/20' : 'bg-gray-50 dark:bg-gray-800'
                  }`}>
                    <Icon className="w-5 h-5" style={{ color: isActive ? 'white' : meta.color }} />
                  </div>
                  <h3 className={`font-bold ${isActive ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{subject}</h3>
                </button>
              );
            })}
          </div>

          {/* Expanded Mastery View */}
          {expandedSubject && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                {expandedSubject} Mastery
              </h2>
              <div className="space-y-8">
                {Object.entries(contentStructure[activeClass][expandedSubject]).map(([id, chapter]) => (
                  <div key={id}>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{chapter.title}</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {chapter.conceptIds.map(cid => {
                        const done = completedConcepts.includes(cid);
                        return (
                          <div
                            key={cid}
                            className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all ${
                              done
                                ? 'bg-green-50 dark:bg-green-900/10 border-green-100 dark:border-green-800/20 text-green-700 dark:text-green-400'
                                : 'bg-gray-50/50 dark:bg-gray-800/30 border-gray-100 dark:border-gray-800 text-gray-400'
                            }`}
                          >
                            {done ? <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> : <Circle className="w-4 h-4 flex-shrink-0 opacity-25" />}
                            <span className="text-sm font-semibold truncate">{chapter.conceptTitles[cid]}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* RIGHT: Test Analysis */}
        <div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 sticky top-24">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Test Analysis
            </h3>

            <div className="space-y-3">
              {recentQuizzes.length === 0 ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-4">
                    <TrendingUp className="w-7 h-7 text-gray-300 dark:text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-400">No tests taken yet.</p>
                  <p className="text-xs text-gray-400 mt-1">Complete a chapter test to see results here.</p>
                </div>
              ) : (
                recentQuizzes.map((quiz, i) => {
                  const pct = quiz.maxScore > 0 ? (quiz.score / quiz.maxScore) : 0;
                  return (
                    <div key={i}>
                      <button
                        onClick={() => setSelectedQuiz(selectedQuiz === i ? null : i)}
                        className="w-full flex items-center justify-between p-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="text-left min-w-0">
                          <p className="text-sm font-bold text-gray-800 dark:text-gray-200 truncate">{quiz.chapterId.split(' -')[0]}</p>
                          <p className="text-[10px] text-gray-400 mt-0.5">{new Date(quiz.dateCompleted).toLocaleDateString()}</p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <div className={`px-2.5 py-1 rounded-lg text-xs font-extrabold ${pct >= 0.8 ? 'bg-green-50 text-green-600 dark:bg-green-900/20' : 'bg-amber-50 text-amber-600 dark:bg-amber-900/20'}`}>
                            {quiz.score}/{quiz.maxScore}
                          </div>
                          <ChevronRight className={`w-4 h-4 text-gray-300 transition-transform ${selectedQuiz === i ? 'rotate-90' : ''}`} />
                        </div>
                      </button>

                      {selectedQuiz === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="px-3.5 pb-3 space-y-1.5 overflow-hidden"
                        >
                          {quiz.analysis && quiz.analysis.length > 0 ? (
                            quiz.analysis.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2 py-1.5">
                                {item.isCorrect
                                  ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                                  : <XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />}
                                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{item.question}</p>
                              </div>
                            ))
                          ) : (
                            <p className="text-[10px] text-gray-400 italic py-2">Detailed analysis not available for this test.</p>
                          )}
                        </motion.div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;