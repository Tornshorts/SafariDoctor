import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Mail, MessageCircle, Globe } from 'lucide-react';

export default function Navbar({ currency, setCurrency, onOpenBookingModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#12181F] text-xs text-white/90 py-2 px-4 sm:px-6 transition-all hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+254712345678" className="flex items-center gap-1.5 hover:text-[#FF6700] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#FF6700]" />
              <span>+254 712 345 678</span>
            </a>
            <a href="mailto:info@safaridoctor.co.ke" className="flex items-center gap-1.5 hover:text-[#FF6700] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#FF6700]" />
              <span>info@safaridoctor.co.ke</span>
            </a>
            <span className="text-white/40">|</span>
            <span className="text-[#FFB800] font-medium flex items-center gap-1">
              ★ ★ ★ ★ ★ <span className="text-white/80 text-[11px] ml-1">5.0 on TripAdvisor & SafariBookings</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Currency Switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 text-[11px] font-semibold">
              <button
                onClick={() => setCurrency('KES')}
                className={`px-2.5 py-0.5 rounded-full transition-colors ${
                  currency === 'KES' ? 'bg-[#FF6700] text-white shadow-sm' : 'text-white/70 hover:text-white'
                }`}
              >
                KES (KSh)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-0.5 rounded-full transition-colors ${
                  currency === 'USD' ? 'bg-[#FF6700] text-white shadow-sm' : 'text-white/70 hover:text-white'
                }`}
              >
                USD ($)
              </button>
            </div>

            <a
              href="https://wa.me/254712345678?text=Hello%20SafariDoctor,%20I%20would%20like%20to%20inquire%20about%20a%20Kenya%20safari."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/assets/logo_icon.png"
              alt="SafariDoctor Giraffe Binoculars"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#FF6700] leading-none font-['Outfit']">
                Safari<span className="text-[#FF6700]">Doctor</span>
              </span>
              <span className="text-[9.5px] font-extrabold tracking-[0.22em] text-[#1E242B] uppercase mt-1">
                CAPTURE NATURE AT ITS BEST
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-700">
            <a href="#home" className="text-[#FF6700] hover:text-[#FF6700] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FF6700]">
              Home
            </a>
            <a href="#destinations" className="hover:text-[#FF6700] transition-colors">
              Destinations
            </a>
            <a href="#packages" className="hover:text-[#FF6700] transition-colors">
              Tours & Packages
            </a>
            <a href="#about" className="hover:text-[#FF6700] transition-colors">
              About Us
            </a>
            <a href="#travel-info" className="hover:text-[#FF6700] transition-colors">
              Travel Info
            </a>
            <a href="#contact" className="hover:text-[#FF6700] transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="bg-[#FF6700] hover:bg-[#E55A00] text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Currency toggle for mobile */}
            <div className="flex items-center bg-gray-100 rounded-lg p-0.5 text-xs font-bold mr-1">
              <button
                onClick={() => setCurrency(currency === 'KES' ? 'USD' : 'KES')}
                className="px-2 py-1 text-gray-800"
              >
                {currency}
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#FF6700] rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-4 text-base font-semibold text-gray-800">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#FF6700] py-1 border-b border-gray-100"
              >
                Home
              </a>
              <a
                href="#destinations"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF6700] py-1 border-b border-gray-100"
              >
                Destinations
              </a>
              <a
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF6700] py-1 border-b border-gray-100"
              >
                Tours & Packages
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF6700] py-1 border-b border-gray-100"
              >
                About Us
              </a>
              <a
                href="#travel-info"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF6700] py-1 border-b border-gray-100"
              >
                Travel Info & FAQ
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF6700] py-1"
              >
                Contact Us
              </a>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full bg-[#FF6700] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md shadow-orange-500/30"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </button>
                <a
                  href="https://wa.me/254712345678"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
