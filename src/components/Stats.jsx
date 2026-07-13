import React, { useState, useEffect, useRef } from 'react';
import { Users, BookOpen, MapPin, Gift, Heart } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Leaf1, Flower, WatercolorBlob } from './Decorations';

function AnimatedCounter({ end, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime = null;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutQuad function
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={elementRef} className="font-serif font-extrabold text-2xl sm:text-4xl lg:text-5xl tabular-nums tracking-tight">
      {count.toLocaleString('id-ID')}{suffix}
    </span>
  );
}

export default function Stats() {
  const statsData = [
    {
      id: 1,
      label: 'Relawan Aktif',
      end: 5000,
      suffix: '+',
      description: 'Pemuda & profesional',
      footnote: 'Siap mengabdi',
      icon: Users,
      colorClass: 'from-primary to-accent',
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary/10',
    },
    {
      id: 2,
      label: 'Program Kerja',
      end: 200,
      suffix: '+',
      description: 'Pendidikan & UMKM',
      footnote: 'Sesuai kebutuhan',
      icon: BookOpen,
      colorClass: 'from-secondary to-secondary-light',
      bgColor: 'bg-secondary/5',
      borderColor: 'border-secondary/10',
    },
    {
      id: 3,
      label: 'Wilayah Binaan',
      end: 18,
      suffix: ' Kota',
      description: 'Kabupaten/Kota aktif',
      footnote: 'Hingga pelosok',
      icon: MapPin,
      colorClass: 'from-amber-600 to-primary',
      bgColor: 'bg-amber-500/5',
      borderColor: 'border-amber-500/10',
    },
    {
      id: 4,
      label: 'Penerima Manfaat',
      end: 12000,
      suffix: '+',
      description: 'Perempuan mandiri',
      footnote: 'Maju & tangguh',
      icon: Gift,
      colorClass: 'from-primary-dark to-primary',
      bgColor: 'bg-primary-dark/5',
      borderColor: 'border-primary-dark/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="py-16 relative overflow-hidden bg-warm-pattern border-y border-secondary/10">
      {/* Background illustrations */}
      <Leaf1 className="absolute top-6 left-12 text-primary/15 w-16 h-16 rotate-[15deg] hidden md:block" />
      <Flower className="absolute bottom-6 right-16 text-secondary/15 w-12 h-12 hidden md:block" />
      
      {/* Soft Watercolor backdrop elements */}
      <WatercolorBlob className="w-80 h-80 -top-10 left-1/4 opacity-60" seed={1} />
      <WatercolorBlob className="w-80 h-80 bottom-0 right-1/4 opacity-40" seed={2} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Visual Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3 h-3 fill-current" />
            Dampak Gotong Royong
          </span>
          <h2 className="text-xl sm:text-3xl font-serif font-extrabold text-secondary dark:text-white leading-tight">
            Setiap Angka Adalah Cerita Perjuangan
          </h2>
        </div>

        {/* 2-column mobile grid, 2-column tablet grid, 4-column desktop grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {statsData.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className={`relative overflow-hidden rounded-2xl sm:rounded-[28px] ${stat.bgColor} border ${stat.borderColor} p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center group hover:scale-[1.03] transition-all duration-300 shadow-md premium-card premium-card-hover`}
              >
                {/* Floating blob backdrop inside card */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-gradient-to-tr from-primary/5 to-accent/5 blur-xl group-hover:scale-125 transition-transform" />

                {/* Card Icon Ring */}
                <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center bg-gradient-to-tr ${stat.colorClass} text-white mb-3 sm:mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                
                {/* Counter value */}
                <div className="text-secondary dark:text-white flex items-baseline relative z-10">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <span className="mt-2 sm:mt-3 font-serif font-extrabold text-sm sm:text-lg text-secondary dark:text-zinc-250 leading-tight">
                  {stat.label}
                </span>
                
                {/* Description */}
                <span className="mt-1 text-[11px] sm:text-xs text-zinc-550 dark:text-zinc-400 font-medium">
                  {stat.description}
                </span>

                {/* Handwritten Footnote note style */}
                <span className="mt-3 sm:mt-4 pt-2 border-t border-secondary/5 w-full font-handwritten text-base sm:text-lg text-primary dark:text-accent-light rotate-[-1deg] select-none">
                  ~ {stat.footnote}
                </span>

                {/* Glow indicator at bottom */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.colorClass} opacity-70`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
