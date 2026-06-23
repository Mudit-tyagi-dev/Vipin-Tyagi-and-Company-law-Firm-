import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Users, Briefcase, Building, CheckCircle, MessageSquare } from 'lucide-react';

const features = [{
  icon: MapPin,
  title: 'National Presence',
  description: 'Partner offices in 18+ major cities ensuring local expertise with national reach.'
}, {
  icon: Users,
  title: 'Experienced Attorneys',
  description: '150+ legal professionals with decades of combined courtroom and advisory experience.'
}, {
  icon: Briefcase,
  title: 'Strategic Solutions',
  description: 'Tailored legal strategies designed to achieve optimal outcomes for every client.'
}, {
  icon: Building,
  title: 'Client-Centric Approach',
  description: 'Building lasting relationships through personalized attention and dedicated service.'
}, {
  icon: CheckCircle,
  title: 'Proven Track Record',
  description: '25,000+ successfully handled cases across diverse practice areas.'
}, {
  icon: MessageSquare,
  title: 'Transparent Communication',
  description: 'Regular updates and clear explanations at every stage of your legal journey.'
}];
export function WhyChooseUsSection() {
  const sectionRef = useRef(null);
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from('.why-header > *', {
  //       scrollTrigger: {
  //         trigger: '.why-header',
  //         start: 'top 80%',
  //         toggleActions: 'play none none none'
  //       },
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.15,
  //       ease: 'power3.out'
  //     });
  //     gsap.from('.feature-item', {
  //       scrollTrigger: {
  //         trigger: '.features-grid',
  //         start: 'top 80%',
  //         toggleActions: 'play none none none'
  //       },
  //       y: 60,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.1,
  //       ease: 'power3.out'
  //     });
  //   }, sectionRef);
  //   return () => ctx.revert();
  // }, []);
  return <section ref={sectionRef} className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white/5 rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-800px h-800px border border-white/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="why-header text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-balance">
            Vipin Tyagi and Company 
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed">
            Our team of experienced advocates are committed to providing reliable and professional legal services. We have a proven track record of success, and our clients have come to rely on us for our commitment to excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(feature => <div key={feature.title} className="feature-item group p-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-300">
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}
