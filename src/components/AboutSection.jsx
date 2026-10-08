import React from 'react';
import { Heart, Compass, Shield, Trees, Award, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story and Logo */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[#FF6700] text-xs md:text-sm font-black tracking-[0.2em] uppercase block mb-2">
                ABOUT SAFARIDOCTOR
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#12181F] tracking-tight leading-tight">
                "Capture Nature at Its Best"
              </h2>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
              Founded by <strong className="text-gray-900">Chris</strong>, SafariDoctor was created with a singular mission: to provide authentic, deeply immersive wildlife safaris in Kenya that respect nature and empower local communities.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We understand that a safari to Africa is often a once-in-a-lifetime journey. That is why every SafariDoctor itinerary is handcrafted with clinical attention to detail—from hand-selecting the finest lodge locations for sunrise game views, to ensuring our custom 4x4 Land Cruisers provide unparalleled photographic sightlines.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF6700] shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Conservation First</h4>
                  <p className="text-xs text-gray-500 mt-1">Strict adherence to wildlife park ethics and low-impact eco tourism.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF6700] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Local Empowerment</h4>
                  <p className="text-xs text-gray-500 mt-1">Fair wages for our Kenyan guides and direct support to Maasai education funds.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase with Logo */}
          <div className="lg:col-span-6 relative">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden group">
              {/* Background watermark */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />

              {/* Logo Presentation */}
              <div className="flex justify-center mb-6">
                <img
                  src="/assets/logo_transparent.png"
                  alt="SafariDoctor - Capture Nature at Its Best"
                  className="max-h-56 sm:max-h-64 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <h3 className="text-xl font-black text-gray-900">
                  Your Trusted Kenyan Safari Companion
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Registered Kenya Tour Operator. Certified by Kenya Tourism Board (KTB) and Kenya Association of Tour Operators (KATO).
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-around text-center">
                <div>
                  <span className="block text-2xl font-black text-[#FF6700]">100%</span>
                  <span className="text-[11px] font-bold text-gray-400 uppercase">Kenyan Owned</span>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <span className="block text-2xl font-black text-[#FF6700]">Silver</span>
                  <span className="text-[11px] font-bold text-gray-400 uppercase">KPSGA Guides</span>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <span className="block text-2xl font-black text-[#FF6700]">24/7</span>
                  <span className="text-[11px] font-bold text-gray-400 uppercase">Concierge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
