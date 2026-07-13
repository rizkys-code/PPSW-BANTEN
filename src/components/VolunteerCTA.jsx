import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Leaf1, LeafBranch, ScribbleCircle, WatercolorBlob } from './Decorations';

export default function VolunteerCTA() {
  const benefits = [
    {
      icon: HeartHandshake,
      title: 'Solidaritas & Komunitas',
      desc: 'Terhubung langsung dengan mentor dan sesama relawan penggerak sosial se-Indonesia.'
    },
    {
      icon: Award,
      title: 'Pengembangan Diri',
      desc: 'Perluas portofolio Anda di bidang sosial, kepemimpinan, dan bimbingan UMKM.'
    },
    {
      icon: ShieldCheck,
      title: 'Apresiasi & Sertifikasi',
      desc: 'Dapatkan sertifikat resmi kerelawanan sebagai bentuk penghargaan atas kontribusi Anda.'
    }
  ];

  return (
    <section id="relawan" className="py-20 sm:py-24 bg-warm-tint overflow-hidden relative">
      {/* Decorative floral elements hanging off the screen */}
      <LeafBranch className="absolute top-1/2 left-4 text-primary/15 w-24 h-28 rotate-[15deg] hidden lg:block" />
      <Leaf1 className="absolute bottom-10 right-4 text-secondary/20 w-18 h-18 rotate-[-15deg] hidden md:block" />

      {/* Soft Watercolor backdrop elements */}
      <WatercolorBlob className="w-96 h-96 top-1/4 left-0 opacity-40" seed={1} />
      <WatercolorBlob className="w-96 h-96 bottom-10 right-0 opacity-55" seed={2} />

      {/* Decorative colored lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Rounded Card Wrapper - responsive padding and border margins */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative rounded-3xl sm:rounded-[40px] overflow-hidden bg-gradient-to-tr from-secondary via-secondary-light to-secondary-dark text-white p-6 sm:p-12 md:p-16 shadow-2xl border border-white/5 mx-2 sm:mx-0"
        >
          {/* Subtle leaves drawing inside the card background */}
          <div className="absolute top-0 right-0 w-64 h-64 text-white/5 pointer-events-none translate-x-20 -translate-y-20">
            <LeafBranch className="w-full h-full text-white/5" />
          </div>
          
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          {/* Soft Watercolor blob inside the card */}
          <WatercolorBlob className="w-96 h-96 -top-10 left-10 opacity-[0.08]" seed={3} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Storytelling & Info */}
            <div className="lg:col-span-7 text-left">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 text-accent-light text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-accent-light fill-accent-light/10" />
                Jadilah Bagian dari Perubahan
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight leading-tight text-white mb-6 relative">
                Mulai Langkah Kecil,<br />
                Ciptakan Dampak Besar.
                {/* Handdrawn circle highlighting "Dampak Besar" */}
                <span className="absolute bottom-[-16px] left-[170px] w-48 h-12 text-primary hidden lg:block opacity-70">
                  <svg viewBox="0 0 100 30" fill="none" className="w-full h-full stroke-current" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 15 C 20 5, 80 5, 95 15 C 80 25, 20 25, 5 15 Z" />
                  </svg>
                </span>
              </h2>
              
              <p className="mt-4 text-sm sm:text-lg text-zinc-250 font-normal leading-relaxed max-w-xl">
                Waktu, tenaga, dan keahlian Anda adalah kunci berharga untuk membuka pintu peluang baru bagi perempuan Indonesia. Bersama PPSW BANTEN, mari merajut kemandirian sosial dan ekonomi bangsa.
              </p>

              {/* Action Button */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://forms.gle/mockup-google-form-relawan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-secondary hover:text-secondary-dark font-extrabold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto text-center"
                >
                  Daftar Jadi Relawan
                  <ArrowUpRight className="w-4 h-4 text-primary animate-pulse" />
                </a>
                <span className="text-[11px] text-zinc-350 font-medium sm:max-w-xs text-center sm:text-left mt-2 sm:mt-0">
                  *Tautan mengarah ke Formulir Pendaftaran Relawan PPSW BANTEN.
                </span>
              </div>
            </div>

            {/* Right Column: Benefits Grid */}
            <div className="lg:col-span-5 flex flex-col gap-4 text-left mt-8 lg:mt-0">
              {benefits.map((benefit, idx) => {
                const BenefitIcon = benefit.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-5 rounded-[24px] bg-white/5 backdrop-blur-md border border-white/10 flex gap-4 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 shadow-sm">
                      <BenefitIcon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-extrabold text-sm sm:text-base text-white">{benefit.title}</h3>
                      <p className="mt-1 text-xs text-zinc-200 leading-relaxed font-normal">{benefit.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
