import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { successStories } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
export function SuccessStoriesSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.success-header > *', {
        scrollTrigger: {
          trigger: '.success-header',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
      gsap.from('.success-card', {
        scrollTrigger: {
          trigger: '.success-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return <section id="success-stories" ref={sectionRef} className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="success-header text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">Case Studies</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            Our Success Stories
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Explore some of our landmark cases and significant victories that demonstrate 
            our commitment to achieving exceptional results for our clients.
          </p>
        </div>

        {/* Success Stories */}
        <div className="success-grid space-y-12">
          {successStories.map((story, index) => <div key={story.title} className={`success-card grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-16/10 rounded-lg overflow-hidden">
                  <img src={story.image} alt={story.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded text-sm font-medium">
                      {story.category}
                    </span>
                  </div>
                </div>
                {/* Decorative */}
                <div className={`absolute -bottom-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-full h-full border border-accent/30 rounded-lg -z-10`} />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-muted-foreground text-sm uppercase tracking-wider">
                  {story.client}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2 mb-4">
                  {story.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-1">
                      The Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-1">
                      Our Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-1">
                      The Outcome
                    </h4>
                    <p className="text-foreground font-medium leading-relaxed">{story.outcome}</p>
                  </div>
                </div>

                <button className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all group">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}
