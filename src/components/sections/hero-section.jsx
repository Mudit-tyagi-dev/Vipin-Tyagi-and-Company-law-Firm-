import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";

export function HeroSection() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const { scrollTo } = useScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(".hero-line", {
        y: 100,
        opacity: 0,
      });
      gsap.set(".hero-subtitle", {
        y: 30,
        opacity: 0,
      });
      gsap.set(".hero-buttons", {
        y: 30,
        opacity: 0,
      });
      gsap.set(".hero-badge", {
        scale: 0.8,
        opacity: 0,
      });
      gsap.set(".hero-stats", {
        y: 50,
        opacity: 0,
      });
      gsap.set(".hero-overlay", {
        opacity: 0,
      });

      // Timeline
      const tl = gsap.timeline({
        delay: 0.3,
      });
      tl.to(".hero-overlay", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      })
        .to(
          ".hero-badge",
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        )
        .to(
          ".hero-line",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .to(
          ".hero-subtitle",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .to(
          ".hero-buttons",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .to(
          ".hero-stats",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.2",
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans"
    >
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Desktop Background */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('./banner5.png')",
          }}
        />
        {/* Mobile Background */}
        <div
          className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('./mobile-bg.png')",
          }}
        />
        {/* Overlays - Hidden on mobile to preserve light cream/gold theme */}
        <div className="hero-overlay absolute inset-0 bg-linear-to-r from-primary/25 via-primary/20 to-primary/20 hidden md:block" />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent opacity-50 hidden md:block" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative container mx-auto px-4 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-20"
      >
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 bg-primary/10 border border-primary/20 md:bg-white/10 md:border-white/20 rounded-full px-4 py-2 mb-6 md:mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary md:text-white/90 text-sm font-medium">
              Trusted by 600+ Corporate Clients
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary md:text-white leading-tight mb-4 md:mb-6">
            <span className="hero-line block">Legal Excellence</span>
            <span className="hero-line block">
              Across <span className="text-accent">India</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-sm sm:text-base md:text-lg md:text-xl text-primary/80 md:text-white/80 max-w-2xl leading-relaxed mb-8 md:mb-10 text-balance">
            Trusted Advisors and Proven Results. <br/>India&apos;s premier law firm with
            partner offices in 18+ cities, delivering exceptional legal
            solutions with expertise. integrity and 
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col md:flex-row gap-4 mb-12 md:mb-16 w-full max-w-md md:max-w-none">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="w-full md:w-auto bg-accent/90 text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 rounded-md group cursor-pointer hover:z-20 hover:-translate-y-1 transition-transform duration-00"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
              <ArrowRight className="w-7 h-7 ml-2 group-hover:translate-x-1 transition-transform " />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("locations")}
              className="w-full md:w-auto bg-accent/90 text-accent-foreground relative z-10 text-base px-8 py-6 rounded-md cursor-pointer hover:z-20 hover:-translate-y-1 transition-transform duration-300"
            >
              <MapPin className="w-7 h-7 mr-2 text-black" />
              Find Nearest Office 
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform " />
            </Button>
          </div>

          {/* Stats */}
          <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-primary/20 md:border-white/20">
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-accent">
                18+
              </p>
              <p className="text-primary/70 md:text-white/70 text-xs sm:text-sm mt-1">Cities Served</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-accent">
                150+
              </p>
              <p className="text-primary/70 md:text-white/70 text-xs sm:text-sm mt-1">Legal Experts</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-accent">
                22,000+
              </p>
              <p className="text-primary/70 md:text-white/70 text-xs sm:text-sm mt-1">Cases Handled</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-accent">
                600+
              </p>
              <p className="text-primary/70 md:text-white/70 text-xs sm:text-sm mt-1">Corporate Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/30 md:border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary/50 md:bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
