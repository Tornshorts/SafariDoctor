import { useState } from 'react';
import { User, MessageSquare, ArrowRight, X } from 'lucide-react';
import { newsArticlesData } from '../data/safariData';

export default function LatestNews() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="news" className="py-16 md:py-24 bg-[#F8F6F0] relative border-b border-[#EAE6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header matching Reference Screenshot 4 */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C1917] tracking-tight uppercase font-['Outfit']">
            LATEST NEWS
          </h2>
          <div className="w-12 h-1 bg-[#2D190E] mt-3 rounded-full" />
        </div>

        {/* 3 News Articles Grid matching Reference Screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticlesData.map((article) => (
            <article
              key={article.id}
              className="bg-transparent flex flex-col justify-between group"
            >
              <div>
                {/* Article Image */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-xs bg-gray-200 mb-4 shadow-xs">
                  <img
                    src={article.image}
                    alt={article.title}
                    onError={(e) => {
                      if (article.fallbackImage) {
                        e.target.src = article.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Category in all-caps bold */}
                <span className="block text-xs sm:text-sm font-bold tracking-widest text-[#2D190E]/80 uppercase mb-2">
                  {article.category}
                </span>

                {/* Title */}
                <h3
                  onClick={() => setActiveArticle(article)}
                  className="text-xl sm:text-2xl font-bold text-[#1C1917] hover:text-[#FF6700] transition-colors leading-snug mb-3 cursor-pointer font-['Outfit']"
                >
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 line-clamp-4">
                  {article.summary}
                </p>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="text-sm sm:text-base font-semibold text-[#2D190E] hover:text-[#FF6700] transition-colors inline-flex items-center gap-1.5 group-hover:underline cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Meta strip at bottom matching Reference Screenshot 4 */}
              <div className="mt-6 pt-3 border-t border-gray-300/80 flex items-center justify-between text-sm text-gray-500">
                <span className="uppercase text-xs sm:text-sm tracking-wider font-semibold text-gray-500">
                  {article.date}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <User className="w-4.5 h-4.5 text-gray-400" />
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-4.5 h-4.5 text-gray-400" />
                    <span>0</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* MORE NEWS Dark Brown Button matching Reference Screenshot 5 */}
        <div className="mt-14 text-center">
          <button
            onClick={() => {
              alert('Showing all safari guides and latest Kenya travel bulletins!');
            }}
            className="bg-[#2D190E] hover:bg-[#1A0E08] text-white px-8 py-3.5 rounded-none font-bold text-sm sm:text-base uppercase tracking-widest transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
          >
            MORE NEWS
          </button>
        </div>

      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div
          onClick={() => setActiveArticle(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-sm font-bold text-[#FF6700] uppercase tracking-wider block mb-2">
              {activeArticle.category} • {activeArticle.date}
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-[#2D190E] leading-tight font-['Outfit'] mb-4">
              {activeArticle.title}
            </h3>

            <div className="h-64 w-full rounded-xl overflow-hidden mb-6 bg-gray-100">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-base text-gray-700 space-y-4 leading-relaxed">
              <p>{activeArticle.summary}</p>
              <p>
                At SafariDoctor, we curate every journey to offer deep encounters with wildlife and native cultures. Whether arriving via light bush aircraft directly into the Maasai Mara airstrip or setting off in our customized 4x4 Land Cruisers, every detail is handled with precision.
              </p>
              <p>
                Interested in this itinerary? Speak directly with Chris ("Black Santa") for personalized quotes and seasonal availability.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
              <a
                href={`https://wa.me/254723794090?text=Hello%20Chris,%20I%20read%20the%20article%20"${encodeURIComponent(activeArticle.title)}"%20and%20want%20to%20know%20more.`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#2D190E] hover:bg-[#FF6700] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Inquire With Chris
              </a>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-xs font-bold text-gray-500 hover:text-gray-800"
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
