import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Heart, Shield, ArrowUp } from 'lucide-react';
import { destinationsData, packagesData, companyContact } from '../data/safariData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12181F] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Newsletter Strip */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 sm:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <span className="text-white/80 text-xs font-black uppercase tracking-wider block mb-1">
              STAY INSPIRED
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Get Kenya Safari Guides & Special Offers
            </h3>
            <p className="text-white/90 text-xs sm:text-sm mt-1">
              Subscribe to our monthly newsletter for Great Migration updates and secret seasonal discounts.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Asante! You are now subscribed to SafariDoctor updates.');
            }}
            className="flex w-full md:w-auto gap-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="bg-white/95 text-gray-900 px-4 py-3 rounded-xl text-sm font-medium focus:outline-none w-full md:w-72"
            />
            <button
              type="submit"
              className="bg-[#12181F] hover:bg-black text-white px-6 py-3 rounded-xl text-sm font-bold shrink-0 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo_icon.png"
                alt="SafariDoctor"
                className="h-12 w-auto object-contain bg-white/5 rounded-xl p-1"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-[#FF6700] leading-none font-['Outfit']">
                  Safari<span className="text-white">Doctor</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-white/70 uppercase mt-1">
                  CAPTURE NATURE AT ITS BEST
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Authentic Kenya wildlife safaris and coastal excursions founded by Chris. Registered Kenya tour operator crafting memories that last a lifetime.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF6700] shrink-0 mt-0.5" />
                <span>Gateway Park, Mombasa Road, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6700] shrink-0" />
                <a href="tel:+254712345678" className="hover:text-[#FF6700]">+254 712 345 678</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6700] shrink-0" />
                <a href="mailto:info@safaridoctor.co.ke" className="hover:text-[#FF6700]">info@safaridoctor.co.ke</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4">
              Top Destinations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              {destinationsData.map((d) => (
                <li key={d.id}>
                  <a href="#destinations" className="hover:text-[#FF6700] transition-colors">
                    {d.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Safari Packages */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4">
              Safari Packages
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              {packagesData.map((p) => (
                <li key={p.id}>
                  <a href="#packages" className="hover:text-[#FF6700] transition-colors truncate block">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditations & Payments */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4">
              Accreditations
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <p className="text-white font-semibold">✓ Kenya Tourism Board (KTB)</p>
              <p className="text-white font-semibold">✓ KATO Bonded Member</p>
              <p className="text-white font-semibold">✓ Eco-Tourism Kenya</p>
              <p className="text-white font-semibold">✓ TripAdvisor 5.0 Star</p>
            </div>

            <div className="mt-6">
              <h5 className="text-xs font-bold text-gray-300 uppercase mb-2">Accepted Payments</h5>
              <div className="flex flex-wrap gap-2 text-[10px] font-bold text-white/80">
                <span className="bg-white/10 px-2.5 py-1 rounded">M-PESA</span>
                <span className="bg-white/10 px-2.5 py-1 rounded">VISA</span>
                <span className="bg-white/10 px-2.5 py-1 rounded">Mastercard</span>
                <span className="bg-white/10 px-2.5 py-1 rounded">Bank Wire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SafariDoctor. All rights reserved. Capture Nature At Its Best.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#about" className="hover:text-gray-300">Terms & Conditions</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#FF6700] hover:text-[#FFA040] font-bold ml-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
