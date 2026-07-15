import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WatercolorBlob } from './Decorations';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4500);
  };

  const contactInfos = [
    {
      icon: MapPin,
      title: 'Alamat Kantor',
      detail: 'Kp. Leuweung Kolot RT.02 RW.02, Desa Tegalwangi, Kecamatan Menes, Kabupaten Pandeglang, Banten',
      color: 'text-primary bg-primary/10 dark:bg-primary/20'
    },
    {
      icon: Phone,
      title: 'Nomor Telepon & WhatsApp',
      detail: '081388451993 (Roni Pranayuda)',
      color: 'text-secondary bg-secondary/10 dark:bg-secondary/20'
    },
    {
      icon: Mail,
      title: 'Alamat Email',
      detail: 'banten.ppsw@gmail.com',
      color: 'text-primary bg-primary/10 dark:bg-primary/20'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      detail: 'Senin - Jumat | 09:00 - 17:00 WIB',
      color: 'text-accent bg-accent/15 dark:bg-accent/20'
    }
  ];

  return (
    <section id="hubungi" className="py-20 sm:py-24 bg-warm-tint relative overflow-hidden">
      {/* Decorative leaf sketch background */}
      <div className="absolute bottom-10 right-10 text-primary/15 w-16 h-16 rotate-[75deg] hidden md:block" />
      
      {/* Decorative blurs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Soft Watercolor backdrop elements */}
      <WatercolorBlob className="w-96 h-96 top-1/4 left-0 opacity-40" seed={1} />
      <WatercolorBlob className="w-96 h-96 bottom-10 right-0 opacity-55" seed={2} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <WatercolorBlob className="w-72 h-72 -top-20 left-1/2 -translate-x-1/2 opacity-70" seed={3} />
          
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
            <Mail className="w-3.5 h-3.5" />
            Hubungi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-secondary dark:text-white tracking-tight">
            Mari Terhubung{' '}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Lebih Dekat
            </span>
          </h2>
          <p className="mt-4 text-zinc-650 dark:text-zinc-400 font-normal max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
            Punya pertanyaan mengenai program kami, donasi bersama, atau kemitraan relawan? Silakan hubungi kami via WhatsApp atau formulir di bawah.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Contact Info and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Contact details list & WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            {/* Quick Details Grid - 1 column on mobile, 2 columns on tablet/desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {contactInfos.map((info, idx) => {
                const InfoIcon = info.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-secondary/10 dark:border-white/5 shadow-sm flex flex-col gap-3 group hover:border-primary/30 transition-all duration-300 premium-card premium-card-hover"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${info.color} group-hover:scale-105 transition-transform duration-300`}>
                      <InfoIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-extrabold text-secondary dark:text-white text-sm sm:text-base">
                        {info.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed font-normal">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp Floating-look CTA Box */}
            <div className="p-6 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-left">
              <h4 className="font-serif font-extrabold text-secondary dark:text-white text-base mb-2">Layanan Cepat WhatsApp</h4>
              <p className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                Ingin respons instan? Konselor sebaya dan tim humas kami siap mendampingi dan menjawab pertanyaan Anda secara langsung.
              </p>
              
              <a
                href="https://wa.me/6281388451993?text=Halo%20PPSW%20Banten%2C%20saya%20tertarik%20dengan%20program%20yayasan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Chat via WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right Side: Map & Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-between gap-6 mt-8 lg:mt-0"
          >
            {/* Custom Styled Map Placeholder - scales correctly via relative positioning */}
            <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-secondary/10 dark:border-white/5 shadow-md h-56 relative overflow-hidden flex flex-col items-center justify-center text-center p-6 group premium-card premium-card-hover">
              {/* Map background grids SVG mock */}
              <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
                <svg className="w-full h-full text-zinc-900" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid lines resembling roads */}
                  <path d="M 0 40 L 400 40 M 0 100 L 400 100 M 0 160 L 400 160" stroke="currentColor" strokeWidth="3" />
                  <path d="M 50 0 L 50 200 M 180 0 L 180 200 M 320 0 L 320 200" stroke="currentColor" strokeWidth="3" />
                  <path d="M 0 0 L 400 200 M 0 200 L 400 0" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* Glowing Red Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary animate-bounce">
                  <MapPin className="w-7 h-7 text-primary fill-primary/10" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-ping" />
                </div>
                <h4 className="font-serif font-extrabold text-sm sm:text-base text-secondary dark:text-white mt-3">Lokasi Kantor PPSW BANTEN</h4>
                <p className="text-[10px] sm:text-xs text-zinc-550 dark:text-zinc-400 mt-1 max-w-[280px]">
                  Desa Tegalwangi, Kec. Menes, Kab. Pandeglang, Banten
                </p>
              </div>

              {/* Link button to real Google Maps */}
              <a
                href="https://maps.google.com/?q=Desa+Tegalwangi+Menes+Pandeglang+Banten"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 text-[10px] sm:text-[11px] font-bold bg-white/95 dark:bg-zinc-800/95 text-primary dark:text-accent px-3 py-1.5 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 hover:bg-white dark:hover:bg-zinc-850 shadow-sm flex items-center gap-1.5 transition-all select-none"
              >
                Buka di Google Maps
                <MapPin className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={handleFormSubmit} className="rounded-3xl p-6 bg-white dark:bg-zinc-900 border border-secondary/10 dark:border-white/5 shadow-md flex-1 flex flex-col justify-between gap-4 text-left premium-card">
              <div className="space-y-4">
                <h4 className="font-serif font-extrabold text-xs sm:text-sm text-secondary/70 dark:text-zinc-400 uppercase tracking-wider">Kirim Pesan Cepat</h4>
                
                {/* Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nama Lengkap"
                    required
                    className="px-4 py-3 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 dark:text-white"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Alamat Email"
                    required
                    className="px-4 py-3 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 dark:text-white"
                  />
                </div>
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Isi pesan Anda..."
                  required
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-250 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 dark:text-white resize-none"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={formSubmitted}
                  className={`px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 select-none active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto ${
                    formSubmitted
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                      : 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {formSubmitted ? (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-1.5"
                      >
                        <Check className="w-4 h-4" />
                        Pesan Terkirim!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="submit"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-1.5"
                      >
                        Kirim Pesan
                        <Send className="w-3.5 h-3.5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </motion.div>
 
        </div>
      </div>
    </section>
  );
}
