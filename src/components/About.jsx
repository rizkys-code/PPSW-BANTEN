import React from 'react';
import { 
  Scale, 
  Users, 
  Heart, 
  Quote, 
  Sparkles,
  Eye,
  Target,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Leaf1, LeafBranch, BlobBackdrop, Flower, WatercolorBlob } from './Decorations';

export default function About() {
  const values = [
    {
      icon: Eye,
      title: 'Visi',
      desc: 'Pemberdayaan perempuan & transformasi sosial bagi status dan peran perempuan dalam masyarakat melalui peningkatan akses dan kontrol perempuan terhadap sumberdaya yang ada dan dirinya, guna menciptakan tatanan masyarakat yang lebih egaliter, demokratis dan berkeadilan gender.'
    },
    {
      icon: Target,
      title: 'Misi',
      desc: (
        <ul className="list-disc pl-4 space-y-1.5 mt-1 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400">
          <li>Meningkatkan taraf hidup, pengetahuan dan kemampuan perempuan di tingkat basis.</li>
          <li>Mengembangkan kapasitas kelembagaan lokal bagi perempuan dan kepemimpinan perempuan dengan pendekatan desentralisasi sumberdaya.</li>
          <li>Membangun gerakan bersama untuk mendorong dan menciptakan kebijakan lokal yang setara dan berkeadilan gender.</li>
        </ul>
      )
    },
    {
      icon: Users,
      title: 'Nilai Dasar: Egaliter & Demokratis',
      desc: (
        <div className="space-y-2 mt-1">
          <p><strong>Egaliter:</strong> Nilai kesetaraan bagi setiap manusia, menjunjung tinggi hak-hak asasi manusia (anti diskriminasi / CEDAW).</p>
          <p><strong>Demokratis:</strong> Menjunjung tinggi partisipasi perempuan dalam pengambilan keputusan menyangkut kepentingan, aktualisasi diri, dan masa depannya.</p>
        </div>
      )
    },
    {
      icon: Heart,
      title: 'Nilai Dasar: Keadilan & Lingkungan',
      desc: (
        <div className="space-y-2 mt-1">
          <p><strong>Keadilan Gender:</strong> Mendorong pola relasi laki-laki dan perempuan yang adil baik di tingkat keluarga, komunitas, maupun negara.</p>
          <p><strong>Kelestarian Lingkungan:</strong> Upaya pemberdayaan dilakukan dengan cara-cara yang tidak merusak alam untuk menjamin keberlanjutan antar generasi.</p>
        </div>
      )
    },
    {
      icon: Scale,
      title: 'Nilai Dasar: Kearifan Lokal',
      desc: 'Pemberdayaan dilakukan dengan menggali nilai dan pranata sosial lokal yang hidup di masyarakat untuk melindungi dan menjunjung tinggi hak, harkat, dan martabat perempuan, dengan tetap kritis memperbaharui nilai patriarki yang merugikan.'
    }
  ];

  const timelineEvents = [
    {
      title: 'Cakupan Wilayah',
      desc: 'Pendampingan aktif PPSW Banten tersebar di berbagai wilayah administrasi basis dampingan di Provinsi Banten.',
      stats: [
        { label: 'Kabupaten', value: '4', note: 'Pandeglang, Lebak, Serang, Tangerang' },
        { label: 'Kecamatan Binaan', value: '13', note: 'Kecamatan aktif dampingan' },
        { label: 'Desa Dampingan', value: '34', note: 'Desa/Kelurahan tingkat basis' }
      ]
    },
    {
      title: 'Kelompok & Dampingan',
      desc: 'Membangun kesadaran kritis, memperkuat kepemimpinan, dan mengorganisasi perempuan tingkat basis.',
      stats: [
        { label: 'Perempuan Dampingan', value: '2.359', note: 'Jiwa perempuan aktif basis' },
        { label: 'Kelompok/Koperasi', value: '50', note: 'Kelompok Pra Koperasi & Koperasi' }
      ]
    },
    {
      title: 'Kemandirian Finansial',
      desc: 'Pengembangan modal usaha anggota koperasi perempuan secara mandiri dan berkelanjutan bebas rentenir.',
      stats: [
        { label: 'Simpanan Anggota', value: 'Rp 4.869.154.103', note: 'Simpanan kelompok' },
        { label: 'Pinjaman Disalurkan', value: 'Rp 5.377.995.550', note: 'Sirkulasi modal usaha' },
        { label: 'Asset Koperasi', value: 'Rp 6.618.699.573', note: 'Akumulasi kekayaan koperasi' }
      ]
    }
  ];

  return (
    <section id="tentang" className="py-24 relative overflow-hidden bg-warm-tint transition-colors duration-300">
      {/* Floating Decorative Leaves and Flowers */}
      <LeafBranch className="absolute top-12 left-6 text-primary/10 w-20 h-24 rotate-[-30deg] hidden md:block" />
      <Leaf1 className="absolute bottom-1/4 right-8 text-secondary/10 w-16 h-16 rotate-45 hidden md:block" />
      <Flower className="absolute top-1/2 right-12 text-accent/15 w-14 h-14 rotate-12 hidden lg:block" />

      {/* Watercolor background decorations */}
      <WatercolorBlob className="w-96 h-96 -top-24 -left-24 opacity-50" seed={1} />
      <WatercolorBlob className="w-[500px] h-[500px] bottom-1/4 -right-32 opacity-35" seed={2} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <WatercolorBlob className="w-64 h-64 -top-20 left-1/2 -translate-x-1/2 opacity-70" seed={3} />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-secondary/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary fill-secondary/20" />
            Mengenal Gerakan Kami Lebih Dekat
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-secondary dark:text-white tracking-tight"
          >
            Tentang{' '}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              PPSW BANTEN
            </span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Narrative & Image Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            className="lg:col-span-5 relative h-[320px] sm:h-[450px] lg:h-[480px] w-full"
          >
            <BlobBackdrop className="w-[120%] h-[120%] -top-10 -left-10 opacity-60 rotate-[-15deg]" seed={3} />
            <WatercolorBlob className="w-[100%] h-[100%] absolute top-0 left-0 opacity-40" seed={1} />

            {/* Behind Image */}
            <div className="absolute top-4 left-4 w-[68%] aspect-square rounded-[24px] sm:rounded-[32px] overflow-hidden border-4 border-white dark:border-zinc-900 shadow-xl z-10 transition-transform duration-500 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80"
                alt="Pendampingan perempuan akar rumput"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Front Image Overlay */}
            <div className="absolute bottom-4 right-4 w-[68%] aspect-square rounded-[24px] sm:rounded-[32px] overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl z-20 transition-transform duration-500 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                alt="Solidaritas kelompok basis"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-6 bg-gradient-to-r from-primary to-accent text-white px-5 py-4 rounded-2xl shadow-2xl border border-white/20 flex flex-col text-left z-30 hover:scale-105 transition-transform duration-300">
              <span className="font-serif font-extrabold text-2xl sm:text-3xl tracking-tight leading-none">Sejak 1986</span>
              <span className="text-[10px] text-white/95 font-extrabold uppercase tracking-wider mt-1.5 flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-current text-white" />
                Mendampingi Basis
              </span>
            </div>
          </motion.div>

          {/* Right Column: Narrative (Strictly factual organization profile) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.15 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Opening Story (Narrative Highlight) */}
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-lg sm:text-xl font-serif italic font-extrabold text-secondary dark:text-[#FFF5EB] leading-relaxed">
                "Setiap perempuan membawa cerita tentang kekuatan dan mimpi. Bersama PPSW Banten, langkah kecil dari akar rumput tumbuh menjadi gerakan besar yang mengubah dunia. Karena ketika perempuan berdaya dan berdaulat, masa depan yang adil bukan lagi harapan—melainkan kenyataan."
              </p>
            </div>

            {/* Profile Content */}
            <div className="pt-4 space-y-4 text-xs sm:text-sm md:text-base">
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                PPSW Banten adalah Organisasi Non Pemerintah (Ornop) yang berfokus pada pemberdayaan perempuan, penguatan ekonomi, kepemimpinan perempuan, keadilan gender, serta pembangunan masyarakat yang inklusif di Provinsi Banten. Kami berupaya menumbuhkan kesadaran kritis masyarakat, meningkatkan kapasitas, dan membuka akses melalui kegiatan utamanya yaitu pengorganisasian masyarakat dengan pintu masuk melalui kegiatan ekonomi dengan pembentukan kelompok perempuan berbasis kegiatan Pra Koperasi.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                Didirikan sejak Juni 1986 sebagai badan Pelaksana dari Yayasan An-Nisa Indonesia, PPSW bertransformasi menjadi Yayasan PPSW pada 1998 dan Perkumpulan PPSW pada 2003. Pada tahun 2005, PPSW menjadi organisasi Asosiasi dengan empat lembaga otonom. Melalui desentralisasi wilayah, pada Juni 2026 Mubes Asosiasi PPSW memandirikan PPSW Banten untuk melanjutkan gerakan pemberdayaan kelompok perempuan basis di Provinsi Banten secara terfokus dan efektif.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Nilai yang Kami Pegang Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 relative">
            <WatercolorBlob className="w-48 h-48 -top-12 left-1/2 -translate-x-1/2 opacity-40" seed={2} />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-xs font-bold uppercase tracking-wider mb-3">
              Fokus Gerakan
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-extrabold text-secondary dark:text-white">
              Visi, Misi & Pilar Program
            </h3>
            <div className="h-0.5 w-16 bg-primary/30 mx-auto mt-4" />
          </div>

          {/* modern values grid using cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 rounded-2xl bg-white/60 dark:bg-zinc-900/40 border border-primary/10 hover:border-primary/25 transition-all shadow-sm flex gap-4 text-left items-start group hover:scale-[1.01] premium-card premium-card-hover"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-extrabold text-base sm:text-lg text-secondary dark:text-white">
                      {val.title}
                    </h4>
                    <div className="mt-1 text-xs sm:text-sm text-zinc-655 dark:text-zinc-400 leading-relaxed font-normal">
                      {val.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Perjalanan PPSW Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 relative">
            <WatercolorBlob className="w-48 h-48 -top-12 left-1/2 -translate-x-1/2 opacity-40" seed={1} />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-accent text-xs font-bold uppercase tracking-wider mb-3">
              Capaian & Dampak
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-extrabold text-secondary dark:text-white">
              Capaian Dampak Pendampingan
            </h3>
            <div className="h-0.5 w-16 bg-primary/30 mx-auto mt-4" />
          </div>

          {/* Clean Horizontal Timeline on Desktop / Vertical Stack on Mobile */}
          <div className="relative border-l-2 border-primary/25 dark:border-primary/15 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-3 md:gap-6 lg:gap-8 before:absolute before:top-1/2 before:left-0 before:right-0 before:h-0.5 before:bg-primary/20 before:-translate-y-1/2 before:hidden before:md:block">
            
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 md:pl-0 md:pt-8 mb-10 md:mb-0 group"
              >
                {/* Connector Dot */}
                <div className="absolute left-[-9px] top-0.5 md:left-1/2 md:-translate-x-1/2 md:-top-2 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-primary group-hover:scale-125 transition-transform duration-300 z-10" />

                {/* Event Card */}
                <div className="p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/50 border border-primary/10 shadow-md group-hover:shadow-lg transition-all duration-300 hover:scale-[1.01] h-full flex flex-col justify-start text-left premium-card premium-card-hover">
                  <span className="font-serif font-extrabold text-xl sm:text-2xl text-secondary dark:text-white mb-1.5 block leading-tight">
                    {event.title}
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed font-normal mb-3">
                    {event.desc}
                  </p>
                  
                  {event.stats && (
                    <div className="mt-auto pt-3 border-t border-secondary/5 dark:border-white/5 space-y-2.5 w-full">
                      {event.stats.map((st, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/10 flex flex-col justify-start">
                          <span className="font-serif font-extrabold text-base sm:text-lg text-primary leading-none">
                            {st.value}
                          </span>
                          <span className="text-[10px] sm:text-xs font-bold text-secondary dark:text-zinc-200 mt-1">
                            {st.label}
                          </span>
                          <span className="text-[9px] text-zinc-550 dark:text-zinc-400">
                            {st.note}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Belief Section (Large Highlighted Quote) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="relative rounded-[40px] overflow-hidden bg-gradient-to-tr from-secondary/5 via-primary/5 to-accent/5 dark:from-secondary/20 dark:via-primary/10 dark:to-accent/5 p-8 sm:p-12 md:p-16 border border-primary/15 dark:border-primary/10 shadow-xl"
        >
          {/* Decorative Watercolor shape inside */}
          <WatercolorBlob className="w-80 h-80 -top-20 -left-20 opacity-70" seed={3} />
          <WatercolorBlob className="w-85 h-85 bottom-[-80px] right-[-80px] opacity-50" seed={1} />
          
          <div className="flex justify-center mb-6">
            <Quote className="w-10 h-10 text-primary/40 rotate-180" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Elegant Quotation Text */}
            <p className="text-lg sm:text-2xl lg:text-3xl font-serif font-extrabold italic text-secondary dark:text-zinc-200 leading-relaxed tracking-wide">
              "Kami percaya setiap perempuan memiliki potensi terbaik untuk berdaya dan berdaulat atas hidupnya. Bersama PPSW Banten, langkah kecil perempuan menjadi gerakan besar yang membawa perubahan nyata bagi masyarakat dan dunia."
            </p>
            
            <div className="h-0.5 w-16 bg-primary/40 mx-auto mt-8 mb-4 rounded-full" />
            <span className="font-handwritten text-xl sm:text-2xl text-primary dark:text-accent-light tracking-wide block">
              ~ Keluarga Besar PPSW Banten
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
