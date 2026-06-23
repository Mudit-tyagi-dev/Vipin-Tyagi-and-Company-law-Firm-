import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { teamMembers } from '@/lib/data';
import { Linkedin, Mail } from 'lucide-react';
export function TeamSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-header > *', {
        scrollTrigger: {
          trigger: '.team-header',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
      gsap.from('.team-card', {
        scrollTrigger: {
          trigger: '.team-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return <section id="team" ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="team-header text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">Our Leadership</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            Meet Our Distinguished Team
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our leadership team combines decades of legal expertise with a shared commitment 
            to excellence and client success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => <div key={member.name} className="team-card group relative">
              {/* Image Container */}
              <div className="relative aspect-auto] overflow-hidden rounded-xl mb-5">
                <img src={member.image} alt={member.name} fill className="w-full h-90 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-accent transition-colors" aria-label={`Connect with ${member.name} on LinkedIn`}>
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-accent transition-colors" aria-label={`Email ${member.name}`}>
                    <Mail className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="font-serif font-semibold text-xl text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-2">{member.designation}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Decorative Border */}
              <div className="absolute -bottom-2 -right-2 w-full h-full border border-accent/30 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>)}
        </div>
      </div>
    </section>;
}
