import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, CheckCircle2, FileText, ExternalLink } from 'lucide-react';

const NCERTQuestionsSection = ({ questions, pdfPath, title, subtitle }) => {
  const [expandedQ, setExpandedQ] = useState(null);
  const [showAll, setShowAll] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 border border-gray-100 dark:border-gray-800 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-4">
          <BookOpen className="w-8 h-8 text-gray-300 dark:text-gray-600" />
        </div>
        <p className="text-gray-400 font-medium">Questions for this chapter are being added. Check back soon!</p>
      </div>
    );
  }

  const displayed = showAll ? questions : questions.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header with PDF link */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "var(--font-heading)" }}>
            {title || 'NCERT Textbook Questions'}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {subtitle || `${questions.length} questions from the NCERT textbook with detailed answers`}
          </p>
        </div>
        {pdfPath && (
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00A8E8] to-[#6366f1] text-white text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all flex-shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            View Full PDF
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {displayed.map((q, index) => {
          const isOpen = expandedQ === q.id;
          return (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => setExpandedQ(isOpen ? null : q.id)}
                className="w-full flex items-start gap-4 p-5 text-left hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors"
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-extrabold transition-colors ${
                  isOpen
                    ? 'bg-gradient-to-br from-[#00A8E8] to-[#6366f1] text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                }`}>
                  Q{q.id}
                </div>
                <p className="flex-1 text-sm font-semibold text-gray-800 dark:text-gray-200 leading-relaxed pr-4">
                  {q.question}
                </p>
                <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 mt-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0">
                      <div className="ml-12 p-4 bg-green-50/50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-800/20">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                            {q.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Show More/Less */}
      {questions.length > 5 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {showAll ? 'Show Less' : `Show All ${questions.length} Questions`}
          </button>
        </div>
      )}
    </div>
  );
};

export default NCERTQuestionsSection;
