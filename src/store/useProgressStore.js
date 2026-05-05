import { create } from 'zustand';
import useAuthStore from './useAuthStore';

const API_URL = 'http://localhost:5000/api/progress';

const useProgressStore = create((set, get) => ({
  completedConcepts: [],
  quizScores: [],
  loading: false,

  fetchProgress: async () => {
    const token = useAuthStore.getState().token;
    if (!token) return;

    set({ loading: true });
    try {
      const res = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        set({
          completedConcepts: data.completedConcepts || [],
          quizScores: data.quizScores || [],
          loading: false
        });
      }
    } catch (err) {
      console.error('Failed to fetch progress', err);
      set({ loading: false });
    }
  },

  markConceptCompleted: async (conceptId) => {
    const token = useAuthStore.getState().token;
    if (!token) return;

    // Optimistic UI update
    const currentList = get().completedConcepts;
    if (!currentList.includes(conceptId)) {
      set({ completedConcepts: [...currentList, conceptId] });
      
      try {
        await fetch(`${API_URL}/concept`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ conceptId })
        });
      } catch (error) {
        console.error('Failed to post concept completion', error);
      }
    }
  },

  saveQuizScore: async (chapterId, score, maxScore, analysis) => {
    const token = useAuthStore.getState().token;
    if (!token) return;

    try {
      const res = await fetch(`${API_URL}/quiz`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ chapterId, score, maxScore, analysis })
      });
      
      if (res.ok) {
        const data = await res.json();
        set({ quizScores: data.quizScores || [] });
      }
    } catch (error) {
      console.error('Failed to post quiz score', error);
    }
  }
}));

export default useProgressStore;
