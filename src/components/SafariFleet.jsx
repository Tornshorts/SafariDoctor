import { Camera, Zap, Radio, Wind, Sparkles, Check } from 'lucide-react';
import { fleetData } from '../data/safariData';

export default function SafariFleet() {
  const vehicle = fleetData[0];

  const specs = [
    { icon: Camera, title: 'Pop-Up Safari Roof', desc: 'Custom elevated canvas/steel roof for 360-degree standing photography and unobstructed animal viewing.' },
    { icon: Zap, title: '220V & USB Charging', desc: 'Keep your cameras, phones, and drones fully charged on the go during full-day game drives.' },
    { icon: Wind, title: 'Built-in Cooler Box', desc: 'Complimentary chilled bottled water and refreshments maintained at optimal temperatures in the African heat.' },
    { icon: Radio, title: 'Long-Range HF Radio', desc: 'Direct radio link between our drivers across park sectors to track real-time big cat and river crossing sightings.' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src={vehicle.image}
                alt="SafariDoctor Custom 4x4 Land Cruiser"
                className="w-full h-[400px] md:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="bg-[#FF6700] text-white text-xs sm:text-sm font-black uppercase px-3.5 py-1 rounded-full self-start mb-2 shadow-md">
                  {vehicle.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Built Specifically for the Kenyan Bush
                </h3>
                <p className="text-white/90 text-sm sm:text-base mt-1">
                  Custom converted Toyota Land Cruiser 4WD with heavy-duty suspension, snorkel, and all-terrain tires.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                <Sparkles className="w-7 h-7 text-[#FF6700]" />
              </div>
              <div>
                <span className="block text-base font-black text-gray-900">Guaranteed Window Seat</span>
                <span className="text-sm text-gray-500 font-medium">Max 6 guests per vehicle</span>
              </div>
            </div>
          </div>

          {/* Right Column: Fleet Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[#FF6700] text-sm md:text-base font-black tracking-[0.2em] uppercase block mb-2">
                OUR SAFARI FLEET
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#12181F] tracking-tight leading-tight">
                Ride in Comfort & Style: Custom 4x4 Land Cruisers
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-3">
                Rough terrain in Maasai Mara, Amboseli, and Samburu requires proven, robust machinery. Unlike minivans, our heavy-duty Land Cruisers ensure you navigate deep mud, river crossings, and rocky trails safely without missing a moment of wildlife action.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {specs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-orange-50/40 border border-orange-100 flex items-start gap-3">
                    <div className="w-11 h-11 rounded-lg bg-[#FF6700]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#FF6700]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <ul className="space-y-2 text-sm sm:text-base font-semibold text-gray-700 mb-6">
                {vehicle.features.slice(4).map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Real action photos of the fleet */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs font-black uppercase tracking-wider text-gray-400 block mb-2.5">
                  See Our Fleet in Action with Travelers:
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative rounded-xl overflow-hidden h-20 group">
                    <img
                      src="/assets/real_migration_cruiser_line.jpg"
                      alt="Cruiser with open roof observing migration"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <span className="absolute bottom-1 left-1.5 text-[10px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded">
                      Open Roof
                    </span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden h-20 group">
                    <img
                      src="/assets/real_chris_cockpit_smile.jpg"
                      alt="Chris at the Land Cruiser wheel"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <span className="absolute bottom-1 left-1.5 text-[10px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded">
                      Naturalist Driver
                    </span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden h-20 group">
                    <img
                      src="/assets/real_chris_guests_thumbs_up.jpg"
                      alt="Happy travelers with the Land Cruiser"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <span className="absolute bottom-1 left-1.5 text-[10px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded">
                      Guests Thumbs Up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
