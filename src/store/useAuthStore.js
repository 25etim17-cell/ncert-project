import { create } from 'zustand';

const API_URL = import.meta.env.PROD ? '/api/auth' : 'http://localhost:5000/api/auth';

const useAuthStore = create((set, get) => ({
  user: null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: false,
  loading: false,
  error: null,

  // Load user details if token exists
  loadUser: async () => {
    const { token } = get();
    if (!token) return;

    set({ loading: true, error: null });
    try {
      const res = await fetch(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (!res.ok) throw new Error('Token completely invalid or expired');
      
      const userData = await res.json();
      set({ user: userData, isAuthenticated: true, loading: false });
    } catch (err) {
      // If verification fails, clear token
      localStorage.removeItem('token');
      set({ user: null, token: null, isAuthenticated: false, loading: false, error: null });
      console.error(err);
    }
  },

  register: async (fullname, username, password) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullname, username, password })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');

      localStorage.setItem('token', data.token);
      set({ user: data.user, token: data.token, isAuthenticated: true, loading: false });
      return true;
    } catch (err) {
      set({ error: err.message, loading: false });
      return false;
    }
  },

  login: async (username, password) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');

      localStorage.setItem('token', data.token);
      set({ user: data.user, token: data.token, isAuthenticated: true, loading: false });
      return true;
    } catch (err) {
      set({ error: err.message, loading: false });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null, isAuthenticated: false });
  },

  clearError: () => set({ error: null })
}));

export default useAuthStore;
