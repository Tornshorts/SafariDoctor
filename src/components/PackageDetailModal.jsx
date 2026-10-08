import React, { useState } from 'react';
import { X, Calendar, Moon, Footprints, Check, AlertCircle, MessageCircle, Send, Users, Shield, Clock } from 'lucide-react';

export default function PackageDetailModal({ pkg, onClose, currency, onBookNow }) {
  if (!pkg) return null;

  const [activeTab, setActiveTab] = useState('itinerary');
  const [selectedTier, setSelectedTier] = useState(pkg.accommodations?.[0]?.tier || 'Standard');

  const formatPrice = (kes, usd) => {
    if (currency === 'USD') return `$${usd.toLocaleString()}`;
    return `KES ${kes.toLocaleString()}`;
  };

  const whatsappMessage = encodeURIComponent(
    `Hello SafariDoctor! I am interested in booking the "${pkg.title}" (${pkg.days} Days / ${pkg.nights} Nights) starting from ${formatPrice(pkg.priceKES, pkg.priceUSD)}. Please provide availability and quote.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-gray-100 flex flex-col">
        {/* Sticky Header with Title and Close */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="min-w-0 pr-4">
            <div className="flex items-center gap-2 mb-1">
              {pkg.badge && (
                <span className="bg-[#FF6700] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  {pkg.badge}
                </span>
              )}
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                {pkg.category}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 truncate">
              {pkg.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center shrink-0 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero Banner */}
        <div className="relative h-64 sm:h-72 w-full shrink-0">
          <img
            src={pkg.hiresImage || pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
            <div className="text-white flex flex-wrap items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                  <Calendar className="w-4 h-4 text-[#FFA040]" />
                  <span>{pkg.days} Days / {pkg.nights} Nights</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                  <Footprints className="w-4 h-4 text-[#FFA040]" />
                  <span>{pkg.type} Safari</span>
                </div>
              </div>

              <div className="bg-[#FF6700] text-white px-4 py-2 rounded-xl text-right">
                <span className="block text-[10px] font-medium opacity-90 uppercase">Starting From</span>
                <span className="text-lg sm:text-xl font-black leading-tight">
                  {formatPrice(pkg.priceKES, pkg.priceUSD)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="border-b border-gray-100 px-6 flex items-center gap-2 overflow-x-auto bg-gray-50/50">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-3 px-4 font-bold text-sm border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'itinerary'
                ? 'border-[#FF6700] text-[#FF6700]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Day-by-Day Itinerary
          </button>
          <button
            onClick={() => setActiveTab('inclusions')}
            className={`py-3 px-4 font-bold text-sm border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'inclusions'
                ? 'border-[#FF6700] text-[#FF6700]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Included & Excluded
          </button>
          <button
            onClick={() => setActiveTab('accommodations')}
            className={`py-3 px-4 font-bold text-sm border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'accommodations'
                ? 'border-[#FF6700] text-[#FF6700]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Accommodations
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Subtitle / Description */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
            {pkg.subtitle}
          </p>

          {/* ITINERARY TAB */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              <h4 className="text-sm font-black text-gray-900 uppercase tracking-wider">
                Full Safari Schedule
              </h4>
              <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-orange-200">
                {pkg.itinerary.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 pl-1">
                    <div className="w-6 h-6 rounded-full bg-[#FF6700] text-white font-bold text-xs flex items-center justify-center shrink-0 z-10 shadow-sm">
                      {idx + 1}
                    </div>
                    <div className="bg-orange-50/40 rounded-2xl p-4 border border-orange-100 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-black text-[#FF6700] uppercase tracking-wider">
                          {item.day}
                        </span>
                        <span className="text-gray-300">•</span>
                        <h5 className="font-bold text-gray-900 text-sm sm:text-base">
                          {item.title}
                        </h5>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INCLUSIONS TAB */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/60 rounded-2xl p-5 border border-emerald-100">
                <h4 className="text-sm font-black text-emerald-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  What's Included
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-800">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50/60 rounded-2xl p-5 border border-red-100">
                <h4 className="text-sm font-black text-red-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  What's Excluded
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-red-800">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ACCOMMODATIONS TAB */}
          {activeTab === 'accommodations' && (
            <div className="space-y-4">
              <h4 className="text-sm font-black text-gray-900 uppercase tracking-wider">
                Select Accommodation Tier
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pkg.accommodations?.map((acc, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedTier(acc.tier)}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedTier === acc.tier
                        ? 'border-[#FF6700] bg-orange-50/50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <span className="text-xs font-black uppercase text-[#FF6700] block mb-1">
                      {acc.tier}
                    </span>
                    <h5 className="font-bold text-gray-900 text-sm mb-2">{acc.name}</h5>
                    <span className="text-xs text-gray-500 font-semibold block">{acc.priceNote}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-gray-500 block">Package Price ({selectedTier})</span>
            <div className="text-2xl font-black text-[#FF6700]">
              {formatPrice(pkg.priceKES, pkg.priceUSD)}
              <span className="text-xs text-gray-400 font-normal ml-1">/ person sharing</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/254712345678?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book via WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookNow(pkg);
              }}
              className="flex-1 sm:flex-initial bg-[#FF6700] hover:bg-[#E55A00] text-white font-bold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Inquire Online</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
