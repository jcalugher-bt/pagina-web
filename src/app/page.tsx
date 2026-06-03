import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import AboutSection from '@/components/AboutSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Portfolio />
      <AboutSection />
      <Testimonials />
    </>
  )
}
