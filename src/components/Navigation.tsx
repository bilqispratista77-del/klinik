"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

/* Custom tooth logo SVG */
function ToothLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 4C13 4 10.5 5.5 9.5 8.5C9 10 9.5 12 10.5 14C11.5 16 12.5 19 13 23C13.3 25.5 13.8 28 14.5 29C15 30 15.5 30 16 28.5C16.5 27 16.5 24.5 17 21C17.5 24.5 17.5 27 18 28.5C18.5 30 19 30 19.5 29C20.2 28 20.7 25.5 21 23C21.5 19 22.5 16 23.5 14C24.5 12 25 10 24.5 8.5C23.5 5.5 21 4 18 4H16Z" />
    </svg>
  );
}

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Dokter", href: "#doctors" },
  { label: "Galeri", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const offset = 80;
        const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    []
  );

  const handleCtaClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setMobileOpen(false);
      const targetEl = document.getElementById("contact");
      if (targetEl) {
        const offset = 80;
        const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/[0.03] border-b border-gray-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2.5 group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-dental-blue to-dental-cyan text-white shadow-md shadow-dental-blue/20 transition-transform group-hover:scale-105 group-hover:shadow-lg">
              <ToothLogo className="size-5" />
            </div>
            <div className="flex flex-col">
              <span
                className="text-xl font-bold tracking-tight text-dental-blue leading-none"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                DentaCare
              </span>
              <span className="text-[9px] text-muted-foreground font-medium tracking-widest uppercase leading-none mt-0.5">
                Dental Clinic
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-dental-light hover:text-dental-blue"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              onClick={handleCtaClick}
              className="rounded-xl bg-gradient-to-r from-dental-blue to-dental-cyan px-6 font-semibold text-white shadow-md shadow-dental-blue/20 transition-all duration-300 hover:shadow-lg hover:shadow-dental-blue/30 hover:-translate-y-0.5"
            >
              Buat Janji
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              onClick={handleCtaClick}
              variant="default"
              size="sm"
              className="rounded-lg bg-gradient-to-r from-dental-blue to-dental-cyan px-3.5 text-xs font-semibold text-white shadow-sm sm:hidden"
            >
              Janji
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-dental-light hover:text-dental-blue rounded-xl"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[300px] bg-white p-0 sm:w-[340px]">
                <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
                {/* Mobile Header */}
                <div className="border-b border-gray-100 px-6 py-5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-dental-blue to-dental-cyan text-white">
                      <ToothLogo className="size-4" />
                    </div>
                    <span
                      className="text-lg font-bold text-dental-blue"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      DentaCare
                    </span>
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col gap-0.5 overflow-y-auto px-3 py-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-dental-light hover:text-dental-blue active:bg-dental-light"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="border-t border-gray-100 px-6 py-5">
                  <Button
                    onClick={handleCtaClick}
                    className="w-full rounded-xl bg-gradient-to-r from-dental-blue to-dental-cyan py-6 font-semibold text-white shadow-md transition-all hover:shadow-lg"
                  >
                    Buat Janji
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
