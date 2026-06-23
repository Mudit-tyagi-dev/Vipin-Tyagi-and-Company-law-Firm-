import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Phone, Calendar } from 'lucide-react';
export function CityHeroSection({
  city
}) {
  const heroRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.city-hero-content > *', {
        y: 50,
        opacity: 0
      });
      gsap.to('.city-hero-content > *', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);
  return <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop)'
      }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="city-hero-content max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#locations" className="hover:text-accent transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-accent">{city.name}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">{city.state}, India</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            {city.fullName}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
            Serving clients across {city.serviceAreas.slice(0, 3).join(', ')} 
            {city.serviceAreas.length > 3 && ` and ${city.serviceAreas.length - 3} more areas`} with 
            trusted legal excellence and personalized service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 rounded-md group">
              <Link href="#contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6 rounded-md">
              <a href={`tel:${city.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                {city.phone}
              </a>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
            <div>
              <p className="text-white/60 text-sm">Partner</p>
              <p className="text-white font-medium">{city.partner.name}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Experience</p>
              <p className="text-white font-medium">{city.partner.experience}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Working Hours</p>
              <p className="text-white font-medium">{city.workingHours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
