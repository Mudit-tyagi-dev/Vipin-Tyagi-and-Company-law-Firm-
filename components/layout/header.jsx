import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, MapPin } from "lucide-react";
import { cityOffices } from "@/lib/data";

const navLinks = [
  { label: "Home", section: null },
  { label: "About", section: "about" },
  { label: "Practice Areas", section: "practice-areas" },
  { label: "Locations", section: "locations", hasDropdown: true },
  { label: "Team", section: "team" },
  { label: "TestimonialsSection", section: "testimonials" },
  { label: "Gallery", section: "gallery" },
  { label: "Contact", section: "contact" },
];

const groupedCities = {
  "North India": ["Delhi", "Chandigarh", "Lucknow", "Jaipur"],
  "West India": ["Mumbai", "Ahmedabad", "Pune", "Nagpur", "Indore", "Surat"],
  "South India": ["Bangalore", "Hyderabad", "Chennai", "Kochi"],
  "East India": ["Kolkata", "Patna", "Guwahati"],
};

function scrollToSection(section) {
  if (!section) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(section);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (section) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(section), 400);
    } else {
      scrollToSection(section);
    }
  };

  return (
    <header
      style={
        isScrolled
          ? {
              position: "fixed",
              top: "12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "92%",
              maxWidth: "1280px",
              height: "90px",
              borderRadius: "14px",
            }
          : {
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              width: "100%",
              height: "100px",
              transform: "none",
              borderRadius: "0",
            }
      }
      className={cn(
        "z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg py-1 px-6"
          : "bg-linear-to-b from-black/50 to-transparent py-3 px-0",
      )}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <button
            onClick={() => handleNavClick(null)}
            className="
flex
items-center
justify-center
shrink-0
max-w-30
md:max-w-40
lg:max-w-none
"
          >
            <img
              src="/logo.png"
              alt="Vipin Tyagi Law Firm"
              className="
h-18
sm:h-21
md:h-23
lg:h-18
xl:h-25
2xl:h-29
w-auto
object-contain
"
            />
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center  whitespace-nowrap gap-0.5"
            ref={dropdownRef}
          >
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "locations" ? null : "locations",
                      )
                    }
                    className={cn(
                      "px-3 xl:px-4 py-2 text-sm font-medium rounded-lg flex items-center gap-1.5 transition-all duration-300",
                      isScrolled
                        ? "text-primary hover:bg-primary/10 hover:text-accent"
                        : "text-white hover:bg-white/15 hover:text-accent",
                      activeDropdown === "locations" && "bg-white/10",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === "locations" && "rotate-180",
                      )}
                    />
                  </button>

                  {activeDropdown === "locations" && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                      <div className="bg-white rounded-xl shadow-premium-lg p-6 min-w-140 border border-border">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                          <MapPin className="w-5 h-5 text-accent" />
                          <span className="font-serif font-semibold text-foreground">
                            Our Offices Across India
                          </span>
                        </div>
                        <div className="grid grid-cols-4 gap-5">
                          {Object.entries(groupedCities).map(
                            ([region, cityNames]) => (
                              <div key={region}>
                                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                  {region}
                                </h4>
                                <ul className="space-y-2">
                                  {cityOffices
                                    .filter((c) => cityNames.includes(c.name))
                                    .map((city) => (
                                      <li key={city.slug}>
                                        <span className="text-sm text-foreground flex items-center gap-2 cursor-default">
                                          <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                                          {city.name}
                                        </span>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            ),
                          )}
                        </div>
                        <div className="mt-4 pt-4 border-t border-border">
                          <button
                            onClick={() => {
                              setActiveDropdown(null);
                              handleNavClick("locations");
                            }}
                            className="text-sm text-accent hover:text-accent/80 font-medium flex items-center gap-2"
                          >
                            View All Locations on Map →
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.section)}
                  className={cn(
                    "px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                    isScrolled
                      ? "text-primary hover:bg-primary/10 hover:text-accent"
                      : "text-white hover:bg-white/15 hover:text-accent",
                  )}
                >
                  {link.label}
                </button>
              ),
            )}
          </nav>

          {/* CTA */}
          <div className="flex items-center  whitespace-nowrap gap-2 sm:gap-4">
            <a
              href="tel:+91 9350105180"
              className={cn(
                "hidden md:flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled ? "text-primary" : "text-white",
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 9350105180</span>
            </a>
            <Button
              size="sm"
              onClick={() => handleNavClick("contact")}
              className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg"
            >
              <span className="hidden lg:inline">Free Consultation</span>
              <span className="lg:hidden">Consult</span>
            </Button>
<button
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  className="lg:hidden flex items-center justify-center p-2 text-black ml-auto"
>
  {isMobileMenuOpen ? (
    <X className="w-7 h-7" />
  ) : (
    <Menu className="w-7 h-7" />
  )}
</button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-18 bottom-0 bg-primary overflow-y-auto transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none",
        )}
      >
        <nav className="container-premium py-6 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "locations" ? null : "locations",
                    )
                  }
                  className="w-full px-4 py-3 text-primary-foreground hover:bg-white/10 rounded-lg flex items-center justify-between"
                >
                  <span className="font-medium">{link.label}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      activeDropdown === "locations" && "rotate-180",
                    )}
                  />
                </button>
                {activeDropdown === "locations" && (
                  <div className="pl-4 py-2 grid grid-cols-2 gap-1">
                    {cityOffices.map((city) => (
                      <span
                        key={city.slug}
                        className="px-4 py-2 text-sm text-primary-foreground/70 rounded-lg"
                      >
                        {city.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.section)}
                className="px-4 py-3 text-primary-foreground hover:bg-white/10 rounded-lg text-left font-medium transition-colors"
              >
                {link.label}
              </button>
            ),
          )}

          <div className="pt-6 mt-4 border-t border-white/10 space-y-3">
            <a
              href="tel:+919350105180"
              className="flex items-center gap-3 px-4 py-3 text-primary-foreground hover:bg-white/10 rounded-lg"
            >
              <Phone className="w-5 h-5" />
              +91 9350105180
            </a>
            <Button
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              onClick={() => handleNavClick("contact")}
            >
              Free Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
