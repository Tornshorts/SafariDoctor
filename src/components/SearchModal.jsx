import { useState } from 'react';
import { Search, X, MapPin, ArrowRight } from 'lucide-react';
import { packagesData, destinationsData } from '../data/safariData';

export default function SearchModal({ isOpen, onClose, onSelectPackage, onSelectDestination }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredPackages = packagesData.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.subtitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.type?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDestinations = destinationsData.filter(
    (d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[80vh]"
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
          <Search className="w-6 h-6 text-gray-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Maasai Mara, Amboseli, elephants, 4-day safari..."
            className="w-full bg-transparent text-base sm:text-lg font-semibold text-gray-800 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-sm font-bold text-gray-400 hover:text-gray-600 px-2 py-1 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-200/80 hover:bg-gray-300 text-gray-700 flex items-center justify-center shrink-0 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Quick Destination Suggestions */}
          <div>
            <span className="text-xs sm:text-sm font-extrabold text-gray-500 uppercase tracking-wider block mb-2">
              Destinations ({filteredDestinations.length})
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {filteredDestinations.map((d) => (
                <button
                  key={d.id}
                  onClick={() => {
                    onSelectDestination(d);
                    onClose();
                  }}
                  className="p-2.5 rounded-xl border border-gray-100 hover:border-[#FF6700] hover:bg-orange-50/50 text-left transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <MapPin className="w-4.5 h-4.5 text-[#FF6700] shrink-0" />
                  <span className="text-sm font-bold text-gray-800 group-hover:text-[#FF6700] truncate">
                    {d.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Safari Packages */}
          <div>
            <span className="text-xs sm:text-sm font-extrabold text-gray-500 uppercase tracking-wider block mb-2">
              Tour Packages ({filteredPackages.length})
            </span>
            <div className="space-y-2">
              {filteredPackages.slice(0, 6).map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => {
                    onSelectPackage(pkg);
                    onClose();
                  }}
                  className="p-3 rounded-xl border border-gray-100 hover:border-[#FF6700] hover:bg-orange-50/40 transition-colors flex items-center justify-between gap-3 cursor-pointer group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#FF6700] truncate">
                        {pkg.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mt-0.5">
                        <span>{pkg.days} Days / {pkg.nights} Nights</span>
                        <span>•</span>
                        <span className="font-semibold text-[#2D190E]">${pkg.priceUSD}</span>
                      </div>
                    </div>
                  </div>

                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#FF6700] group-hover:translate-x-0.5 transition-transform shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 text-center text-sm text-gray-500 font-medium">
          Type keywords or click any item to view complete itineraries and details.
        </div>
      </div>
    </div>
  );
}
