import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/lib/data";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function TestimonialsSection() {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonials-header > *", {
        scrollTrigger: {
          trigger: ".testimonials-header",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonials-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="testimonials-header text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Google Reviews
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-4 mb-6 text-balance">
            Trusted By Our Clients
          </h2>

          <p className="text-white/70 leading-relaxed">
            Real feedback from clients who trusted Vipin Tyagi & Company for
            legal guidance, representation, and successful resolution of their
            legal matters.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-container max-w-4xl mx-auto">
          <div className="testimonial-card relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-5">
              <Quote className="w-24 h-24 text-accent" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < testimonials[currentIndex].rating
                      ? "text-accent fill-accent"
                      : "text-white/20"
                  }`}
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-8">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-accent/30 to-accent/10 border border-accent/40 flex items-center justify-center shadow-lg shadow-accent/20">
                <span className="text-accent font-bold text-lg">
                  {testimonials[currentIndex].name
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </span>
              </div>

              <div>
                <p className="font-semibold text-white">
                  {testimonials[currentIndex].name}
                </p>

                <p className="text-white/70 text-sm">
                  {testimonials[currentIndex].role},{" "}
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/20">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-accent w-8"
                        : "bg-white/20 hover:bg-white/40 w-2"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-white/20 bg-white/5 hover:bg-accent hover:text-black hover:border-accent transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-white/20 bg-white/5 hover:bg-accent hover:text-black hover:border-accent transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Google Rating */}
          <div className="text-center mt-10">
            <p className="text-accent font-semibold text-lg">
              ⭐ 4.7/5 Google Rating
            </p>
            <p className="text-white/60 text-sm">
              Based on Client Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}