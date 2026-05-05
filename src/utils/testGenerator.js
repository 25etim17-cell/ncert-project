import { ncertData } from '../data';

// Helper to shuffle an array
export function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export const generateTest = (options) => {
    const { classes, subjects, numQuestions, questionTypes } = options;

    let allQuestions = [];

    classes.forEach(cls => {
        const classData = ncertData[`class${cls}`];
        if (!classData) return;

        subjects.forEach(sub => {
            const chapters = classData[sub] || [];
            chapters.forEach(ch => {
                if (!ch.tests) return;

                if (questionTypes.includes('mcq') && ch.tests.mcq) {
                    allQuestions.push(...ch.tests.mcq.map(q => ({
                        ...q,
                        type: 'mcq',
                        chapterTitle: ch.title,
                        chapterClass: cls,
                        chapterSubject: sub
                    })));
                }

                if (questionTypes.includes('match') && ch.tests.match) {
                    allQuestions.push(...ch.tests.match.map(q => ({
                        ...q,
                        type: 'match',
                        chapterTitle: ch.title,
                        chapterClass: cls,
                        chapterSubject: sub
                    })));
                }
            });
        });
    });

    // Shuffle and slice to requested number
    allQuestions = shuffleArray(allQuestions);
    return allQuestions.slice(0, numQuestions);
};
