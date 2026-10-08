import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { reviewsData } from '../data/safariData';

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="text-gray-900 font-extrabold text-sm ml-2">5.0 / 5.0 Rating</span>
          </div>
          <span className="text-[#FF6700] text-xs md:text-sm font-black tracking-[0.2em] uppercase block mb-1">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#12181F] tracking-tight">
            Stories from Our Travelers
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Read real accounts from international guests who journeyed through Kenya with SafariDoctor.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] rounded-3xl p-6 sm:p-8 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-orange-200" />
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-2">
                  "{rev.title}"
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-gray-900 text-sm flex items-center gap-1">
                    {rev.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </h4>
                  <span className="text-xs text-gray-400 font-medium">{rev.country}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-[#FF6700] block">{rev.tour}</span>
                  <span className="text-[10px] text-gray-400">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Badges footer */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 py-6 px-8 rounded-2xl bg-orange-50/50 border border-orange-100 text-center">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
            <span className="text-emerald-600 text-base">🟢</span>
            <span>TripAdvisor Traveler's Choice 2026</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
            <span className="text-[#FF6700] text-base">★</span>
            <span>SafariBookings Verified Top Operator</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
            <span className="text-blue-600 text-base">✓</span>
            <span>Kenya Association of Tour Operators (KATO) Member</span>
          </div>
        </div>
      </div>
    </section>
  );
}
