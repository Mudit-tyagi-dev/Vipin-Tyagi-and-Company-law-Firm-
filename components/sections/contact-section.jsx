import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { practiceAreas, cityOffices } from "@/lib/data";

export function ContactSection() {
  const sectionRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    practiceArea: "",
    message: "",
  });
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-header > *", {
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(".contact-info", {
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          practiceArea: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="contact-header text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            Schedule a Consultation
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ready to discuss your legal needs? Contact us today for a
            confidential consultation with one of our experienced attorneys.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="contact-form lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your consultation request has been received. One of our
                    attorneys will contact you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Preferred City</Label>
                      <Select
                        value={formData.city}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            city: value,
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a city" />
                        </SelectTrigger>
                        <SelectContent>
                          {cityOffices.map((city) => (
                            <SelectItem key={city.slug} value={city.name}>
                              {city.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="practiceArea">Practice Area</Label>
                    <Select
                      value={formData.practiceArea}
                      onValueChange={(value) =>
                        setFormData({
                          ...formData,
                          practiceArea: value,
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select practice area" />
                      </SelectTrigger>
                      <SelectContent>
                        {practiceAreas.map((area) => (
                          <SelectItem key={area.slug} value={area.title}>
                            {area.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      placeholder="Please describe your legal matter briefly..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Request Consultation
                      </>
                    )}
                  </Button>

                  <p className="text-muted-foreground text-sm text-center">
                    By submitting this form, you agree to our privacy policy.
                    All communications are confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
          {/* Contact Info */}
<div className="contact-info lg:col-span-2 space-y-0">
  <div className="bg-primary text-primary-foreground rounded-xl overflow-hidden">
    
    {/* Header */}
    <div className="p-8 pb-6">
      <h3 className="font-serif font-semibold text-xl mb-6">Head Office</h3>
      <div className="space-y-4">
        <div className="flex gap-4">
          <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
          <div>
            <p className="font-medium">Chamber No. 304, District Court</p>
            <p className="text-primary-foreground/70">Ghaziabad - 201002, UP</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Phone className="w-5 h-5 text-accent shrink-0" />
          <a href="tel:+919350105180" className="hover:text-accent transition-colors">
            +91 9350105180
          </a>
        </div>
        <div className="flex gap-4">
          <Mail className="w-5 h-5 text-accent shrink-0" />
          <a href="mailto:vipintyagiandcompany@gmail.com" className="hover:text-accent transition-colors break-all">
            vipintyagiandcompany@gmail.com
          </a>
        </div>
        <div className="flex gap-4">
          <Clock className="w-5 h-5 text-accent shrink-0" />
          <div>
            <p>Mon – Sat: 10:00 AM – 5:00 PM</p>
            <p className="text-primary-foreground/70">Sunday: By Appointment</p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-white/10 mx-8" />

    {/* Directions */}
    <div className="p-8 pt-6">
      <p className="text-primary-foreground/70 text-sm mb-4">
        Find us at District Court Complex, Raj Nagar, Ghaziabad
      </p>
      
        <a href="https://www.google.com/maps/dir//Vipin+Tyagi+and+Company+(Law+Firm),+Ch.+No.+304,+District+Court,+Raj+Nagar,+Ghaziabad,+Uttar+Pradesh+201002/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390cf1b95f35f2d9:0x1af85ef17761359f?sa=X&ved=1t:57443&ictx=111"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors w-full justify-center"
      >
        <MapPin className="w-5 h-5" />
        Get Directions on Google Maps
      </a>
    </div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
}
