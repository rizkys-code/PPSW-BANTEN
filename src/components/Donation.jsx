import React, { useState } from 'react';
import { Heart, Building2, Copy, Check, ShieldCheck, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { Leaf1, LeafBranch, Flower, BlobBackdrop, WatercolorBlob } from './Decorations';

export default function Donation() {
  const [copied, setCopied] = useState(false);
  const accountNumber = '2094114481';

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donasi" className="py-20 sm:py-24 relative bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Decorative floral twig drawings in corners */}
      <LeafBranch className="absolute top-10 right-6 text-primary/20 w-20 h-24 rotate-[45deg] hidden md:block" />
      <Leaf1 className="absolute bottom-10 left-6 text-secondary/20 w-16 h-16 rotate-[-30deg] hidden md:block" />
      <Flower className="absolute top-1/2 left-10 text-accent/20 w-12 h-12 hidden lg:block" />

      {/* Decorative blurred background shapes */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Soft Watercolor backdrop elements */}
      <WatercolorBlob className="w-96 h-96 top-1/3 left-0 opacity-40" seed={1} />
      <WatercolorBlob className="w-96 h-96 bottom-10 right-0 opacity-55" seed={2} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <WatercolorBlob className="w-72 h-72 -top-20 left-1/2 -translate-x-1/2 opacity-70" seed={3} />
          
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-secondary/20">
            <Heart className="w-3.5 h-3.5 fill-primary text-primary" />
            Mari Berbagi Kebaikan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-secondary dark:text-white tracking-tight">
            Salurkan Dukungan{' '}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Terbaik Anda
            </span>
          </h2>
          <p className="mt-4 text-zinc-650 dark:text-zinc-400 font-normal max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
            Setiap donasi Anda akan dikonversi langsung menjadi modal pemberdayaan pelaku UMKM Perempuan serta pengembangan modul pelatihan untuk peningkatan kapasitas Perempuan pedesaan.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Combined warm rounded card containing bank details */}
        <div className="rounded-[40px] bg-warm-tint/60 dark:bg-zinc-900/60 p-5 sm:p-10 lg:p-14 border border-secondary/10 dark:border-white/5 shadow-xl relative overflow-hidden premium-card">
          <BlobBackdrop className="w-[110%] h-[110%] -top-12 -left-12 opacity-30" seed={1} />
          <WatercolorBlob className="w-[500px] h-[500px] top-1/4 left-1/3 opacity-30" seed={3} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative z-10">
            
            {/* Left Column: Bank Account Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="lg:col-span-7 flex flex-col mx-auto w-full text-left"
            >
              <div className="flex-grow rounded-[32px] p-6 sm:p-8 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-secondary/10 dark:border-white/5 flex flex-col justify-between shadow-lg relative overflow-hidden h-full premium-card premium-card-hover">
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/15">
                      <CreditCard className="w-3.5 h-3.5" />
                      Rekening Transfer Resmi
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20">
                      Aktif
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center text-secondary dark:text-accent font-extrabold text-xl shrink-0">
                      <Building2 className="w-6 h-6 text-secondary dark:text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif font-extrabold text-xl sm:text-2xl text-secondary dark:text-white">
                        Bank BNI
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                        Kantor Cabang Serang
                      </p>
                    </div>
                  </div>

                  {/* Account Number Box */}
                  <div className="my-6 p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-400 font-bold mb-1">
                        Nomor Rekening
                      </p>
                      <p className="text-2xl sm:text-3xl font-mono font-extrabold text-secondary dark:text-accent tracking-wider">
                        2094114481
                      </p>
                    </div>
                    <button
                      onClick={handleCopy}
                      type="button"
                      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 shrink-0 ${
                        copied
                          ? 'bg-emerald-500 text-white shadow-md scale-105'
                          : 'bg-secondary hover:bg-secondary-dark text-white dark:bg-accent dark:hover:bg-accent-dark dark:text-secondary shadow-sm hover:shadow'
                      }`}
                      aria-label="Salin nomor rekening"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Salin Nomor</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Account Name */}
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-400 font-bold">
                      Atas Nama Rekening
                    </p>
                    <p className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200">
                      Pusat Pengembangan Sumberdaya Wanita Banten
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right Column: Transparency Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              {/* Transparency guarantee card */}
              <div className="rounded-[32px] p-6 sm:p-8 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/10 dark:border-primary/20 text-left flex gap-4 h-full items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/15 dark:bg-primary/25 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 fill-primary/10" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-extrabold text-secondary dark:text-white text-base sm:text-lg">
                    Komitmen Transparansi 100%
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                    Laporan keuangan PPSW BANTEN diaudit secara berkala oleh Akuntan Publik Independen. Laporan donasi bulanan dikirimkan secara berkala ke alamat email donatur dan dipublikasikan di website.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
