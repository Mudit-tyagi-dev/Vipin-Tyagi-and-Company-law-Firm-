import { lazy, Suspense } from 'react'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'

const LocationsSection      = lazy(() => import('@/components/sections/locations-section').then(m => ({ default: m.LocationsSection })))
const PracticeAreasSection  = lazy(() => import('@/components/sections/practice-areas-section').then(m => ({ default: m.PracticeAreasSection })))
const WhyChooseUsSection    = lazy(() => import('@/components/sections/why-choose-us-section').then(m => ({ default: m.WhyChooseUsSection })))
const TeamSection           = lazy(() => import('@/components/sections/team-section').then(m => ({ default: m.TeamSection })))
const SuccessStoriesSection = lazy(() => import('@/components/sections/success-stories-section').then(m => ({ default: m.SuccessStoriesSection })))
const TestimonialsSection   = lazy(() => import('@/components/sections/testimonials-section').then(m => ({ default: m.TestimonialsSection })))
const InsightsSection       = lazy(() => import('@/components/sections/insights-section').then(m => ({ default: m.InsightsSection })))
const ContactSection        = lazy(() => import('@/components/sections/contact-section').then(m => ({ default: m.ContactSection })))

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Suspense fallback={null}>
        <LocationsSection />
        <PracticeAreasSection />
        <WhyChooseUsSection />
        <TeamSection />
        <SuccessStoriesSection />
        <TestimonialsSection />
        <InsightsSection />
        <ContactSection />
      </Suspense>
    </>
  )
}