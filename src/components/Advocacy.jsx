
import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Sparkles, CheckCircle2, Trophy } from 'lucide-react';
import { WatercolorBlob } from './Decorations';

export default function Advocacy() {
  return (
    <section id="advokasi" className="py-24 bg-warm-tint dark:bg-bg-dark transition-colors duration-300 relative overflow-hidden">
      {/* Decorative watercolor background blobs */}
      <WatercolorBlob className="w-96 h-96 -top-24 -left-24 opacity-40" seed={1} />
      <WatercolorBlob className="w-[450px] h-[450px] -bottom-24 -right-24 opacity-35" seed={2} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <WatercolorBlob className="w-72 h-72 -top-20 left-1/2 -translate-x-1/2 opacity-70" seed={3} />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary fill-primary/20" />
            Suara untuk Perempuan
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-secondary dark:text-white tracking-tight"
          >
            Advokasi
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-zinc-650 dark:text-zinc-400 font-normal max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Melakukan advokasi untuk menyuarakan kebijakan pemerintah yang menjamin perempuan bebas dari segala bentuk diskriminasi dan ketidakadilan gender di ruang publik maupun domestik.
          </motion.p>
          
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-zinc-900/50 border border-primary/10 shadow-xl premium-card premium-card-hover">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-tr from-secondary to-accent text-white shadow-lg">
                <Handshake className="w-10 h-10" />
              </div>
            </div>

            {/* Outcomes */}
            <div className="mb-10">
              <h3 className="font-serif font-extrabold text-xl sm:text-2xl text-secondary dark:text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary animate-pulse" />
                Area Advokasi Kami
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Kebijakan & Regulasi: Mendukung lahirnya PERDES responsif gender, dan program Madani untuk tata kelola kolaboratif',
                  'Sosial & Komunitas: Organisir kelompok perempuan dengan pintu masuk ekonomi, melibatkan tokoh laki-laki',
                  'Digital & Ekonomi: Akses digital setara via IDEAS, Go Digital ASEAN, dan Keamanan Digital',
                  'Kepemimpinan Perempuan: Akademi Paradigta Indonesia dengan semangat Everyone A Changemaker'
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3 items-start p-4 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metric */}
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800/40 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                <Trophy className="w-6 h-6 fill-amber-500/10" />
              </div>
              <div>
                <p className="text-xs text-zinc-550 dark:text-zinc-400 font-bold uppercase tracking-wider">Dampak Terukur</p>
                <p className="text-sm sm:text-base font-extrabold text-secondary dark:text-white">
                  Advokasi kebijakan dan perubahan sosial
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
