import React from 'react';
import { BookOpen, Lightbulb, AlertTriangle, ArrowRight, CheckCircle, Check } from 'lucide-react';
import AnimatedConcept from '../animations/AnimatedConcept';
import { getAnimationComponent } from '../animations/AnimationRegistry';
import useProgressStore from '../../store/useProgressStore';
import useAuthStore from '../../store/useAuthStore';

const ConceptSection = ({ chapter }) => {
  const { completedConcepts, markConceptCompleted } = useProgressStore();
  const { isAuthenticated } = useAuthStore();

  const shownAnimations = new Set();

  return (
    <div className="space-y-12 pb-12">
      {chapter.concepts.map((concept, index) => {
        const AnimComponent = getAnimationComponent(concept.animationId);
        const shouldShowAnimation = concept.animationId && !shownAnimations.has(concept.animationId);
        if (shouldShowAnimation) shownAnimations.add(concept.animationId);
        
        return (
          <section key={concept.id} className="bg-white rounded-3xl p-6 md:p-10 border border-gray-200 shadow-sm relative">

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-[#00A8E8] font-bold text-sm uppercase tracking-wider mb-2 block">
                  Concept {index + 1}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ fontFamily: "'Merriweather', serif" }}>
                  {concept.title}
                </h2>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 font-bold px-3 py-1 rounded-full">
                {concept.ncertRef}
              </span>
            </div>

            {/* Hook */}
            <div className="mb-8 text-lg md:text-xl font-medium text-gray-600 leading-relaxed italic">
              "{concept.hook}"
            </div>

            {/* NCERT Definition Box */}
            <div className="bg-blue-50 border-l-4 border-[#00A8E8] p-6 rounded-r-xl mb-8">
              <div className="flex items-center gap-2 mb-2 font-bold text-[#00A8E8]">
                <BookOpen className="w-5 h-5" />
                <span>Official NCERT Definition</span>
              </div>
              <p className="text-gray-800 font-medium leading-relaxed">
                {concept.definition}
              </p>
            </div>

            {/* Explanation */}
            <div className="max-w-none text-gray-700 mb-10 leading-loose whitespace-pre-line">
              {concept.explanation}
            </div>

            {/* Interactive Animation — only shown once per unique animationId */}
            {shouldShowAnimation && (
              <AnimatedConcept
                title={`Interactive: ${concept.title}`}
                ncertRef={concept.diagramRef}
                caption={`This shows the principle of ${concept.title} in action.`}
                maxSteps={3}
              >
                {(props) => <AnimComponent {...props} />}
              </AnimatedConcept>
            )}

            {/* Worked Examples */}
            {concept.examples && concept.examples.length > 0 && (
              <div className="mb-10 space-y-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2" style={{ fontFamily: "'Merriweather', serif" }}>
                  <Lightbulb className="w-5 h-5 text-[#F4A261]" />
                  Worked Examples
                </h3>
                {concept.examples.map((ex, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <div className="mb-4">
                      <span className="font-bold text-gray-700">Given: </span>
                      <span className="text-gray-600">{ex.given}</span>
                    </div>
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <span className="font-bold text-gray-700">To find: </span>
                      <span className="text-gray-600">{ex.find}</span>
                    </div>
                    <div className="space-y-3 font-mono text-sm pl-4 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00A8E8] rounded-full"></div>
                      {ex.steps.map((step, si) => (
                        <p key={si} className="text-gray-700">{step}</p>
                      ))}
                    </div>
                    {ex.note && (
                      <div className="mt-4 text-xs font-bold text-[#F4A261] bg-[#F4A261]/10 px-3 py-2 rounded-lg inline-block">
                        Note: {ex.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Key Points */}
              <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Key Points Summary
                </h3>
                <ul className="space-y-2">
                  {concept.summary.map((point, i) => (
                    <li key={i} className="text-sm text-green-900 flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Misconceptions */}
              {concept.misconceptions && concept.misconceptions.map((misc, mi) => (
                <div key={mi} className="bg-red-50 border border-red-100 p-6 rounded-xl">
                  <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Common Misconceptions
                  </h3>
                  <div className="text-sm space-y-3">
                    <div>
                      <span className="font-bold text-red-600 block mb-1">Students think:</span>
                      <p className="text-red-900">{misc.wrong}</p>
                    </div>
                    <div>
                      <span className="font-bold text-green-600 block mb-1">Actually:</span>
                      <p className="text-red-900">{misc.right}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Connection */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center text-gray-500 italic text-sm">
              {concept.connection}
            </div>

            {/* Progress Action */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => isAuthenticated ? markConceptCompleted(concept.id) : alert('Please Sign In to track your progress!')}
                className={`px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all ${
                  completedConcepts.includes(concept.id)
                    ? 'bg-green-100 text-green-700 cursor-default'
                    : 'bg-[#F4A261] text-white hover:bg-[#e09152]'
                }`}
                disabled={completedConcepts.includes(concept.id)}
              >
                {completedConcepts.includes(concept.id) ? (
                  <>
                    <Check className="w-5 h-5" />
                    Completed
                  </>
                ) : (
                  'Mark as Understood'
                )}
              </button>
            </div>

          </section>
        );
      })}
    </div>
  );
};

export default ConceptSection;
