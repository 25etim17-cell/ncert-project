import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ChatbotWidget from './ChatbotWidget';
import { useChatbotStore } from '../../store/chatbotStore';
import useAuthStore from '../../store/useAuthStore';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const location = useLocation();
  const setContext = useChatbotStore(state => state.setContext);
  const loadUser = useAuthStore(state => state.loadUser);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Derive context from URL: e.g. /class10/physics/ch1_light
  const pathParts = location.pathname.split('/').filter(Boolean);
  let currentClass = null;
  let currentSubject = null;
  let currentChapter = null;

  if (pathParts[0]?.startsWith('class')) {
    currentClass = pathParts[0].replace('class', ''); // "class10" -> "10"
    if (pathParts[1]) currentSubject = pathParts[1].charAt(0).toUpperCase() + pathParts[1].slice(1);
    if (pathParts[2]) currentChapter = pathParts[2];
  }

  useEffect(() => {
    setContext({ currentClass, currentSubject, currentChapter });
  }, [location.pathname]);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-950 text-white' : 'bg-[#F8F9FA] text-gray-900'}`}>
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className="pt-16 flex">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(false)}
          currentClass={currentClass}
          currentSubject={currentSubject}
          darkMode={darkMode}
        />
        <main className="flex-1 w-full min-h-[calc(100vh-4rem)] p-4 md:p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
      {isAuthenticated && <ChatbotWidget />}
    </div>
  );
};

export default Layout;
