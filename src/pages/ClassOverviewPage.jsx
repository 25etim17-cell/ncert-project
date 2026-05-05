import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Atom, FlaskConical, ArrowRight, BookOpen, Layers, HelpCircle } from 'lucide-react';
import { ncertData } from '../data';

const subjectConfig = {
  Physics: { icon: Atom, color: '#3b82f6', gradient: 'from-blue-600 to-cyan-500', lightBg: 'bg-blue-50 dark:bg-blue-900/10' },
  Chemistry: { icon: FlaskConical, color: '#22c55e', gradient: 'from-green-600 to-emerald-500', lightBg: 'bg-green-50 dark:bg-green-900/10' },
  Biology: { icon: BookOpen, color: '#14b8a6', gradient: 'from-teal-600 to-cyan-500', lightBg: 'bg-teal-50 dark:bg-teal-900/10' },
};

const ClassOverviewPage = () => {
  const { classId } = useParams();
  const classNumber = classId ? classId.replace('class', '') : '';
  const classData = ncertData[`class${classNumber}`] || {};

  return (
    <div className="max-w-6xl mx-auto space-y-12">

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-3xl overflow-hidden gradient-mesh py-16 md:py-20 px-8 md:px-12"
      >
        <div className="absolute inset-0 animate-shimmer" />
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-white/80 text-xs font-semibold mb-6 border border-white/10"
          >
            <Layers className="w-3.5 h-3.5" />
            NCERT Syllabus
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Class {classNumber}
          </h1>
          <p className="mt-4 text-lg text-blue-100/60">
            Physics, Chemistry & Biology — master every concept
          </p>
        </div>
      </motion.div>

      {/* Subject Cards */}
      <div className="grid md:grid-cols-3 gap-8 stagger-children">
        {Object.keys(subjectConfig).map((subName, index) => {
          const config = subjectConfig[subName];
          const chapters = classData[subName] || [];
          const totalConcepts = chapters.reduce((s, ch) => s + (ch.concepts?.length || 0), 0);
          const totalMCQs = chapters.reduce((s, ch) => s + (ch.tests?.mcq?.length || 0), 0);
          const Icon = config.icon;

          return (
            <motion.div
              key={subName}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
            >
              <Link to={`/${classId}/${subName.toLowerCase()}`} className="block group">
                <div className="animate-slide-up card-hover relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-8 overflow-hidden">
                  
                  {/* Gradient accent top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient}`} />
                  
                  {/* Decorative blob */}
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-[0.04]" style={{ background: config.color }} />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${config.lightBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" style={{ color: config.color }} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                      {subName}
                    </h3>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-xs font-bold px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-500 rounded-full">
                        {chapters.length} Chapters
                      </span>
                      <span className="text-xs font-bold px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-500 rounded-full">
                        {totalConcepts} Concepts
                      </span>
                      <span className="text-xs font-bold px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-500 rounded-full">
                        {totalMCQs} MCQs
                      </span>
                    </div>

                    {/* Chapter List */}
                    <div className="space-y-2.5 mb-8">
                      {chapters.slice(0, 3).map((ch, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: config.color }} />
                          <span className="truncate">{ch.title}</span>
                        </div>
                      ))}
                      {chapters.length > 3 && (
                        <p className="text-xs text-gray-400 italic pl-4">+{chapters.length - 3} more</p>
                      )}
                    </div>

                    <div className="flex items-center text-sm font-bold group-hover:gap-3 gap-2 transition-all" style={{ color: config.color }}>
                      Start Learning <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassOverviewPage;
