import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
gsap.registerPlugin(ScrollTrigger);
export function CityOfficeInfo({
  city
}) {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.office-info-card', {
        scrollTrigger: {
          trigger: '.office-info-card',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
      gsap.from('.map-container', {
        scrollTrigger: {
          trigger: '.map-container',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Create Google Maps embed URL
  const mapQuery = encodeURIComponent(`${city.address}, ${city.name}, ${city.state}, India`);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapQuery}`;
  return <section ref={sectionRef} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Office Information */}
          <div className="office-info-card bg-card border border-border rounded-xl p-8">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Office Information
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">{city.address}</p>
                  <p className="text-muted-foreground">{city.name}, {city.state}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Phone</h3>
                  <a href={`tel:${city.phone}`} className="text-muted-foreground hover:text-accent transition-colors">
                    {city.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <a href={`mailto:${city.email}`} className="text-muted-foreground hover:text-accent transition-colors">
                    {city.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">{city.workingHours}</p>
                  <p className="text-muted-foreground text-sm">Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <Button asChild className="w-full mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="map-container">
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-border">
              <iframe src={mapUrl} width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${city.name} Office Location`} className="absolute inset-0" />
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 p-8 bg-muted/50 rounded-xl">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
            Areas We Serve from {city.name}
          </h3>
          <div className="flex flex-wrap gap-3">
            {city.serviceAreas.map(area => <span key={area} className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground">
                {area}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
}
