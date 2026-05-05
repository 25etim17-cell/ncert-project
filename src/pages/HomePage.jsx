import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Atom, BookOpen, FlaskConical, ArrowRight, Play, Sparkles, TrendingUp, ChevronRight, Clock, Shield, Microscope } from 'lucide-react';
import useAuthStore from '../store/useAuthStore';



const features = [
  {
    icon: BookOpen,
    title: 'Visual Concept Learning',
    desc: 'Interactive animations and step-by-step breakdowns replace boring textbooks.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Sparkles,
    title: 'AI Doubt Solving',
    desc: 'Ask doubts in natural language — our AI tutor answers instantly.',
    color: 'from-violet-500 to-purple-400',
  },
  {
    icon: TrendingUp,
    title: 'Smart Progress Tracking',
    desc: 'See exactly which concepts you\'ve mastered and where your gaps are.',
    color: 'from-amber-500 to-orange-400',
  },
];

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const classFromUrl = searchParams.get('class');
  const [activeClass, setActiveClass] = useState(classFromUrl || '9');
  const [recentChapter, setRecentChapter] = useState(null);

  useEffect(() => {
    if (classFromUrl) setActiveClass(classFromUrl);
  }, [classFromUrl]);

  useEffect(() => {
    const recent = localStorage.getItem('recentChapter');
    if (recent) {
      try { setRecentChapter(JSON.parse(recent)); } catch (e) {}
    }
  }, []);

  const subjects = [
    { name: 'Physics', icon: Atom, color: '#3b82f6', gradient: 'from-blue-500/10 to-cyan-500/10', border: 'group-hover:border-blue-300' },
    { name: 'Chemistry', icon: FlaskConical, color: '#22c55e', gradient: 'from-green-500/10 to-emerald-500/10', border: 'group-hover:border-green-300' },
    { name: 'Biology', icon: BookOpen, color: '#14b8a6', gradient: 'from-teal-500/10 to-cyan-500/10', border: 'group-hover:border-teal-300' },
  ];

  const { isAuthenticated, user } = useAuthStore();

  // ──────────────────────────────────
  // GUEST LANDING
  // ──────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 -m-4 md:-m-8 overflow-hidden">

        {/* ── HERO ── */}
        <section className="relative min-h-[90vh] flex items-center">
          {/* Background */}
          <div className="absolute inset-0 gradient-mesh opacity-95" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cuc3ZnLm9yZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-60" />
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/15 rounded-full blur-[120px] animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] animate-float" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center w-full py-20">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-white/80 text-xs font-semibold mb-8 border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                Free for all students
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Master NCERT
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
                  the smart way
                </span>
              </h1>

              <p className="mt-6 text-lg text-blue-100/70 max-w-lg leading-relaxed">
                Interactive concept animations, AI-powered doubt solving, and smart tests — built specifically for Class 9 & 10 Science.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/auth"
                  className="px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl flex items-center gap-2 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 text-sm"
                >
                  Start Learning Free <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="px-8 py-4 border border-white/20 text-white/90 font-semibold rounded-2xl flex items-center gap-2 hover:bg-white/10 transition-all duration-200 text-sm backdrop-blur">
                  <Play className="w-4 h-4" /> Watch Demo
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-14 flex flex-wrap gap-3">
                {[
                  { icon: Shield, label: 'NCERT Aligned' },
                  { icon: Atom, label: 'Physics · Chemistry · Biology' },
                  { icon: Microscope, label: 'Class 9 & 10' },
                ].map((badge, i) => {
                  const BadgeIcon = badge.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur border border-white/10">
                      <BadgeIcon className="w-3.5 h-3.5 text-blue-300/70" />
                      <span className="text-xs font-medium text-blue-200/70">{badge.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: Floating Subject Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block perspective-1000"
            >
              <div className="relative">
                {subjects.map((sub, i) => {
                  const Icon = sub.icon;
                  const offsets = [
                    'top-0 left-8',
                    'top-32 right-0',
                    'top-64 left-16',
                  ];
                  return (
                    <motion.div
                      key={sub.name}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, delay: i * 1.2, repeat: Infinity }}
                      className={`${i > 0 ? 'absolute' : 'relative'} ${offsets[i]} w-72`}
                    >
                      <div className="glass rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all group cursor-pointer">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${sub.color}22` }}>
                          <Icon className="w-6 h-6" style={{ color: sub.color }} />
                        </div>
                        <h3 className="text-white font-bold text-lg">{sub.name}</h3>
                        <p className="text-white/50 text-sm mt-1">Explore chapters →</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-[#00A8E8] uppercase tracking-widest mb-3">Why students love us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Everything you need to ace Science
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="animate-slide-up card-hover bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 group">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mx-6 mb-20">
          <div className="max-w-5xl mx-auto gradient-mesh rounded-[2rem] p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cuc3ZnLm9yZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-40" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Ready to start learning?
              </h2>
              <p className="text-blue-100/70 text-lg max-w-xl mx-auto mb-8">
                Start mastering NCERT Science concepts with interactive learning tools.
              </p>
              <Link to="/auth" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl text-sm hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300">
                Create Free Account <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ──────────────────────────────────
  // AUTHENTICATED HOME
  // ──────────────────────────────────
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-3xl overflow-hidden gradient-mesh p-8 md:p-12"
      >
        <div className="absolute inset-0 animate-shimmer" />
        <div className="relative z-10">
          <p className="text-blue-200/70 text-sm font-medium mb-1">{greeting} 👋</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            {user?.fullname || user?.username}
          </h1>
          <p className="text-blue-100/60 mt-2">Continue your mastery of NCERT Science</p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/dashboard" className="px-5 py-2.5 bg-white/15 backdrop-blur text-white text-sm font-semibold rounded-xl border border-white/10 hover:bg-white/25 transition-all flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Dashboard
            </Link>
            <Link to="/custom-test" className="px-5 py-2.5 bg-white text-gray-900 text-sm font-bold rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Take a Test
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Class Selector */}
      <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl w-fit">
        {['9', '10'].map((cls) => (
          <button
            key={cls}
            onClick={() => setActiveClass(cls)}
            className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeClass === cls
                ? 'bg-white dark:bg-gray-700 text-[#00A8E8] shadow-md'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Class {cls}
          </button>
        ))}
      </div>

      {/* Subjects */}
      <div className="grid md:grid-cols-3 gap-6 stagger-children">
        {subjects.map((sub) => {
          const Icon = sub.icon;
          return (
            <Link key={sub.name} to={`/class${activeClass}/${sub.name.toLowerCase()}`}>
              <div className={`animate-slide-up card-hover p-7 bg-gradient-to-br ${sub.gradient} dark:from-gray-800 dark:to-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 ${sub.border} group transition-colors`}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${sub.color}18` }}>
                  <Icon className="w-6 h-6" style={{ color: sub.color }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{sub.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  Explore chapters <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Continue Learning */}
      {recentChapter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 card-hover"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F4A261]/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#F4A261]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Continue Learning</p>
              <h3 className="font-bold text-gray-900 dark:text-white">{recentChapter.title}</h3>
            </div>
          </div>
          <Link to={recentChapter.url} className="p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;