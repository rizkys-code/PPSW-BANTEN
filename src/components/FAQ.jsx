import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    {
      value: 'item-1',
      question: 'Bagaimana cara mendaftar menjadi relawan?',
      answer: 'Anda dapat mendaftar dengan mengklik tombol "Gabung Relawan" di navigasi atas atau langsung mengisi formulir pendaftaran di bagian "Jadilah Relawan". Tim kami akan meninjau profil Anda dan menghubungi via WhatsApp dalam waktu 3-5 hari kerja.'
    },
    {
      value: 'item-2',
      question: 'Apakah program pelatihan di PPSW BANTEN dipungut biaya?',
      answer: 'Tidak sama sekali. Seluruh program pelatihan (kelas coding, mentoring bisnis UMKM, pos gizi kesehatan) disediakan gratis 100% bagi perempuan penerima manfaat, didanai oleh donatur individu dan kemitraan CSR.'
    },
    {
      value: 'item-3',
      question: 'Bagaimana penyaluran dana donasi dijamin transparansinya?',
      answer: 'Setiap rupiah dialokasikan secara akuntabel. Kami mempublikasikan laporan penyaluran donasi bulanan di website kami dan mengirimkan salinan laporan tersebut melalui email para donatur. Selain itu, laporan keuangan tahunan kami diaudit oleh Kantor Akuntan Publik (KAP) independen.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-warm-tint relative overflow-hidden">
      {/* Background decoration lights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
            <HelpCircle className="w-3.5 h-3.5" />
            Tanya Jawab Umum
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-secondary dark:text-white tracking-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-zinc-655 dark:text-zinc-400 font-normal text-sm sm:text-base leading-relaxed text-justify">
            Berikut adalah jawaban atas beberapa pertanyaan yang paling sering diajukan mengenai program dan operasional gerakan kami.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Radix UI Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <Accordion.Item
                key={faq.value}
                value={faq.value}
                className="rounded-2xl glass-card border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm overflow-hidden text-left hover:border-primary/20 dark:hover:border-secondary/20 transition-all duration-300 premium-card premium-card-hover"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex-1 flex justify-between items-center px-6 py-5 font-bold text-sm sm:text-base text-secondary dark:text-white hover:text-primary dark:hover:text-accent transition-colors duration-200 cursor-pointer group focus:outline-none">
                    <span className="pr-4 leading-snug">{faq.question}</span>
                    <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-primary dark:group-hover:text-accent transition-transform duration-300 ease-out group-data-[state=open]:rotate-180 shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden data-[state=open]:animate-[slideDown_300ms_cubic-bezier(0.87,_0,_0.13,_1)] data-[state=closed]:animate-[slideUp_300ms_cubic-bezier(0.87,_0,_0.13,_1)]">
                  <div className="px-6 pb-6 pt-1 text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed font-normal border-t border-zinc-100 dark:border-zinc-800/40 mt-1 pt-4 text-justify">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>

      </div>
    </section>
  );
}
