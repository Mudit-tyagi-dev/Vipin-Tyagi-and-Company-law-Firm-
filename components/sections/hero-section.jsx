import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
export function HeroSection() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set('.hero-line', {
        y: 100,
        opacity: 0
      });
      gsap.set('.hero-subtitle', {
        y: 30,
        opacity: 0
      });
      gsap.set('.hero-buttons', {
        y: 30,
        opacity: 0
      });
      gsap.set('.hero-badge', {
        scale: 0.8,
        opacity: 0
      });
      gsap.set('.hero-stats', {
        y: 50,
        opacity: 0
      });
      gsap.set('.hero-overlay', {
        opacity: 0
      });

      // Timeline
      const tl = gsap.timeline({
        delay: 0.3
      });
      tl.to('.hero-overlay', {
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      }).to('.hero-badge', {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, '-=0.5').to('.hero-line', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      }, '-=0.3').to('.hero-subtitle', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4').to('.hero-buttons', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3').to('.hero-stats', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.2');
    }, heroRef);
    return () => ctx.revert();
  }, []);
  return <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute  inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/banner.png')",
      }} />
         <div className="hero-overlay absolute inset-0 bg-linear-to-r from-primary/75 via-primary/20 to-primary/20" /> 
        <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent opacity-60" /> 
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="absolute top-20 right-20 w-64 h-64 border border-accent/20 rounded-full" />
        <div className="absolute top-40 right-40 w-96 h-96 border border-accent/10 rounded-full" />
      </div> */}

      {/* Content */}
      <div ref={contentRef} className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Trusted by 700+ Corporate Clients</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight mb-6">
            <span className="hero-line block">Legal Excellence</span>
            <span className="hero-line block">Across <span className="text-accent">India</span></span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
            Trusted Advisors. Proven Results. India&apos;s premier law firm with partner offices 
            in 18+ cities, delivering exceptional legal solutions with integrity and expertise.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 rounded-md group">
              <Link href="/#contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30  hover:bg-accent/90 text-base px-8 py-6 rounded-md group">
              <Link href="/#locations">
                <MapPin className="w-5 h-5 mr-2" />
                Find Nearest Office
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl md:text-4xl font-serif font-semibold text-accent">18+</p>
              <p className="text-white/70 text-sm mt-1">Cities Served</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-semibold text-accent">150+</p>
              <p className="text-white/70 text-sm mt-1">Legal Experts</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-semibold text-accent">25,000+</p>
              <p className="text-white/70 text-sm mt-1">Cases Handled</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-semibold text-accent">700+</p>
              <p className="text-white/70 text-sm mt-1">Corporate Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>;
}
