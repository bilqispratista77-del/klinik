'use client'

import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ibu Ratna Sari',
    initials: 'RS',
    text: 'Saya sangat puas dengan pelayanan di DentaCare. Dokternya ramah dan profesional, hasilnya memuaskan!',
    rating: 5,
    color: 'from-blue-400 to-dental-blue',
  },
  {
    name: 'Bapak Hendra',
    initials: 'BH',
    text: 'Proses pemasangan behel berjalan lancar dan tidak sesakit yang saya bayangkan. Terima kasih DentaCare!',
    rating: 5,
    color: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Anisa Putri',
    initials: 'AP',
    text: 'Whitening gigi di sini hasilnya luar biasa! Gigi saya jadi putih cerah dalam satu sesi.',
    rating: 5,
    color: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Bapak Susanto',
    initials: 'BS',
    text: 'Anak saya dulu takut ke dokter gigi, tapi di DentaCare dokternya sabar dan ramah. Sekarang anak saya antusias kontrol rutin!',
    rating: 5,
    color: 'from-violet-400 to-purple-500',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#E3F2FD' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-dental-blue/5 blur-[120px] -top-40 -right-40" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-dental-cyan/5 blur-[100px] -bottom-20 -left-20" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-dental-blue">
            Testimoni
          </p>
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-[family-name:var(--font-poppins)]">
            Apa Kata <span className="gradient-text">Pasien Kami</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Kepuasan pasien adalah prioritas utama kami. Berikut cerita dari pasien-pasien yang telah merasakan layanan DentaCare.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-x-visible md:pb-0 md:snap-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                className="min-w-[300px] h-full snap-center border border-white/60 bg-white/90 shadow-md backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white md:min-w-0 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-xl bg-dental-light flex items-center justify-center">
                      <Quote className="size-5 text-dental-blue/60" />
                    </div>
                  </div>

                  {/* Stars */}
                  <StarRating rating={testimonial.rating} />

                  {/* Text */}
                  <p className="my-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className={`flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${testimonial.color} text-white text-sm font-bold shadow-md`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">Pasien DentaCare</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 60" className="w-full h-12 sm:h-16" preserveAspectRatio="none">
          <path fill="#F5F7FA" d="M0,20 C360,60 1080,0 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-12 sm:h-16" preserveAspectRatio="none">
          <path fill="#FFFFFF" d="M0,20 C360,60 1080,0 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
