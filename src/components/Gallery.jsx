import React, { useState } from 'react';
import { Image as ImageIcon, X, ZoomIn, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf1, LeafBranch, Flower, WatercolorBlob } from './Decorations';

export default function Gallery() {
  const [activeItem, setActiveItem] = useState(null);

  const galleryItems = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80',
      title: 'Solidaritas Keseharian Relawan',
      category: 'Keseharian',
      desc: 'Gotong royong para relawan PPSW BANTEN mempersiapkan posko pelayanan sosial masyarakat terpadu.',
      date: '10 Juni 2026'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
      title: 'Mentoring Kolaboratif Usaha',
      category: 'Pelatihan UMKM',
      desc: 'Pendampingan usaha mikro mulai dari branding kemasan, perizinan PIRT/NIB, hingga manajemen keuangan rumah tangga.',
      date: '15 Mei 2026'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
      title: 'Bazaar UMKM Perempuan Kreatif',
      category: 'Pelatihan UMKM',
      desc: 'Festival produk lokal menampilkan hasil kerajinan tangan rajut, fesyen ecoprint, dan aneka kuliner olahan binaan.',
      date: '02 Mei 2026'
    }
  ];

  return (
    <section id="galeri" className="py-20 sm:py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Background blurs and illustrations */}
      <LeafBranch className="absolute top-1/4 right-6 text-primary/10 w-20 h-24 rotate-[60deg] hidden md:block" />
      <Leaf1 className="absolute bottom-10 left-6 text-secondary/10 w-16 h-16 rotate-[-45deg] hidden md:block" />
      <Flower className="absolute top-10 left-10 text-accent/20 w-12 h-12 hidden md:block" />

      {/* Soft Watercolor background blobs */}
      <WatercolorBlob className="w-96 h-96 top-1/4 left-0 opacity-40" seed={1} />
      <WatercolorBlob className="w-96 h-96 bottom-10 right-0 opacity-55" seed={2} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <WatercolorBlob className="w-72 h-72 -top-20 left-1/2 -translate-x-1/2 opacity-70" seed={3} />
          
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
            <ImageIcon className="w-3.5 h-3.5" />
            Galeri Dokumentasi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-secondary dark:text-white tracking-tight">
            Aktivitas & Momen{' '}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Pemberdayaan
            </span>
          </h2>
          <p className="mt-4 text-zinc-650 dark:text-zinc-400 font-normal max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
            Dokumentasi nyata kegiatan PPSW BANTEN di lapangan bersama para Pendamping, Kader, relawan, Mentor, dan penerima manfaat.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Responsive Grid Masonry-style spacing (1 col mobile, 2 cols tablet, 3-4 cols desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group rounded-3xl bg-warm-tint/50 dark:bg-zinc-900 border border-secondary/10 dark:border-white/5 p-4 shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex flex-col cursor-pointer text-left h-full premium-card premium-card-hover"
            >
              {/* Polaroid-style photo container - locks aspect ratio to 4:3, prevents stretched images */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800 shadow-inner">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white scale-90 group-hover:scale-100 transition-all">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Category Badge overlay */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold text-white uppercase tracking-wider bg-secondary/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Scrapbook Description Area */}
              <div className="pt-4 pb-2 px-1 flex flex-col justify-between flex-grow">
                <div className="space-y-1.5">
                  <h3 className="font-serif font-extrabold text-base sm:text-lg text-secondary dark:text-white leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-655 dark:text-zinc-400 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Scrapbook Footer */}
                <div className="mt-4 pt-3 border-t border-secondary/5 dark:border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-500 font-bold">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {item.date}
                  </span>
                  <span className="font-handwritten text-lg text-primary rotate-[-2deg] select-none">
                    #CeritaBanten
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal View */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full bg-[#FFFDF9] dark:bg-zinc-900 rounded-[32px] overflow-hidden shadow-2xl border border-secondary/10 dark:border-white/10 z-10 text-left p-4 sm:p-5 premium-card"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 text-zinc-800 dark:text-zinc-250 transition-colors z-20 focus:outline-none cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="aspect-[4/3] w-full bg-zinc-200 dark:bg-zinc-850 overflow-hidden rounded-2xl">
                  <img
                    src={activeItem.src}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white uppercase tracking-wider bg-secondary px-3 py-1 rounded-full">
                      {activeItem.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {activeItem.date}
                    </span>
                  </div>
                  <h3 className="text-secondary dark:text-white font-serif font-extrabold text-xl sm:text-2xl leading-tight">
                    {activeItem.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-350 text-sm sm:text-base leading-relaxed font-normal">
                    {activeItem.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
