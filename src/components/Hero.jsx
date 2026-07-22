import React from 'react';
import { Sparkles, Heart, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Leaf1, LeafBranch, ScribbleUnderline, BlobBackdrop, ScribbleArrow, WatercolorBlob } from './Decorations';
import baduyImg from '../assets/image/baduy2.jpeg';



export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const handleScrollTo = (id) => {
    const targetElement = document.querySelector(id);
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
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 sm:py-20 lg:py-24 overflow-hidden bg-warm-pattern px-4 sm:px-6 lg:px-8">
      {/* Decorative leaf and flower shapes floating in background - hidden on mobile/tablet to prevent overflow */}
      <Leaf1 className="absolute top-20 left-10 text-primary/25 w-16 h-16 rotate-12 hidden md:block" />
      <Leaf1 className="absolute bottom-20 left-5 text-secondary/20 w-20 h-20 -rotate-45 hidden md:block" />
      <LeafBranch className="absolute top-1/4 right-5 text-accent/25 w-24 h-28 rotate-[60deg] hidden lg:block" />
      
      {/* Soft Watercolor Blobs for warmth and depth - scaled down on mobile */}
      <WatercolorBlob className="w-[200px] h-[200px] sm:w-[450px] sm:h-[450px] -top-12 -left-12 opacity-80" seed={1} />
      <WatercolorBlob className="w-[220px] h-[220px] sm:w-[500px] sm:h-[500px] bottom-10 right-0 opacity-60" seed={2} />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text/Content Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col text-left relative"
          >
            {/* Soft watercolor blob behind header */}
            <WatercolorBlob className="w-60 h-60 sm:w-80 sm:h-80 -top-16 -left-8 opacity-70" seed={3} />

            {/* Handwritten highlight above badge */}
            <span className="font-handwritten text-3xl text-primary-dark dark:text-primary-light -rotate-6 absolute -top-12 left-10 hidden sm:block animate-pulse">
              Mari Bergandengan Tangan!
            </span>
            
            {/* Ribbon Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 self-start px-3.5 py-1.5 rounded-full bg-primary/10 text-secondary dark:bg-primary/20 dark:text-primary-light text-xs font-bold uppercase tracking-wider mb-5 border border-primary/20"
            >
              <Heart className="w-3.5 h-3.5 fill-primary text-primary" />
              Sejak 1986 Mendampingi Perempuan di Akar Rumput
            </motion.div>

            {/* Title using beautiful editorial serif */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-tight text-secondary dark:text-white"
            >
              Perempuan{' '}
              <span className="relative inline-block text-primary dark:text-primary-light">
                Berdaulat
                <ScribbleUnderline className="absolute left-0 bottom-[-8px] text-accent w-full h-3" />
              </span>
              ,<br />
              Basis Bergerak,<br />
              Berdampak Strategis.
            </motion.h1>

            {/* Description - warm and human */}
            <motion.p 
              variants={itemVariants}
              className="mt-6 sm:mt-8 text-base sm:text-lg text-zinc-650 dark:text-zinc-300 max-w-xl font-normal leading-relaxed"
            >
              Setiap perempuan membawa cerita tentang kekuatan dan mimpi. Bersama PPSW Banten, langkah kecil dari akar rumput tumbuh menjadi gerakan besar yang mampu mengubah dunia.
            </motion.p>
            
            {/* Call to Actions - responsive buttons */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={() => handleScrollTo('#relawan')}
                className="relative inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-white shadow-xl shadow-primary/25 hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98] transition-all group overflow-hidden cursor-pointer w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent transition-opacity duration-300 group-hover:opacity-95" />
                <span className="relative flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Gabung Menjadi Relawan
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => handleScrollTo('#tentang')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-secondary dark:text-white bg-white/60 hover:bg-white dark:bg-zinc-900/50 dark:hover:bg-zinc-900/85 border-2 border-secondary/15 dark:border-white/10 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto"
              >
                <Heart className="w-4 h-4 mr-2 text-primary fill-primary/10" />
                Pelajari Tentang Kami
              </button>
            </motion.div>
          </motion.div>

          {/* Image Section - Stacked below text on mobile, responsive height control */}
          <motion.div 
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0 w-full"
          >
            {/* Giant organic background shape (blob) */}
            <BlobBackdrop className="w-[120%] h-[120%] -top-12 -left-12 opacity-80" seed={1} />
            <BlobBackdrop className="w-[110%] h-[110%] -bottom-10 -right-10 opacity-40 rotate-90" seed={2} />

            {/* Main Picture Wrapper */}
            <div className="relative z-10 w-full max-w-[500px] lg:max-w-[560px]">
              
              {/* Responsive photo container: 3:2 aspect ratio matching the baduy2 image to display it without cropping */}
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900 w-full aspect-[3/2] bg-zinc-150 dark:bg-zinc-800 glow-primary transition-all duration-700 hover:scale-[1.01]">
                <img 
                  src={baduyImg} 
                  alt="Kegiatan Pemberdayaan PPSW" 
                  className="w-full h-full object-cover object-center select-none"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Handdrawn pointing arrow */}
              <ScribbleArrow className="absolute -top-16 -left-16 text-primary rotate-12 hidden xl:block" />

              {/* Floating Card Container: Vertically stacked on screens below 768px, absolute on md+ */}
              <div className="flex flex-col md:block mt-6 md:mt-0 gap-4 w-full">
                
                {/* Floating Card 1: Aset Koperasi */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                  className="relative md:absolute md:-bottom-6 md:-left-6 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl border border-secondary/10 dark:border-white/10 flex items-center gap-3.5 z-20 hover:scale-105 transition-transform w-full md:w-auto premium-card premium-card-hover"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Heart className="w-5.5 h-5.5 fill-current" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider font-extrabold text-zinc-400 dark:text-zinc-500">Aset Koperasi</p>
                    <p className="text-base font-extrabold text-secondary dark:text-white">Rp 6.6 Milyar+</p>
                  </div>
                </motion.div>

                {/* Floating Card 2: Perempuan Dampingan */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="relative md:absolute md:-top-6 md:-right-6 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl border border-secondary/10 dark:border-white/10 flex items-center gap-3 z-20 hover:scale-105 transition-transform w-full md:w-auto premium-card premium-card-hover"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                    <Award className="w-5.5 h-5.5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider font-extrabold text-zinc-400 dark:text-zinc-500">Perempuan Dampingan</p>
                    <p className="text-sm font-extrabold text-secondary dark:text-white">2.359 Jiwa</p>
                  </div>
                </motion.div>

                {/* Floating Card 3: Desa Dampingan */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  className="relative md:absolute md:bottom-16 md:-right-8 bg-[#FFFDF9]/95 dark:bg-zinc-950/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-secondary/10 dark:border-white/10 flex items-center justify-center gap-2 z-20 hover:scale-105 transition-transform w-full md:w-auto premium-card premium-card-hover"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-secondary dark:text-zinc-200">34 Desa</span>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
