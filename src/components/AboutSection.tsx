'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Award,
  Shield,
  Heart,
  Eye,
  Target,
  Clock,
  Stethoscope,
  Sparkles,
  BadgeCheck,
  Microscope,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const stats = [
  { icon: Clock, value: '15+', label: 'Tahun Pengalaman', color: 'from-blue-500 to-dental-blue' },
  { icon: Heart, value: '10.000+', label: 'Pasien Puas', color: 'from-rose-400 to-rose-500' },
  { icon: Stethoscope, value: '5', label: 'Dokter Spesialis', color: 'from-emerald-400 to-emerald-600' },
  { icon: Sparkles, value: '15+', label: 'Layanan Tersedia', color: 'from-amber-400 to-amber-600' },
];

const certifications = [
  { icon: BadgeCheck, label: 'ISO Certified', desc: 'Standar internasional' },
  { icon: Shield, label: 'Sterilisasi', desc: 'Protokol ketat' },
  { icon: Microscope, label: 'Teknologi', desc: 'Peralatan modern' },
  { icon: Award, label: 'Bersertifikat', desc: 'Tim profesional' },
];

const keunggulan = [
  { icon: CheckCircle2, text: 'Peralatan berteknologi terkini & modern' },
  { icon: CheckCircle2, text: 'Tim dokter spesialis berpengalaman' },
  { icon: CheckCircle2, text: 'Sterilisasi ketat sesuai standar internasional' },
  { icon: CheckCircle2, text: 'Lingkungan klinik bersih & nyaman' },
  { icon: TrendingUp, text: 'Pelayanan ramah & profesional' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden mesh-gradient py-24 lg:py-32"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-dental-blue/4 blur-[100px] -top-48 -right-48" />
        <div className="absolute w-72 h-72 rounded-full bg-dental-cyan/4 blur-[80px] bottom-0 -left-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 rounded-full bg-white/80 text-dental-dark-blue border border-dental-blue/15 text-sm font-medium shadow-sm"
          >
            <Heart className="w-3.5 h-3.5 mr-1.5 text-dental-blue" />
            Tentang Kami
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] text-foreground mb-4">
            Kenapa Memilih{' '}
            <span className="gradient-text">DentaCare</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lebih dari 15 tahun melayani keluarga Indonesia dengan pelayanan gigi berkualitas tinggi.
          </p>
        </motion.div>

        {/* Two Column Layout: Image + Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
          {/* Left - Clinic Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main image with decorative frame */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-dental-blue/15 via-dental-cyan/10 to-transparent blur-sm" />
              <Card className="rounded-3xl overflow-hidden border-0 shadow-xl shadow-dental-blue/8 relative">
                <CardContent className="p-0">
                  <img
                    src="/images/clinic-interior.png"
                    alt="Interior DentaCare Clinic"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </CardContent>
              </Card>

              {/* Floating experience badge */}
              <motion.div
                className="absolute -bottom-5 -right-3 sm:right-6 glass-strong rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dental-blue to-dental-cyan flex items-center justify-center shadow-md">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold gradient-text font-[family-name:var(--font-poppins)]">15+</p>
                    <p className="text-xs text-muted-foreground">Tahun Melayani</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Description */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] text-foreground mb-4 leading-tight">
                Klinik Gigi Modern dengan{' '}
                <span className="gradient-text">Pelayanan Terbaik</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                DentaCare Clinic hadir sejak 2009 dengan komitmen memberikan perawatan gigi
                berkualitas tinggi. Didukung oleh tim dokter gigi spesialis berpengalaman dan
                peralatan berteknologi terkini, kami memastikan setiap kunjungan Anda nyaman, aman,
                dan memuaskan.
              </p>

              {/* Keunggulan list */}
              <div className="space-y-3">
                {keunggulan.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-dental-light flex items-center justify-center">
                      <item.icon className="w-3 h-3 text-dental-blue" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sertifikasi Badges */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={cert.label}
                      className="flex items-center gap-2 bg-white rounded-full px-4 py-2.5 border border-dental-blue/8 shadow-sm hover:shadow-md hover:border-dental-blue/20 transition-all duration-300 group cursor-default"
                    >
                      <Icon className="w-4 h-4 text-dental-blue group-hover:scale-110 transition-transform" />
                      <div>
                        <span className="text-sm font-semibold text-foreground">{cert.label}</span>
                        <span className="text-[10px] text-muted-foreground ml-1 hidden sm:inline">· {cert.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Visi & Misi - Full-width elegant layout */}
        <motion.div
          className="mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Visi */}
            <div className="group relative rounded-3xl overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-dental-blue to-dental-cyan opacity-90" />
              <div className="absolute inset-0 dot-pattern opacity-10" />
              <CardContent className="relative p-8 lg:p-10 text-white">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-poppins)] mb-3">
                      Visi Kami
                    </h4>
                    <p className="text-blue-100 leading-relaxed text-[15px]">
                      Menjadi klinik gigi terdepan yang memberikan pelayanan berkualitas tinggi dengan
                      sentuhan kepedulian dan teknologi terkini untuk mewujudkan senyum sehat setiap pasien Indonesia.
                    </p>
                  </div>
                </div>
                {/* Decorative corner element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/10 blur-xl" />
              </CardContent>
            </div>

            {/* Misi */}
            <div className="group relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-dental-dark-blue to-dental-blue opacity-90" />
              <div className="absolute inset-0 dot-pattern opacity-10" />
              <CardContent className="relative p-8 lg:p-10 text-white">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-poppins)] mb-3">
                      Misi Kami
                    </h4>
                    <div className="space-y-2 text-blue-100 text-[15px]">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                        <p>Memberikan perawatan gigi komprehensif yang berkualitas dan terjangkau</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                        <p>Membangun kepercayaan melalui transparansi dan komunikasi terbuka</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                        <p>Terus berinovasi demi kesehatan mulut yang optimal bagi semua</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/10 blur-xl" />
              </CardContent>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} variants={itemVariants}>
                <Card className="group rounded-2xl border-0 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center overflow-hidden card-shine">
                  <CardContent className="p-6 lg:p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-3xl lg:text-4xl font-bold text-foreground font-[family-name:var(--font-poppins)] mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
