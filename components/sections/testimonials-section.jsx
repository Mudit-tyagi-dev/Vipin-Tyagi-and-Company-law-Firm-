import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonials } from '@/lib/data';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function TestimonialsSection() {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonials-header > *', {
        scrollTrigger: {
          trigger: '.testimonials-header',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: '.testimonials-container',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="testimonials-header text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our clients&apos; success is our greatest achievement. Here&apos;s what they have 
            to say about working with Apex Legal Partners.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-container max-w-4xl mx-auto">
          <div className="testimonial-card relative bg-card border border-border rounded-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-accent" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-accent fill-accent' : 'text-muted'}`} />)}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <div className="flex gap-2">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-accent w-6' : 'bg-border hover:bg-muted-foreground'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full" aria-label="Previous testimonial">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full" aria-label="Next testimonial">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
