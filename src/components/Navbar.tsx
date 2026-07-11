import { useState, useEffect } from "react";
import { Scissors, Sparkles, Calendar, Menu, X, Star } from "lucide-react";

interface NavbarProps {
  onOpenBookings: () => void;
  bookingsCount: number;
}

export default function Navbar({ onOpenBookings, bookingsCount }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Why Fiora", href: "#why-fiora" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Location", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0F0F0F]/90 backdrop-blur-md border-b border-gold-500/20 py-4 shadow-lg shadow-black/40"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center bg-charcoal-900 group-hover:border-gold-400 transition-colors duration-300">
            <Scissors className="w-5 h-5 text-gold-400" />
          </div>
          <div>
            <span className="font-serif text-xl tracking-widest text-white uppercase font-bold group-hover:text-gold-300 transition-colors duration-300 block">
              FIORA
            </span>
            <span className="text-[9px] font-mono tracking-[0.25em] text-gold-400 uppercase block -mt-1">
              Family Beauty Salon
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-charcoal-300 hover:text-gold-400 transition-colors duration-300 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Active Bookings Button */}
          {bookingsCount > 0 && (
            <button
              onClick={onOpenBookings}
              id="view-bookings-btn"
              className="relative px-4 py-2 rounded-full border border-gold-400/30 text-xs text-gold-300 tracking-widest hover:border-gold-400 hover:text-white bg-charcoal-950/60 font-mono transition-all duration-300 flex items-center gap-2"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-500"></span>
              </span>
              Bookings ({bookingsCount})
            </button>
          )}

          {/* Core Booking CTA */}
          <a
            href="#booking-section"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-black font-semibold text-xs uppercase tracking-widest shadow-md hover:from-gold-400 hover:to-gold-300 hover:scale-[1.03] transition-all duration-300"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile menu and bookings trigger for small screens */}
        <div className="flex items-center gap-3 lg:hidden">
          {bookingsCount > 0 && (
            <button
              onClick={onOpenBookings}
              className="w-9 h-9 rounded-full border border-gold-400/20 flex items-center justify-center bg-charcoal-900 relative"
              aria-label="View bookings"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-400 text-black text-[9px] font-bold rounded-full flex items-center justify-center font-mono">
                {bookingsCount}
              </span>
            </button>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-full border border-charcoal-800 flex items-center justify-center text-charcoal-200 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slideout */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-charcoal-950 border-b border-gold-500/20 py-6 px-6 shadow-2xl flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm uppercase tracking-widest font-medium text-charcoal-300 hover:text-gold-400 transition-colors py-1 border-b border-charcoal-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#booking-section"
              onClick={handleLinkClick}
              className="w-full text-center py-3 rounded-full bg-gold-500 text-black font-semibold text-xs uppercase tracking-widest shadow-md"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
