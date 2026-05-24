'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

/* ==================== CUSTOM SVG DENTAL ICONS ==================== */

function ScalingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" className="fill-current opacity-10" />
      <path d="M14 28C14 28 16 18 18 14C19 12 20 10 22 10C24 10 24 13 24 15C24 17 24 20 26 20C28 20 28 17 28 15C28 13 28 10 30 10C32 10 33 12 34 14C36 18 38 28 38 28" className="stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 28L24 32L32 24" className="stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Water spray dots */}
      <circle cx="16" cy="16" r="1.5" className="fill-current opacity-60" />
      <circle cx="12" cy="22" r="1" className="fill-current opacity-40" />
      <circle cx="18" cy="20" r="1" className="fill-current opacity-50" />
    </svg>
  )
}

function FillingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" className="fill-current opacity-10" />
      {/* Tooth shape */}
      <path d="M24 8C20 8 17 10 16 14C15 17 15.5 20 17 23C18 25 19 28 19.5 33C19.8 36 20.5 39 21 40C21.5 41 22.5 41 23 39.5C23.5 38 23.5 35 24 31C24.5 35 24.5 38 25 39.5C25.5 41 26.5 41 27 40C27.5 39 28.2 36 28.5 33C29 28 30 25 31 23C32.5 20 33 17 32 14C31 10 28 8 24 8Z" className="stroke-current" strokeWidth="2" strokeLinejoin="round" />
      {/* Filling mark */}
      <path d="M20 16L24 20L28 14" className="stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WhiteningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" className="fill-current opacity-10" />
      {/* Tooth */}
      <path d="M24 10C20 10 18 12.5 17 16C16 19 16.5 21.5 17.5 23.5C18.5 25.5 19.5 28 20 32C20.3 34.5 20.8 37 21.2 38C21.5 39 22 39 22.5 37.5C23 36 23 33.5 23.5 30C24 33.5 24 36 24.5 37.5C25 39 25.5 39 25.8 38C26.2 37 26.7 34.5 27 32C27.5 28 28.5 25.5 29.5 23.5C30.5 21.5 31 19 30 16C29 12.5 27 10 23 10H24Z" className="stroke-current" strokeWidth="2" strokeLinejoin="round" />
      {/* Sparkles for whitening */}
      <path d="M34 10L36 14L40 12L36 16L34 20L32 16L28 18L32 14L34 10Z" className="fill-current opacity-70" />
      <path d="M10 18L11.5 20L14 19L11.5 21L10 24L8.5 21L6 22L8.5 20L10 18Z" className="fill-current opacity-50" />
      <path d="M36 24L37 26L39 25L37 27L36 29L35 27L33 28L35 26L36 24Z" className="fill-current opacity-40" />
    </svg>
  )
}

function VeneerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" className="fill-current opacity-10" />
      {/* Tooth base */}
      <path d="M24 12C21 12 19 14 18.5 17C18 19.5 18.5 21 19 22.5C19.5 24 20 26 20.5 29C20.7 31 21 33 21.5 34C21.8 35 22.3 35 22.5 34C23 33 23 31 23.5 28.5C24 31 24 33 24.5 34C24.7 35 25.2 35 25.5 34C26 33 26.3 31 26.5 29C27 26 27.5 24 28 22.5C28.5 21 29 19.5 28.5 17C28 14 26 12 23 12H24Z" className="stroke-current" strokeWidth="2" strokeLinejoin="round" />
      {/* Veneer layer (front overlay) */}
      <path d="M20 14C22 12 26 12 28 14L29 17C29 19 28.5 21 28 22.5C27.5 24 27 26 26.5 29L24 28L21.5 29C21 26 20.5 24 20 22.5C19.5 21 19 19 19 17L20 14Z" className="stroke-current" strokeWidth="2" strokeDasharray="4 2" opacity="60" />
      {/* Arrow showing layer */}
      <path d="M33 16L36 20M36 16L36 20L40 20" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="60" />
    </svg>
  )
}

function BracesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" className="fill-current opacity-10" />
      {/* Tooth row */}
      <path d="M12 20C14 16 18 14 22 16C24 17 24 19 22 20C20 21 18 22 18 24C18 26 20 27 22 26C24 25 26 24 28 26C30 28 32 27 32 24C32 21 30 20 28 21C26 22 24 23 22 22C20 21 18 22 18 24" className="stroke-current" strokeWidth="2" strokeLinecap="round" />
      {/* Brackets */}
      <rect x="15" y="18" width="3" height="5" rx="1" className="fill-current opacity-60" />
      <rect x="22" y="17" width="3" height="5" rx="1" className="fill-current opacity-60" />
      <rect x="29" y="18" width="3" height="5" rx="1" className="fill-current opacity-60" />
      {/* Wire */}
      <path d="M14 20.5L17 20M23 19.5L24 20M30 20.5L33 20" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" opacity="50" />
      {/* Arrow for alignment */}
      <path d="M20 32L24 36L28 32" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="50" />
      <path d="M24 28V36" className="stroke-current" strokeWidth="2" strokeLinecap="round" opacity="50" />
    </svg>
  )
}

function SurgeryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" className="fill-current opacity-10" />
      {/* Tooth (wisdom tooth, more complex shape) */}
      <path d="M22 8C19 8 16 10 15 14C14 17 14.5 20 16 22C17 23.5 18 26 18.5 30C19 33 19.5 36 20 38C20.3 39 21 39.5 21.5 38C22 36.5 22 34 22.5 30C23 34 23 36.5 23.5 38C24 39.5 24.7 39 25 38C25.5 36 26 33 26.5 30C27 26 28 23.5 29 22C30.5 20 31 17 30 14C29 10 26 8 23 8H22Z" className="stroke-current" strokeWidth="2" strokeLinejoin="round" />
      {/* Forceps / extraction tool */}
      <path d="M32 8L28 16M36 12L32 20" className="stroke-current" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 18C24 22 28 26 32 22" className="stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ImplantIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" className="fill-current opacity-10" />
      {/* Implant screw (lower part) */}
      <rect x="20" y="26" width="8" height="14" rx="1" className="stroke-current" strokeWidth="2" />
      <path d="M20 30H28M20 34H28M20 38H28" className="stroke-current" strokeWidth="1.5" opacity="50" />
      {/* Screw thread lines */}
      <path d="M19 28L22 26M29 28L26 26" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" opacity="50" />
      <path d="M19 32L22 30M29 32L26 30" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" opacity="50" />
      <path d="M19 36L22 34M29 36L26 34" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" opacity="50" />
      {/* Crown (upper part) */}
      <path d="M20 26C20 20 22 12 24 10C26 12 28 20 28 26" className="stroke-current" strokeWidth="2" strokeLinejoin="round" />
      {/* Abutment connection */}
      <rect x="22" y="24" width="4" height="3" rx="0.5" className="fill-current opacity-30" />
      {/* Small arrow showing "implant" direction */}
      <path d="M32 18L36 22M36 18V22H32" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="50" />
    </svg>
  )
}

function PediatricIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" className="fill-current opacity-10" />
      {/* Small tooth (child tooth) */}
      <path d="M22 12C20 12 18.5 13.5 18 16C17.5 18 18 20 19 21C19.5 22 20 24 20.5 27C20.7 29 21 31 21.5 32C21.8 33 22.2 33 22.5 31.5C23 30 23 28 23.5 25C24 28 24 30 24.5 31.5C24.8 33 25.2 33 25.5 32C26 31 26.3 29 26.5 27C27 24 27.5 22 28 21C29 20 29.5 18 29 16C28.5 13.5 27 12 25 12H22Z" className="stroke-current" strokeWidth="2" strokeLinejoin="round" />
      {/* Happy face */}
      <circle cx="21" cy="18" r="1" className="fill-current" />
      <circle cx="26" cy="18" r="1" className="fill-current" />
      <path d="M22 22C23 23 25 23 26 22" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
      {/* Heart */}
      <path d="M36 10C34 8 31 9 31 12C31 15 36 18 36 18C36 18 41 15 41 12C41 9 38 8 36 10Z" className="fill-current opacity-40" />
      {/* Small star */}
      <path d="M10 30L11 32L13 31L11 33L10 36L9 33L7 34L9 32L10 30Z" className="fill-current opacity-30" />
    </svg>
  )
}

/* ==================== END CUSTOM ICONS ==================== */

type IconComponent = React.ElementType

interface Service {
  name: string
  description: string
  price: string
  icon: IconComponent
  category: string
  color: string
}

const categories = [
  'Semua',
  'Perawatan Dasar',
  'Estetika',
  'Ortodonti',
  'Bedah',
  'Anak',
] as const

const services: Service[] = [
  {
    name: 'Scaling & Pembersihan Karang Gigi',
    description:
      'Membersihkan karang gigi dan plak secara menyeluruh untuk menjaga kesehatan gusi dan mencegah penyakit periodontal.',
    price: 'Rp 300.000 - Rp 500.000',
    icon: ScalingIcon,
    category: 'Perawatan Dasar',
    color: 'from-sky-400 to-blue-500',
  },
  {
    name: 'Tambal Gigi',
    description:
      'Perbaikan gigi berlubang menggunakan bahan tambal berkualitas tinggi yang tahan lama dan estetis.',
    price: 'Rp 250.000 - Rp 800.000',
    icon: FillingIcon,
    category: 'Perawatan Dasar',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Whitening Pemutihan Gigi',
    description:
      'Pemutihan gigi profesional untuk mendapatkan senyum putih bersinar dalam waktu singkat.',
    price: 'Rp 1.500.000 - Rp 3.000.000',
    icon: WhiteningIcon,
    category: 'Estetika',
    color: 'from-amber-300 to-orange-400',
  },
  {
    name: 'Veneer Gigi',
    description:
      'Lapisan tipis porcelain yang dipasang di permukaan gigi untuk memperbaiki bentuk dan warna gigi.',
    price: 'Rp 3.000.000 - Rp 7.000.000/pegang',
    icon: VeneerIcon,
    category: 'Estetika',
    color: 'from-pink-400 to-rose-500',
  },
  {
    name: 'Behel / Kawat Gigi',
    description:
      'Perawatan ortodonti untuk merapikan susunan gigi dengan teknik modern dan nyaman.',
    price: 'Rp 5.000.000 - Rp 15.000.000',
    icon: BracesIcon,
    category: 'Ortodonti',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Bedah Gigi Bungsu',
    description:
      'Pencabutan gigi bungsu yang rumit dilakukan oleh dokter bedah berpengalaman.',
    price: 'Rp 1.500.000 - Rp 5.000.000',
    icon: SurgeryIcon,
    category: 'Bedah',
    color: 'from-red-400 to-rose-600',
  },
  {
    name: 'Implan Gigi',
    description:
      'Penggantian gigi hilang dengan implan titanium berkualitas tinggi untuk hasil permanen.',
    price: 'Rp 10.000.000 - Rp 25.000.000/gigi',
    icon: ImplantIcon,
    category: 'Bedah',
    color: 'from-violet-400 to-purple-600',
  },
  {
    name: 'Pediatric Dentistry',
    description:
      'Perawatan gigi khusus anak dengan pendekatan ramah dan menyenangkan.',
    price: 'Rp 200.000 - Rp 500.000',
    icon: PediatricIcon,
    category: 'Anak',
    color: 'from-cyan-400 to-sky-500',
  },
]

const categoryColors: Record<string, string> = {
  'Perawatan Dasar': 'bg-sky-100 text-sky-700',
  Estetika: 'bg-pink-100 text-pink-700',
  Ortodonti: 'bg-emerald-100 text-emerald-700',
  Bedah: 'bg-red-100 text-red-700',
  Anak: 'bg-cyan-100 text-cyan-700',
}

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua')

  const filteredServices =
    activeCategory === 'Semua'
      ? services
      : services.filter((s) => s.category === activeCategory)

  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-dental-blue/3 blur-[150px] -top-40 -left-40" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-dental-cyan/3 blur-[120px] -bottom-20 -right-20" />
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
            <Heart className="w-3.5 h-3.5 mr-1.5" />
            Layanan Kami
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-[family-name:var(--font-poppins)]">
            <span className="gradient-text">Layanan Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Perawatan gigi lengkap dengan teknologi modern dan dokter spesialis
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full max-w-3xl"
          >
            <TabsList className="w-full h-auto flex flex-wrap justify-center gap-1.5 p-2 bg-gradient-to-r from-dental-soft-gray to-dental-light rounded-2xl shadow-sm">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className={cn(
                    'px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300',
                    'data-[state=active]:shadow-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-dental-blue data-[state=active]:to-dental-cyan data-[state=active]:text-white',
                    'data-[state=active]:scale-[1.02]',
                    'hover:bg-white/80'
                  )}
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-14">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <Card className="group h-full bg-white border border-gray-100/80 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden card-shine">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Icon + Category Badge */}
                      <div className="flex items-start justify-between mb-5">
                        <div
                          className={cn(
                            'w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg',
                            'bg-gradient-to-br ' + service.color + ' text-white'
                          )}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <Badge
                          variant="secondary"
                          className={cn(
                            'text-[10px] font-semibold px-2.5 py-1 rounded-full border-0',
                            categoryColors[service.category]
                          )}
                        >
                          {service.category}
                        </Badge>
                      </div>

                      {/* Service Name */}
                      <h3 className="font-bold text-[15px] text-foreground mb-2 leading-snug font-[family-name:var(--font-poppins)]">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                        {service.description}
                      </p>

                      {/* Price */}
                      <div className="mt-auto pt-4 border-t border-gray-100/80">
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                          Mulai dari
                        </span>
                        <p className="text-dental-blue font-bold text-sm mt-0.5">
                          {service.price}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="group relative rounded-2xl px-8 py-6 text-base font-semibold shadow-xl shadow-dental-blue/20 hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-dental-blue to-dental-cyan hover:from-dental-dark-blue hover:to-dental-blue hover:-translate-y-1 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <MessageCircle className="w-5 h-5 mr-2 relative z-10" />
            <span className="relative z-10">Konsultasi Sekarang</span>
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            Konsultasi awal gratis untuk semua pasien baru
          </p>
        </motion.div>
      </div>

      {/* Bottom wave to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-12 sm:h-16" preserveAspectRatio="none">
          <path fill="#F5F7FA" d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
