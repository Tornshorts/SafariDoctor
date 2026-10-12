import { useState } from 'react';
import { Camera, MapPin, User, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { realPhotosData } from '../data/safariData';

export default function RealPhotosGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev > 0 ? prev - 1 : realPhotosData.length - 1));
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
  setSelectedPhotoIndex((prev) => (prev < realPhotosData.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="real-moments" className="py-16 md:py-24 bg-white relative border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 text-[#FF6700] text-xs sm:text-sm font-black tracking-widest uppercase mb-3">
            <Camera className="w-4.5 h-4.5" />
            <span>REAL TRAVELER EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D190E] tracking-tight uppercase font-['Outfit']">
            Moments With Chris & Our Guests
          </h2>
          <div className="w-16 h-1 bg-[#FF6700] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            No stock models — just real safari adventures, savannah picnics on the Land Cruiser hood, golden hour game drives, and happy travelers exploring Kenya with Chris ("Black Santa").
          </p>
        </div>

        {/* Real Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {realPhotosData.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative bg-[#F8F6F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#EAE6DE] cursor-pointer flex flex-col transform hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-200">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Tag pill */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-xs text-[#2D190E] text-xs font-extrabold uppercase px-2.5 py-1 rounded-md shadow-xs">
                    {photo.tag}
                  </span>
                </div>

                {/* Zoom icon on hover */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5" />
                </div>

                {/* Bottom text inside photo */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#FFA040] font-semibold mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>{photo.location}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-tight font-['Outfit'] drop-shadow-sm">
                    {photo.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {photo.description}
                </p>

                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-600">
                  <span className="flex items-center gap-1.5 text-[#2D190E] font-semibold">
                    <User className="w-4 h-4 text-[#FF6700]" />
                    <span>Guide: {photo.guide}</span>
                  </span>
                  <span className="text-[#FF6700] font-bold group-hover:underline">
                    View Photo →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guest quote strip */}
        <div className="mt-10 text-center">
          <p className="text-sm sm:text-base text-gray-500 italic max-w-2xl mx-auto">
            "Chris doesn't just drive you — he finds the hidden leopards, prepares breakfast on the cruiser bonnet, and makes everyone feel like family." — Verified 2026 Travelers
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#1C1008] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Previous button */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next button */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 md:right-auto md:left-[calc(60%-24px)] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Image section */}
            <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[70vh]">
              <img
                src={realPhotosData[selectedPhotoIndex].image}
                alt={realPhotosData[selectedPhotoIndex].title}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>

            {/* Details sidebar */}
            <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-[#24140A]">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#FFA040] uppercase tracking-wider mb-2">
                  <Camera className="w-5 h-5" />
                  <span>Real Safari Photo #{selectedPhotoIndex + 1} of {realPhotosData.length}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white">
                  {realPhotosData[selectedPhotoIndex].title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-300 mt-2 mb-4">
                  <MapPin className="w-4.5 h-4.5 text-[#FF6700]" />
                  <span>{realPhotosData[selectedPhotoIndex].location}</span>
                </div>

                <p className="text-base text-gray-300 leading-relaxed">
                  {realPhotosData[selectedPhotoIndex].description}
                </p>

                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-xs font-bold text-[#FFA040] uppercase">
                    Safari Naturalist Guide
                  </span>
                  <span className="text-base font-bold text-white mt-0.5 block">
                    {realPhotosData[selectedPhotoIndex].guide}
                  </span>
                  <span className="text-sm text-gray-400">
                    Certified KPSGA Guide & Founder of SafariDoctor
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={`https://wa.me/254723794090?text=Hi%20Chris!%20I%20saw%20the%20photo%20"${encodeURIComponent(realPhotosData[selectedPhotoIndex].title)}"%20and%20would%20love%20to%20experience%20this.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#FF6700] hover:bg-[#E55A00] text-white py-3 rounded-xl font-bold text-sm sm:text-base text-center shadow-lg transition-colors"
                >
                  Book This Experience with Chris
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
