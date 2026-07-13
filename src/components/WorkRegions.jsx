import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { WatercolorBlob, Leaf1, LeafBranch } from './Decorations';
import mapImg from '../assets/image/wilayah_kerja.jpg';

export default function WorkRegions() {
  const regions = [
    {
      name: 'Pandeglang',
      secretariat: 'Kp. Leuweung Kolot, Desa Tegalwangi, Kec. Menes',
      activities: [
        'Pusat Sekretariat & Koordinasi Wilayah Banten',
        'Program Akademi Paradigta Indonesia (API) Pandeglang',
        'Program Keamanan Digital & Literasi Finansial UKM',
        'Pemberdayaan Laki-Laki Pendukung Kepemimpinan Perempuan'
      ]
    },
    {
      name: 'Lebak',
      secretariat: 'Pendampingan Kelompok Basis di Kabupaten Lebak',
      activities: [
        'Program Kepemimpinan Perempuan (Everyone A Changemaker)',
        'Program MADANI - Civil Society Support (USAID-FHI360)',
        'Program Perluasan Kesempatan Ekonomi Terpadu',
        'Pendampingan Koperasi Perempuan di Akar Rumput'
      ]
    },
    {
      name: 'Serang',
      secretariat: 'Pendampingan Kelompok Basis di Kabupaten Serang',
      activities: [
        'Program Keamanan Digital & Literasi Digital Kritis',
        'Women-Led Community Based Protection (Yappika ActionAid)',
        'Rintisan Pos Pengaduan & Paralegal Bantuan Hukum',
        'Advokasi Kebijakan Desa Siaga Bencana'
      ]
    },
    {
      name: 'Tangerang',
      secretariat: 'Pendampingan Kelompok Basis di Kabupaten Tangerang',
      activities: [
        'Program Jalin Nusantara (Tiktok & R-BUMN Tigaraksa)',
        'Desa Wisata Digital & Penguasaan TIK di Desa Cikasungka',
        'Penguatan Potensi Usaha Koperasi Perempuan Lintas Wilayah',
        'Edukasi E-commerce bagi Kelompok UMKM Basis'
      ]
    }
  ];

  return (
    <section id="wilayah-kerja" className="py-14 sm:py-16 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      {/* Background decorations */}
      <LeafBranch className="absolute top-12 left-6 text-primary/10 w-20 h-24 rotate-[-30deg] hidden md:block" />
      <Leaf1 className="absolute bottom-12 right-6 text-secondary/15 w-16 h-16 rotate-45 hidden md:block" />
      
      {/* Watercolor blobs */}
      <WatercolorBlob className="w-96 h-96 -top-24 -left-24 opacity-40" seed={3} />
      <WatercolorBlob className="w-96 h-96 bottom-[-50px] -right-24 opacity-50" seed={1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 relative">
          <WatercolorBlob className="w-64 h-64 -top-20 left-1/2 -translate-x-1/2 opacity-70" seed={2} />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-secondary/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary fill-secondary/20" />
            Cakupan Pendampingan
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-secondary dark:text-white tracking-tight"
          >
            Wilayah Kerja{' '}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              PPSW BANTEN
            </span>
          </motion.h2>
          <p className="mt-4 text-zinc-650 dark:text-zinc-400 font-normal max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
            Mendampingi kelompok perempuan di 4 kabupaten Provinsi Banten guna membangun solidaritas, kepemimpinan, dan kemandirian ekonomi.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Map & Districts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="p-4 rounded-3xl bg-white dark:bg-zinc-900 border border-secondary/10 dark:border-white/5 shadow-xl relative overflow-hidden premium-card h-full flex flex-col justify-center">
              <span className="font-serif font-extrabold text-lg text-secondary dark:text-white mb-4 block text-left flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Peta Operasional Wilayah Dampingan
              </span>
              
              <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center border border-zinc-100 dark:border-zinc-800">
                <img
                  src={mapImg}
                  alt="Peta Wilayah Kerja PPSW Banten"
                  className="w-full max-w-full h-auto object-contain rounded-2xl select-none"
                  draggable={false}
                />
              </div>
              <p className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 text-left mt-3.5 leading-relaxed">
                *Peta pendampingan wilayah Banten mencakup kawasan pesisir, sentra UMKM pariwisata, hingga pedesaan di 4 Kabupaten utama.
              </p>
            </div>
          </motion.div>

          {/* Districts Detail Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-4 justify-between"
          >
            {regions.map((reg, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-secondary/10 dark:border-white/5 shadow-md flex flex-col gap-2.5 text-left premium-card premium-card-hover"
              >
                <div className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-850 pb-2">
                  <h3 className="font-serif font-extrabold text-lg text-secondary dark:text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    Kabupaten {reg.name}
                  </h3>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-extrabold uppercase tracking-widest">
                    Banten
                  </span>
                </div>
                
                <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-450 italic leading-relaxed">
                  {reg.secretariat}
                </p>

                <div className="space-y-1.5 mt-1.5">
                  {reg.activities.map((act, aIdx) => (
                    <div key={aIdx} className="flex gap-2 items-start text-xs text-zinc-650 dark:text-zinc-355 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
