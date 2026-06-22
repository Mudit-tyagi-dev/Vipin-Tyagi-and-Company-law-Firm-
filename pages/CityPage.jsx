import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { cityOffices } from '@/lib/data';
import { CityHeroSection } from '@/components/city/city-hero-section';
import { CityOfficeInfo } from '@/components/city/city-office-info';
import { CityPartnerProfile } from '@/components/city/city-partner-profile';
import { CityServices } from '@/components/city/city-services';
import { CityTestimonials } from '@/components/city/city-testimonials';
import { CityCaseHighlights } from '@/components/city/city-case-highlights';
import { CityFAQ } from '@/components/city/city-faq';
import { CityContactForm } from '@/components/city/city-contact-form';
export default function CityPage() {
  const {
    city: citySlug
  } = useParams();
  const city = cityOffices.find(c => c.slug === citySlug);
  useEffect(() => {
    if (city) {
      document.title = `${city.name} Office | Best Lawyers in ${city.name} | Vipin Tyagi Law Firm`;
    }
  }, [city]);
  if (!city) {
    return <Navigate to="/404" replace />;
  }
  return <>
      <CityHeroSection city={city} />
      <CityOfficeInfo city={city} />
      <CityPartnerProfile city={city} />
      <CityServices city={city} />
      {city.testimonials.length > 0 && <CityTestimonials city={city} />}
      {city.caseHighlights.length > 0 && <CityCaseHighlights city={city} />}
      {city.faqs.length > 0 && <CityFAQ city={city} />}
      <CityContactForm city={city} />
    </>;
}
