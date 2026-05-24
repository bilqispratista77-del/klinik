import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // === VERCEL: biarkan default (hapus baris output) ===
  // === CPANEL: ubah output ke "export" ===
  // output: "export",

  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
