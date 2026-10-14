import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAFAF8] border-t border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story & Founder Chris */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[#FF6700] text-sm sm:text-base font-black tracking-[0.2em] uppercase block mb-2 font-['Outfit']">
                ABOUT SAFARIDOCTOR
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D190E] tracking-tight leading-tight uppercase font-['Outfit']">
                Capture Nature At It's Best
              </h2>
              <div className="w-16 h-1 bg-[#FF6700] mt-3 rounded-full" />
            </div>

            <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-semibold">
              Founded by safari naturalist <strong className="text-[#2D190E]">Chris</strong> (fondly nicknamed <span className="text-[#FF6700]">"Black Santa"</span> by our happy travelers on TripAdvisor), SafariDoctor is a registered Kenyan tour operator dedicated to providing authentic, personalized adventures across Kenya and East Africa.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We consider it our responsibility to provide you with the means to have not only a wonderful holiday here in Kenya, but also an opportunity to experience our world-famous national parks, game reserves, mountain hiking, white sandy beaches, and spectacular natural scenery.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8E4DA] shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-orange-100/80 flex items-center justify-center text-[#FF6700] shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-[#2D190E] text-base">Direct Local Operator</h4>
                  <p className="text-sm text-gray-600 mt-0.5">Book directly with Chris and our Nairobi team with zero middleman markups.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8E4DA] shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-orange-100/80 flex items-center justify-center text-[#FF6700] shrink-0 font-bold">
                  🛡️
                </div>
                <div>
                  <h4 className="font-bold text-[#2D190E] text-base">TOSK Certified #0236</h4>
                  <p className="text-sm text-gray-600 mt-0.5">Member of Tour Operators Society of Kenya with full licensing and bonded safety.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-bold text-gray-700">
              <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-gray-200 shadow-2xs">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                Guaranteed Window Seats
              </span>
              <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-gray-200 shadow-2xs">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                Pop-up Roof 360° Photography
              </span>
              <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-gray-200 shadow-2xs">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                English & German Speaking Guides
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase with Real Photo of Chris & Travelers */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-[#E8E4DA]">
              {/* Photo with Chris & Happy Travelers */}
              <div className="relative h-72 sm:h-84 rounded-xl overflow-hidden mb-4">
                <img
                  src="/assets/real_chris_guests_thumbs_up.jpg"
                  alt="Chris SafariDoctor with Happy Travelers in Maasai Mara"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-xs text-white p-3.5 rounded-lg border border-white/10">
                  <span className="text-xs font-extrabold uppercase text-[#FFA040] block">
                    FOUNDER & LEAD NATURALIST
                  </span>
                  <span className="text-sm font-bold block mt-0.5">
                    Chris ("Black Santa") with guests on Maasai Mara Safari
                  </span>
                </div>
              </div>

              {/* Inset Badge: Chris Guiding at the Wheel */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-3 bg-white p-2.5 rounded-2xl shadow-xl border border-[#E8E4DA] z-10 max-w-[220px]">
                <img
                  src="/assets/real_chris_cockpit_smile.jpg"
                  alt="Chris at the Wheel"
                  className="w-12 h-12 rounded-xl object-cover shrink-0 border border-orange-200"
                />
                <div className="text-left">
                  <span className="text-xs font-black text-[#2D190E] block leading-tight">Chris At The Wheel</span>
                  <span className="text-[11px] text-emerald-600 font-bold block">Direct Founder Care</span>
                </div>
              </div>

              {/* Logo & Certification Banner */}
              <div className="flex items-center justify-between pt-2 px-1">
                <img
                  src="/assets/logo_transparent.png"
                  alt="SafariDoctor"
                  className="h-10 w-auto object-contain"
                />
                <div className="text-right">
                  <span className="text-sm font-black text-[#2D190E] block font-['Outfit']">
                    100% LOCALLY OWNED
                  </span>
                  <span className="text-xs text-gray-500 font-semibold">
                    Headquartered in Nairobi, Kenya
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
