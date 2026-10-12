import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { googleReviewsData } from '../data/safariData';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedReviewModal, setSelectedReviewModal] = useState(null);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : googleReviewsData.length - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev < googleReviewsData.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#F8F6F0] relative border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header matching Reference Screenshot 5 */}
        <div className="text-left mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C1917] tracking-tight font-['Outfit']">
            Top-Rated by Our Clients | Google Reviews
          </h2>
          <div className="w-12 h-1 bg-[#2D190E] mt-3 rounded-full" />
        </div>

        {/* Reviews Carousel Wrapper */}
        <div className="relative">
          {/* Previous Arrow Button */}
          <button
            onClick={prevReview}
            aria-label="Previous Review"
            className="hidden md:flex absolute -left-5 top-1/3 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-gray-700 shadow-md border border-gray-200 items-center justify-center hover:bg-gray-100 transition-transform hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={nextReview}
            aria-label="Next Review"
            className="hidden md:flex absolute -right-5 top-1/3 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-gray-700 shadow-md border border-gray-200 items-center justify-center hover:bg-gray-100 transition-transform hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Review Cards Grid / Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {googleReviewsData.map((review) => (
              <div key={review.id} className="flex flex-col">
                
                {/* White Speech Bubble Card with bottom triangle indicator matching Screenshot 5 */}
                <div className="relative bg-white rounded-xl p-6 sm:p-7 shadow-xs border border-[#EAE6DE] flex flex-col justify-between min-h-[220px]">
                  <div>
                    {/* Top Row: Quote Icon + 5 Yellow Stars + Verified Checkmark */}
                    <div className="flex items-center gap-2 mb-3">
                      <Quote className="w-6 h-6 text-gray-400 rotate-180 fill-current opacity-60" />
                      
                      <div className="flex items-center text-amber-400 gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current text-[#FABB05]" />
                        ))}
                      </div>

                      {review.verified && (
                        <div className="w-4 h-4 rounded-full bg-gray-400 text-white flex items-center justify-center text-[10px] font-bold ml-1">
                          ✓
                        </div>
                      )}
                    </div>

                    {/* Review Text */}
                    <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed line-clamp-4">
                      "{review.text}"
                    </p>

                    <button
                      onClick={() => setSelectedReviewModal(review)}
                      className="text-sm font-semibold text-gray-600 hover:text-[#FF6700] mt-2 inline-block cursor-pointer"
                    >
                      read more
                    </button>

                    {/* Thumbnail gallery if present (Safaa T & Olivier cards from Screenshot 5) */}
                    {review.hasGallery && review.galleryImage && (
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <img
                          src={review.galleryImage}
                          alt="Traveler Photos"
                          className="h-10 sm:h-12 w-auto object-contain rounded"
                        />
                      </div>
                    )}
                  </div>

                  {/* Google Logo on Bottom Right of Card matching Reference Screenshot 5 */}
                  <div className="mt-4 pt-2 flex justify-end">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>

                  {/* Speech bubble downward pointer triangle */}
                  <div className="absolute -bottom-2.5 left-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white drop-shadow-2xs" />
                </div>

                {/* Author Info below speech bubble */}
                <div className="mt-4 pl-4">
                  <h4 className="text-sm sm:text-base font-extrabold text-gray-900 uppercase tracking-wider font-['Outfit']">
                    {review.author}
                  </h4>
                  <span className="text-xs sm:text-[13px] text-gray-500 uppercase tracking-wider block mt-0.5">
                    {review.date}
                  </span>
                </div>

              </div>
            ))}
          </div>

          {/* Pagination dots matching Reference Screenshot 5 */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D190E]/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D190E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D190E]/30" />
          </div>
        </div>

      </div>

      {/* Review Detail Modal */}
      {selectedReviewModal && (
        <div
          onClick={() => setSelectedReviewModal(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full bg-white rounded-2xl p-6 sm:p-8 shadow-2xl"
          >
            <button
              onClick={() => setSelectedReviewModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1 text-[#FABB05] mb-2">
              {[...Array(selectedReviewModal.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="text-sm font-bold text-gray-600 ml-2">Google Verified Review</span>
            </div>

            <h3 className="text-xl font-black text-gray-900 uppercase font-['Outfit']">
              {selectedReviewModal.author}
            </h3>
            <span className="text-sm text-gray-400 block mb-4">{selectedReviewModal.date}</span>

            <p className="text-base text-gray-700 leading-relaxed italic">
              "{selectedReviewModal.text}"
            </p>

            {selectedReviewModal.hasGallery && selectedReviewModal.galleryImage && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm font-bold text-gray-500 uppercase block mb-2">Traveler Photos:</span>
                <img
                  src={selectedReviewModal.galleryImage}
                  alt="Review Photos"
                  className="rounded-lg max-h-28 w-auto"
                />
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedReviewModal(null)}
                className="bg-[#2D190E] hover:bg-[#FF6700] text-white px-6 py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
