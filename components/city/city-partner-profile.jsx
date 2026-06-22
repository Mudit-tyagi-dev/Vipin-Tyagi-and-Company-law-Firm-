import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Award, GraduationCap } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);
export function CityPartnerProfile({
  city
}) {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.partner-image', {
        scrollTrigger: {
          trigger: '.partner-image',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
      gsap.from('.partner-content > *', {
        scrollTrigger: {
          trigger: '.partner-content',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return <section ref={sectionRef} className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Partner Image */}
          <div className="partner-image lg:col-span-2">
            <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-xl overflow-hidden">
              <img src={city.partner.image} alt={city.partner.name} fill className="object-cover" />
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent rounded-xl -z-10" />
            </div>
          </div>

          {/* Partner Info */}
          <div className="partner-content lg:col-span-3">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Office Partner
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-2">
              {city.partner.name}
            </h2>
            <p className="text-accent font-medium mb-6">{city.partner.designation}</p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {city.partner.bio}
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-serif font-semibold text-foreground">
                    {city.partner.experience}
                  </p>
                  <p className="text-muted-foreground text-sm">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-serif font-semibold text-foreground">500+</p>
                  <p className="text-muted-foreground text-sm">Cases Won</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-serif font-semibold text-foreground">
                    {city.partner.specializations.length}
                  </p>
                  <p className="text-muted-foreground text-sm">Specializations</p>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {city.partner.specializations.map(spec => <span key={spec} className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm">
                    {spec}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
