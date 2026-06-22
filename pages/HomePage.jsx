import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { LocationsSection } from '@/components/sections/locations-section';
import { PracticeAreasSection } from '@/components/sections/practice-areas-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { TeamSection } from '@/components/sections/team-section';
import { SuccessStoriesSection } from '@/components/sections/success-stories-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { InsightsSection } from '@/components/sections/insights-section';
import { ContactSection } from '@/components/sections/contact-section';
export default function HomePage() {
  return <>
      <HeroSection />
      <AboutSection />
      <LocationsSection />
      <PracticeAreasSection />
      <WhyChooseUsSection />
      <TeamSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />
    </>;
}
