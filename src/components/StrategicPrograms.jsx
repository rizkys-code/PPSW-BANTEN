import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Handshake, Sparkles, MapPin, Users } from 'lucide-react';
import { WatercolorBlob, Leaf1, LeafBranch } from './Decorations';

export default function StrategicPrograms() {
  const strategicProgramsData = [
    {
      name: 'Program "Enhancing Digital Economy Participation for ASEAN Women MSMEs" (IDEAS)',
      year: '01 April 2025 - 01 Mei 2026',
      partner: 'Kementerian Luar Negeri Republik Korea (ROK) & ASEAN-ROK Cooperation Fund (AKCF), bekerjasama dengan Asia Pacific Women’s Information Network Center (APWINC)',
      location: 'Provinsi Banten',
      summary: 'Program peningkatan keterampilan pemasaran digital, keamanan digital, dan literasi e-commerce bagi perempuan pengusaha mikro.',
      beneficiary: 'Pembagian Sertifikat dan Dana Pengembangan Usaha untuk 126 orang Perempuan Pelaku UMKM (Maret 2025). Evaluasi & Penelitian diikuti 126 orang Perempuan UMKM (September - Oktober 2025).'
    },
    {
      name: 'Program Keamanan Digital Untuk Pelaku Usaha',
      year: 'Juni - Desember 2025',
      partner: 'Asosiasi PPSW (Pendanaan Internal)',
      location: 'Provinsi Banten (Kabupaten Pandeglang, Lebak, dan Serang)',
      summary: 'Edukasi dan pelatihan praktis mengenai perlindungan data pribadi, literasi digital kritis, keamanan akun media sosial, serta penanganan KBGO untuk pelaku usaha.',
      beneficiary: 'Diakses oleh 300 orang Volunteer dengan penerima manfaat 9.000 orang Calon dan Pelaku Usaha.'
    },
    {
      name: 'Program Akademi Paradigta Indonesia (API)',
      year: 'September 2023 - Juli 2024',
      partner: 'Yayasan Raudhatunnisa Indonesia',
      location: 'Provinsi Banten (Kabupaten Pandeglang)',
      summary: 'Program pendidikan kepemimpinan, pengawasan anggaran daerah, dan pengorganisasian masyarakat bagi kader perempuan desa.',
      beneficiary: 'Telah mewisuda 49 orang kader pemimpin perempuan tingkat desa.'
    },
    {
      name: 'Program Jalin Nusantara (Upscalling Sme’s At Tourist Village & R-Bumn Tigaraksa)',
      year: 'April - Desember 2024',
      partner: 'Tiktok (Program Asosiasi PPSW)',
      location: 'Desa Cikasungka, Kec. Solear, Kab. Tangerang – Banten',
      summary: 'Peningkatan kualitas hidup masyarakat terutama perempuan pelaku usaha di daerah wisata dengan penguasaan teknologi informasi dan komunikasi untuk pengembangan usaha mikro dan kecil.',
      beneficiary: 'Tersedianya kerangka kerja usaha mikro, mendorong bisnis berkelanjutan, dan meningkatkan literasi digital komunitas.'
    },
    {
      name: 'Program Pendidikan Akademi Paradigta Pengembangan Kepemimpinan Perempuan Dalam Memimpin Gerakan Setiap Orang Menjadi Pembaharu (Everyone A Changemaker)',
      year: '31 Mei 2023 - Januari 2024',
      partner: 'Yayasan Raudhatunnisa Indonesia (Program lintas wilayah Asosiasi PPSW)',
      location: 'Kabupaten Lebak (Banten)',
      summary: 'Program pendidikan khusus untuk mengembangkan kepemimpinan perempuan dalam memimpin gerakan agar setiap orang menjadi pembaharu (Everyone A Changemaker).',
      beneficiary: 'Melahirkan 90 kader pemimpin perempuan di tingkat desa untuk memimpin gerakan perubahan sosial.'
    },
    {
      name: 'Program Go Digital Asean Tahap Ke 2 (Grow Digital Asean)',
      year: 'Oktober 2020 - November 2023',
      partner: 'Google.org melalui The Asia Foundation (Program lintas wilayah Asosiasi PPSW)',
      location: 'Provinsi Banten',
      summary: 'Edukasi kesiapan kerja digital, optimasi media sosial bisnis, dan literasi keuangan untuk pemuda desa, calon pelaku usaha, maupun pelaku usaha yang ingin bertransformasi menjadi digital.',
      beneficiary: 'Sasaran penerima manfaat sebanyak 17.500 orang usia produktif, di mana 70% penerima manfaatnya adalah perempuan.'
    },
    {
      name: 'Program Madani – Civil Society Support Initiative',
      year: '16 Januari 2023 - 31 Mei 2023',
      partner: 'USAID - FHI360',
      location: 'Kabupaten Lebak – Banten',
      summary: 'Meningkatkan peran serta masyarakat sipil dalam pembangunan untuk menciptakan pemerintahan yang kolaboratif (collaborative governance).',
      beneficiary: 'Penguatan tata kelola lembaga lokal, akuntabilitas keuangan, transparansi, serta kapasitas advokasi kebijakan.'
    },
    {
      name: 'Program Pertemuan Laki-Laki Untuk Mendukung Kepemimpinan Perempuan Dalam Perlindungan Berbasis Komunitas',
      year: 'Mei 2022 - Juni 2023',
      partner: 'Yappika ActionAid (YAA)',
      location: 'Kabupaten Pandeglang dan Kabupaten Serang – Banten',
      summary: 'Meningkatkan pemahaman tokoh laki-laki (agama, masyarakat, adat) tentang nilai-nilai kesetaraan gender untuk mendukung kepemimpinan perempuan.',
      beneficiary: 'Mendapatkan dukungan tokoh laki-laki untuk memperkuat partisipasi perempuan dalam perlindungan berbasis komunitas.'
    },
    {
      name: 'Program ‘Women-Led Community Based Protection In Banten’',
      year: '2023 - 2025',
      partner: 'Yappika ActionAid',
      location: 'Kabupaten Pandeglang dan Kabupaten Serang, Provinsi Banten',
      summary: 'Inisiasi dan pelatihan tim tanggap perlindungan berbasis komunitas yang dipimpin langsung oleh tokoh perempuan di tingkat basis.',
      beneficiary: 'Dokumen Pemetaan Kerentanan, lahirnya PERDES Perlindungan Perempuan & Anak, PERDES Desa Siaga Bencana, PERDES Penguatan Ekonomi di 4 Desa 2 Kecamatan, dan Focal Point di 2 Kecamatan 2 Kabupaten.'
    },
    {
      name: 'Program Perluasan Kesempatan Ekonomi Melalui Peningkatan Penguasaan Teknologi Dan Informasi (Lanjutan)',
      year: '2023 - 2025',
      partner: 'The Asia Foundation & Google (Program lintas wilayah Asosiasi PPSW)',
      location: 'Kabupaten Pandeglang dan Kabupaten Lebak, Provinsi Banten',
      summary: 'Peningkatan taraf hidup masyarakat marginal melalui perluasan kesempatan berusaha dan bekerja dengan pemanfaatan teknologi informasi dan komunikasi.',
      beneficiary: 'Perluasan kesempatan bekerja/berusaha bagi koperasi binaan, pelaku usaha mikro, dan masyarakat marginal.'
    }
  ];

  return (
    <section id="program-strategis" className="py-24 bg-warm-tint dark:bg-bg-dark transition-colors duration-300 relative overflow-hidden">
      {/* Decorative floral elements */}
      <LeafBranch className="absolute top-1/4 left-5 text-primary/10 w-24 h-28 rotate-12 hidden lg:block" />
      <Leaf1 className="absolute bottom-12 right-5 text-secondary/15 w-18 h-18 rotate-[-30deg] hidden md:block" />

      {/* Watercolor background blobs */}
      <WatercolorBlob className="w-[450px] h-[450px] top-[-50px] -right-32 opacity-40" seed={3} />
      <WatercolorBlob className="w-96 h-96 bottom-[-50px] -left-20 opacity-50" seed={1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary fill-primary/20" />
            Langkah Strategis Gerakan
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-secondary dark:text-white tracking-tight"
          >
            Program Strategis 2023–2025
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Elegant Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {strategicProgramsData.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-zinc-900/50 border border-primary/10 hover:border-primary/20 transition-all duration-300 shadow-sm flex flex-col justify-between text-left items-start group hover:scale-[1.01] hover:shadow-md relative overflow-hidden premium-card premium-card-hover"
            >
              {/* Year Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/15 dark:from-primary/20 dark:to-accent/10 border border-primary/20 text-primary dark:text-accent-light text-[11px] font-extrabold tracking-wider uppercase mb-4">
                <Calendar className="w-3.5 h-3.5" />
                {prog.year}
              </div>

              {/* Main Content */}
              <div className="flex-1 w-full">
                <h3 className="font-serif font-extrabold text-lg sm:text-xl text-secondary dark:text-white leading-snug group-hover:text-primary dark:group-hover:text-accent-light transition-colors duration-250 mb-3">
                  {prog.name}
                </h3>
                <p className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 font-normal text-justify">
                  {prog.summary}
                </p>
              </div>

              {/* Details & Metadata */}
              <div className="w-full space-y-3 mt-4 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50 text-xs text-left">
                {/* Location */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-secondary dark:text-white block mb-0.5">Lokasi Program:</span>
                    <span className="text-zinc-650 dark:text-zinc-400 font-normal leading-relaxed">{prog.location}</span>
                  </div>
                </div>

                {/* Partner */}
                <div className="flex items-start gap-2.5">
                  <Handshake className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-secondary dark:text-white block mb-0.5">Mitra Pendukung / Pendanaan:</span>
                    <span className="text-zinc-650 dark:text-zinc-400 font-normal leading-relaxed text-justify block">{prog.partner}</span>
                  </div>
                </div>

                {/* Beneficiary */}
                {prog.beneficiary && (
                  <div className="flex items-start gap-2.5">
                    <Users className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-secondary dark:text-white block mb-0.5">Penerima Manfaat / Capaian:</span>
                      <span className="text-zinc-650 dark:text-zinc-400 font-normal leading-relaxed text-justify block">{prog.beneficiary}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
