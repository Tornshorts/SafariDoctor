import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24130A] text-[#D8CEBC] pt-14 pb-10 border-t border-[#3A2215]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 4 Responsive Columns matching Reference Website Screenshot 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3D2517]">
          
          {/* Column 1: ABOUT US */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-lg font-extrabold uppercase tracking-wider text-white font-['Outfit']">
                ABOUT US
              </h3>
              <div className="h-0.5 w-16 bg-[#5A3822]" />
            </div>
            
            <p className="text-sm sm:text-base text-[#C4B7A2] leading-relaxed text-justify">
              SafariDoctor tours and safaris is dedicated to offer you the real experience of adventures, excursions, tours around Kenya, Uganda and Tanzania National Parks and its environs. We consider it our responsibility to provide you with the means to have not only a wonderful holiday here in Kenya but also an opportunity to experience a variety of different national parks, game reserves, mountain hiking, our white sandy beaches and not forgetting our natural spectacular sceneries that surrounds our beautiful country.
            </p>
          </div>

          {/* Column 2: FOLLOW US & SECURE PAYMENTS */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-lg font-extrabold uppercase tracking-wider text-white font-['Outfit']">
                FOLLOW US
              </h3>
              <div className="h-0.5 w-16 bg-[#5A3822]" />
            </div>

            {/* Social Icons matching Reference Screenshot 6 */}
            <div className="flex items-center gap-2 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#3B5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://plus.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#DC4E41] text-white flex items-center justify-center hover:opacity-90 transition-opacity font-bold text-xs"
                aria-label="Google Plus"
              >
                G+
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#00AA6C] text-white flex items-center justify-center hover:opacity-90 transition-opacity font-bold text-xs"
                aria-label="TripAdvisor"
              >
                🦉
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-[#E1306C] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* For Secure Online Payments Box matching Reference Screenshot 6 */}
            <div className="bg-white rounded-lg p-3 shadow-md border border-gray-200">
              <span className="block text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider text-center mb-1.5">
                For Secure Online Payments
              </span>

              {/* Pesapal Image Badge */}
              <div className="rounded overflow-hidden mb-2">
                <img
                  src="/assets/reference_crops/ref_pesapal_payments.jpg"
                  alt="Pesapal Secure Payments"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* TOSK Member Badge */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-center">
                <img
                  src="/assets/reference_crops/ref_tosk_badge.jpg"
                  alt="Tour Operators Society of Kenya Member"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Column 3: QUICK LINKS */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-lg font-extrabold uppercase tracking-wider text-white font-['Outfit']">
                QUICK LINKS
              </h3>
              <div className="h-0.5 w-16 bg-[#5A3822]" />
            </div>

            <ul className="space-y-2 text-sm sm:text-base font-semibold text-[#D8CEBC]">
              <li>
                <a href="#about" className="hover:text-[#FFA040] transition-colors py-1 block border-b border-[#3A2215]/50">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#FFA040] transition-colors py-1 block border-b border-[#3A2215]/50">
                  TOURS & SAFARIS
                </a>
              </li>
              <li>
                <a href="#transfers" className="hover:text-[#FFA040] transition-colors py-1 block border-b border-[#3A2215]/50">
                  TRANSFERS
                </a>
              </li>
              <li>
                <a href="#real-moments" className="hover:text-[#FFA040] transition-colors py-1 block border-b border-[#3A2215]/50 text-[#FFA040]">
                  REAL SAFARI MOMENTS
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#FFA040] transition-colors py-1 block border-b border-[#3A2215]/50">
                  DESTINATIONS
                </a>
              </li>
              <li>
                <a href="#travel-info" className="hover:text-[#FFA040] transition-colors py-1 block border-b border-[#3A2215]/50">
                  FAQ'S
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFA040] transition-colors py-1 block">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT US */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-lg font-extrabold uppercase tracking-wider text-white font-['Outfit']">
                CONTACT US
              </h3>
              <div className="h-0.5 w-16 bg-[#5A3822]" />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#C4B7A2]">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#FFA040] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">
                    SafariDoctor Tours and Safaris
                  </strong>
                  <span>P.O. Box 26958-00100 G.P.O</span>
                  <span className="block">Gateway mall, 4th floor North</span>
                  <span className="block">Airport Road Syokimau. Nairobi, Kenya</span>
                </div>
              </div>

              {/* Phone numbers */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FFA040] shrink-0 mt-0.5" />
                <div>
                  <div>
                    <span className="font-bold text-white">Office Line: </span>
                    <a href="tel:+254712765132" className="hover:text-white transition-colors">
                      +254-712-765132
                    </a>
                  </div>
                  <div>
                    <span className="font-bold text-white">Phone: </span>
                    <a href="tel:+254723794090" className="hover:text-white transition-colors">
                      +254-723-794090
                    </a>
                    <span> / </span>
                    <a href="tel:+254723441764" className="hover:text-white transition-colors">
                      +254-723-441764
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FFA040] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Send us an email:</span>
                  <a
                    href="mailto:safaridoctortours@gmail.com"
                    className="hover:text-white transition-colors block text-[#FFA040]"
                  >
                    safaridoctortours@gmail.com
                  </a>
                  <a
                    href="mailto:info@safaridoctor.com"
                    className="hover:text-white transition-colors block text-gray-300"
                  >
                    info@safaridoctor.com
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Centered Logo & Copyright matching Reference Screenshot 6 */}
        <div className="pt-8 flex flex-col items-center justify-center gap-3 text-center">
          {/* Centered Logo */}
          <a href="#home" className="inline-block transition-transform hover:scale-105">
            <img
              src="/assets/logo_transparent.png"
              alt="SafariDoctor - Capture Nature At Its Best"
              className="h-16 w-auto object-contain brightness-105"
            />
          </a>

          <p className="text-sm text-[#A89A84]">
            © {new Date().getFullYear()} SafariDoctor Tours & Safaris. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-[#7E6F5B]">
            Site maintained by SafariDoctor | TOSK Member No: 0236
          </p>

          <button
            onClick={scrollToTop}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-[#FFA040] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
