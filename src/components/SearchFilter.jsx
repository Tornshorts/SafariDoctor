import { useState } from 'react';
import { MapPin, Calendar as CalendarIcon, Users, Search, ChevronDown } from 'lucide-react';

export default function SearchFilter({ onSearch, selectedDestination, setSelectedDestination }) {
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [travelersOpen, setTravelersOpen] = useState(false);

  const destinationOptions = [
    { value: '', label: 'All Destinations' },
    { value: 'maasai-mara', label: 'Maasai Mara' },
    { value: 'amboseli', label: 'Amboseli' },
    { value: 'lake-nakuru', label: 'Lake Nakuru & Naivasha' },
    { value: 'diani-beach', label: 'Diani Beach & Coast' },
    { value: 'tsavo', label: 'Tsavo National Parks' },
    { value: 'samburu', label: 'Samburu National Reserve' }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch({
      destination: selectedDestination,
      date,
      adults,
      children
    });
  };

  return (
    <div className="relative z-30 max-w-[1400px] mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 mb-8 sm:mb-12">
      <form
        onSubmit={handleSearchSubmit}
        className="bg-white rounded-xl shadow-lg border border-[#E0DCD3] p-3 sm:p-4 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2"
      >
        {/* Where to? Choose Destination */}
        <div className="flex-1 flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#F7F4EE] transition-colors cursor-pointer border md:border-0 border-gray-100 relative group">
          <div className="w-12 h-12 rounded-full bg-orange-100/70 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-[#FF6700]" />
          </div>
          <div className="flex-1 text-left min-w-0">
            <span className="block text-xs sm:text-[13px] font-bold uppercase tracking-wider text-gray-500">
              Where to?
            </span>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full bg-transparent text-base md:text-[17px] font-bold text-gray-800 focus:outline-none cursor-pointer truncate pr-4"
            >
              {destinationOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400 pointer-events-none shrink-0" />
        </div>

        {/* Divider Desktop */}
        <div className="hidden md:block w-px h-10 bg-gray-200 mx-1" />

        {/* Date: Select Dates */}
        <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl md:rounded-full hover:bg-orange-50/60 transition-colors border md:border-0 border-gray-100 relative">
          <div className="w-12 h-12 rounded-full bg-orange-100/70 flex items-center justify-center shrink-0">
            <CalendarIcon className="w-6 h-6 text-[#FF6700]" />
          </div>
          <div className="flex-1 text-left min-w-0">
            <span className="block text-xs sm:text-[13px] font-bold uppercase tracking-wider text-gray-500">
              Date
            </span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-base md:text-[17px] font-bold text-gray-800 focus:outline-none cursor-pointer"
              placeholder="Select Dates"
            />
          </div>
        </div>

        {/* Divider Desktop */}
        <div className="hidden md:block w-px h-10 bg-gray-200 mx-1" />

        {/* Travelers: 2 Adults */}
        <div className="flex-1 relative">
          <div
            onClick={() => setTravelersOpen(!travelersOpen)}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl md:rounded-full hover:bg-orange-50/60 transition-colors cursor-pointer border md:border-0 border-gray-100"
          >
            <div className="w-12 h-12 rounded-full bg-orange-100/70 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-[#FF6700]" />
            </div>
            <div className="flex-1 text-left min-w-0">
              <span className="block text-xs sm:text-[13px] font-bold uppercase tracking-wider text-gray-500">
                Travelers
              </span>
              <span className="block text-base md:text-[17px] font-bold text-gray-800 truncate">
                {adults} Adult{adults > 1 ? 's' : ''}{children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}
              </span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
          </div>

          {/* Travelers Popover */}
          {travelersOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <div>
                  <div className="font-bold text-base text-gray-800">Adults</div>
                  <div className="text-sm text-gray-500">Age 12+</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="font-bold text-base w-4 text-center">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(adults + 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-bold text-base text-gray-800">Children</div>
                  <div className="text-sm text-gray-500">Age 3 - 11</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="font-bold text-base w-4 text-center">{children}</span>
                  <button
                    type="button"
                    onClick={() => setChildren(children + 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setTravelersOpen(false)}
                className="w-full mt-3 bg-[#FF6700] text-white py-2 rounded-xl text-sm font-bold hover:bg-[#E55A00]"
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Search Tours Button */}
        <button
          type="submit"
          className="bg-[#FF6700] hover:bg-[#E55A00] text-white px-8 py-3.5 rounded-lg md:rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-2.5 shadow-md transition-all shrink-0 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
        >
          <Search className="w-6 h-6" />
          <span>Search Tours</span>
        </button>
      </form>
    </div>
  );
}
