import { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenSearchModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Desktop dropdown states
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Mobile accordion states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);
  const [mobileTransfersOpen, setMobileTransfersOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-[#E0DCD3] shadow-xs py-3 sm:py-3.5 transition-all duration-200"
    >
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo (Left Side) */}
        <a href="#home" className="flex items-center gap-3 sm:gap-3.5 group shrink-0">
          <img
            src="/assets/logo_transparent.png"
            alt="SAFARI DOCTOR Logo"
            onError={(e) => {
              e.target.src = '/assets/logo_icon.png';
            }}
            className="h-11 sm:h-13 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl lg:text-[26px] font-black tracking-tight leading-none text-[#FF6700] font-['Outfit']">
              SAFARI <span className="text-[#1C1917]">DOCTOR</span>
            </span>
            <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.22em] text-[#1C1917] uppercase mt-1">
              CAPTURE NATURE AT ITS BEST
            </span>
          </div>
        </a>

        {/* Navigation Links (Right Side) - Exact Order matching Prompt:
            1. HOME
            2. ABOUT US ▼
            3. TOURS & SAFARIS ▼
            4. TRANSFERS ▼
            5. FAQ’S
            6. CONTACT
            7. Search Icon
        */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-[17px] xl:text-[18px] font-normal tracking-wide uppercase font-['Outfit'] text-[#222222]"
          aria-label="Main Navigation"
        >
          {/* 1. HOME */}
          <a
            href="#home"
            className="hover:text-[#FF6700] transition-colors py-1"
          >
            HOME
          </a>

          {/* 2. ABOUT US ▼ */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
              aria-expanded={activeDropdown === 'about'}
              className="flex items-center gap-1.5 hover:text-[#FF6700] transition-colors py-2 cursor-pointer focus:outline-none"
            >
              <span>ABOUT US</span>
              <ChevronDown className="w-4.5 h-4.5 transition-transform duration-200" />
            </button>

            {activeDropdown === 'about' && (
              <div
                className="absolute top-full left-0 w-72 bg-white/98 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 py-2.5 z-50 text-[15px] normal-case font-medium animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <a
                  href="#about"
                  className="block px-5 py-2.5 hover:bg-orange-50 hover:text-[#FF6700] text-gray-800 transition-colors"
                >
                  About Safari Doctor & Founder Chris
                </a>
                <a
                  href="#why-us"
                  className="block px-5 py-2.5 hover:bg-orange-50 hover:text-[#FF6700] text-gray-800 transition-colors"
                >
                  Why Travel With Us
                </a>
                <a
                  href="#fleet"
                  className="block px-5 py-2.5 hover:bg-orange-50 hover:text-[#FF6700] text-gray-800 transition-colors"
                >
                  Our 4x4 Safari Cruiser Fleet
                </a>
                <a
                  href="#real-moments"
                  className="block px-5 py-2.5 hover:bg-orange-50 hover:text-[#FF6700] text-gray-800 transition-colors font-semibold text-[#FF6700]"
                >
                  Real Safari Moments Gallery
                </a>
                <a
                  href="#reviews"
                  className="block px-5 py-2.5 hover:bg-orange-50 hover:text-[#FF6700] text-gray-800 transition-colors"
                >
                  TripAdvisor & Google Reviews
                </a>
              </div>
            )}
          </div>

          {/* 3. TOURS & SAFARIS ▼ */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('tours')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'tours' ? null : 'tours')}
              aria-expanded={activeDropdown === 'tours'}
              className="flex items-center gap-1.5 hover:text-[#FF6700] transition-colors py-2 cursor-pointer focus:outline-none"
            >
              <span>TOURS & SAFARIS</span>
              <ChevronDown className="w-4.5 h-4.5 transition-transform duration-200" />
            </button>

            {activeDropdown === 'tours' && (
              <div
                className="absolute top-full left-0 w-80 bg-white/98 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 py-2.5 z-50 text-[15px] normal-case font-medium animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <a
                  href="#packages"
                  className="block px-5 py-2.5 hover:bg-orange-50 hover:text-[#FF6700] text-gray-800 transition-colors font-semibold"
                >
                  Featured Safari Packages
                </a>
                <a
                  href="#packages"
                  className="block px-5 py-2.5 hover:bg-orange-50 hover:text-[#FF6700] text-gray-800 transition-colors"
                >
                  Best Selling Safaris
                </a>
                <a
                  href="#packages"
                  className="block px-5 py-2.5 hover:bg-orange-50 hover:text-[#FF6700] text-gray-800 transition-colors"
                >
                  Scheduled Group Joining Tours
                </a>
                <a
                  href="#destinations"
                  className="block px-5 py-2.5 hover:bg-orange-50 hover:text-[#FF6700] text-gray-800 transition-colors"
                >
                  Iconic 6 National Parks
                </a>
                <a
                  href="#booking"
                  className="block px-5 py-2.5 hover:bg-orange-50 hover:text-[#FF6700] text-gray-800 transition-colors font-semibold text-[#FF6700]"
                >
                  Tailor-Made Custom Safari Quote
                </a>
              </div>
            )}
          </div>

          {/* 4. TRANSFERS ▼ */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('transfers')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'transfers' ? null : 'transfers')}
              aria-expanded={activeDropdown === 'transfers'}
              className="flex items-center gap-1.5 hover:text-[#FF6700] transition-colors py-2 cursor-pointer focus:outline-none"
            >
              <span>TRANSFERS</span>
              <ChevronDown className="w-4.5 h-4.5 transition-transform duration-200" />
            </button>

            {activeDropdown === 'transfers' && (
              <div
                className="absolute top-full left-0 w-72 bg-white/98 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 py-2.5 z-50 text-[15px] normal-case font-medium animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <a
                  href="#contact"
                  className="block px-5 py-2.5 hover:bg-orange-50 hover:text-[#FF6700] text-gray-800 transition-colors"
                >
                  JKIA Nairobi Airport Transfers
                </a>
                <a
                  href="#contact"
                  className="block px-5 py-2.5 hover:bg-orange-50 hover:text-[#FF6700] text-gray-800 transition-colors"
                >
                  Wilson Airport Safari Bush Flights
                </a>
                <a
                  href="#contact"
                  className="block px-5 py-2.5 hover:bg-orange-50 hover:text-[#FF6700] text-gray-800 transition-colors"
                >
                  Mombasa & Diani Coastal Transfers
                </a>
              </div>
            )}
          </div>

          {/* 5. FAQ’S */}
          <a
            href="#travel-info"
            className="hover:text-[#FF6700] transition-colors py-1"
          >
            FAQ’S
          </a>

          {/* 6. CONTACT */}
          <a
            href="#contact"
            className="hover:text-[#FF6700] transition-colors py-1"
          >
            CONTACT
          </a>

          {/* 7. Search Icon */}
          <button
            onClick={() => onOpenSearchModal && onOpenSearchModal()}
            aria-label="Search Safari Doctor"
            className="p-2 text-[#1C1917] hover:text-[#FF6700] transition-colors cursor-pointer rounded-full hover:bg-black/5"
          >
            <Search className="w-6 h-6 xl:w-7 xl:h-7" />
          </button>
        </nav>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => onOpenSearchModal && onOpenSearchModal()}
            aria-label="Search"
            className="p-2 text-[#1C1917] hover:text-[#FF6700] cursor-pointer"
          >
            <Search className="w-6 h-6" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#1C1917] hover:text-[#FF6700] rounded-lg cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

      </div>

      {/* Mobile Responsive Navigation Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-gray-100 px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3 text-base font-bold text-[#1C1917] uppercase font-['Outfit']">
            
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-gray-100 hover:text-[#FF6700]"
            >
              HOME
            </a>

            {/* Mobile Accordion: ABOUT US */}
            <div className="border-b border-gray-100 py-1">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between py-2.5 text-left"
              >
                <span>ABOUT US</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAboutOpen && (
                <div className="pl-4 pb-2 space-y-2 text-[15px] normal-case font-medium text-gray-700">
                  <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#FF6700]">
                    About Safari Doctor & Founder Chris
                  </a>
                  <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#FF6700]">
                    Why Travel With Us
                  </a>
                  <a href="#fleet" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#FF6700]">
                    Our 4x4 Cruiser Fleet
                  </a>
                  <a href="#real-moments" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#FF6700] text-[#FF6700]">
                    Real Safari Moments
                  </a>
                  <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#FF6700]">
                    TripAdvisor & Google Reviews
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Accordion: TOURS & SAFARIS */}
            <div className="border-b border-gray-100 py-1">
              <button
                onClick={() => setMobileToursOpen(!mobileToursOpen)}
                className="w-full flex items-center justify-between py-2.5 text-left"
              >
                <span>TOURS & SAFARIS</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileToursOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileToursOpen && (
                <div className="pl-4 pb-2 space-y-2 text-[15px] normal-case font-medium text-gray-700">
                  <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#FF6700]">
                    Featured Safari Packages
                  </a>
                  <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#FF6700]">
                    Best Selling Packages
                  </a>
                  <a href="#destinations" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#FF6700]">
                    Iconic 6 Destinations
                  </a>
                  <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#FF6700]">
                    Scheduled Group Safaris
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Accordion: TRANSFERS */}
            <div className="border-b border-gray-100 py-1">
              <button
                onClick={() => setMobileTransfersOpen(!mobileTransfersOpen)}
                className="w-full flex items-center justify-between py-2.5 text-left"
              >
                <span>TRANSFERS</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileTransfersOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileTransfersOpen && (
                <div className="pl-4 pb-2 space-y-2 text-[15px] normal-case font-medium text-gray-700">
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#FF6700]">
                    Nairobi JKIA Airport Transfers
                  </a>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#FF6700]">
                    Wilson Airport Bush Flights
                  </a>
                </div>
              )}
            </div>

            {/* FAQ’S */}
            <a
              href="#travel-info"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-gray-100 hover:text-[#FF6700]"
            >
              FAQ’S
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-gray-100 hover:text-[#FF6700]"
            >
              CONTACT
            </a>

            {/* Quick CTAs */}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://wa.me/254723794090?text=Hello%20Chris,%20I%20would%20like%20to%20inquire%20about%20a%20safari%20trip."
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold text-center text-sm tracking-wide"
              >
                Chat on WhatsApp with Chris
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
