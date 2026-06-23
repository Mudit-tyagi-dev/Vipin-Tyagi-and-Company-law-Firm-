import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { practiceAreas, cityOffices } from '@/lib/data';
const quickLinks = [{
  href: '/#about',
  label: 'About Us'
}, {
  href: '/#team',
  label: 'Our Team'
}, {
  href: '/#success-stories',
  label: 'Success Stories'
}, {
  href: '/#insights',
  label: 'Legal Insights'
}, {
  href: '/#contact',
  label: 'Contact Us'
}];
const socialLinks = [{
  href: 'https://linkedin.com',
  icon: Linkedin,
  label: 'LinkedIn'
}, {
  href: 'https://twitter.com',
  icon: Twitter,
  label: 'Twitter'
}, {
  href: 'https://www.facebook.com/vipintyagiandcompany/',
  icon: Facebook,
  label: 'Facebook'
}, {
  href: 'https://instagram.com',
  icon: Instagram,
  label: 'Instagram'
}];
export function Footer() {
  const featuredCities = cityOffices.slice(0, 8);
  const featuredPracticeAreas = practiceAreas.slice(0, 6);
  return <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      {/* Main Footer */}
      <div className="container-premium section-padding relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* About Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 rounded overflow-hidden bg-accent/10">
                <img src="/download.png" alt="Vipin Tyagi Law Firm" width={48} height={48} className="object-contain" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg group-hover:text-accent transition-colors">
                  VIPIN TYAGI & Company
                </h3>
                <p className="text-xs text-primary-foreground/70 tracking-[0.2em] uppercase">
                  LAW FIRM
                </p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              India&apos;s trusted law firm with offices across 16+ cities. Delivering 
              exceptional legal solutions with integrity, expertise, and commitment 
              to excellence. National presence, global vision.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {featuredPracticeAreas.map(area => <li key={area.slug}>
                  <Link href={`/#practice-areas`} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{area.title}</span>
                  </Link>
                </li>)}
              <li>
                <Link href="/#practice-areas" className="text-accent hover:text-accent/80 text-sm font-medium">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              Our Offices
            </h4>
            <ul className="space-y-3 mb-4">
              {featuredCities.map(city => <li key={city.slug}>
                  <Link href={`/locations/${city.slug}`} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                    <MapPin className="w-3.5 h-3.5 text-accent/60" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{city.name}</span>
                  </Link>
                </li>)}
            </ul>
            <Link href="/#locations" className="text-accent hover:text-accent/80 text-sm font-medium">
              View All {cityOffices.length} Locations →
            </Link>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="tel:+911145678900" className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group p-4 rounded-xl hover:bg-white/5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/60 uppercase tracking-wider mb-1">Call Us</p>
                <p className="font-semibold">+91 9350105180</p>
              </div>
            </a>
            <a href="mailto:contact@vipintyagilawfirm.in" className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group p-4 rounded-xl hover:bg-white/5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/60 uppercase tracking-wider mb-1">Email Us</p>
                <p className="font-semibold text-sm sm:text-base">vipintyagiandcompany@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 text-primary-foreground/80 p-4 rounded-xl sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/60 uppercase tracking-wider mb-1">Head Office</p>
                <p className="font-semibold">Chamber No. 304 , District Court, Ghaziabad-201002, UP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative">
        <div className="container-premium py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Vipin Tyagi Law Firm. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/privacy" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
