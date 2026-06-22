import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, MapPin } from "lucide-react";
import { cityOffices } from "@/lib/data";
const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/#about",
    label: "About",
  },
  {
    href: "/#practice-areas",
    label: "Practice Areas",
  },
  {
    href: "/#locations",
    label: "Locations",
    hasDropdown: true,
    dropdownType: "locations",
  },
  {
    href: "/#team",
    label: "Team",
  },
  {
    href: "/#testimonials",
    label: "Testimonials",
  },
  {
    href: "/#insights",
    label: "Blog",
  },
  {
    href: "/#contact",
    label: "Contact",
  },
];
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const pathname = location.pathname;
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener("scroll", handleScroll, {
  //     passive: true,
  //   });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);
  const groupedCities = {
    north: cityOffices.filter((c) =>
      ["Delhi", "Chandigarh", "Lucknow", "Jaipur"].includes(c.name),
    ),
    west: cityOffices.filter((c) =>
      ["Mumbai", "Ahmedabad", "Pune", "Nagpur", "Indore"].includes(c.name),
    ),
    south: cityOffices.filter((c) =>
      ["Bangalore", "Hyderabad", "Chennai", "Kochi"].includes(c.name),
    ),
    east: cityOffices.filter((c) =>
      ["Kolkata", "Bhubaneswar", "Guwahati"].includes(c.name),
    ),
  };
  return (
    <header
      className={cn(
        "absolute top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        // isScrolled
        //   ? "bg-primary/98 backdrop-blur-xl shadow-premium py-2 sm:py-3"
        //   : "bg-linear-to-b from-black/50 to-transparent py-4 sm:py-6",
      )}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative ">
              <img
                src="/logo.png"
                height={140}
                width={150}
                alt="Vipin Tyagi Law Firm"
                className=" object-fit-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.95)]"
              />
            </div>
            {/* <div className="hidden xs:block">
              <h1
                className={cn(
                  "font-serif font-bold text-base sm:text-lg lg:text-xl tracking-tight transition-colors leading-tight",
                  isScrolled ? "text-primary-foreground" : "text-white",
                )}
              >
                VIPIN TYAGI
              </h1>
              <p
                className={cn(
                  "text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-colors",
                  isScrolled ? "text-primary-foreground/70" : "text-white/70",
                )}
              >
                LAW FIRM
              </p>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            ref={dropdownRef}
          >
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.dropdownType
                          ? null
                          : link.dropdownType || null,
                      )
                    }
                    className={cn(
                      "px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-1.5 rounded-lg",
                      "hover:bg-white/10",
                      isScrolled ? "text-primary-foreground" : "text-white",
                      activeDropdown === link.dropdownType && "bg-white/10",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === link.dropdownType && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Locations Mega Dropdown */}
                  {link.dropdownType === "locations" &&
                    activeDropdown === "locations" && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                        <div className="bg-white rounded-xl shadow-premium-lg p-6 min-w-150 border border-border">
                          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                            <MapPin className="w-5 h-5 text-accent" />
                            <span className="font-serif font-semibold text-foreground">
                              Our Offices Across India
                            </span>
                          </div>
                          <div className="grid grid-cols-4 gap-6">
                            <div>
                              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                North India
                              </h4>
                              <ul className="space-y-2">
                                {groupedCities.north.map((city) => (
                                  <li key={city.slug}>
                                    <Link
                                      href={`/locations/${city.slug}`}
                                      className="text-sm text-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                                      {city.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                West India
                              </h4>
                              <ul className="space-y-2">
                                {groupedCities.west.map((city) => (
                                  <li key={city.slug}>
                                    <Link
                                      href={`/locations/${city.slug}`}
                                      className="text-sm text-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                                      {city.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                South India
                              </h4>
                              <ul className="space-y-2">
                                {groupedCities.south.map((city) => (
                                  <li key={city.slug}>
                                    <Link
                                      href={`/locations/${city.slug}`}
                                      className="text-sm text-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                                      {city.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                East India
                              </h4>
                              <ul className="space-y-2">
                                {groupedCities.east.map((city) => (
                                  <li key={city.slug}>
                                    <Link
                                      href={`/locations/${city.slug}`}
                                      className="text-sm text-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                                      {city.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-border">
                            <Link
                              href="/#locations"
                              className="text-sm text-accent hover:text-accent/80 font-medium flex items-center gap-2"
                              onClick={() => setActiveDropdown(null)}
                            >
                              View All Locations on Map
                              <span className="text-lg">→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                    "hover:bg-white/10",
                    isScrolled ? "text-primary-foreground" : "text-white",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:+911145678900"
              className={cn(
                "hidden md:flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled ? "text-primary-foreground" : "text-white",
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 9350105180</span>
            </a>
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/#contact">
                <span className="hidden lg:inline">Free Consultation</span>
                <span className="lg:hidden">Consult</span>
              </Link>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                "hover:bg-white/10",
                isScrolled ? "text-primary-foreground" : "text-white",
              )}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-15 sm:top-18 bottom-0 bg-primary transition-all duration-300 overflow-y-auto",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none",
        )}
      >
        <nav className="container-premium py-6 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href}>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === link.dropdownType
                        ? null
                        : link.dropdownType || null,
                    )
                  }
                  className="w-full px-4 py-3 text-primary-foreground hover:bg-white/10 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">{link.label}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      activeDropdown === link.dropdownType && "rotate-180",
                    )}
                  />
                </button>
                {link.dropdownType === "locations" &&
                  activeDropdown === "locations" && (
                    <div className="pl-4 py-2 space-y-1">
                      {cityOffices.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/locations/${city.slug}`}
                          className="block px-4 py-2 text-sm text-primary-foreground/80 hover:text-accent hover:bg-white/5 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-primary-foreground hover:bg-white/10 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
          <div className="pt-6 mt-4 border-t border-white/10 space-y-4">
            <a
              href="tel:+911145678900"
              className="flex items-center gap-3 px-4 py-3 text-primary-foreground hover:bg-white/10 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 9350105180
            </a>
            <Button
              asChild
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Free Consultation
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
