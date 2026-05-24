import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DentaCare Clinic - Senyum Sehat Dimulai di Sini",
  description:
    "Klinik dokter gigi modern dengan pelayanan terbaik. Perawatan gigi profesional, teknologi modern, dan sterilisasi terjamin. Jadwalkan konsultasi Anda sekarang!",
  keywords: [
    "klinik gigi",
    "dokter gigi",
    "perawatan gigi",
    "whitening",
    "behel",
    "scaling",
    "implan gigi",
    "tambal gigi",
    "veneer",
  ],
  authors: [{ name: "DentaCare Clinic" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "DentaCare Clinic - Senyum Sehat Dimulai di Sini",
    description:
      "Klinik dokter gigi modern dengan pelayanan terbaik. Perawatan gigi profesional dan teknologi modern.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
