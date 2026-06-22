import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);
export function CityFAQ({
  city
}) {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-header > *', {
        scrollTrigger: {
          trigger: '.faq-header',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: '.faq-list',
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
  if (city.faqs.length === 0) return null;
  return <section ref={sectionRef} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="faq-header text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            FAQ
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Common questions about our {city.name} office and legal services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list max-w-3xl mx-auto space-y-4">
          {city.faqs.map((faq, index) => <div key={index} className="faq-item border border-border rounded-lg overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors">
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}
