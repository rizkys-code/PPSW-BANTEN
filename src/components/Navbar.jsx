import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoPpsw from '../assets/image/logoppsw.jpeg';

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Program', href: '#program' },
    { name: 'Cerita Sukses', href: '#cerita' },
    { name: 'Event', href: '#event' },
    { name: 'Donasi', href: '#donasi' },
    { name: 'Faq', href: '#faq' },
    { name: 'Hubungi', href: '#hubungi' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav py-3 shadow-md' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')} 
            className="flex items-center gap-4 group"
          >
            <img 
              src={logoPpsw} 
              alt="Logo PPSW Banten" 
              className="h-[50px] lg:h-[60px] w-auto object-contain rounded-[12px] bg-white p-[2px] shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              PPSW BANTEN
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-300 dark:hover:text-accent transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />}
            </button>

            {/* CTA Button */}
            <a
              href="#relawan"
              onClick={(e) => handleLinkClick(e, '#relawan')}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-sm text-white overflow-hidden group shadow-lg shadow-primary/25"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:opacity-90" />
              <span className="relative flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Gabung Relawan
              </span>
            </a>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-700" />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 lg:hidden glass-nav border-t border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-3 rounded-xl text-base font-bold text-zinc-700 dark:text-zinc-350 hover:bg-primary/5 hover:text-primary dark:hover:bg-zinc-800/80 dark:hover:text-accent transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#relawan"
                  onClick={(e) => handleLinkClick(e, '#relawan')}
                  className="w-full justify-center inline-flex items-center px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/20 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Gabung Relawan
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
