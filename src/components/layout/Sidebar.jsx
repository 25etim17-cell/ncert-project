import React from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, X } from 'lucide-react';
import { ncertData } from '../../data';

const Sidebar = ({ isOpen, toggleSidebar, currentClass, currentSubject, darkMode }) => {
  // Get chapters based on context
  const chapters = (currentClass && currentSubject && ncertData[`class${currentClass}`])
    ? ncertData[`class${currentClass}`][currentSubject] || []
    : [];

  const sidebarContent = (
    <div className={`h-full flex flex-col border-r ${darkMode ? 'bg-gray-900 text-gray-300 border-gray-800' : 'bg-white text-gray-600 border-gray-200'}`}>
      <div className="p-4 flex justify-between items-center lg:hidden border-b border-gray-200">
        <h2 className="font-bold text-lg" style={{ fontFamily: "'Merriweather', serif" }}>Menu</h2>
        <button onClick={toggleSidebar}><X className="w-5 h-5" /></button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        {chapters.length > 0 ? (
          <div>
            <h3 className="px-6 mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Chapters</h3>
            <ul className="space-y-1">
              {chapters.map((chapter) => (
                <li key={chapter.id}>
                  <NavLink
                    to={`/class${currentClass}/${currentSubject.toLowerCase()}/${chapter.id}`}
                    onClick={() => { if (window.innerWidth < 1024) toggleSidebar(); }}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-6 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#00A8E8]/10 text-[#00A8E8] border-r-4 border-[#00A8E8]'
                          : 'hover:bg-gray-100 hover:text-gray-900'
                      }`
                    }
                  >
                    <BookOpen className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{chapter.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="px-6 text-sm text-gray-400">
            Select a class and subject to view chapters.
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Desktop sidebar - always visible */}
      {currentClass && currentSubject && (
        <aside className="hidden lg:block sticky top-16 h-[calc(100vh-4rem)] w-64 flex-shrink-0">
          {sidebarContent}
        </aside>
      )}

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 z-50 lg:hidden"
          >
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
