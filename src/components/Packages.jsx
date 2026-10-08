import React, { useState } from 'react';
import { Calendar, Moon, Footprints, ArrowRight, Shield, Sparkles, Filter } from 'lucide-react';
import { packagesData } from '../data/safariData';

export default function Packages({ currency, onOpenPackageModal, filterDestination }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Best Sellers', 'Wildlife Safaris', 'Safari & Beach', 'Short Safaris'];

  const filteredPackages = packagesData.filter((pkg) => {
    // Destination filter if passed
    if (filterDestination && filterDestination !== 'all') {
      if (filterDestination === 'maasai-mara' && !pkg.id.includes('mara')) return false;
      if (filterDestination === 'amboseli' && !pkg.id.includes('amboseli')) return false;
      if (filterDestination === 'lake-nakuru' && !pkg.id.includes('nakuru')) return false;
      if (filterDestination === 'diani-beach' && !pkg.id.includes('beach')) return false;
      if (filterDestination === 'tsavo' && !pkg.id.includes('tsavo')) return false;
    }

    if (activeCategory === 'All') return true;
    if (activeCategory === 'Best Sellers') return pkg.badge === 'BEST SELLER' || pkg.badge === 'POPULAR';
    if (activeCategory === 'Wildlife Safaris') return pkg.category === 'Wildlife Safaris';
    if (activeCategory === 'Safari & Beach') return pkg.category === 'Safari & Beach';
    if (activeCategory === 'Short Safaris') return pkg.days <= 3;
    return true;
  });

  const formatPrice = (kes, usd) => {
    if (currency === 'USD') {
      return `$${usd.toLocaleString()}`;
    }
    return `KES ${kes.toLocaleString()}`;
  };

  return (
    <section id="packages" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header matching mockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-[#FF6700] text-xs md:text-sm font-black tracking-[0.2em] uppercase block mb-2">
              POPULAR SAFARI PACKAGES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#12181F] tracking-tight leading-[1.15] mb-2">
              Handpicked Safari Packages
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Experience the best of Kenya with our expertly designed tours.
            </p>
          </div>

          <a
            href="#packages"
            onClick={(e) => {
              e.preventDefault();
              setActiveCategory('All');
            }}
            className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-[#FF6700] hover:text-[#E55A00] transition-colors group self-start md:self-end"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#FF6700] text-white shadow-md shadow-orange-500/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packages Grid - Matching Mockup Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={pkg.hiresImage || pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge matching mockup */}
                  {pkg.badge && pkg.id !== 'mara-3day' && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#FF6700] text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md shadow-md">
                        {pkg.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 pb-3">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-[#FF6700] transition-colors line-clamp-1 mb-2">
                    {pkg.title}
                  </h3>

                  {/* Metadata: Days, Nights, Wildlife (matching mockup icons) */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-semibold mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>{pkg.days} Days</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1">
                      <Moon className="w-3.5 h-3.5 text-gray-400" />
                      <span>{pkg.nights} Nights</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1">
                      <Footprints className="w-3.5 h-3.5 text-[#FF6700]" />
                      <span>{pkg.type}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & View Details CTA matching mockup */}
              <div className="px-5 pb-5 pt-2 border-t border-gray-50 flex items-center justify-between gap-3">
                <div>
                  <span className="block text-[11px] font-medium text-gray-400">
                    From
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-[#FF6700]">
                    {formatPrice(pkg.priceKES, pkg.priceUSD)}
                  </span>
                </div>

                <button
                  onClick={() => onOpenPackageModal(pkg)}
                  className="bg-[#FF6700] hover:bg-[#E55A00] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Safari Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#12181F] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FFA040] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-[#FF6700]" />
              <span>Tailor-Made Private Safari</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">Want to customize your safari itinerary?</h3>
            <p className="text-sm text-gray-300 mt-1 max-w-xl">
              We design private custom safaris for families, photographers, couples, and private groups. Choose your lodges, budget, and dates.
            </p>
          </div>
          <a
            href="https://wa.me/254712345678?text=Hello%20SafariDoctor,%20I%20would%20like%20a%20custom%20safari%20itinerary%20quote."
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-[#FF6700] hover:bg-[#E55A00] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-orange-500/30 text-center"
          >
            Request Custom Safari Quote
          </a>
        </div>
      </div>
    </section>
  );
}
