'use client'

import { motion } from 'framer-motion'

export default function CTABanner() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className="relative w-full overflow-hidden py-20"
      style={{
        background: 'linear-gradient(135deg, #2196F3 0%, #1565C0 100%)',
      }}
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Large circle top-left */}
        <div
          className="absolute -left-20 -top-20 h-64 w-64 rounded-full opacity-10"
          style={{ backgroundColor: '#ffffff' }}
        />
        {/* Medium circle top-right */}
        <div
          className="absolute -right-10 top-10 h-40 w-40 rounded-full opacity-10"
          style={{ backgroundColor: '#ffffff' }}
        />
        {/* Small circle bottom-left */}
        <div
          className="absolute bottom-10 left-1/4 h-24 w-24 rounded-full opacity-10"
          style={{ backgroundColor: '#ffffff' }}
        />
        {/* Large circle bottom-right */}
        <div
          className="absolute -bottom-16 right-1/4 h-48 w-48 rounded-full opacity-10"
          style={{ backgroundColor: '#ffffff' }}
        />
        {/* Scattered small decorative dots */}
        <div className="absolute left-[10%] top-[30%] h-3 w-3 rounded-full bg-white/10" />
        <div className="absolute left-[20%] top-[60%] h-2 w-2 rounded-full bg-white/15" />
        <div className="absolute left-[70%] top-[20%] h-4 w-4 rounded-full bg-white/8" />
        <div className="absolute left-[80%] top-[70%] h-2 w-2 rounded-full bg-white/12" />
        <div className="absolute left-[50%] top-[15%] h-3 w-3 rounded-full bg-white/10" />
        <div className="absolute left-[40%] top-[80%] h-2 w-2 rounded-full bg-white/15" />
        {/* Decorative tooth shapes (circles with tooth-like patterns) */}
        <svg
          className="absolute left-[5%] top-[15%] h-12 w-12 text-white/5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C9.5 2 7 3.5 7 6.5C7 8 7.5 9 8 10C8.5 11 9 12.5 9 16C9 18 9.5 20 10 21C10.5 22 11 22 11.5 21C12 20 12 18 12 16C12 18 12 20 12.5 21C13 22 13.5 22 14 21C14.5 20 15 18 15 16C15 12.5 15.5 11 16 10C16.5 9 17 8 17 6.5C17 3.5 14.5 2 12 2Z" />
        </svg>
        <svg
          className="absolute right-[8%] top-[45%] h-16 w-16 text-white/5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C9.5 2 7 3.5 7 6.5C7 8 7.5 9 8 10C8.5 11 9 12.5 9 16C9 18 9.5 20 10 21C10.5 22 11 22 11.5 21C12 20 12 18 12 16C12 18 12 20 12.5 21C13 22 13.5 22 14 21C14.5 20 15 18 15 16C15 12.5 15.5 11 16 10C16.5 9 17 8 17 6.5C17 3.5 14.5 2 12 2Z" />
        </svg>
        <svg
          className="absolute left-[60%] top-[10%] h-10 w-10 text-white/5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C9.5 2 7 3.5 7 6.5C7 8 7.5 9 8 10C8.5 11 9 12.5 9 16C9 18 9.5 20 10 21C10.5 22 11 22 11.5 21C12 20 12 18 12 16C12 18 12 20 12.5 21C13 22 13.5 22 14 21C14.5 20 15 18 15 16C15 12.5 15.5 11 16 10C16.5 9 17 8 17 6.5C17 3.5 14.5 2 12 2Z" />
        </svg>
        <svg
          className="absolute right-[15%] bottom-[15%] h-14 w-14 text-white/5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C9.5 2 7 3.5 7 6.5C7 8 7.5 9 8 10C8.5 11 9 12.5 9 16C9 18 9.5 20 10 21C10.5 22 11 22 11.5 21C12 20 12 18 12 16C12 18 12 20 12.5 21C13 22 13.5 22 14 21C14.5 20 15 18 15 16C15 12.5 15.5 11 16 10C16.5 9 17 8 17 6.5C17 3.5 14.5 2 12 2Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Jadwalkan Konsultasi Anda Hari Ini
        </motion.h2>

        <motion.p
          className="mx-auto mb-8 max-w-2xl text-lg text-blue-100 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Dapatkan konsultasi GRATIS dan pemeriksaan gigi menyeluruh dari dokter
          spesialis kami.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-lg transition-all duration-200 hover:bg-blue-50 hover:shadow-xl hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Buat Janji Sekarang
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
