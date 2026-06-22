import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { practiceAreas } from '@/lib/data';
import { ArrowRight, Building2, Shield, Scale, Home, Users, Lightbulb, Gavel, Rocket } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);
const iconMap = {
  Building2,
  Shield,
  Scale,
  Home,
  Users,
  Lightbulb,
  Gavel,
  Rocket
};
export function CityServices({
  city
}) {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-header > *', {
        scrollTrigger: {
          trigger: '.services-header',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return <section ref={sectionRef} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="services-header text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-4">
            Legal Services in {city.name}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our {city.name} office provides comprehensive legal services across all major 
            practice areas, with local expertise and personalized attention.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map(area => {
          const Icon = iconMap[area.icon] || Building2;
          return <div key={area.slug} className="service-card group p-6 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {area.shortDescription}
                </p>
                <Link href="#contact" className="inline-flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
                  Get Help
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>;
        })}
        </div>
      </div>
    </section>;
}
