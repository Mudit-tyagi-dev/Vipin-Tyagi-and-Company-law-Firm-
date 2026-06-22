import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { practiceAreas } from '@/lib/data';
import { ArrowRight, Building2, Shield, Scale, Home, Users, Lightbulb, Gavel, Rocket } from 'lucide-react';
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
export function PracticeAreasSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.practice-header > *', {
        scrollTrigger: {
          trigger: '.practice-header',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
      gsap.from('.practice-card', {
        scrollTrigger: {
          trigger: '.practice-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 80,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return <section id="practice-areas" ref={sectionRef} className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="practice-header text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            Comprehensive Legal Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our team of experienced attorneys provides expert legal counsel across a wide range 
            of practice areas, tailored to meet the unique needs of each client.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="practice-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map(area => {
          const Icon = iconMap[area.icon] || Building2;
          return <div key={area.slug} className="practice-card group relative bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {area.shortDescription}
                  </p>

                  {/* Services Preview */}
                  <ul className="space-y-1.5 mb-5">
                    {area.services.slice(0, 3).map(service => <li key={service} className="text-muted-foreground text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {service}
                      </li>)}
                    {area.services.length > 3 && <li className="text-accent text-sm">+{area.services.length - 3} more services</li>}
                  </ul>

                  {/* CTA */}
                  <Link href={`/#contact`} className="inline-flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                    Get Legal Help
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}
