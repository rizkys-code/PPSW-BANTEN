import React, { useState } from 'react';
import { Send, Check, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoPpsw from '../assets/image/logoppsw.jpeg';

// Custom social media SVG icons for build safety
const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Program Utama', href: '#program' },
    { name: 'Cerita Sukses', href: '#cerita' },
    { name: 'Agenda Event', href: '#event' },
    { name: 'Donasi Peduli', href: '#donasi' },
    { name: 'Hubungi Kami', href: '#hubungi' }
  ];

  const programLinks = [
    { name: 'Pendidikan Literasi', href: '#program' },
    { name: 'Pelatihan UMKM', href: '#program' },
    { name: 'Kesehatan Keluarga', href: '#program' },
    { name: 'Pendampingan Hukum', href: '#program' },
    { name: 'Beasiswa Kuliah', href: '#program' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', color: 'hover:text-primary hover:bg-primary/10' },
    { icon: Twitter, href: 'https://twitter.com', color: 'hover:text-primary hover:bg-primary/10' },
    { icon: Facebook, href: 'https://facebook.com', color: 'hover:text-secondary hover:bg-secondary/10' },
    { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-secondary hover:bg-secondary/10' },
    { icon: Youtube, href: 'https://youtube.com', color: 'hover:text-primary hover:bg-primary/10' }
  ];


  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50 text-left pt-16 pb-8 relative">
      
      {/* Back to Top button */}
      <div className="absolute top-0 right-10 -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="p-3.5 rounded-2xl bg-white dark:bg-zinc-900 text-primary dark:text-accent hover:text-white dark:hover:text-white hover:bg-primary dark:hover:bg-accent border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg hover:shadow-primary/20 transition-all active:scale-95 group focus:outline-none cursor-pointer"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-200/40 dark:border-zinc-800/40">
          
          {/* Logo & Description Column */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-4 group">
              <img 
                src={logoPpsw} 
                alt="Logo PPSW Banten" 
                className="h-[48px] lg:h-[60px] w-auto object-contain rounded-[12px] bg-white p-[2px] shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                PPSW BANTEN
              </span>
            </a>
            
            <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal max-w-sm">
              Yayasan nirlaba pemberdayaan perempuan Indonesia yang berfokus pada kemandirian ekonomi, kecakapan teknologi, bantuan beasiswa, dan pendampingan hukum.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((soc, idx) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-xl border border-zinc-250 dark:border-zinc-800/80 text-zinc-500 dark:text-zinc-400 flex items-center justify-center transition-all duration-300 ${soc.color}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-sm text-zinc-950 dark:text-white uppercase tracking-widest">Navigasi</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-zinc-500 hover:text-primary dark:text-zinc-400 dark:hover:text-accent transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-sm text-zinc-950 dark:text-white uppercase tracking-widest">Program Binaan</h4>
            <ul className="space-y-2.5">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-zinc-500 hover:text-primary dark:text-zinc-400 dark:hover:text-accent transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter subscription Column */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="font-bold text-sm text-zinc-950 dark:text-white uppercase tracking-widest">Newsletter Kami</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
              Dapatkan berita perkembangan program dan kisah sukses bulanan langsung di kotak masuk email Anda.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-sm pt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Alamat email Anda"
                required
                className="flex-1 px-4 py-2.5 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 dark:text-white"
              />
              <button
                type="submit"
                disabled={subscribed}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center select-none active:scale-[0.98] transition-all cursor-pointer ${
                  subscribed
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-primary hover:bg-primary-dark text-white shadow-md'
                }`}
              >
                <AnimatePresence mode="wait">
                  {subscribed ? (
                    <motion.span
                      key="checked"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1"
                    >
                      Daftar
                      <Send className="w-3 h-3" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright & Terms info */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs font-medium text-zinc-500 dark:text-zinc-400">
          <p>© 2026 PPSW BANTEN. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary dark:hover:text-accent">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-primary dark:hover:text-accent">Kebijakan Privasi</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
