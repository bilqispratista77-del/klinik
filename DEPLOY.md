# DentaCare Clinic - Website Klinik Gigi

## 📋 Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Form**: React Hook Form + Zod
- **Animation**: Framer Motion
- **Icons**: Lucide React

---

## 🚀 Deploy ke Vercel (Recommended)

### Cara 1: Via GitHub
1. Upload project ini ke repository GitHub
2. Buka [vercel.com](https://vercel.com) → login dengan GitHub
3. Klik **"Add New"** → **"Project"**
4. Pilih repository `dentacare-clinic`
5. Klik **"Deploy"** — selesai!

### Cara 2: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Masuk ke folder project
cd dentacare-deploy

# Deploy
vercel

# Untuk production
vercel --prod
```

> **Note**: Pastikan di `next.config.ts` **tidak ada** baris `output: "export"` saat deploy ke Vercel.

---

## 🌐 Deploy ke cPanel (Shared Hosting)

### Opsi A: Static Export (Tanpa Node.js)
Cocok untuk shared hosting biasa.

1. Buka file `next.config.ts`, ubah menjadi:
```ts
const nextConfig: NextConfig = {
  output: "export",  // ← Uncomment baris ini
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: false },
  images: { unoptimized: true },
};
```

2. Install dependencies & build:
```bash
cd dentacare-deploy
npm install
npm run build
```

3. Folder `out/` akan terbuat — upload **semua isi folder `out/`** ke cPanel:
   - Buka **cPanel** → **File Manager**
   - Masuk ke folder `public_html`
   - Upload seluruh isi folder `out/` ke `public_html/`
   - Website langsung bisa diakses!

### Opsi B: Node.js Hosting (VPS/Dedicated)
Jika cPanel mendukung Node.js (Setup Node.js App):

1. Upload seluruh folder project ke cPanel
2. Buka **cPanel** → **Setup Node.js App**
3. Setting:
   - **Node.js Version**: 18.x atau 20.x
   - **Application Root**: folder project
   - **Application URL**: domain kamu
   - **Application Startup File**: `node_modules/.bin/next`
4. Klik **Create**
5. Lalu jalankan build:
   ```bash
   npm install
   npm run build
   npm start
   ```
6. Restart aplikasi di cPanel

---

## 💻 Development Lokal

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka http://localhost:3000
```

---

## 📁 Struktur File

```
dentacare-deploy/
├── public/
│   ├── images/          # Gambar hero, dokter, galeri
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css  # Theme & custom styles
│   │   ├── layout.tsx   # Root layout + fonts
│   │   └── page.tsx     # Halaman utama
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── DoctorsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTABanner.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   └── lib/
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 📝 Catatan Penting

- **Form Janji Temu**: Saat ini hanya simulate (toast notification). Untuk production, hubungkan ke backend API atau email service (SendGrid, Resend, dll).
- **Google Maps**: Ganti URL embed maps di `ContactSection.tsx` dengan lokasi klinik asli kamu.
- **Gambar**: Ganti gambar di `public/images/` dengan foto asli klinik.
- **Kontak**: Edit info kontak di `Footer.tsx` dan `ContactSection.tsx`.

---

Dibuat dengan Next.js 16 + Tailwind CSS 4 + shadcn/ui
