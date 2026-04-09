import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-250 ${
        isScrolled
          ? 'bg-white/90 dark:bg-primary-900/90 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/" className="text-xl md:text-2xl font-bold text-primary-900 dark:text-primary-50 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-250">
            FAN, Sixing 
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Blog
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Projects
          </NavLink>
          <NavLink to="/cv" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            CV
          </NavLink>
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-primary-100 dark:bg-primary-800 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors duration-250"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? (
              <Moon size={18} className="text-primary-700" />
            ) : (
              <Sun size={18} className="text-primary-200" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-primary-100 dark:bg-primary-800 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors duration-250"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? (
              <Moon size={18} className="text-primary-700" />
            ) : (
              <Sun size={18} className="text-primary-200" />
            )}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full bg-primary-100 dark:bg-primary-800 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors duration-250"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X size={20} className="text-primary-700 dark:text-primary-200" />
            ) : (
              <Menu size={20} className="text-primary-700 dark:text-primary-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-primary-900 shadow-md"
          >
            <nav className="container-custom py-4 flex flex-col space-y-3">
              <NavLink
                to="/"
                className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-accent-600 dark:text-accent-400 font-medium' : 'text-primary-700 dark:text-primary-200'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-accent-600 dark:text-accent-400 font-medium' : 'text-primary-700 dark:text-primary-200'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-accent-600 dark:text-accent-400 font-medium' : 'text-primary-700 dark:text-primary-200'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/cv"
                className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-accent-600 dark:text-accent-400 font-medium' : 'text-primary-700 dark:text-primary-200'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CV
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;