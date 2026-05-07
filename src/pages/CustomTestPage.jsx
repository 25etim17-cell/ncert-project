import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTestStore } from '../store/testStore';
import { generateTest } from '../utils/testGenerator';
import { Play, Settings2 } from 'lucide-react';

const CustomTestPage = () => {
  const [classes, setClasses] = useState(['9', '10']);
  const [subjects, setSubjects] = useState(['Physics', 'Chemistry', 'Biology']);
  const [questionTypes, setQuestionTypes] = useState(['mcq', 'match']);
  const [numQuestions, setNumQuestions] = useState(10);

  const navigate = useNavigate();
  const startTest = useTestStore(state => state.startTest);

  const toggleArrayItem = (arr, setArr, item) => {
    if (arr.includes(item)) {
      if (arr.length > 1) setArr(arr.filter(i => i !== item));
    } else {
      setArr([...arr, item]);
    }
  };

  const handleStart = () => {
    const questions = generateTest({ classes, subjects, questionTypes, numQuestions });

    const timerDuration = questions.length * 90; // 1.5 mins per question

    startTest({
      title: "Custom Generated Test",
      timerDuration
    }, questions);

    navigate('/test');
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3" style={{ fontFamily: "'Merriweather', serif" }}>
          <Settings2 className="w-8 h-8 text-[#00A8E8]" />
          Custom Test Builder
        </h1>
        <p className="text-gray-600">
          Select your preferences below and generate a unique NCERT test instantly.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200">

        {/* Classes */}
        <div className="mb-8">
          <h3 className="font-bold text-gray-700 mb-4 uppercase tracking-wider text-sm">Target Class</h3>
          <div className="flex gap-4">
            {['9', '10'].map(cls => (
              <button
                key={cls}
                onClick={() => toggleArrayItem(classes, setClasses, cls)}
                className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${classes.includes(cls) ? 'border-[#1E3A5F] bg-[#1E3A5F] text-white shadow-md' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
              >
                Class {cls}
              </button>
            ))}
          </div>
        </div>

        {/* Subjects */}
        <div className="mb-8">
          <h3 className="font-bold text-gray-700 mb-4 uppercase tracking-wider text-sm">Subjects</h3>
          <div className="flex flex-wrap gap-4">
            {['Physics', 'Chemistry', 'Biology'].map(sub => (
              <button
                key={sub}
                onClick={() => toggleArrayItem(subjects, setSubjects, sub)}
                className={`px-6 py-3 rounded-xl border-2 font-bold transition-all ${subjects.includes(sub) ? 'border-[#00A8E8] bg-[#00A8E8] text-white shadow-md' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* Question Types */}
        <div className="mb-8">
          <h3 className="font-bold text-gray-700 mb-4 uppercase tracking-wider text-sm">Question Types</h3>
          <div className="flex gap-4">
            {[{ id: 'mcq', label: 'MCQs' }, { id: 'match', label: 'Match the Following' }].map(type => (
              <button
                key={type.id}
                onClick={() => toggleArrayItem(questionTypes, setQuestionTypes, type.id)}
                className={`px-6 py-3 rounded-xl border-2 font-bold transition-all ${questionTypes.includes(type.id) ? 'border-[#F4A261] bg-[#F4A261] text-white shadow-md' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Amount */}
        <div className="mb-12">
          <h3 className="font-bold text-gray-700 mb-4 uppercase tracking-wider text-sm">Number of Questions</h3>
          <div className="flex gap-4">
            {[5, 10, 20, 30].map(num => (
              <button
                key={num}
                onClick={() => setNumQuestions(num)}
                className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${numQuestions === num ? 'border-gray-800 bg-gray-800 text-white shadow-md' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleStart}
          className="w-full py-4 bg-[#1E3A5F] text-white font-bold rounded-2xl shadow-xl hover:opacity-90 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-lg"
        >
          <Play className="w-6 h-6" />
          Generate & Start Test
        </button>
      </div>
    </div>
  );
};

export default CustomTestPage;
