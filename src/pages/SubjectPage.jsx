import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, FileText, CheckCircle, Layers, ArrowRight } from 'lucide-react';
import { ncertData } from '../data';
import { useTestStore } from '../store/testStore';
import { generateTest } from '../utils/testGenerator';
import { motion } from 'framer-motion';

const SubjectPage = () => {
  const { classId, subject } = useParams();
  const navigate = useNavigate();
  const startTest = useTestStore(state => state.startTest);

  const classNumber = classId ? classId.replace('class', '') : '';
  const formattedSubject = subject ? subject.charAt(0).toUpperCase() + subject.slice(1) : '';
  const chapters = ncertData[`class${classNumber}`]?.[formattedSubject] || [];

  const handleFullTest = () => {
    const questions = generateTest({
      classes: [classNumber],
      subjects: [formattedSubject],
      questionTypes: ['mcq', 'match'],
      numQuestions: 40
    });

    startTest({
      title: `Class ${classNumber} ${formattedSubject} Full Syllabus Test`,
      timerDuration: 45 * 60
    }, questions);
    navigate('/test');
  };

  if (!chapters.length) {
    return (
      <div className="flex flex-col items-center justify-center p-20 text-center">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Subject data not found!</h2>
        <button onClick={() => navigate('/')} className="mt-4 px-6 py-2 bg-[#00A8E8] text-white rounded-full font-bold">Go Home</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-400 dark:text-gray-500 font-medium">
        <Link to="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 mx-2" />
        <span className="text-gray-600 dark:text-gray-300">Class {classNumber}</span>
        <ChevronRight className="w-3.5 h-3.5 mx-2" />
        <span className="text-gray-900 dark:text-white font-bold">{formattedSubject}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Class {classNumber} {formattedSubject}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Master the complete NCERT syllabus step by step.</p>
        </div>
        <button
          onClick={handleFullTest}
          className="px-6 py-3 bg-gradient-to-r from-[#00A8E8] to-[#6366f1] text-white font-bold rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 text-sm flex-shrink-0"
        >
          <Layers className="w-4 h-4" />
          Full Syllabus Test
        </button>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
        {chapters.map((chapter, index) => {
          const isCompleted = localStorage.getItem(`completed_${chapter.id}`);

          return (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                to={`/${classId}/${subject}/${chapter.id}`}
                className="block card-hover bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 group relative overflow-hidden"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00A8E8] to-[#6366f1] opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="pl-4">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 rounded-full">
                      Chapter {index + 1}
                    </span>
                    {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#00A8E8] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                    {chapter.title}
                  </h2>

                  <p className="text-xs text-gray-400 mb-4">{chapter.ncertPageRange}</p>

                  <div className="space-y-1.5">
                    {chapter.topics.slice(0, 3).map((t, i) => (
                      <div key={i} className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A8E8] flex-shrink-0" /> {t}
                      </div>
                    ))}
                    {chapter.topics.length > 3 && (
                      <div className="text-xs text-gray-400 italic mt-1 pl-3.5">+{chapter.topics.length - 3} more topics</div>
                    )}
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

export default SubjectPage;
