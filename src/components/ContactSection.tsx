'use client'

import { useState, useEffect, useSyncExternalStore } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Clock,
  Send,
  CalendarDays,
  Sun,
  SunMedium,
  Moon,
} from 'lucide-react'

const bookingSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  whatsapp: z
    .string()
    .min(10, 'Nomor WhatsApp minimal 10 digit')
    .regex(/^[0-9+\-\s]+$/, 'Format nomor tidak valid'),
  email: z.string().email('Email tidak valid'),
  service: z.string().min(1, 'Pilih layanan yang diinginkan'),
  date: z.string().min(1, 'Pilih tanggal yang diinginkan'),
  message: z.string().optional(),
})

type BookingFormValues = z.infer<typeof bookingSchema>

const services = [
  'Pemeriksaan Gigi Umum',
  'Scaling & Pembersihan Karang Gigi',
  'Whitening / Pemutihan Gigi',
  'Pemasangan Behel (Orthodonti)',
  'Tambal Gigi',
  'Pencabutan Gigi',
  'Implan Gigi',
  'Veneer Gigi',
  'Perawatan Saluran Akar',
  'Perawatan Gigi Anak',
  'Gigi Palsu',
  'Konsultasi Lainnya',
]

const schedule = [
  { day: 'Senin', time: '09:00 - 21:00', icon: SunMedium },
  { day: 'Selasa', time: '09:00 - 21:00', icon: SunMedium },
  { day: 'Rabu', time: '09:00 - 21:00', icon: SunMedium },
  { day: 'Kamis', time: '09:00 - 21:00', icon: SunMedium },
  { day: 'Jumat', time: '09:00 - 21:00', icon: SunMedium },
  { day: 'Sabtu', time: '09:00 - 21:00', icon: Sun },
  { day: 'Minggu', time: '10:00 - 18:00', icon: Moon },
]

function getTodayIndex(): number {
  const day = new Date().getDay() // 0=Sun, 1=Mon, ...
  return day === 0 ? 6 : day - 1 // Map to Mon=0...Sun=6
}

const emptySubscribe = () => () => {}

function useIsMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false)
}

export default function ContactSection() {
  const mounted = useIsMounted()
  const todayIdx = mounted ? getTodayIndex() : -1
  const now = mounted
    ? (() => {
        const d = new Date()
        return { hour: d.getHours(), isSunday: d.getDay() === 0 }
      })()
    : { hour: 0, isSunday: false }

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      whatsapp: '',
      email: '',
      service: '',
      date: '',
      message: '',
    },
  })

  const onSubmit = async (_data: BookingFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success(
      'Janji temu berhasil dikirim! Tim kami akan menghubungi Anda dalam 1x24 jam.',
      {
        description: 'Terima kasih telah memilih DentaCare Clinic.',
      }
    )
    form.reset()
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-24"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Kontak
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Buat Janji Temu
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Jadwalkan kunjungan Anda dengan mudah. Konsultasi awal GRATIS!
            Kami siap membantu Anda mendapatkan senyum sehat yang impian.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left Column - Booking Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-lg">
              <CardHeader className="space-y-1 pb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <CalendarDays className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Formulir Janji Temu</CardTitle>
                    <CardDescription>
                      Isi data di bawah untuk menjadwalkan kunjungan Anda
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Nama Lengkap */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Masukkan nama lengkap"
                                className="h-11 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Nomor WhatsApp */}
                      <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nomor WhatsApp</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="08xx-xxxx-xxxx"
                                className="h-11 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="email@contoh.com"
                              className="h-11 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Layanan */}
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Layanan</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-11 rounded-xl">
                                  <SelectValue placeholder="Pilih layanan" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Tanggal */}
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tanggal Kunjungan</FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                className="h-11 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Pesan Tambahan */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pesan Tambahan</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tulis keluhan atau pesan Anda (opsional)"
                              rows={3}
                              className="rounded-xl resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 rounded-xl bg-primary text-base font-semibold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <span className="mr-2 inline-block size-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 size-5" />
                          Kirim Janji Temu
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Hours + Map */}
          <div className="space-y-6 lg:col-span-2">
            {/* Jam Operasional Card */}
            <Card className="border-0 shadow-lg overflow-hidden">
              {/* Gradient header */}
              <div className="bg-gradient-to-br from-primary via-[#1565C0] to-[#0D47A1] px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Jam Operasional</h3>
                    <p className="text-sm text-blue-100/80">Kunjungan & Konsultasi</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-4 pt-2">
                <div className="space-y-0.5">
                  {schedule.map((item, index) => {
                    const isToday = index === todayIdx
                    const IconComp = item.icon
                    return (
                      <div
                        key={item.day}
                        className={`flex items-center justify-between rounded-xl px-3.5 py-3 transition-all duration-200 ${
                          isToday
                            ? 'bg-primary/8 border border-primary/15 shadow-sm'
                            : 'hover:bg-muted/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComp
                            className={`h-4 w-4 ${
                              isToday ? 'text-primary' : 'text-muted-foreground/60'
                            }`}
                          />
                          <span
                            className={`text-sm font-medium ${
                              isToday ? 'text-primary font-bold' : 'text-foreground/80'
                            }`}
                          >
                            {item.day}
                            {isToday && (
                              <span className="ml-2 inline-flex items-center rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                                Hari Ini
                              </span>
                            )}
                          </span>
                        </div>
                        <span
                          className={`text-sm tabular-nums ${
                            isToday
                              ? 'font-bold text-primary'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {item.time}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Status indicator */}
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                  </span>
                  <span className="text-sm font-medium text-green-700">
                    {mounted
                  ? now.isSunday
                    ? now.hour >= 10 && now.hour < 18
                      ? 'Klinik Buka Sekarang'
                      : 'Klinik Tutup Saat Ini'
                    : now.hour >= 9 && now.hour < 21
                      ? 'Klinik Buka Sekarang'
                      : 'Klinik Tutup Saat Ini'
                  : 'Memuat...'
                }
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="border-0 shadow-lg overflow-hidden p-0">
              <div className="bg-gradient-to-br from-primary via-[#1565C0] to-[#0D47A1] px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
                    <MapPinIcon />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Lokasi Kami</h3>
                    <p className="text-xs text-blue-100/80">Jl. Gigi Sehat No. 123, Jakarta Selatan</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.29270852842!2d106.7588361!3d-6.2297416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi DentaCare Clinic"
                  className="w-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function MapPinIcon() {
  return (
    <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
