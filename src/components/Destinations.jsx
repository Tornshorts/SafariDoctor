import { ArrowRight, Compass } from 'lucide-react';
import { destinationsData } from '../data/safariData';

export default function Destinations({ onSelectDestination, onOpenDestinationModal }) {
  return (
    <section id="destinations" className="py-16 md:py-24 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-[#FF6700] text-sm sm:text-base font-black tracking-[0.25em] uppercase block mb-2 font-['Outfit']">
            DESTINATION HIGHLIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D190E] tracking-tight leading-tight uppercase font-['Outfit']">
            Explore Iconic African Parks
          </h2>
          <div className="w-16 h-1 bg-[#2D190E] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            From the world-famous wildebeest crossing of Maasai Mara to the snows of Kilimanjaro and Rift Valley bird paradises.
          </p>
        </div>

        {/* 6 Destination Cards Grid - Exactly matching Reference Website Screenshot 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinationsData.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onOpenDestinationModal(dest)}
              className="group relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1.5"
            >
              {/* Destination Image */}
              <img
                src={dest.image}
                alt={dest.name}
                onError={(e) => {
                  if (dest.fallbackImage) {
                    e.target.src = dest.fallbackImage;
                  }
                }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay for optimal legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 group-hover:from-black/90 group-hover:via-black/35 transition-colors duration-300" />

              {/* Signature White Inset Border Frame matching Reference Screenshot 3 */}
              <div className="absolute inset-3 sm:inset-4 border border-white/75 pointer-events-none rounded-xs flex flex-col justify-end p-4 transition-all duration-300 group-hover:border-white">
                
                {/* Top Badge on Hover / Always subtle */}
                <div className="absolute top-3 left-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="bg-black/60 backdrop-blur-xs text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-white/20">
                    {dest.badge}
                  </span>
                </div>

                {/* Bottom Bold White All-Caps Destination Name matching Reference Screenshot 3 */}
                <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="text-xl sm:text-2xl md:text-[26px] font-black tracking-wider text-white uppercase font-['Outfit'] drop-shadow-md">
                    {dest.name}
                  </h3>
                  
                  {/* Subtitle / Wildlife snippet */}
                  <p className="text-sm text-white/90 line-clamp-1 mt-1 font-medium transition-opacity">
                    {dest.tagline}
                  </p>
                </div>

                {/* Hover Reveal: Explore Button */}
                <div className="mt-3 flex items-center justify-between text-sm font-bold text-[#FFA040] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="flex items-center gap-1.5">
                    <span>View Park Guide & Safaris</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </span>
                  <span className="text-white/80 text-xs font-normal">
                    From ${dest.startingPriceUSD}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Custom Safari Callout Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E4DA] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#2D190E]/5 flex items-center justify-center shrink-0">
              <Compass className="w-7 h-7 text-[#2D190E]" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#2D190E]">
                Need a multi-park safari across Kenya & Tanzania?
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mt-0.5">
                We combine Maasai Mara, Serengeti, Ngorongoro, Amboseli, and Diani Beach into seamless custom itineraries.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/254723794090?text=Hello%20Chris,%20I%20would%20like%20to%20plan%20a%20multi-park%20safari%20route."
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-[#2D190E] hover:bg-[#FF6700] text-white px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all shadow-md text-center"
          >
            Design Custom Safari Route
          </a>
        </div>

      </div>
    </section>
  );
}
