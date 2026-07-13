import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Check, Bell } from 'lucide-react';
import { motion } from 'framer-motion';


export default function Events() {
  const [registeredEventId, setRegisteredEventId] = useState(null);

  const eventsData = [
    {
      id: 1,
      title: 'Webinar Hukum: Sosialisasi UU TPKS',
      date: '25 Juli 2026',
      time: '14:00 - 16:30 WIB',
      location: 'Live Zoom & YouTube',
      desc: 'Pelajari pemahaman hukum, hak korban, dan tata cara pelaporan kekerasan seksual berdasarkan Undang-Undang TPKS terbaru bersama praktisi hukum.',
      status: 'Pendaftaran Dibuka',
      statusColor: 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent-light',
      gradient: 'from-primary to-accent'
    },
    {
      id: 2,
      title: 'Festival Perempuan Berdaya 2026',
      date: '18 Agustus 2026',
      time: '09:00 - 18:00 WIB',
      location: 'Jakarta Creative Hub',
      desc: 'Pameran kreasi produk UMKM perempuan binaan, talkshow kepemimpinan bersama tokoh nasional, dan workshop digital coding dasar gratis.',
      status: 'Segera Hadir',
      statusColor: 'bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-accent',
      gradient: 'from-secondary to-secondary-light'
    },
    {
      id: 3,
      title: 'Pelatihan UMKM Desa Binaan',
      date: '05 September 2026',
      time: '08:00 - 15:00 WIB',
      location: 'Aula Kabupaten Sumedang',
      desc: 'Mentoring tatap muka intensif mencakup cara pengolahan pangan sehat higienis, pembuatan kemasan kreatif, dan pendaftaran NIB UMKM.',
      status: 'Segera Hadir',
      statusColor: 'bg-accent/15 text-primary-dark dark:bg-accent/20 dark:text-accent-light',
      gradient: 'from-amber-500 to-primary'
    }
  ];

  const handleRegister = (id) => {
    setRegisteredEventId(id);
    setTimeout(() => {
      setRegisteredEventId(null);
    }, 3000);
  };

  return (
    <section id="event" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Decorative floral elements */}
      <div className="absolute top-10 left-10 text-primary/10 w-16 h-16 rotate-45 hidden md:block" />
      <div className="absolute bottom-10 right-10 text-secondary/15 w-18 h-18 rotate-[-30deg] hidden md:block" />
      
      {/* Background radial soft lights */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
            <Calendar className="w-3.5 h-3.5" />
            Agenda Terdekat
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-secondary dark:text-white tracking-tight">
            Event & Kegiatan{' '}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Mendatang
            </span>
          </h2>
          <p className="mt-4 text-zinc-655 dark:text-zinc-400 font-normal max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Mari berpartisipasi secara aktif dalam kegiatan edukatif daring dan pameran kolaboratif luring untuk memperluas dampak kemandirian.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {eventsData.map((ev, idx) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 100, damping: 15 }}
              className="group flex flex-col justify-between rounded-2xl glass-card hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 border border-zinc-200/50 dark:border-zinc-800/50 shadow-md relative overflow-hidden premium-card premium-card-hover"
            >
              {/* Event Card Header Band */}
              <div className={`h-2 bg-gradient-to-r ${ev.gradient}`} />

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Status Badge & Date Box */}
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${ev.statusColor}`}>
                      {ev.status}
                    </span>
                    <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {ev.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-lg text-zinc-950 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-200">
                    {ev.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {ev.desc}
                  </p>

                  {/* Event Details (Time & Location) */}
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      <MapPin className="w-4 h-4 text-secondary shrink-0" />
                      <span>{ev.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      <Bell className="w-4 h-4 text-accent shrink-0" />
                      <span>{ev.time}</span>
                    </div>
                  </div>
                </div>

                {/* Register Action Button */}
                <div className="mt-8 pt-4 border-t border-zinc-200/40 dark:border-zinc-800/40 flex justify-end">
                  <button
                    onClick={() => handleRegister(ev.id)}
                    disabled={registeredEventId !== null}
                    className={`px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all duration-300 ${
                      registeredEventId === ev.id
                        ? 'bg-emerald-500 text-white shadow-lg'
                        : 'bg-secondary hover:bg-secondary-light dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-secondary shadow-md hover:scale-[1.02]'
                    }`}
                  >
                    {registeredEventId === ev.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Terdaftar!
                      </>
                    ) : (
                      <>
                        Daftar Event
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
