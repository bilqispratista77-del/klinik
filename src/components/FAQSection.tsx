'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const faqItems = [
  {
    question: 'Apakah scaling gigi sakit?',
    answer:
      'Scaling gigi umumnya tidak sakit. Anda mungkin merasakan sedikit ketidaknyamanan, terutama jika ada karang gigi yang banyak. Kami menggunakan teknik modern yang meminimalkan rasa sakit.',
  },
  {
    question: 'Berapa lama proses pemasangan behel?',
    answer:
      'Proses pemasangan behel awal membutuhkan waktu sekitar 1-2 jam. Durasi perawatan total bervariasi antara 1-3 tahun tergantung kompleksitas kasus.',
  },
  {
    question: 'Apakah bisa menggunakan BPJS?',
    answer:
      'Ya, kami menerima BPJS Kesehatan untuk perawatan gigi dasar seperti pencabutan gigi dan tambal gigi. Silakan konsultasikan untuk informasi lebih lanjut.',
  },
  {
    question: 'Seberapa sering harus kontrol ke dokter gigi?',
    answer:
      'Kami merekomendasikan kontrol rutin setiap 6 bulan sekali untuk menjaga kesehatan gigi dan gusi Anda secara optimal.',
  },
  {
    question: 'Apakah tersedia layanan darurat?',
    answer:
      'Ya, kami menyediakan layanan darurat gigi. Silakan hubungi kami di nomor WhatsApp untuk penanganan cepat.',
  },
  {
    question: 'Berapa biaya konsultasi awal?',
    answer:
      'Konsultasi awal di klinik kami GRATIS. Anda akan mendapatkan pemeriksaan menyeluruh dan rencana perawatan tanpa biaya.',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-dental-blue/3 blur-[150px] -bottom-40 -right-40" />
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-dental-blue to-dental-cyan shadow-lg shadow-dental-blue/20">
            <HelpCircle className="size-7 text-white" />
          </div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-dental-blue">
            FAQ
          </p>
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-[family-name:var(--font-poppins)]">
            Pertanyaan yang Sering <span className="gradient-text">Diajukan</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Temukan jawaban atas pertanyaan yang paling sering ditanyakan oleh pasien kami.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-dental-soft-gray/30 p-3 sm:p-4 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-100/80 last:border-b-0 px-1 rounded-lg data-[state=open]:bg-white/80 data-[state=open]:shadow-sm transition-all duration-200"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-4 sm:text-base data-[state=open]:text-dental-blue transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-sm text-muted-foreground mb-3">Masih ada pertanyaan lain?</p>
          <Button
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            variant="outline"
            className="rounded-full px-6 py-2.5 text-sm font-medium border-dental-blue/20 text-dental-dark-blue bg-white/80 hover:bg-dental-light hover:border-dental-blue/40 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Hubungi Kami
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
