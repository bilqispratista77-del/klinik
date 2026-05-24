import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import DoctorsSection from '@/components/DoctorsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import GallerySection from '@/components/GallerySection'
import CTABanner from '@/components/CTABanner'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DoctorsSection />
        <TestimonialsSection />
        <GallerySection />
        <CTABanner />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
