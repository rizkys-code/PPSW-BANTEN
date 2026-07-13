import React, { useState } from 'react';
import { Heart, QrCode, Copy, Check, Info, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Leaf1, LeafBranch, Flower, BlobBackdrop, WatercolorBlob } from './Decorations';

export default function Donation() {
  const [copiedId, setCopiedId] = useState(null);

  const bankAccounts = [
    {
      id: 'mandiri',
      bankName: 'Bank Mandiri',
      accountNumber: '1230010998877',
      holderName: 'PPSW BANTEN',
      branch: 'KC Banten Serang',
      color: 'from-primary to-accent'
    },
    {
      id: 'bca',
      bankName: 'Bank BCA',
      accountNumber: '5025554321',
      holderName: 'PPSW BANTEN',
      branch: 'KCU Serang Banten',
      color: 'from-secondary to-secondary-light'
    }
  ];

  const handleCopy = (id, number) => {
    navigator.clipboard.writeText(number);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
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
          <p className="mt-4 text-zinc-655 dark:text-zinc-400 font-normal max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
            Setiap donasi Anda akan dikonversi langsung menjadi modal UMKM perempuan perajin, modul pelatihan kecakapan digital, beasiswa kuliah, serta santunan sosial kedaruratan.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Combined warm rounded card containing both forms */}
        <div className="rounded-[40px] bg-warm-tint/60 dark:bg-zinc-900/60 p-5 sm:p-10 lg:p-14 border border-secondary/10 dark:border-white/5 shadow-xl relative overflow-hidden premium-card">
          <BlobBackdrop className="w-[110%] h-[110%] -top-12 -left-12 opacity-30" seed={1} />
          <WatercolorBlob className="w-[500px] h-[500px] top-1/4 left-1/3 opacity-30" seed={3} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative z-10">
            
            {/* Left Column: QRIS Card (Centered and restricted on Mobile/Tablet to prevent layout stretch) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="lg:col-span-5 flex flex-col mx-auto max-w-md w-full"
            >
              <div className="flex-grow rounded-[32px] p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-secondary/10 dark:border-white/5 flex flex-col justify-between items-center text-center shadow-lg relative overflow-hidden premium-card">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 border border-primary/15">
                    <QrCode className="w-3.5 h-3.5" />
                    QRIS Pembayaran Instan
                  </span>
                  <p className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm max-w-xs font-medium mb-6 leading-relaxed">
                    Dukung program lebih mudah menggunakan GoPay, OVO, Dana, LinkAja, ShopeePay, atau aplikasi Mobile Banking Anda.
                  </p>
                </div>

                {/* QRIS Pattern Wrapper */}
                <div className="relative p-4 rounded-2xl bg-white border border-zinc-200 shadow-md w-52 h-52 flex flex-col items-center justify-center group mb-6 hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-2xl pointer-events-none" />
                  
                  {/* QR Mockup SVG */}
                  <svg className="w-44 h-44 text-zinc-900" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="4" />
                    <rect x="10" y="10" width="10" height="10" rx="1.5" fill="currentColor" />
                    
                    <rect x="75" y="5" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="4" />
                    <rect x="80" y="10" width="10" height="10" rx="1.5" fill="currentColor" />
                    
                    <rect x="5" y="75" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="4" />
                    <rect x="10" y="80" width="10" height="10" rx="1.5" fill="currentColor" />

                    <rect x="35" y="5" width="6" height="6" fill="currentColor" />
                    <rect x="45" y="15" width="12" height="6" fill="currentColor" />
                    <rect x="60" y="5" width="6" height="12" fill="currentColor" />
                    
                    <rect x="35" y="30" width="12" height="6" fill="currentColor" />
                    <rect x="55" y="25" width="6" height="12" fill="currentColor" />
                    <rect x="65" y="35" width="12" height="6" fill="currentColor" />
                    <rect x="85" y="30" width="10" height="6" fill="currentColor" />

                    <rect x="5" y="35" width="12" height="6" fill="currentColor" />
                    <rect x="22" y="45" width="6" height="12" fill="currentColor" />
                    <rect x="10" y="60" width="12" height="6" fill="currentColor" />
                    
                    <rect x="35" y="50" width="6" height="6" fill="currentColor" />
                    <rect x="45" y="45" width="18" height="6" fill="currentColor" />
                    <rect x="35" y="65" width="6" height="18" fill="currentColor" />
                    <rect x="50" y="60" width="12" height="12" fill="currentColor" />
                    
                    <rect x="68" y="50" width="6" height="6" fill="currentColor" />
                    <rect x="78" y="45" width="12" height="6" fill="currentColor" />
                    <rect x="68" y="65" width="12" height="6" fill="currentColor" />
                    <rect x="85" y="60" width="10" height="12" fill="currentColor" />
                    
                    <rect x="50" y="80" width="18" height="6" fill="currentColor" />
                    <rect x="75" y="80" width="6" height="12" fill="currentColor" />
                    <rect x="85" y="85" width="10" height="6" fill="currentColor" />
                    
                    {/* Center Heart Emblem */}
                    <rect x="42" y="42" width="16" height="16" rx="4" fill="white" stroke="currentColor" strokeWidth="2" />
                    <path d="M50 53.5l-3.2-3c-1.3-1.2-2.1-2-2.1-2.9 0-.8.6-1.4 1.4-1.4.5 0 .9.2 1.2.6.3-.4.7-.6 1.2-.6.8 0 1.4.6 1.4 1.4 0 .9-.8 1.7-2.1 2.9l-3.2 3z" fill="#F58A07" />
                  </svg>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1.5 rounded-lg shadow-sm border border-zinc-150">
                    <span className="text-[10px] font-extrabold tracking-wider bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-none">QRIS</span>
                  </div>
                </div>

                <div className="text-zinc-500 dark:text-zinc-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 justify-center">
                  <Info className="w-3.5 h-3.5 text-zinc-400" />
                  PPSW BANTEN MANDIRI
                </div>
              </div>
            </motion.div>

            {/* Right Column: Bank Transfers & Transparency Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-7 flex flex-col justify-between gap-6"
            >
              {/* Account List */}
              <div className="space-y-4">
                {bankAccounts.map((account) => (
                  <div
                    key={account.id}
                    className="rounded-[28px] p-5 sm:p-7 bg-white dark:bg-zinc-900 border border-secondary/10 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-md group text-left hover:border-primary/30 transition-all duration-300 premium-card premium-card-hover"
                  >
                    <div className="space-y-2 w-full sm:w-auto">
                      <span className="inline-flex items-center text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                        {account.bankName}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-extrabold text-xl sm:text-2xl tracking-tight text-secondary dark:text-white tabular-nums">
                          {account.accountNumber}
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-xs sm:text-sm font-extrabold text-secondary dark:text-zinc-200">
                          {account.holderName}
                        </p>
                        <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                          Cabang: {account.branch}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy(account.id, account.accountNumber)}
                      className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 select-none active:scale-[0.98] transition-all cursor-pointer ${
                        copiedId === account.id
                          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                          : 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-secondary dark:text-zinc-200 border border-secondary/10 dark:border-zinc-800/30'
                      }`}
                    >
                      {copiedId === account.id ? (
                        <>
                          <Check className="w-4 h-4" />
                          Tersalin!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Salin Rekening
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Transparency guarantee card */}
              <div className="rounded-[24px] p-5 sm:p-6 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/10 dark:border-primary/20 text-left flex gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/15 dark:bg-primary/25 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 fill-primary/10" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-extrabold text-secondary dark:text-white text-sm sm:text-base">
                    Komitmen Transparansi 100%
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-450 text-[11px] sm:text-sm leading-relaxed font-normal">
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
