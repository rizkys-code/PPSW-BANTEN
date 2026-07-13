import React, { useState } from 'react';
import { BookOpen, ShoppingBag, Handshake, GraduationCap, X, CheckCircle2, Trophy, Users, Send, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgramCard from './ProgramCard';
import { WatercolorBlob } from './Decorations';

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programsData = [
    {
      id: 'pengorganisasian',
      title: 'Pengorganisasian Masyarakat',
      icon: Users,
      gradient: 'from-primary to-accent',
      description: 'Pemberdayaan dan pendampingan kelompok perempuan di tingkat basis (akar rumput) untuk meningkatkan kepedulian, kesadaran hak, dan solidaritas sosial.',
      detailedInfo: 'Program ini berfokus pada pendampingan intensif bagi kelompok perempuan akar rumput. Melalui pengorganisasian di tingkat desa/kelurahan, kami membangun ruang solidaritas, memfasilitasi diskusi rutin mengenai hak-hak perempuan, kepemimpinan, serta penyelesaian masalah sosial secara kolektif.',
      outcomes: [
        'Pembentukan Kelompok Perempuan Basis Baru',
        'Pelatihan Kepemimpinan & Pengorganisasian',
        'Pendampingan Rembuk Warga & Forum Komunitas',
        'Pengembangan Solidaritas Sosial Lintas Wilayah'
      ],
      metric: 'Pendampingan aktif kelompok perempuan basis'
    },
    {
      id: 'koperasi',
      title: 'Lembaga Keuangan Mikro',
      icon: ShoppingBag,
      gradient: 'from-secondary to-secondary-light',
      description: 'Pengembangan kelompok simpan pinjam perempuan menuju pembentukan koperasi mandiri untuk memperkuat kemandirian ekonomi perempuan basis.',
      detailedInfo: 'Kami membantu perempuan akar rumput membangun Lembaga Keuangan Mikro (LKM) berbasis pra-koperasi dan koperasi perempuan. Melalui kelompok simpan pinjam, anggota belajar mengelola modal usaha, menghindari jerat rentenir, dan mengembangkan kemandirian finansial keluarga.',
      outcomes: [
        'Pendirian & Binaan Koperasi Perempuan Mandiri',
        'Fasilitasi Permodalan Usaha Mikro Anggota',
        'Edukasi Pengelolaan Kelompok Simpan Pinjam',
        'Mentoring Manajemen Koperasi Profesional'
      ],
      metric: 'Pengembangan koperasi perempuan mandiri'
    },
    {
      id: 'pelatihan',
      title: 'Pelatihan',
      icon: GraduationCap,
      gradient: 'from-primary to-primary-dark',
      description: 'Penyelenggaraan pelatihan komprehensif mulai dari Literasi Digital, Literasi Keuangan, Paralegal, Pengorganisasian, UKM, Kesehatan Reproduksi, dan Koperasi.',
      detailedInfo: 'PPSW Banten berkomitmen membekali perempuan dengan berbagai keterampilan penting. Pelatihan yang kami laksanakan mencakup literasi digital, manajemen keuangan keluarga & UKM, bimbingan paralegal hukum, pemahaman kesehatan reproduksi, hingga tata kelola organisasi koperasi.',
      outcomes: [
        'Pelatihan Literasi Digital & Keuangan UKM',
        'Pendidikan Paralegal (Bantuan Hukum Basis)',
        'Edukasi Kesehatan Reproduksi Perempuan',
        'Pelatihan Manajemen Usaha & Koperasi'
      ],
      metric: 'Pelatihan berkelanjutan bagi perempuan basis'
    },
    {
      id: 'seminar',
      title: 'Seminar & Lokakarya',
      icon: Handshake,
      gradient: 'from-accent to-accent-dark',
      description: 'Penyelenggaraan forum diskusi ilmiah, seminar, dan lokakarya untuk mengkaji isu-isu strategis gender, hak perempuan, dan kebijakan publik.',
      detailedInfo: 'PPSW Banten aktif menyelenggarakan seminar dan lokakarya baik di tingkat lokal maupun regional. Kegiatan ini bertujuan mempertemukan berbagai stakeholder—mulai dari akademisi, pemerintah, organisasi masyarakat sipil, hingga perwakilan basis—untuk mengadvokasi kebijakan publik yang responsif gender.',
      outcomes: [
        'Advokasi Kebijakan Publik Responsif Gender',
        'Diskusi Kajian Kasus & Isu Hak Perempuan',
        'Kolaborasi Lintas Lembaga & Sektor Publik',
        'Perumusan Rekomendasi Rencana Aksi Daerah'
      ],
      metric: 'Seminar & lokakarya berkala tiap tahun'
    },
    {
      id: 'penerbitan',
      title: 'Penerbitan',
      icon: Send,
      gradient: 'from-secondary-light to-secondary-dark',
      description: 'Publikasi berkala mengenai hasil kajian, panduan advokasi, laporan perkembangan gerakan perempuan, serta media komunikasi komunitas.',
      detailedInfo: 'Divisi penerbitan PPSW Banten bertugas mendokumentasikan ide, hasil kajian lapangan, modul pelatihan, serta panduan hukum/advokasi. Publikasi ini didistribusikan ke jaringan komunitas, akademisi, dan instansi pemerintah guna memperluas referensi gerakan perempuan.',
      outcomes: [
        'Penyusunan & Distribusi Buletin Gerakan',
        'Penerbitan Modul Pelatihan Kepemimpinan',
        'Publikasi Panduan Advokasi Hak Perempuan',
        'Penyediaan Media Komunikasi Akar Rumput'
      ],
      metric: 'Modul & buletin komunitas berkala'
    },
    {
      id: 'buku',
      title: 'Buku',
      icon: BookOpen,
      gradient: 'from-primary to-accent',
      description: 'Penerbitan buku literatur gerakan perempuan seperti "Pentingnya Kesehatan Lingkungan", "Cerita Sukses PPSW Banten", dan "Ada Lentera di Antara Kita".',
      detailedInfo: 'PPSW Banten menerbitkan buku-buku literatur yang merangkum kisah inspiratif perempuan basis, panduan praktis kesehatan lingkungan, serta perjuangan pemberdayaan di wilayah Banten. Buku ini menjadi lentera penyemangat bagi gerakan perempuan di berbagai daerah.',
      outcomes: [
        'Buku "Pentingnya Kesehatan Lingkungan"',
        'Buku "Cerita Sukses PPSW Banten"',
        'Buku "Ada Lentera di Antara Kita"',
        'Penyebaran Inspirasi Perjuangan Perempuan'
      ],
      metric: 'Koleksi buku literatur gerakan mandiri'
    },
    {
      id: 'video',
      title: 'Video Dokumenter',
      icon: Video,
      gradient: 'from-amber-500 to-primary',
      description: 'Produksi media audio-visual dan video dokumenter yang mendokumentasikan perjuangan, kisah sukses, serta realitas kehidupan perempuan di tingkat basis.',
      detailedInfo: 'Kami memproduksi video dokumenter untuk menyuarakan aspirasi perempuan basis secara visual. Video ini mendokumentasikan tantangan hidup sehari-hari, proses pengorganisasian, serta kisah sukses kemandirian ekonomi koperasi perempuan binaan di Provinsi Banten.',
      outcomes: [
        'Dokumentasi Profil Kelompok Perempuan Basis',
        'Video Kampanye Sosial & Hak-Hak Perempuan',
        'Media Pembelajaran Visual bagi Komunitas',
        'Penyebaran Cerita Perubahan Sosial Digital'
      ],
      metric: 'Koleksi dokumenter audio-visual'
    }
  ];

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <section id="program" className="py-24 relative bg-white dark:bg-zinc-950/80 overflow-hidden">
      {/* Decorative leaf branch sketches */}
      <div className="absolute top-10 right-10 text-primary/10 w-16 h-16 rotate-[85deg] hidden md:block" />
      <div className="absolute bottom-10 left-10 text-secondary/15 w-20 h-20 rotate-[-45deg] hidden md:block" />

      {/* Soft Watercolor backdrop elements */}
      <WatercolorBlob className="w-96 h-96 -top-12 -right-12 opacity-60" seed={2} />
      <WatercolorBlob className="w-[450px] h-[450px] -bottom-20 -left-20 opacity-55" seed={3} />

      {/* Background soft glow elements */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <WatercolorBlob className="w-72 h-72 -top-20 left-1/2 -translate-x-1/2 opacity-70" seed={1} />
          
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
            Fokus Pelayanan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-secondary dark:text-white tracking-tight">
            Program Utama
          </h2>
          <p className="mt-4 text-zinc-650 dark:text-zinc-400 font-normal max-w-xl mx-auto text-xs sm:text-base leading-relaxed">
            Fokus pelayanan dan pendampingan kami dirancang secara terpadu untuk mendorong lahirnya kemandirian sosial dan ekonomi perempuan secara berkelanjutan.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Card Grid with equal heights (items-stretch) and proper responsive column counts */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {programsData.map((program) => (
            <div key={program.id} className="h-full">
              <ProgramCard
                program={program}
                onOpenDetails={setSelectedProgram}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal Dialog for Details */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-2xl bg-bg-light dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-secondary/10 dark:border-white/10 z-10 max-h-[90vh] flex flex-col premium-card"
            >
              {/* Colored header band */}
              <div className={`h-3 bg-gradient-to-r ${selectedProgram.gradient}`} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-650 hover:text-secondary dark:hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-left">
                {/* Header title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${selectedProgram.gradient} text-white shadow-md`}>
                    <selectedProgram.icon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-extrabold text-2xl text-secondary dark:text-white leading-tight">
                      {selectedProgram.title}
                    </h3>
                    <span className="text-[10px] text-primary dark:text-accent font-extrabold uppercase tracking-wider">
                      Fokus Pemberdayaan
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-650 dark:text-zinc-400 leading-relaxed font-normal mb-8 text-xs sm:text-base">
                  {selectedProgram.detailedInfo}
                </p>

                {/* Outcomes list */}
                <div className="mb-8">
                  <h4 className="font-serif font-extrabold text-secondary dark:text-white text-base mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary animate-pulse" />
                    Bentuk Kegiatan & Layanan:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProgram.outcomes.map((item, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-zinc-650 dark:text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metric/Impact Badge */}
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800/40 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                    <Trophy className="w-5 h-5 fill-amber-500/10" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wider">Dampak Terukur Hingga Saat Ini</p>
                    <p className="text-xs sm:text-sm font-extrabold text-secondary dark:text-white">{selectedProgram.metric}</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-850 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-secondary hover:text-secondary-dark dark:text-zinc-350 dark:hover:text-white bg-zinc-200/40 dark:bg-zinc-800 transition-colors duration-200 cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
