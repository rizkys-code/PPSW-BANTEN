import React, { useState } from 'react';
import { Quote, Heart, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf1, LeafBranch, Flower, BlobBackdrop, WatercolorBlob } from './Decorations';
import ceritaSukses1 from '../assets/image/ceritaSukses1.jpeg';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const stories = [
    {
      id: 1,
      name: 'Jakiyah Sholihah (Ade)',
      role: 'Ketua KWPS Tulip Harum',
      location: 'Saketi, Pandeglang',
      program: 'Akademi Paradigta',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
      featuredImage: ceritaSukses1,
      story: (
        <div className="not-italic text-left space-y-3 font-sans">
          <h5 className="font-serif font-extrabold text-secondary dark:text-white text-base mb-1">
            Program Akademi Paradigta Indonesia Tahun 2025
          </h5>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-serif italic mb-2">
            "Setelah bergabung dengan Akademi Paradigta, saya mengalami pengembangan kepemimpinan yang mendorong kreativitas perempuan dan pemberdayaan komunitas di sekitar saya."
          </p>
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
              Pencapaian Utama
            </span>
            <ul className="text-xs text-zinc-650 dark:text-zinc-400 space-y-1 pl-4 list-disc font-serif not-italic">
              <li>Memimpin <strong className="text-secondary dark:text-zinc-200">KWPS Tulip Harum</strong> yang berbadan hukum sejak 2007.</li>
              <li>Menginisiasi produk inovasi ekonomi kreatif <strong className="text-secondary dark:text-zinc-200">"TEH SENJAKU"</strong>.</li>
              <li>Mengembangkan kebun keluarga terintegrasi <strong className="text-secondary dark:text-zinc-200">"PARADIGTA'S GARDEN"</strong>.</li>
            </ul>
          </div>
          <div className="pt-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
              Dampak Positif
            </span>
            <p className="text-xs text-zinc-650 dark:text-zinc-400 leading-relaxed font-serif">
              Meningkatkan ekonomi kreatif keluarga lewat kreativitas perempuan dan memperkuat keterlibatan aktif komunitas.
            </p>
          </div>
        </div>
      ),
      footnote: 'TEH SENJAKU'
    },
    {
      id: 2,
      name: 'Ibu Wati',
      role: 'Focal Point Kesiapsiagaan Bencana',
      location: 'Kec. Sumur, Pandeglang',
      program: 'PRB Bencana',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
      featuredImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&h=550&q=80',
      story: (
        <div className="not-italic text-left space-y-3 font-sans">
          <h5 className="font-serif font-extrabold text-secondary dark:text-white text-base mb-1">
            Program Pengurangan Risiko Bencana (PRB)
          </h5>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-serif italic mb-2">
            "Sebagai focal point perempuan di desa rawan bencana, saya aktif memimpin kesiapsiagaan komunitas, mengadvokasi kebutuhan vital, serta melindungi warga yang rentan."
          </p>
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
              Pencapaian Utama
            </span>
            <ul className="text-xs text-zinc-650 dark:text-zinc-400 space-y-1 pl-4 list-disc font-serif not-italic">
              <li>Advokasi ke DPRD Pandeglang untuk perbaikan infrastruktur jalan (terealisasi 700 meter).</li>
              <li>Melaksanakan pelatihan & simulasi kebencanaan bagi keluarga dan tetangga.</li>
              <li>Membentuk struktur siaga bencana lokal dan pembagian logistik darurat.</li>
            </ul>
          </div>
          <div className="pt-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
              Dampak Positif
            </span>
            <p className="text-xs text-zinc-650 dark:text-zinc-400 leading-relaxed font-serif">
              Meningkatkan ketangguhan komunitas, melindungi kelompok paling rentan (ibu hamil, lansia, anak-anak), dan menjadi figur focal point rujukan.
            </p>
          </div>
        </div>
      ),
      footnote: 'Focal Point Tangguh'
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  // Shared Card component to reuse between desktop grid and mobile slider
  const StoryCard = ({ story, index }) => (
    <div
      className="rounded-[32px] bg-white dark:bg-zinc-900 border border-secondary/10 dark:border-white/5 flex flex-col justify-between shadow-lg relative overflow-hidden h-full w-full premium-card premium-card-hover"
    >
      {/* Photo backdrop blob */}
      <BlobBackdrop className="w-[110%] h-[110%] -top-6 -right-6 opacity-30 rotate-12" seed={index + 1} />

      {/* Large Beneficiary Featured Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-150 dark:bg-zinc-800 border-b border-secondary/5 dark:border-white/5">
        <img 
          src={story.featuredImage} 
          alt={`Kegiatan ${story.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[750ms]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        
        {/* Program Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-white uppercase tracking-wider bg-secondary/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-white/10">
            <Heart className="w-3 h-3 fill-primary text-primary" />
            {story.program}
          </span>
        </div>
      </div>

      {/* Storytelling Text Area */}
      <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between relative z-10">
        <div>
          {/* Quote Emblem and Cursive annotation */}
          <div className="flex justify-between items-center mb-5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center shrink-0 shadow-sm">
              <Quote className="w-5 h-5 fill-current" />
            </div>
            <span className="font-handwritten text-lg sm:text-xl text-primary-dark dark:text-primary-light rotate-[-3deg] select-none">
              {story.footnote}
            </span>
          </div>

          {/* Story text in beautiful serif */}
          <div className="text-secondary dark:text-zinc-200 text-sm sm:text-base leading-relaxed font-serif font-normal pr-2">
            {typeof story.story === 'string' ? (
              <span className="italic">"{story.story}"</span>
            ) : (
              story.story
            )}
          </div>
        </div>

        {/* Profile info with warm layout */}
        <div className="mt-6 pt-5 border-t border-secondary/5 dark:border-white/5 flex items-center gap-4">
          <img 
            src={story.avatar} 
            alt={story.name} 
            className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-primary/20 shrink-0"
            loading="lazy"
          />
          <div>
            <h4 className="font-serif font-extrabold text-secondary dark:text-white text-base leading-tight">
              {story.name}
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-bold mt-1">
              {story.role}
            </p>
            <p className="text-[10px] uppercase font-bold tracking-wider text-primary mt-0.5">
              {story.location}, Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="cerita" className="py-20 sm:py-24 bg-warm-tint relative overflow-hidden">
      {/* Decorative leafy elements */}
      <Leaf1 className="absolute top-10 right-10 text-primary/25 w-16 h-16 rotate-45 hidden md:block" />
      <LeafBranch className="absolute bottom-10 left-6 text-secondary/20 w-20 h-24 rotate-[-30deg] hidden md:block" />
      <Flower className="absolute top-1/2 left-10 text-accent/30 w-12 h-12 rotate-12 hidden lg:block" />

      {/* Soft Watercolor backdrop elements */}
      <WatercolorBlob className="w-80 h-80 -top-12 left-1/4 opacity-60" seed={3} />
      <WatercolorBlob className="w-80 h-80 bottom-10 right-1/4 opacity-50" seed={1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <WatercolorBlob className="w-72 h-72 -top-20 left-1/2 -translate-x-1/2 opacity-70" seed={2} />
          
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            Kisah Perubahan Nyata
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-secondary dark:text-white tracking-tight">
            Cerita Sukses{' '}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Penerima Manfaat
            </span>
          </h2>
          <p className="mt-4 text-zinc-650 dark:text-zinc-400 font-normal max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
            Dengar langsung dari mereka yang telah bangkit, meraih kemandirian ekonomi, dan kini menginspirasi lingkungan sekitar bersama PPSW BANTEN.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Mobile/Tablet slider view (<1024px) */}
        <div className="lg:hidden relative max-w-lg mx-auto">
          <div className="overflow-hidden p-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <StoryCard story={stories[activeIndex]} index={activeIndex} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel controls */}
          <div className="flex justify-between items-center mt-8 px-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white dark:bg-zinc-800 border border-secondary/10 dark:border-white/5 text-secondary dark:text-white shadow-md hover:bg-zinc-50 transition-colors"
              aria-label="Cerita sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Indicators */}
            <div className="flex gap-2.5">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'bg-primary w-6' : 'bg-secondary/20 dark:bg-white/20'
                  }`}
                  aria-label={`Lihat cerita ke-${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white dark:bg-zinc-800 border border-secondary/10 dark:border-white/5 text-secondary dark:text-white shadow-md hover:bg-zinc-50 transition-colors"
              aria-label="Cerita selanjutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop grid view (>=1024px) - stretches cards to equal heights */}
        <div className="hidden lg:grid grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch text-left">
          {stories.map((story, index) => (
            <div key={story.id} className="h-full">
              <StoryCard story={story} index={index} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
