import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
gsap.registerPlugin(ScrollTrigger);
export function CityTestimonials({
  city
}) {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.city-testimonials-header > *', {
        scrollTrigger: {
          trigger: '.city-testimonials-header',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % city.testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + city.testimonials.length) % city.testimonials.length);
  };
  if (city.testimonials.length === 0) return null;
  const testimonial = city.testimonials[currentIndex];
  return <section ref={sectionRef} className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="city-testimonials-header text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Client Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4">
            What Our {city.name} Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            {/* Quote Icon */}
            <Quote className="w-16 h-16 text-accent/30 absolute top-8 right-8" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-white/30'}`} />)}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-xl md:text-2xl leading-relaxed mb-8">
              &ldquo;{testimonial.content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <img src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-primary-foreground/70 text-sm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            {city.testimonials.length > 1 && <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/20">
                <div className="flex gap-2">
                  {city.testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-accent w-6' : 'bg-white/30 hover:bg-white/50'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full border-white/30 hover:bg-white/10" aria-label="Previous testimonial">
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full border-white/30 hover:bg-white/10" aria-label="Next testimonial">
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </section>;
}
