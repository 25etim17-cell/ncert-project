import { ncertData } from './index';

/**
 * Creates a mapping of concept IDs to their metadata (Class, Subject, Chapter, Title)
 */
export const getConceptMap = () => {
    const map = {};
    
    Object.keys(ncertData).forEach(classKey => {
        const classNum = classKey.replace('class', '');
        const subjects = ncertData[classKey];
        
        Object.keys(subjects).forEach(subject => {
            const chapters = subjects[subject];
            
            chapters.forEach(chapter => {
                chapter.concepts.forEach(concept => {
                    map[concept.id] = {
                        conceptId: concept.id,
                        title: concept.title,
                        subject: subject,
                        class: classNum,
                        chapterTitle: chapter.title,
                        chapterId: chapter.id
                    };
                });
            });
        });
    });
    
    return map;
};

/**
 * Groups NCERT data structure for traversal in dashboard
 */
export const getFullContentStructure = () => {
    const structure = {
        "9": {
            Physics: {},
            Chemistry: {},
            Biology: {}
        },
        "10": {
            Physics: {},
            Chemistry: {},
            Biology: {}
        }
    };

    Object.keys(ncertData).forEach(classKey => {
        const classNum = classKey.replace('class', '');
        const subjects = ncertData[classKey];
        
        Object.keys(subjects).forEach(subject => {
            const chapters = subjects[subject];
            
            chapters.forEach(chapter => {
                structure[classNum][subject][chapter.id] = {
                    title: chapter.title,
                    conceptIds: chapter.concepts.map(c => c.id),
                    conceptTitles: chapter.concepts.reduce((acc, c) => {
                        acc[c.id] = c.title;
                        return acc;
                    }, {})
                };
            });
        });
    });
    
    return structure;
};
