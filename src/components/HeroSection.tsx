'use client';

import { motion } from 'framer-motion';
import { Calendar, ChevronRight, ShieldCheck, Clock, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

/* Custom tooth SVG for decorative use */
function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor">
      <path d="M32 6C26 6 20 9.5 18 16C16.5 20.5 17 25 19 29C20 31.5 21.5 35 22 40C22.5 45 23 50 24.5 53C25.5 55 27 55 28 53C29 51 29.5 46 30 41C30.5 46 31 51 32 53C33 55 34.5 55 35.5 53C37 50 37.5 45 38 40C38.5 35 40 31.5 41 29C43 25 43.5 20.5 42 16C40 9.5 34 6 28 6H32Z" />
    </svg>
  );
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #E3F2FD 0%, #BBDEFB 30%, #FFFFFF 65%, #F0F8FF 100%)',
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] bg-dental-blue/10 -top-40 -right-40 animate-float-slow" />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] bg-dental-cyan/8 bottom-0 -left-32 animate-float" />
        <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] bg-dental-teal/5 top-1/3 left-1/4 animate-float-delay" />

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern opacity-50" />

        {/* Floating tooth shapes */}
        <motion.div
          className="absolute text-dental-blue/6"
          style={{ top: '12%', right: '18%' }}
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ToothIcon className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute text-dental-blue/4"
          style={{ top: '65%', right: '8%' }}
          animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <ToothIcon className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute text-dental-cyan/5"
          style={{ top: '80%', left: '5%' }}
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <ToothIcon className="w-20 h-20" />
        </motion.div>

        {/* Scattered circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-dental-blue/8"
            style={{
              width: `${6 + i * 3}px`,
              height: `${6 + i * 3}px`,
              top: `${20 + i * 14}%`,
              left: i % 2 === 0 ? `${8 + i * 5}%` : undefined,
              right: i % 2 !== 0 ? `${10 + i * 7}%` : undefined,
            }}
            animate={{ y: [0, -8 - i * 2, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[85vh]">
          {/* Left Content */}
          <motion.div
            className="flex flex-col gap-7 lg:gap-9 max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <Badge
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full glass shadow-sm"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dental-blue opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-dental-blue" />
                </span>
                Klinik Gigi Terpercaya Sejak 2009
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.1] tracking-tight font-[family-name:var(--font-poppins)]"
              variants={itemVariants}
            >
              <span className="text-foreground">Senyum Sehat</span>
              <br />
              <span className="gradient-text">Dimulai di Sini</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-md"
              variants={itemVariants}
            >
              Perawatan gigi modern & nyaman dengan teknologi terkini dan dokter spesialis berpengalaman.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button
                size="lg"
                className="group relative bg-dental-blue hover:bg-dental-dark-blue text-white px-8 py-6 text-base font-semibold rounded-2xl shadow-xl shadow-dental-blue/25 transition-all duration-300 hover:shadow-2xl hover:shadow-dental-blue/30 hover:-translate-y-1 overflow-hidden"
                onClick={() => scrollTo('contact')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <Calendar className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Buat Janji Sekarang</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-dental-blue/20 text-dental-dark-blue bg-white/50 backdrop-blur-sm px-8 py-6 text-base font-semibold rounded-2xl hover:bg-white hover:border-dental-blue/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                onClick={() => scrollTo('services')}
              >
                Lihat Layanan
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div className="flex flex-wrap items-center gap-5 pt-1" variants={itemVariants}>
              {[
                { icon: ShieldCheck, label: 'Sterilisasi Terjamin' },
                { icon: Clock, label: '15+ Tahun Pengalaman' },
                { icon: Star, label: '4.9 Rating Google' },
                { icon: Users, label: '10.000+ Pasien' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-dental-light">
                    <item.icon className="w-4 h-4 text-dental-blue" />
                  </div>
                  <span className="hidden sm:inline">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Hero Image with decorative frame */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Decorative frame behind image */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-dental-blue/20 via-dental-cyan/10 to-dental-teal/15 blur-sm animate-pulse-glow" />
              <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-sm border border-white/40" />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-dental-blue/15">
                <img
                  src="/images/hero.png"
                  alt="DentaCare Clinic - Perawatan Gigi Modern"
                  className="w-full h-auto max-w-lg lg:max-w-xl object-cover"
                  loading="eager"
                />
                {/* Subtle overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Floating glass card - appointment */}
              <motion.div
                className="absolute -bottom-5 -left-5 sm:-left-10 glass-strong rounded-2xl p-4 shadow-xl animate-float"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-dental-blue to-dental-cyan flex items-center justify-center shadow-md">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-medium">Janji Berikutnya</p>
                    <p className="text-sm font-bold text-foreground">Senin, 09:00</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating glass card - rating */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-right-8 glass-strong rounded-2xl p-3 sm:p-4 shadow-xl animate-float-delay"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">4.9/5</p>
                    <p className="text-[10px] text-muted-foreground">10K+ Review</p>
                  </div>
                </div>
              </motion.div>

              {/* Small floating badge - patients */}
              <motion.div
                className="absolute top-1/2 -right-6 sm:-right-14 glass-strong rounded-xl px-3 py-2 shadow-lg hidden md:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['bg-dental-blue', 'bg-dental-cyan', 'bg-dental-teal'].map((bg, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full ${bg} border-2 border-white flex items-center justify-center`}>
                        <span className="text-[8px] text-white font-bold">
                          {['A', 'B', 'C'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] font-semibold text-foreground whitespace-nowrap">
                    +2.5K pasien bulan ini
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-16 sm:h-20" preserveAspectRatio="none">
          <path fill="#F5F7FA" d="M0,48 C240,80 480,16 720,48 C960,80 1200,16 1440,48 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
