import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function AppContent() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Apply dark mode classes to document and body
    const root = window.document.documentElement;
    const body = window.document.body;
    
    if (isDark) {
      root.classList.add('dark');
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-bg-light dark:bg-bg-dark transition-colors duration-300 antialiased selection:bg-primary/20 selection:text-primary">
      {/* Sticky Top Navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Main Content Pages */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      
      {/* Footer Details */}
      <Footer />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary to-secondary text-white shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all focus:outline-none cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ChevronUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
