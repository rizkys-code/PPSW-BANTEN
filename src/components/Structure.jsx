import React from 'react';
import { motion } from 'framer-motion';
import { WatercolorBlob } from './Decorations';
import structureImg from '../assets/image/struktur-new.jpeg';

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
          className="max-w-5xl mx-auto rounded-3xl bg-bg-light dark:bg-zinc-900 border border-secondary/10 dark:border-white/10 p-2 sm:p-3 shadow-xl overflow-hidden premium-card"
        >
          {/* Responsive Image Container with SVG Connectors */}
          <div className="w-full rounded-2xl overflow-hidden bg-white border border-zinc-200/80 dark:border-zinc-800/50 shadow-md p-4 sm:p-8 flex justify-center items-center relative">
            <div className="relative w-full max-w-full">
              <img
                src={structureImg}
                alt="Struktur Organisasi PPSW Banten"
                className="w-full h-auto object-contain rounded-2xl select-none block"
                draggable={false}
              />
              {/* Responsive SVG Overlay for Connector Lines */}
              <svg
                viewBox="0 0 672 592"
                className="absolute inset-0 w-full h-full pointer-events-none select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. Pembina (Box 0) to Direktur (Box 3) */}
                <line x1="387" y1="64" x2="387" y2="166" stroke="#27272a" strokeWidth="2.5" />

                {/* 2. Pengawas (Box 1) to Penasihat (Box 2) - coordination line */}
                <line x1="255" y1="108" x2="515" y2="108" stroke="#27272a" strokeWidth="2" strokeDasharray="5,4" />

                {/* 3. Direktur (Box 3) to Unit Usaha (Box 4) */}
                <line x1="458" y1="191" x2="515" y2="191" stroke="#27272a" strokeWidth="2" />

                {/* 4. Direktur (Box 3) to Managers (Box 5 & 6) fork */}
                {/* Vertical from bottom of Box 3 */}
                <line x1="387" y1="215" x2="387" y2="260" stroke="#27272a" strokeWidth="2" />
                {/* Horizontal segment connecting managers */}
                <line x1="234" y1="260" x2="550" y2="260" stroke="#27272a" strokeWidth="2" />
                {/* Vertical down to Manajer Program */}
                <line x1="234" y1="260" x2="234" y2="304" stroke="#27272a" strokeWidth="2" />
                {/* Vertical down to Manajer Keuangan */}
                <line x1="550" y1="260" x2="550" y2="309" stroke="#27272a" strokeWidth="2" />

                {/* 5. Manajer Program (Box 5) to Divisions (Box 7, 8, 9) fork */}
                {/* Vertical from bottom of Box 5 */}
                <line x1="234" y1="353" x2="234" y2="390" stroke="#27272a" strokeWidth="2" />
                {/* Horizontal segment connecting divisions */}
                <line x1="78" y1="390" x2="381" y2="390" stroke="#27272a" strokeWidth="2" />
                {/* Vertical down to Divisi Pengorganisasian & Advokasi */}
                <line x1="78" y1="390" x2="78" y2="424" stroke="#27272a" strokeWidth="2" />
                {/* Vertical down to Divisi 2 */}
                <line x1="231" y1="390" x2="231" y2="429" stroke="#27272a" strokeWidth="2" />
                {/* Vertical down to Divisi 3 */}
                <line x1="381" y1="390" x2="381" y2="429" stroke="#27272a" strokeWidth="2" />

                {/* 6. Manajer Keuangan (Box 6) to Koordinator Keuangan (Box 10) */}
                <line x1="550" y1="358" x2="550" y2="429" stroke="#27272a" strokeWidth="2" />

                {/* 7. Koordinator Keuangan (Box 10) to Kasir & Adm (Box 12) */}
                <line x1="550" y1="478" x2="550" y2="533" stroke="#27272a" strokeWidth="2" />

                {/* 8. Divisions (Box 7, 8, 9) to Pendamping Lapang (Box 11) */}
                {/* Divisi Pengorganisasian & Advokasi down to Pendamping Lapang */}
                <line x1="78" y1="492" x2="78" y2="530" stroke="#27272a" strokeWidth="2" />
                {/* Divisi 2 down to Pendamping Lapang */}
                <line x1="231" y1="492" x2="231" y2="530" stroke="#27272a" strokeWidth="2" />
                {/* Divisi 3 down to Pendamping Lapang */}
                <line x1="381" y1="489" x2="381" y2="530" stroke="#27272a" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Explanation Text */}
          <div className="mt-8 text-left border-t border-zinc-200/50 dark:border-zinc-800/50 pt-6 max-w-3xl mx-auto">
            <h4 className="font-serif font-extrabold text-lg sm:text-xl text-secondary dark:text-white mb-3">
              Tata Kelola Organisasi
            </h4>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
              Struktur organisasi PPSW Banten dirancang secara profesional untuk menciptakan tata kelola yang demokratis, akuntabel, dan transparan.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
