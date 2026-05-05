import { create } from 'zustand';

export const useTestStore = create((set) => ({
    inProgress: false,
    currentTestConfig: null, // { class, subject, chapters, type, numQuestions, timerDuration }
    questions: [], // The generated questions for the test
    answers: {}, // map of questionId -> student's answer
    score: 0,
    timeLeft: 0,
    isSubmitted: false,

    startTest: (config, questions) => set({
        inProgress: true,
        currentTestConfig: config,
        questions,
        answers: {},
        score: 0,
        timeLeft: config.timerDuration,
        isSubmitted: false
    }),

    setAnswer: (qId, answer) => set((state) => ({
        answers: { ...state.answers, [qId]: answer }
    })),

    decrementTimer: () => set((state) => ({
        timeLeft: state.timeLeft > 0 ? state.timeLeft - 1 : 0
    })),

    submitTest: () => set((state) => {
        // Calculate score
        let finalScore = 0;
        state.questions.forEach((q) => {
            if (q.type === 'mcq' && state.answers[q.id] === q.correct) {
                finalScore += 1;
            }
            if (q.type === 'match') {
                // Evaluate match the following (say 1 pt per correct pair out of 5)
                const userPairs = state.answers[q.id] || {};
                let qScore = 0;
                Object.keys(q.correctPairs).forEach(key => {
                    if (userPairs[key] === q.correctPairs[key]) qScore += 0.2; // 5 pairs = 1 mark total
                });
                finalScore += qScore;
            }
        });

        return {
            isSubmitted: true,
            inProgress: false,
            score: finalScore
        };
    }),

    resetTest: () => set({
        inProgress: false,
        currentTestConfig: null,
        questions: [],
        answers: {},
        score: 0,
        timeLeft: 0,
        isSubmitted: false
    })
}));
