import { useState, useRef } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { tabbedPackagesData } from '../data/safariData';

export default function Packages({ currency, onOpenPackageModal, onOpenBookingModal }) {
  const [activeTab, setActiveTab] = useState('featured');
  const scrollContainerRef = useRef(null);

  const tabs = [
    { key: 'featured', label: 'Featured' },
    { key: 'bestSelling', label: 'Best Selling' },
    { key: 'scheduledSafaris', label: 'Scheduled Safaris' }
  ];

  const currentPackages = tabbedPackagesData[activeTab] || tabbedPackagesData.featured;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const formatPrice = (kes, usd) => {
    if (currency === 'USD') {
      return `$${usd.toLocaleString()}`;
    }
    return `KES ${kes.toLocaleString()}`;
  };

  return (
    <section id="packages" className="py-16 md:py-24 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Tab Headers matching Reference Screenshot 2 */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="flex items-center justify-center gap-6 sm:gap-10 border-b border-[#D8D2C4] w-full max-w-xl pb-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-lg sm:text-2xl font-bold font-['Outfit'] pb-3 relative transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#2D190E] border-b-2 border-[#2D190E]'
                      : 'text-gray-500 hover:text-[#2D190E]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <p className="text-sm sm:text-base text-gray-600 mt-3 text-center">
            Handcrafted African safari expeditions with certified KPSGA naturalist guides & guaranteed window seats.
          </p>
        </div>

        {/* Carousel Container with Left/Right Arrow Controls */}
        <div className="relative group">
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            aria-label="Previous Packages"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-xl border border-gray-200 items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            aria-label="Next Packages"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-xl border border-gray-200 items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Cards Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-orange-400"
            style={{ scrollbarWidth: 'thin' }}
          >
            {currentPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="w-[290px] sm:w-[330px] md:w-[350px] lg:w-[295px] xl:w-[310px] shrink-0 snap-start bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#E8E4DA] flex flex-col justify-between group/card"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      onError={(e) => {
                        if (pkg.fallbackImage) {
                          e.target.src = pkg.fallbackImage;
                        }
                      }}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Top Badge */}
                    {pkg.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#2D190E]/85 backdrop-blur-xs text-white text-xs font-extrabold uppercase px-2.5 py-1 rounded shadow-xs tracking-wider">
                          {pkg.badge}
                        </span>
                      </div>
                    )}

                    {/* Days/Nights Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#FF6700]" />
                      <span>{pkg.days}D / {pkg.nights}N</span>
                    </div>
                  </div>

                  {/* Card Content with Exact All-Caps Bold Heading matching Reference Screenshot 2 */}
                  <div className="p-4 sm:p-5 pb-3">
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#1C1917] tracking-tight leading-snug line-clamp-3 uppercase font-['Outfit'] min-h-[50px] group-hover/card:text-[#FF6700] transition-colors">
                      {pkg.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      {pkg.subtitle}
                    </p>

                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-600">
                      <span className="truncate">{pkg.groupType || 'Daily Joining'}</span>
                      <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded text-xs">
                        Available
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & Actions */}
                <div className="p-4 sm:p-5 pt-3 border-t border-gray-100 bg-gray-50/70 flex items-center justify-between gap-2">
                  <div>
                    <span className="block text-xs uppercase font-bold text-gray-500">
                      Starting From
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-[#2D190E]">
                      {formatPrice(pkg.priceKES, pkg.priceUSD)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenPackageModal(pkg)}
                      className="bg-white hover:bg-[#FF6700] hover:text-white text-gray-800 border border-gray-300 hover:border-[#FF6700] px-3.5 py-1.5 rounded-lg text-sm font-bold transition-all shadow-2xs cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onOpenBookingModal && onOpenBookingModal(pkg)}
                      className="bg-[#2D190E] hover:bg-[#FF6700] text-white px-3.5 py-1.5 rounded-lg text-sm font-bold transition-all shadow-xs cursor-pointer"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Notice */}
        <div className="flex md:hidden items-center justify-center gap-2 text-sm text-gray-500 mt-2">
          <span>← Swipe horizontally to see all packages →</span>
        </div>

      </div>
    </section>
  );
}
