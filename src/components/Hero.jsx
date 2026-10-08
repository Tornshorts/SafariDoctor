import React from 'react';
import { Compass, Play, ShieldCheck, Star } from 'lucide-react';

export default function Hero({ onExploreClick, onWatchVideoClick }) {
  return (
    <section id="home" className="relative min-h-[560px] md:min-h-[640px] flex items-center justify-start overflow-hidden">
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0e141a]">
        <img
          src="/assets/hero_banner.jpg"
          alt="Kenya Safari Wildlife Landscape with Kilimanjaro and Elephants"
          className="w-full h-full object-cover object-right md:object-[70%_center] transition-transform duration-1000"
        />
        {/* Clean left mask ensuring zero ghost text and pristine typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e141a] from-0% via-[#0e141a] via-40% md:via-48% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e141a]/90 via-transparent to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-16 pb-28 md:pt-20 md:pb-36">
        <div className="max-w-2xl">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#FFA040] text-xs md:text-sm font-extrabold tracking-widest uppercase mb-4 shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#FF6700] animate-ping" />
            <span>EXPLORE KENYA'S WILDLIFE</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-white leading-[1.08] tracking-tight mb-5 drop-shadow-md">
            Unforgettable <br className="hidden sm:inline" />
            Safari Experiences
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-8 max-w-xl drop-shadow-sm">
            Discover breathtaking landscapes, incredible wildlife and cultural adventures with <span className="text-white font-bold">SafariDoctor</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="bg-[#FF6700] hover:bg-[#E55A00] text-white px-7 py-3.5 rounded-xl font-bold text-base flex items-center gap-2.5 shadow-xl shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-5 h-5" />
              <span>Explore Tours</span>
            </button>

            <button
              onClick={onWatchVideoClick}
              className="bg-black/35 hover:bg-black/50 text-white border border-white/40 hover:border-white/70 backdrop-blur-md px-6 py-3.5 rounded-xl font-bold text-base flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 fill-current text-white translate-x-0.5" />
              </div>
              <span>Watch Video</span>
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-white/80 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#FF6700]" />
              <span>Licensed Kenya Tour Operator</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span>100% Tailor-Made Safaris</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
