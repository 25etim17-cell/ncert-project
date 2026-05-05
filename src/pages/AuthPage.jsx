import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, FlaskConical, BookOpen, Eye, EyeOff, ArrowRight, Sparkles } from 'lucide-react';
import useAuthStore from '../store/useAuthStore';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { login, register, loading, error, clearError } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    let success = false;
    if (isLogin) {
      success = await login(username, password);
    } else {
      success = await register(fullname, username, password);
    }
    if (success) navigate('/');
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    clearError();
  };

  const floatingIcons = [
    { Icon: Atom, x: '15%', y: '20%', delay: 0, color: '#3b82f6' },
    { Icon: FlaskConical, x: '70%', y: '30%', delay: 1.5, color: '#22c55e' },
    { Icon: BookOpen, x: '30%', y: '70%', delay: 3, color: '#14b8a6' },
    { Icon: Sparkles, x: '80%', y: '75%', delay: 0.8, color: '#f59e0b' },
  ];

  return (
    <div className="min-h-screen grid lg:grid-cols-2 -m-4 md:-m-8">

      {/* ── LEFT: Branded Visual ── */}
      <div className="hidden lg:flex relative gradient-mesh overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cuc3ZnLm9yZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-60" />

        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, x, y, delay, color }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: x, top: y }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, delay, repeat: Infinity }}
          >
            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center">
              <Icon className="w-6 h-6" style={{ color }} />
            </div>
          </motion.div>
        ))}

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-16 max-w-lg">
          <Link to="/" className="mb-12">
            <span className="text-2xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              NCERT<span className="text-[#F4A261]">Learn</span>
            </span>
          </Link>

          <h1 className="text-5xl font-extrabold text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            {isLogin ? 'Welcome\nback.' : 'Start your\njourney.'}
          </h1>

          <p className="mt-6 text-lg text-blue-100/60 leading-relaxed">
            {isLogin
              ? 'Sign in to continue mastering Science with interactive learning and AI-powered doubts.'
              : 'Join thousands of students acing their NCERT exams with visual learning.'}
          </p>

          <div className="mt-10 flex gap-6">
            {[
              { label: '500+ Concepts', value: 'Covered' },
              { label: '10K+ Students', value: 'Active' },
            ].map((s, i) => (
              <div key={i} className="text-white/70">
                <p className="text-xl font-extrabold text-white">{s.label}</p>
                <p className="text-xs mt-0.5">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT: Form ── */}
      <div className="flex items-center justify-center px-6 py-16 bg-gray-50 dark:bg-gray-950">
        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <Link to="/" className="lg:hidden flex justify-center mb-10">
            <span className="text-2xl font-extrabold gradient-text" style={{ fontFamily: "var(--font-heading)" }}>
              NCERT<span className="text-[#F4A261]">Learn</span>
            </span>
          </Link>

          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'register'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {/* Header */}
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white" style={{ fontFamily: "var(--font-heading)" }}>
                {isLogin ? 'Sign in' : 'Create account'}
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {isLogin ? 'Enter your credentials to continue' : 'Fill in your details to get started'}
              </p>

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl text-sm font-medium border border-red-100 dark:border-red-900/30"
                >
                  {error}
                </motion.div>
              )}

              {/* Form */}
              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                {!isLogin && (
                  <div>
                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arjun Sharma"
                      className="w-full px-4 py-3.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#00A8E8]/40 focus:border-[#00A8E8] outline-none transition-all"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Username</label>
                  <input
                    type="text"
                    required
                    placeholder="Choose a username"
                    className="w-full px-4 py-3.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#00A8E8]/40 focus:border-[#00A8E8] outline-none transition-all"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Enter your password"
                      className="w-full px-4 py-3.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#00A8E8]/40 focus:border-[#00A8E8] outline-none transition-all pr-12"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || !username || !password}
                  className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#00A8E8] to-[#6366f1] hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {isLogin ? 'Sign In' : 'Create Account'}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Toggle */}
              <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button onClick={toggleMode} className="text-[#00A8E8] font-bold hover:underline">
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;