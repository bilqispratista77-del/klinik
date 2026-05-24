'use client'

import { Separator } from '@/components/ui/separator'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  ArrowUpRight,
} from 'lucide-react'

const quickLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Dokter', href: '#doctors' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#contact' },
]

const layananLinks = [
  { label: 'Scaling', href: '#services' },
  { label: 'Tambal Gigi', href: '#services' },
  { label: 'Whitening', href: '#services' },
  { label: 'Behel', href: '#services' },
  { label: 'Implan', href: '#services' },
  { label: 'Pediatric', href: '#services' },
]

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.44a4.85 4.85 0 01-4.84-1.47l-.01-.01 1.85-3.55z" />
    </svg>
  )
}

export default function Footer() {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Top wave divider */}
      <div className="absolute -top-1 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 38.3C1248 33.3 1344 26.7 1392 23.3L1440 20V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
            fill="#0D47A1"
          />
        </svg>
      </div>

      {/* Main Footer Background */}
      <div className="relative mt-10" style={{ backgroundColor: '#0D47A1' }}>
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-blue-500/5" />
          <div className="absolute top-40 -left-20 h-60 w-60 rounded-full bg-cyan-400/5" />
          <div className="absolute bottom-20 right-1/4 h-40 w-40 rounded-full bg-blue-300/5" />
        </div>

        {/* Main Footer Content */}
        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8 lg:pt-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">

            {/* Column 1 - Brand & Description (wider) */}
            <div className="sm:col-span-2 lg:col-span-4 lg:pr-8">
              <div className="mb-5 flex items-center gap-3">
                {/* Tooth SVG Logo */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C9.5 2 7 3.5 7 6.5C7 8 7.5 9 8 10C8.5 11 9 12.5 9 16C9 18 9.5 20 10 21C10.5 22 11 22 11.5 21C12 20 12 18 12 16C12 18 12 20 12.5 21C13 22 13.5 22 14 21C14.5 20 15 18 15 16C15 12.5 15.5 11 16 10C16.5 9 17 8 17 6.5C17 3.5 14.5 2 12 2Z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight text-white">DentaCare</span>
                  <span className="ml-1 text-xs font-medium tracking-wider text-blue-300/70 uppercase">Clinic</span>
                </div>
              </div>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-blue-100/80">
                Klinik gigi terpercaya dengan pelayanan terbaik, peralatan modern,
                dan tim dokter profesional yang siap memberikan senyum terbaik untuk Anda.
              </p>

              {/* Social Media Icons */}
              <div className="mb-8 flex items-center gap-2.5">
                <button
                  className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-blue-200 transition-all duration-300 hover:bg-[#E3F2FD]/20 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/20"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-[18px] w-[18px]" />
                </button>
                <button
                  className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-blue-200 transition-all duration-300 hover:bg-[#E3F2FD]/20 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/20"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-[18px] w-[18px]" />
                </button>
                <button
                  className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-blue-200 transition-all duration-300 hover:bg-[#E3F2FD]/20 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/20"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="h-[18px] w-[18px]" />
                </button>
              </div>

              {/* Mini CTA */}
              <button
                onClick={() => handleScrollTo('#contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Buat Janji Sekarang
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="lg:col-span-2 lg:pl-6">
              <div className="mb-5 flex items-center gap-2">
                <div className="h-1 w-6 rounded-full bg-blue-400/40" />
                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                  Quick Links
                </h3>
              </div>
              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleScrollTo(link.href)}
                      className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-blue-100/70 transition-all duration-200 hover:bg-white/5 hover:text-white focus:outline-none"
                    >
                      <span className="h-0.5 w-0 rounded-full bg-blue-300 transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Layanan */}
            <div className="lg:col-span-3 lg:pl-6">
              <div className="mb-5 flex items-center gap-2">
                <div className="h-1 w-6 rounded-full bg-cyan-400/40" />
                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                  Layanan
                </h3>
              </div>
              <ul className="space-y-1">
                {layananLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleScrollTo(link.href)}
                      className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-blue-100/70 transition-all duration-200 hover:bg-white/5 hover:text-white focus:outline-none"
                    >
                      <span className="h-0.5 w-0 rounded-full bg-cyan-300 transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Kontak */}
            <div className="sm:col-span-2 lg:col-span-3 lg:pl-6">
              <div className="mb-5 flex items-center gap-2">
                <div className="h-1 w-6 rounded-full bg-teal-400/40" />
                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                  Kontak
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-white/5">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/8">
                    <MapPin className="h-4 w-4 text-blue-300" />
                  </div>
                  <span className="text-sm leading-relaxed text-blue-100/70">
                    Jl. Gigi Sehat No. 123, Jakarta Selatan
                  </span>
                </li>
                <li className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-white/5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/8">
                    <Phone className="h-4 w-4 text-blue-300" />
                  </div>
                  <a
                    href="tel:+6281234567890"
                    className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white focus:outline-none"
                  >
                    +62 812-3456-7890
                  </a>
                </li>
                <li className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-white/5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/8">
                    <Mail className="h-4 w-4 text-blue-300" />
                  </div>
                  <a
                    href="mailto:info@dentacare.co.id"
                    className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white focus:outline-none"
                  >
                    info@dentacare.co.id
                  </a>
                </li>
                <li className="flex items-start gap-3 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-white/5">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/8">
                    <Clock className="h-4 w-4 text-blue-300" />
                  </div>
                  <div className="text-sm leading-relaxed text-blue-100/70">
                    <p>Senin - Sabtu</p>
                    <p className="font-medium text-blue-200/90">09:00 - 21:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="bg-white/10" />

        {/* Bottom Bar */}
        <div className="relative mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-blue-200/50">
              &copy; {new Date().getFullYear()} DentaCare Clinic. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-blue-200/50">
              Dibuat dengan
              <Heart className="inline h-3 w-3 fill-blue-300/70 text-blue-300/70" />
              di Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
