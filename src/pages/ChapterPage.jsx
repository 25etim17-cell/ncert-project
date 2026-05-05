import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Info, Layers, BookOpen, ClipboardList, HelpCircle } from 'lucide-react';
import { ncertData } from '../data';
import { ncertTextbookQuestions } from '../data/ncertQuestions';
import ConceptSection from '../components/chapter/ConceptSection';
import ExamSection from '../components/chapter/ExamSection';
import NCERTQuestionsSection from '../components/chapter/NCERTQuestionsSection';
import { useTestStore } from '../store/testStore';

const subjectColors = {
  Physics: { gradient: 'from-blue-600 to-cyan-500', color: '#3b82f6' },
  Chemistry: { gradient: 'from-green-600 to-emerald-500', color: '#22c55e' },
  Biology: { gradient: 'from-teal-600 to-cyan-500', color: '#14b8a6' },
};

const tabs = [
  { id: 'concept', label: 'Concepts', icon: BookOpen },
  { id: 'exam', label: 'Exam Prep', icon: ClipboardList },
  { id: 'tbquestions', label: 'TB Questions', icon: HelpCircle },
];

const ChapterPage = () => {
  const { classId, subject, chapterId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('concept');
  const startTest = useTestStore(state => state.startTest);

  const classNumber = classId ? classId.replace('class', '') : '';
  const formattedSubject = subject ? subject.charAt(0).toUpperCase() + subject.slice(1) : '';
  const chapters = ncertData[`class${classNumber}`]?.[formattedSubject] || [];
  const chapter = chapters.find(c => c.id === chapterId);
  const sc = subjectColors[formattedSubject] || subjectColors.Physics;

  useEffect(() => {
    if (chapter) {
      localStorage.setItem('recentChapter', JSON.stringify({
        title: chapter.title,
        url: `/${classId}/${subject}/${chapterId}`
      }));
    }
  }, [chapter, classId, subject, chapterId]);

  const handleChapterTest = () => {
    if (!chapter || !chapter.tests) return;
    const questions = [];
    if (chapter.tests.mcq) questions.push(...chapter.tests.mcq.map(q => ({ ...q, type: 'mcq' })));
    if (chapter.tests.match) questions.push(...chapter.tests.match.map(q => ({ ...q, type: 'match' })));
    startTest({ title: `${chapter.title} - Chapter Test`, timerDuration: 15 * 60 }, questions);
    navigate('/test');
  };

  if (!chapter) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <div className="w-20 h-20 rounded-3xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6">
          <BookOpen className="w-10 h-10 text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Chapter not found!</h2>
        <button onClick={() => navigate(-1)} className="mt-6 px-6 py-3 bg-gradient-to-r from-[#00A8E8] to-[#6366f1] text-white font-bold rounded-2xl hover:shadow-lg transition-all">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center text-sm text-gray-400 dark:text-gray-500 font-medium">
        <Link to="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 mx-2 flex-shrink-0" />
        <span className="text-gray-600 dark:text-gray-300">Class {classNumber}</span>
        <ChevronRight className="w-3.5 h-3.5 mx-2 flex-shrink-0" />
        <Link to={`/${classId}/${subject}`} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{formattedSubject}</Link>
        <ChevronRight className="w-3.5 h-3.5 mx-2 flex-shrink-0" />
        <span className="text-gray-800 dark:text-white font-bold truncate">{chapter.title}</span>
      </nav>

      {/* Header Card */}
      <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${sc.gradient} p-8 md:p-10`}>
        <div className="absolute inset-0 animate-shimmer" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-white/15 backdrop-blur text-white/90 text-xs font-bold rounded-full border border-white/10">
                {chapter.ncertPageRange}
              </span>
              <span className="px-3 py-1 bg-white/15 backdrop-blur text-white/90 text-xs font-bold rounded-full border border-white/10">
                {chapter.topics.length} Topics
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              {chapter.title}
            </h1>
          </div>
          <button
            onClick={handleChapterTest}
            className="px-6 py-3 bg-white text-gray-900 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 flex-shrink-0 text-sm"
          >
            <Layers className="w-4 h-4" />
            Chapter Test
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-3 bg-amber-50/50 dark:bg-amber-900/10 text-amber-700 dark:text-amber-400 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/20">
        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <p className="text-sm font-medium">Content aligned with NCERT. Cross-verify with your textbook for complete accuracy.</p>
      </div>

      {/* Tab Bar (Pill-style) */}
      <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl w-fit">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                isActive
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="min-h-[500px]">
        {activeTab === 'concept' ? (
          <ConceptSection chapter={chapter} />
        ) : activeTab === 'exam' ? (
          <ExamSection examData={chapter.examSection} />
        ) : activeTab === 'tbquestions' ? (
          <NCERTQuestionsSection
            questions={ncertTextbookQuestions[chapterId]?.questions || []}
            pdfPath={ncertTextbookQuestions[chapterId]?.pdfPath}
          />
        ) : (
          <NCERTQuestionsSection
            questions={ncertTextbookQuestions[chapterId]?.questions || []}
            pdfPath={ncertTextbookQuestions[chapterId]?.pdfPath}
          />
        )}
      </div>
    </div>
  );
};

export default ChapterPage;
