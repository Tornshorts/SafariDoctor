import React, { useState } from 'react';
import { ArrowRight, Sparkles, MapPin, Compass } from 'lucide-react';
import { destinationsData } from '../data/safariData';

export default function Destinations({ onSelectDestination, onOpenDestinationModal }) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="destinations" className="py-20 md:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header matching mockup */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="text-[#FF6700] text-xs md:text-sm font-black tracking-[0.2em] uppercase block mb-3">
            TOP DESTINATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#12181F] tracking-tight leading-[1.15] mb-4">
            Explore Kenya's Iconic Destinations
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            From the world-famous Maasai Mara to pristine beaches, discover the best of Kenya with our carefully curated safari experiences.
          </p>
        </div>

        {/* Destination Cards Grid - Exactly matching mockup cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinationsData.slice(0, 4).map((dest) => (
            <div
              key={dest.id}
              onClick={() => onOpenDestinationModal(dest)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Image Container with rounded top and zoom effect */}
              <div className="relative h-48 md:h-52 w-full overflow-hidden bg-gray-100">
                <img
                  src={dest.hiresImage || dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                    {dest.badge}
                  </span>
                </div>
              </div>

              {/* Card Footer Info with round orange arrow button */}
              <div className="p-5 flex items-center justify-between gap-3 flex-1 bg-white">
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#FF6700] transition-colors truncate">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium mt-1 truncate">
                    {dest.tagline}
                  </p>
                </div>

                {/* Round Orange Arrow Button matching mockup */}
                <div className="w-9 h-9 rounded-full bg-[#FF6700] group-hover:bg-[#E55A00] flex items-center justify-center shrink-0 shadow-md shadow-orange-500/25 transition-all transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Destinations & Explorer banner */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 via-white to-amber-50 rounded-2xl p-6 md:p-8 border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF6700]/10 flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6 text-[#FF6700]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900">Looking for Samburu, Tsavo, or Mount Kenya?</h4>
              <p className="text-sm text-gray-600">We craft custom private itineraries to every national park and private conservancy across Kenya & East Africa.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectDestination('all')}
            className="shrink-0 bg-white hover:bg-orange-50 text-[#FF6700] border border-[#FF6700]/40 px-5 py-2.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
          >
            Explore All 6 Parks & Reserves
          </button>
        </div>
      </div>
    </section>
  );
}
