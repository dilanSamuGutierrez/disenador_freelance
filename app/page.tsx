import { HeroSection } from "@/components/hero-section"
import { WorkGallery } from "@/components/work-gallery"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WorkGallery />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}

