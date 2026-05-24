'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { X } from 'lucide-react'

const galleryItems = [
  {
    src: '/images/clinic-interior.png',
    alt: 'Interior Klinik',
    caption: 'Interior Klinik',
  },
  {
    src: '/images/gallery-1.png',
    alt: 'Hasil Whitening',
    caption: 'Hasil Whitening',
  },
  {
    src: '/images/gallery-2.png',
    alt: 'Perawatan Anak',
    caption: 'Perawatan Anak',
  },
  {
    src: '/images/gallery-3.png',
    alt: 'Prosedur Scaling',
    caption: 'Prosedur Scaling',
  },
  {
    src: '/images/gallery-4.png',
    alt: 'Pemasangan Behel',
    caption: 'Pemasangan Behel',
  },
  {
    src: '/images/gallery-5.png',
    alt: 'Pasien Puas',
    caption: 'Pasien Puas',
  },
]

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<{
    src: string
    alt: string
    caption: string
  } | null>(null)

  const openLightbox = (item: (typeof galleryItems)[number]) => {
    setActiveImage(item)
    setLightboxOpen(true)
  }

  return (
    <section
      id="gallery"
      className="py-16 md:py-24"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Galeri
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Galeri Klinik
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Lihat fasilitas modern dan hasil perawatan berkualitas di DentaCare
            Clinic.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              onClick={() => openLightbox(item)}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="w-full p-4">
                  <p className="text-sm font-semibold text-white">
                    {item.caption}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-white/80">
                    <X className="hidden size-3" />
                    Klik untuk memperbesar
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl border-0 bg-black/95 p-0 sm:max-w-4xl">
          <DialogTitle className="sr-only">{activeImage?.caption ?? 'Galeri'}</DialogTitle>
          <DialogDescription className="sr-only">
            {activeImage?.caption ?? 'Gambar galeri DentaCare'}
          </DialogDescription>
          <button
            className="absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightboxOpen(false)}
            aria-label="Tutup"
          >
            <X className="size-4" />
          </button>
          {activeImage && (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="rounded-lg object-contain"
                sizes="90vw"
              />
            </div>
          )}
          {activeImage && (
            <div className="bg-black/95 px-6 pb-4 pt-2">
              <p className="text-center text-sm font-medium text-white/90">
                {activeImage.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
