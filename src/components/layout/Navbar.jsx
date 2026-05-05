import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, User, LayoutDashboard } from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';

const Navbar = ({ toggleSidebar, darkMode, setDarkMode }) => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuthStore();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);
      setHidden(currentY > lastScrollY && currentY > 80);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { to: '/class9', label: 'Class 9', match: '/class9' },
    { to: '/class10', label: 'Class 10', match: '/class10' },
    { to: '/custom-test', label: 'Practice', match: '/custom-test' },
  ];

  return (
    <nav
      className={`w-full h-16 flex items-center justify-between px-6 md:px-8 z-50 fixed top-0 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'glass shadow-lg shadow-black/[0.03] dark:shadow-black/20'
          : darkMode
            ? 'bg-gray-950/90 backdrop-blur-sm'
            : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <Link to="/" className="flex items-center gap-0.5 group">
          <span className="text-xl font-extrabold gradient-text tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            NCERT
          </span>
          <span className="text-xl font-extrabold text-[#F4A261] tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Learn
          </span>
          <span className="ml-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400 hidden sm:inline">
            beta
          </span>
        </Link>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden md:flex items-center gap-1">
        {isAuthenticated && navLinks.map(link => {
          const isActive = location.pathname.startsWith(link.match);
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? 'text-[#00A8E8] bg-[#00A8E8]/8'
                  : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00A8E8]" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {isAuthenticated ? (
          <Link
            to="/dashboard"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-semibold transition-all duration-200 group hover:bg-gray-50 dark:hover:bg-gray-800/50"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00A8E8] to-[#6366f1] flex items-center justify-center text-white text-xs font-bold shadow-sm">
              {(user?.fullname || user?.username || '?')[0].toUpperCase()}
            </div>
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
              {user?.fullname || user?.username}
            </span>
          </Link>
        ) : (
          <Link
            to="/auth"
            className="px-5 py-2 bg-gradient-to-r from-[#00A8E8] to-[#6366f1] text-white text-sm font-bold rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started
          </Link>
        )}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
        >
          {darkMode ? (
            <Sun className="w-[18px] h-[18px] text-amber-400 transition-transform hover:rotate-45" />
          ) : (
            <Moon className="w-[18px] h-[18px] text-gray-500 transition-transform hover:-rotate-12" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
