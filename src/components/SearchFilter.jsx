import React, { useState } from 'react';
import { MapPin, Calendar as CalendarIcon, Users, Search, ChevronDown, Check } from 'lucide-react';

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
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 -mt-14 sm:-mt-16 md:-mt-12">
      <form
        onSubmit={handleSearchSubmit}
        className="bg-white rounded-2xl md:rounded-full shadow-2xl border border-gray-100 p-3 md:p-3.5 flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-1"
      >
        {/* Where to? Choose Destination */}
        <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl md:rounded-full hover:bg-orange-50/60 transition-colors cursor-pointer border md:border-0 border-gray-100 relative group">
          <div className="w-10 h-10 rounded-full bg-orange-100/70 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-[#FF6700]" />
          </div>
          <div className="flex-1 text-left min-w-0">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">
              Where to?
            </span>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full bg-transparent text-sm md:text-[15px] font-bold text-gray-800 focus:outline-none cursor-pointer truncate pr-4"
            >
              {destinationOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 pointer-events-none shrink-0" />
        </div>

        {/* Divider Desktop */}
        <div className="hidden md:block w-px h-10 bg-gray-200 mx-1" />

        {/* Date: Select Dates */}
        <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl md:rounded-full hover:bg-orange-50/60 transition-colors border md:border-0 border-gray-100 relative">
          <div className="w-10 h-10 rounded-full bg-orange-100/70 flex items-center justify-center shrink-0">
            <CalendarIcon className="w-5 h-5 text-[#FF6700]" />
          </div>
          <div className="flex-1 text-left min-w-0">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">
              Date
            </span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-sm md:text-[15px] font-bold text-gray-800 focus:outline-none cursor-pointer"
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
            <div className="w-10 h-10 rounded-full bg-orange-100/70 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-[#FF6700]" />
            </div>
            <div className="flex-1 text-left min-w-0">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">
                Travelers
              </span>
              <span className="block text-sm md:text-[15px] font-bold text-gray-800 truncate">
                {adults} Adult{adults > 1 ? 's' : ''}{children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
          </div>

          {/* Travelers Popover */}
          {travelersOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <div>
                  <div className="font-bold text-sm text-gray-800">Adults</div>
                  <div className="text-xs text-gray-400">Age 12+</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm w-4 text-center">{adults}</span>
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
                  <div className="font-bold text-sm text-gray-800">Children</div>
                  <div className="text-xs text-gray-400">Age 3 - 11</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm w-4 text-center">{children}</span>
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
                className="w-full mt-3 bg-[#FF6700] text-white py-2 rounded-xl text-xs font-bold hover:bg-[#E55A00]"
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Search Tours Button */}
        <button
          type="submit"
          className="bg-[#FF6700] hover:bg-[#E55A00] text-white px-7 py-3.5 md:py-4 rounded-xl md:rounded-full font-bold text-sm md:text-base flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Search className="w-5 h-5" />
          <span>Search Tours</span>
        </button>
      </form>
    </div>
  );
}
