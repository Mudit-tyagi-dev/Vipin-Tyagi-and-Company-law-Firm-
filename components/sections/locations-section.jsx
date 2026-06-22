import { useEffect, useRef, useState, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cityOffices, stats } from '@/lib/data';
import { MapPin, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const CityMarker = memo(function CityMarker({
  city,
  isActive,
  onHover
}) {
  return <div className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group" style={{
    left: `${city.coordinates.x}%`,
    top: `${city.coordinates.y}%`
  }} onMouseEnter={() => onHover(city.slug)} onMouseLeave={() => onHover(null)}>
      {/* Marker */}
      <Link href={`/locations/${city.slug}`}>
        <div className={`
          relative w-4 h-4 rounded-full transition-all duration-300
          ${isActive ? 'bg-accent scale-150' : 'bg-accent/80 hover:scale-125'}
        `}>
          {/* Pulse Animation */}
          <span className={`
            absolute inset-0 rounded-full bg-accent animate-ping
            ${isActive ? 'opacity-75' : 'opacity-0 group-hover:opacity-50'}
          `} />
          {/* Inner dot */}
          <span className="absolute inset-1 rounded-full bg-white/80" />
        </div>
        
        {/* City Name Label */}
        <span className={`
          absolute left-1/2 -translate-x-1/2 top-full mt-1 whitespace-nowrap text-xs font-medium
          transition-all duration-300 pointer-events-none
          ${isActive ? 'opacity-100 text-accent' : 'opacity-0 group-hover:opacity-100 text-primary-foreground'}
        `}>
          {city.name}
        </span>
      </Link>
    </div>;
});
export function LocationsSection() {
  const sectionRef = useRef(null);
  const [activeCity, setActiveCity] = useState(null);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const handleCityHover = useCallback(slug => {
    setActiveCity(slug);
  }, []);
  const activeCityData = activeCity ? cityOffices.find(c => c.slug === activeCity) : null;
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.locations-header > *', {
        scrollTrigger: {
          trigger: '.locations-header',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Map animation
      gsap.from('.india-map', {
        scrollTrigger: {
          trigger: '.india-map',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Stats counter animation
      ScrollTrigger.create({
        trigger: '.stats-section',
        start: 'top 80%',
        onEnter: () => {
          stats.forEach((stat, index) => {
            const target = parseInt(stat.value.replace(/[^0-9]/g, ''));
            gsap.to({}, {
              duration: 2,
              onUpdate: function () {
                const progress = this.progress();
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.round(target * progress);
                  return newCounters;
                });
              },
              ease: 'power2.out'
            });
          });
        },
        once: true
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return <section id="locations" ref={sectionRef} className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="locations-header text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">Our Presence</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-balance">
            Nationwide Legal Excellence
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed">
            With partner offices across 18+ major cities, we bring world-class legal 
            services closer to you, wherever you are in India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* India Map */}
          <div className="india-map relative">
            
          </div>

          {/* City Info Panel */}
          <div>
            {activeCityData ? <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold mb-1">{activeCityData.fullName}</h3>
                    <p className="text-primary-foreground/70">{activeCityData.state}</p>
                  </div>
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-primary-foreground/80">{activeCityData.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <a href={`tel:${activeCityData.phone}`} className="hover:text-accent transition-colors">
                      {activeCityData.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <a href={`mailto:${activeCityData.email}`} className="hover:text-accent transition-colors">
                      {activeCityData.email}
                    </a>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-accent mb-2">Partner</h4>
                  <p className="font-semibold">{activeCityData.partner.name}</p>
                  <p className="text-primary-foreground/70 text-sm">{activeCityData.partner.designation}</p>
                </div>

                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={`/locations/${activeCityData.slug}`}>
                    View Office Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div> : <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-semibold mb-2">Select a City</h3>
                  <p className="text-primary-foreground/70 mb-6">
                    Hover over a location on the map to see office details
                  </p>
                </div>

                {/* City List */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {cityOffices.slice(0, 9).map(city => <Link key={city.slug} href={`/locations/${city.slug}`} className="px-3 py-2 text-sm text-center rounded bg-white/5 hover:bg-white/10 hover:text-accent transition-colors">
                      {city.name}
                    </Link>)}
                  <Link href="/#locations" className="px-3 py-2 text-sm text-center rounded bg-accent/20 text-accent hover:bg-accent/30 transition-colors">
                    +{cityOffices.length - 9} More
                  </Link>
                </div>
              </div>}
          </div>
        </div>

        {/* Stats */}
        <div className="stats-section grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/20">
          {stats.map((stat, index) => <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-semibold text-accent">
                {counters[index]}{stat.value.includes('+') ? '+' : ''}
              </p>
              <p className="text-primary-foreground/70 mt-2">{stat.label}</p>
            </div>)}
        </div>
      </div>
    </section>;
}
