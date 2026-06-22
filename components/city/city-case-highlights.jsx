import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, ArrowRight } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);
export function CityCaseHighlights({
  city
}) {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.case-header > *', {
        scrollTrigger: {
          trigger: '.case-header',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
      gsap.from('.case-card', {
        scrollTrigger: {
          trigger: '.cases-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  if (city.caseHighlights.length === 0) return null;
  return <section ref={sectionRef} className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="case-header text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Our Track Record
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-4">
            Notable Cases from {city.name}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A selection of successful cases handled by our {city.name} team, demonstrating 
            our expertise and commitment to achieving results.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="cases-grid grid md:grid-cols-2 gap-8">
          {city.caseHighlights.map((caseItem, index) => <div key={index} className="case-card bg-card border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded text-sm font-medium mb-4">
                {caseItem.category}
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {caseItem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {caseItem.description}
              </p>
              <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Outcome</p>
                  <p className="text-muted-foreground text-sm">{caseItem.outcome}</p>
                </div>
              </div>
            </div>)}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all">
            Discuss Your Case With Us
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>;
}
