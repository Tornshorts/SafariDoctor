import { useState, useEffect } from 'react';
import { Camera, MapPin, User, ZoomIn, X, ChevronLeft, ChevronRight, Play, Video, Film, Compass, MessageCircle } from 'lucide-react';
import { realPhotosData } from '../data/safariData';

export default function RealPhotosGallery() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  // Filter items based on active category tab
  const filteredData = realPhotosData.filter((item) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'video') return item.type === 'video';
    if (selectedFilter === 'travelers') return item.category === 'travelers';
    if (selectedFilter === 'wildlife') return item.category === 'wildlife';
    return true;
  });

  const openLightbox = (idx) => {
    setSelectedItemIndex(idx);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const prevItem = (e) => {
    if (e) e.stopPropagation();
    setSelectedItemIndex((prev) => (prev > 0 ? prev - 1 : filteredData.length - 1));
  };

  const nextItem = (e) => {
    if (e) e.stopPropagation();
    setSelectedItemIndex((prev) => (prev < filteredData.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevItem();
      if (e.key === 'ArrowRight') nextItem();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, filteredData.length]);

  const activeItem = selectedItemIndex !== null ? filteredData[selectedItemIndex] : null;

  return (
    <section id="real-moments" className="py-16 md:py-24 bg-white relative border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 text-[#FF6700] text-xs sm:text-sm font-black tracking-widest uppercase mb-3">
            <Camera className="w-4.5 h-4.5" />
            <span>AUTHENTIC SAFARI SIGHTINGS & LIVE DISPATCHES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D190E] tracking-tight uppercase font-['Outfit']">
            Real Moments With Chris & Our Guests
          </h2>
          <div className="w-16 h-1 bg-[#FF6700] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            No stock models — real safari adventures, lionesses carrying newborn cubs, rhinos on the plains, flamingos taking flight, and happy travelers exploring Kenya with Chris ("Black Santa").
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {[
            { id: 'all', label: 'All Dispatches', count: realPhotosData.length, icon: Compass },
            { id: 'video', label: 'Live Safari Videos', count: realPhotosData.filter(i => i.type === 'video').length, icon: Video },
            { id: 'travelers', label: 'Guests & Guide Chris', count: realPhotosData.filter(i => i.category === 'travelers').length, icon: User },
            { id: 'wildlife', label: 'Wildlife Sightings', count: realPhotosData.filter(i => i.category === 'wildlife').length, icon: Film }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedFilter(tab.id);
                  setSelectedItemIndex(null);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#2D190E] text-white shadow-md shadow-amber-950/20'
                    : 'bg-[#F8F6F0] text-gray-700 hover:bg-[#EFECE4] border border-[#EAE6DE]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#FFA040]' : 'text-gray-500'}`} />
                <span>{tab.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-extrabold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Real Photos & Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredData.map((item, idx) => {
            const isVideo = item.type === 'video';
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className={`group relative bg-[#F8F6F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border cursor-pointer flex flex-col transform hover:-translate-y-1.5 ${
                  isVideo ? 'border-orange-300 ring-1 ring-orange-200' : 'border-[#EAE6DE]'
                }`}
              >
                {/* Media Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-900">
                  <img
                    src={isVideo ? (item.poster || item.image) : item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className={`text-xs font-black uppercase px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5 ${
                      isVideo
                        ? 'bg-[#FF6700] text-white animate-pulse'
                        : 'bg-white/90 backdrop-blur-xs text-[#2D190E]'
                    }`}>
                      {isVideo ? <Video className="w-3.5 h-3.5" /> : null}
                      <span>{item.tag}</span>
                    </span>

                    {/* Right badge: Duration for video or zoom icon for photo */}
                    {isVideo ? (
                      <span className="bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded border border-white/20">
                        {item.duration}
                      </span>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Centered Play Button for Videos */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#FF6700] text-white flex items-center justify-center shadow-xl group-hover:scale-115 transition-transform duration-300">
                        <Play className="w-7 h-7 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Bottom title in photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-[#FFA040] font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold leading-tight font-['Outfit'] drop-shadow-sm line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Footer Details */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-600">
                    <span className="flex items-center gap-1.5 text-[#2D190E] font-semibold">
                      <User className="w-3.5 h-3.5 text-[#FF6700]" />
                      <span className="truncate">{item.guide}</span>
                    </span>
                    <span className="text-[#FF6700] font-bold group-hover:underline flex items-center gap-1 shrink-0">
                      {isVideo ? 'Play Video ▶' : 'View Photo →'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guest quote strip */}
        <div className="mt-12 text-center p-6 bg-[#F8F6F0] rounded-2xl border border-[#EAE6DE]">
          <p className="text-sm sm:text-base text-gray-700 italic max-w-3xl mx-auto">
            "Chris doesn't just drive you — he finds the hidden leopards, prepares fresh coffee on the Land Cruiser hood, and makes everyone feel like family. All video dispatches and photos above are 100% genuine from our guests' safaris."
          </p>
          <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#FF6700]">
            — Verified SafariDoctor Travelers
          </div>
        </div>

      </div>

      {/* Lightbox Modal (Photos + Videos) */}
      {selectedItemIndex !== null && activeItem && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#1C1008] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col lg:flex-row max-h-[92vh]"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous button */}
            <button
              onClick={prevItem}
              aria-label="Previous Item"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next button */}
            <button
              onClick={nextItem}
              aria-label="Next Item"
              className="absolute right-3 lg:right-auto lg:left-[calc(65%-24px)] top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Media presentation (Video or Photo) */}
            <div className="lg:w-[65%] bg-black flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[50vh] lg:max-h-[85vh] overflow-hidden">
              {activeItem.type === 'video' ? (
                <video
                  key={activeItem.id}
                  controls
                  autoPlay
                  playsInline
                  poster={activeItem.poster || activeItem.image}
                  className="max-h-[50vh] lg:max-h-[85vh] w-full object-contain"
                >
                  <source src={activeItem.video} type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>
              ) : (
                <img
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[50vh] lg:max-h-[85vh] w-full object-contain"
                />
              )}
            </div>

            {/* Details sidebar */}
            <div className="lg:w-[35%] p-6 sm:p-8 flex flex-col justify-between bg-[#24140A] overflow-y-auto max-h-[42vh] lg:max-h-[85vh]">
              <div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FFA040] uppercase tracking-wider mb-2">
                  {activeItem.type === 'video' ? (
                    <>
                      <Video className="w-4.5 h-4.5 text-[#FF6700]" />
                      <span>Live 4K Safari Video ({activeItem.duration})</span>
                    </>
                  ) : (
                    <>
                      <Camera className="w-4.5 h-4.5 text-[#FF6700]" />
                      <span>Real Safari Moment #{selectedItemIndex + 1} of {filteredData.length}</span>
                    </>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white leading-snug">
                  {activeItem.title}
                </h3>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 mt-2 mb-4">
                  <MapPin className="w-4 h-4 text-[#FF6700] shrink-0" />
                  <span>{activeItem.location}</span>
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="mt-5 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-xs font-bold text-[#FFA040] uppercase tracking-wider">
                    Safari Naturalist Guide
                  </span>
                  <span className="text-base font-bold text-white mt-0.5 block">
                    {activeItem.guide}
                  </span>
                  <span className="text-xs text-gray-400">
                    Certified KPSGA Guide & Founder of SafariDoctor
                  </span>
                </div>
              </div>

              {/* Inquiry Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                <a
                  href={`https://wa.me/254734392478?text=Hello%20Chris!%20I%20saw%20the%20${activeItem.type === 'video' ? 'video' : 'photo'}%20"${encodeURIComponent(activeItem.title)}"%20on%20SafariDoctor%20and%20would%20love%20to%20experience%20this%20safari.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#FF6700] hover:bg-[#E55A00] text-white py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base text-center shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Chat With Chris on WhatsApp</span>
                </a>
                <p className="text-center text-[11px] text-gray-400">
                  Direct contact with Chris: +254 734 392 478
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
