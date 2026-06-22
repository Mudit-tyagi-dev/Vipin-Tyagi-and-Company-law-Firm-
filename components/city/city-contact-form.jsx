import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { practiceAreas } from '@/lib/data';
gsap.registerPlugin(ScrollTrigger);
export function CityContactForm({
  city
}) {
  const sectionRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: '',
    message: ''
  });
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-header > *', {
        scrollTrigger: {
          trigger: '.contact-header',
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
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          city: city.name,
          officeEmail: city.email
        })
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          practiceArea: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" ref={sectionRef} className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="contact-header text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Contact Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-4">
            Schedule a Consultation in {city.name}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ready to discuss your legal needs? Contact our {city.name} office today for 
            a confidential consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-8">
              {isSubmitted ? <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your consultation request has been sent to our {city.name} office. 
                    We will contact you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Submit Another Request
                  </Button>
                </div> : <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} placeholder="+91 98765 43210" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="practiceArea">Practice Area</Label>
                      <Select value={formData.practiceArea} onValueChange={value => setFormData({
                    ...formData,
                    practiceArea: value
                  })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select practice area" />
                        </SelectTrigger>
                        <SelectContent>
                          {practiceAreas.map(area => <SelectItem key={area.slug} value={area.title}>
                              {area.title}
                            </SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea id="message" value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} placeholder="Please describe your legal matter briefly..." rows={5} required />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : <>
                        <Send className="w-5 h-5 mr-2" />
                        Request Consultation
                      </>}
                  </Button>

                  <p className="text-muted-foreground text-sm text-center">
                    By submitting this form, you agree to our privacy policy. 
                    All communications are confidential.
                  </p>
                </form>}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary text-primary-foreground rounded-xl p-8">
              <h3 className="font-serif font-semibold text-xl mb-6">{city.fullName}</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <p>{city.address}</p>
                    <p className="text-primary-foreground/70">{city.name}, {city.state}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <a href={`tel:${city.phone}`} className="hover:text-accent transition-colors">
                    {city.phone}
                  </a>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a href={`mailto:${city.email}`} className="hover:text-accent transition-colors">
                    {city.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                Office Partner
              </h3>
              <p className="font-medium text-foreground">{city.partner.name}</p>
              <p className="text-muted-foreground text-sm mb-4">{city.partner.designation}</p>
              <div className="flex flex-wrap gap-2">
                {city.partner.specializations.slice(0, 2).map(spec => <span key={spec} className="px-3 py-1 bg-accent/10 text-accent rounded text-xs">
                    {spec}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
