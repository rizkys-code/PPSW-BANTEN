import React from 'react';
import { motion } from 'framer-motion';
import { WatercolorBlob } from './Decorations';
import structureImg from '../assets/image/struktur_organisasi.jpg';

export default function Structure() {
  return (
    <section id="struktur" className="py-20 sm:py-24 bg-white dark:bg-zinc-950/80 relative overflow-hidden">
      {/* Decorative watercolor background blobs */}
      <WatercolorBlob className="w-96 h-96 -top-24 -left-24 opacity-40" seed={1} />
      <WatercolorBlob className="w-[500px] h-[500px] bottom-[-100px] -right-32 opacity-35" seed={2} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-secondary dark:text-white tracking-tight"
          >
            Struktur Organisasi PPSW BANTEN
          </motion.h2>
          <p className="mt-4 text-zinc-650 dark:text-zinc-400 font-normal text-sm sm:text-base leading-relaxed">
            Kolaborasi lintas divisi untuk memastikan setiap program pemberdayaan perempuan berjalan secara profesional, transparan, dan berdampak.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Structure Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[900px] mx-auto rounded-3xl bg-bg-light dark:bg-zinc-900 border border-secondary/10 dark:border-white/10 p-4 sm:p-6 shadow-xl overflow-hidden premium-card"
        >
          {/* Responsive Image Container */}
          <div className="w-full rounded-2xl overflow-hidden">
            <img
              src={structureImg}
              alt="Struktur Organisasi PPSW Banten"
              className="w-full max-w-full h-auto object-contain rounded-2xl select-none"
              draggable={false}
            />
          </div>

          {/* Explanation Text */}
          <div className="mt-8 text-left border-t border-zinc-200/50 dark:border-zinc-800/50 pt-6 max-w-3xl mx-auto">
            <h4 className="font-serif font-extrabold text-lg sm:text-xl text-secondary dark:text-white mb-3">
              Tata Kelola Organisasi
            </h4>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
              Struktur organisasi PPSW Banten dirancang secara profesional untuk menciptakan tata kelola yang demokratis, akuntabel, dan transparan:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 list-disc pl-5">
              <li>
                <strong>Badan Pembina:</strong> Pengambil keputusan tertinggi yayasan didampingi oleh Dewan Penasihat (Advisory) dan Badan Pengawas.
              </li>
              <li>
                <strong>Direktur:</strong> Pimpinan eksekutif operasional harian yang mengawasi unit-unit usaha mandiri organisasi.
              </li>
              <li>
                <strong>Manajer Program:</strong> Mengoordinasikan Divisi Pengorganisasian, Divisi Advokasi, Divisi Publikasi, serta Staf Pelaksana Lapangan.
              </li>
              <li>
                <strong>Manajer Keuangan:</strong> Bertanggung jawab atas integritas keuangan yayasan didukung oleh Koordinator Keuangan serta Kasir & Adm.
              </li>
            </ul>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
