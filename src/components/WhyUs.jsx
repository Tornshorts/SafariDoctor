import { UserCheck, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: UserCheck,
      title: 'Expert Guides',
      desc: 'Experienced & certified KPSGA professional naturalist guides with decades of bush experience.',
    },
    {
      icon: Compass,
      title: 'Tailored Itineraries',
      desc: 'Custom trips designed around your schedule, interests, wildlife photography goals, and budget.',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Reliable',
      desc: 'Your safety is our priority. Specially equipped 4x4 Land Cruisers with HF radios and first-aid kits.',
    },
    {
      icon: HeartHandshake,
      title: 'Unforgettable Experiences',
      desc: 'Memories for a lifetime with ethical wildlife viewing, authentic community visits, and zero hidden fees.',
    },
  ];

  return (
    <section className="py-20 bg-[#FBFBFA] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header matching mockup */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#FF6700] text-sm md:text-base font-black tracking-[0.2em] uppercase block mb-2">
            WHY TRAVEL WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#12181F] tracking-tight">
            Your Trusted Safari Partner
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">
            Born and raised in Kenya, SafariDoctor combines medical-grade precision with deep safari passion.
          </p>
        </div>

        {/* 4 Features Grid matching mockup icons & copy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-start"
              >
                {/* Orange rounded square icon container matching mockup */}
                <div className="w-14 h-14 rounded-2xl bg-[#FF6700] flex items-center justify-center text-white mb-5 shadow-md shadow-orange-500/25">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-gray-100 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#FF6700]">100%</div>
            <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase mt-1">Guaranteed Window Seats</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#FF6700]">12+</div>
            <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase mt-1">Years Safari Excellence</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#FF6700]">5,000+</div>
            <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase mt-1">Happy Global Tourists</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#FF6700]">24 / 7</div>
            <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase mt-1">Ground Safari Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
