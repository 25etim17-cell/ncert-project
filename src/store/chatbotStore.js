import { create } from 'zustand';

export const useChatbotStore = create((set) => ({
    isOpen: false,
    messages: [],
    currentContext: {
        currentClass: null,
        currentSubject: null,
        currentChapter: null,
        currentTopic: null
    },

    toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
    openChat: () => set({ isOpen: true }),
    closeChat: () => set({ isOpen: false }),

    addMessage: (message) => set((state) => ({
        messages: [...state.messages, message]
    })),

    clearMessages: () => set({ messages: [] }),

    setContext: (context) => set((state) => ({
        currentContext: { ...state.currentContext, ...context }
    })),
}));
