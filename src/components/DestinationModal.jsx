import { X, Calendar, Clock, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export default function DestinationModal({ dest, onClose, onExploreTours, currency }) {
  if (!dest) return null;

  const formatPrice = (kes, usd) => {
    if (currency === 'USD') return `$${usd.toLocaleString()}`;
    return `KES ${kes.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-100 flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-6 h-6 text-[#FF6700]" />
            <h2 className="text-2xl font-black text-gray-900">{dest.name}</h2>
            <span className="bg-orange-100 text-[#FF6700] text-sm font-bold px-2.5 py-0.5 rounded-full ml-2">
              {dest.badge}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center shrink-0 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Banner */}
        <div className="relative h-64 sm:h-72 w-full shrink-0">
          <img
            src={dest.hiresImage || dest.image}
            alt={dest.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
            <div className="text-white">
              <span className="text-sm font-bold text-[#FFA040] uppercase tracking-wider block mb-1">
                Kenya Destination Guide
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{dest.name}</h3>
              <p className="text-base text-white/95 font-medium mt-1">{dest.tagline}</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-gray-400 mb-2">
              Overview
            </h4>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {dest.description}
            </p>
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-orange-50/50 p-4 rounded-2xl border border-orange-100">
              <div className="flex items-center gap-2 text-sm font-bold text-[#FF6700] uppercase mb-1">
                <Calendar className="w-5 h-5" />
                <span>Best Time to Visit</span>
              </div>
              <p className="text-base font-semibold text-gray-800">{dest.bestTime}</p>
            </div>

            <div className="bg-orange-50/50 p-4 rounded-2xl border border-orange-100">
              <div className="flex items-center gap-2 text-sm font-bold text-[#FF6700] uppercase mb-1">
                <Clock className="w-5 h-5" />
                <span>Recommended Stay</span>
              </div>
              <p className="text-base font-semibold text-gray-800">{dest.recommendedDays}</p>
            </div>
          </div>

          {/* Key Wildlife */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-gray-400 mb-2">
              Signature Wildlife Sightings
            </h4>
            <div className="flex flex-wrap gap-2">
              {dest.keyWildlife?.map((animal, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-800 text-sm font-bold px-3 py-1.5 rounded-xl border border-gray-200"
                >
                  🐾 {animal}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-gray-400 mb-2">
              Top Experiences & Activities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dest.highlights?.map((high, i) => (
                <div key={i} className="flex items-center gap-2 text-base text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6700] shrink-0" />
                  <span>{high}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4 sm:p-6 flex items-center justify-between gap-4">
          <div>
            <span className="text-sm text-gray-500 block font-medium">Safaris to {dest.name} from</span>
            <div className="text-2xl font-black text-[#FF6700]">
              {formatPrice(dest.startingPriceKES, dest.startingPriceUSD)}
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onExploreTours(dest.id);
            }}
            className="bg-[#FF6700] hover:bg-[#E55A00] text-white px-6 py-3 rounded-xl font-bold text-base flex items-center gap-2 shadow-md shadow-orange-500/25 transition-colors cursor-pointer"
          >
            <span>View {dest.name} Packages</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
