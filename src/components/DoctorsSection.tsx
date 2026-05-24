'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, GraduationCap, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Doctor {
  name: string
  title: string
  specialization: string
  experience: string
  image: string
  specialties: string[]
}

const doctors: Doctor[] = [
  {
    name: 'drg. Ahmad Fauzi, Sp.PD',
    title: 'Prosthodontist',
    specialization: 'Prosthodonti (Gigi Tiruan & Implan)',
    experience: '15 tahun',
    image: '/images/doctor-1.png',
    specialties: ['Implan Gigi', 'Gigi Tiruan', 'Kawat Gigi'],
  },
  {
    name: 'drg. Sarah Wijaya, Sp.Ort',
    title: 'Ortodontis',
    specialization: 'Ortodonti (Kawat Gigi)',
    experience: '10 tahun',
    image: '/images/doctor-2.png',
    specialties: ['Kawat Gigi', 'Invisalign', 'Perawatan Anak'],
  },
  {
    name: 'drg. Budi Santoso, Sp.KG',
    title: 'Konservasi Gigi',
    specialization: 'Konservasi Gigi (Tambal & Endodontik)',
    experience: '12 tahun',
    image: '/images/doctor-3.png',
    specialties: ['Tambal Gigi', 'Root Canal', 'Pencabutan'],
  },
]

const accentColors = [
  { gradient: 'from-blue-500 to-dental-blue', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
  { gradient: 'from-pink-500 to-rose-500', badge: 'bg-pink-50 text-pink-700 border-pink-200' },
  { gradient: 'from-amber-500 to-orange-500', badge: 'bg-amber-50 text-amber-700 border-amber-200' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function DoctorsSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="doctors" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-dental-blue/3 blur-[150px] top-1/2 -translate-y-1/2 -left-40" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-dental-cyan/3 blur-[120px] top-1/4 -right-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium rounded-full bg-dental-light/80 text-dental-dark-blue border border-dental-blue/15">
            <GraduationCap className="w-3.5 h-3.5 mr-1.5" />
            Tim Dokter
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-[family-name:var(--font-poppins)]">
            <span className="gradient-text">Tim Dokter Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dokter gigi profesional berpengalaman yang siap memberikan pelayanan terbaik
          </p>
        </motion.div>

        {/* Doctor Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {doctors.map((doctor, index) => {
            const colors = accentColors[index]
            return (
              <motion.div key={doctor.name} variants={cardVariants}>
                <Card className="group h-full bg-white border border-gray-100/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 card-shine">
                  {/* Photo Area */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] w-full bg-gradient-to-br from-gray-50 to-gray-100">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Title badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className={cn('px-3 py-1.5 text-xs font-semibold backdrop-blur-md border', colors.badge)}>
                        {doctor.title}
                      </Badge>
                    </div>
                    {/* Gradient accent line */}
                    <div className={cn('absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r', colors.gradient)} />
                  </div>

                  <CardContent className="p-6 flex flex-col">
                    {/* Doctor Name */}
                    <h3 className="text-lg font-bold text-foreground mb-1 font-[family-name:var(--font-poppins)]">
                      {doctor.name}
                    </h3>

                    {/* Specialization */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {doctor.specialization}
                    </p>

                    {/* Stats Row */}
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <Briefcase className={cn('w-4 h-4 text-dental-blue')} />
                        <span className="text-sm font-semibold text-foreground">
                          {doctor.experience}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-dental-blue" />
                        <span className="text-sm font-medium text-muted-foreground">
                          Bersertifikat PDGI
                        </span>
                      </div>
                    </div>

                    {/* Specialty Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {doctor.specialties.map((spec) => (
                        <Badge
                          key={spec}
                          variant="outline"
                          className="text-xs px-2.5 py-1 rounded-full font-normal bg-dental-light/50 text-dental-dark-blue border-dental-blue/10 hover:bg-dental-light transition-colors"
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="rounded-full px-6 py-2.5 text-sm font-medium border-dental-blue/20 text-dental-dark-blue bg-white/80 hover:bg-dental-light hover:border-dental-blue/40 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Konsultasi dengan Dokter Kami
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
