import { useState } from 'react';
import { Send, MessageCircle, CheckCircle, ShieldCheck } from 'lucide-react';
import { packagesData } from '../data/safariData';

export default function BookingSection({ initialPackage, onSuccessBooking }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    country: '',
    selectedTour: initialPackage ? initialPackage.title : '3-Day Maasai Mara Safari',
    travelDate: '',
    adults: 2,
    children: 0,
    accommodationTier: 'Mid-Range Tented Camp',
    specialNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccessBooking) onSuccessBooking(formData);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello SafariDoctor! I would like to book a tour with you:\n\n` +
      `• Tour: ${formData.selectedTour}\n` +
      `• Date: ${formData.travelDate || 'Flexible'}\n` +
      `• Party: ${formData.adults} Adults, ${formData.children} Children\n` +
      `• Accommodation: ${formData.accommodationTier}\n` +
      `• Guest: ${formData.fullName || 'Guest'} (${formData.country || 'International'})\n` +
      `• Notes: ${formData.specialNotes || 'None'}\n\n` +
      `Please confirm availability and the best quote.`
    );
    window.open(`https://wa.me/254734392478?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact details and reassurance */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[#FF6700] text-sm md:text-base font-black tracking-[0.2em] uppercase block mb-2">
                START YOUR JOURNEY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#12181F] tracking-tight leading-tight">
                Plan Your Dream Kenya Safari
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-3">
                Tell us your travel dreams and our safari specialists will get back to you with a personalized, obligation-free itinerary and transparent quote within a few hours.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FF6700] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Need an Instant Response?</h4>
                  <p className="text-sm text-gray-500">Chat with Chris directly on WhatsApp 24/7</p>
                  <a
                    href="https://wa.me/254734392478"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-[#FF6700] hover:underline inline-block mt-0.5"
                  >
                    +254 734 392 478
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gray-900 text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Booking Guarantee</h4>
                  <p className="text-sm text-gray-500">Flexible cancellation & 100% financial security</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#12181F] text-white space-y-3">
              <h4 className="font-black text-base text-[#FFA040] uppercase">SafariDoctor Head Office</h4>
              <p className="text-sm text-gray-300">
                Gateway Mall, 4th Floor North, Airport Road Syokimau, Nairobi, Kenya
              </p>
              <div className="text-sm text-gray-300 space-y-1 pt-1 border-t border-gray-800">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">Office Lines:</span>
                <div className="flex flex-col gap-0.5 font-medium">
                  <a href="tel:+254734392478" className="hover:text-[#FFA040] transition-colors">+254 734 392 478 (Main / WhatsApp)</a>
                  <a href="tel:+254724843457" className="hover:text-[#FFA040] transition-colors">+254 724 843 457</a>
                  <a href="tel:+254715325418" className="hover:text-[#FFA040] transition-colors">+254 715 325 418</a>
                </div>
              </div>
              <p className="text-sm text-gray-300 pt-1 border-t border-gray-800">
                Email: <a href="mailto:Chrissafaridoctortravells@gmail.com" className="text-[#FFA040] hover:underline font-semibold break-all">Chrissafaridoctortravells@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFAFA] rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-18 h-18 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">Asante Sana! Inquiry Received</h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Our safari consultant has received your details for <strong>{formData.selectedTour}</strong>. We will send your custom itinerary via email and WhatsApp within 3 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-[#FF6700] text-white px-6 py-2.5 rounded-xl font-bold text-sm"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-800 uppercase mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base focus:outline-none focus:border-[#FF6700]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-800 uppercase mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base focus:outline-none focus:border-[#FF6700]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-800 uppercase mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base focus:outline-none focus:border-[#FF6700]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-800 uppercase mb-1.5">
                        Country of Residence
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. United States, Germany, UK"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base focus:outline-none focus:border-[#FF6700]"
                      />
                    </div>
                  </div>

                  {/* Tour Package Selection */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 uppercase mb-1.5">
                      Select Safari Package or Custom
                    </label>
                    <select
                      value={formData.selectedTour}
                      onChange={(e) => setFormData({ ...formData, selectedTour: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base font-semibold focus:outline-none focus:border-[#FF6700]"
                    >
                      {packagesData.map((pkg) => (
                        <option key={pkg.id} value={pkg.title}>
                          {pkg.title} ({pkg.days} Days / {pkg.nights} Nights)
                        </option>
                      ))}
                      <option value="Custom Private Itinerary">100% Custom Tailor-Made Itinerary</option>
                    </select>
                  </div>

                  {/* Dates and Party Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-800 uppercase mb-1.5">
                        Travel Date
                      </label>
                      <input
                        type="date"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base focus:outline-none focus:border-[#FF6700]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-800 uppercase mb-1.5">
                        Adults
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={formData.adults}
                        onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) || 1 })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base focus:outline-none focus:border-[#FF6700]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-800 uppercase mb-1.5">
                        Children (&lt;12)
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={formData.children}
                        onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base focus:outline-none focus:border-[#FF6700]"
                      />
                    </div>
                  </div>

                  {/* Accommodation Preference */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 uppercase mb-1.5">
                      Preferred Accommodation Level
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {['Budget Camping / Tents', 'Mid-Range Tented Camp', 'Luxury Safari Lodge'].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData({ ...formData, accommodationTier: tier })}
                          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all text-center cursor-pointer ${
                            formData.accommodationTier === tier
                              ? 'border-[#FF6700] bg-orange-50 text-[#FF6700]'
                              : 'border-gray-200 bg-white text-gray-600'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label className="block text-sm font-bold text-gray-800 uppercase mb-1.5">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      rows="3"
                      placeholder="e.g. Balloon safari inquiry, dietary requirements, honeymoon setup, airport pickup time..."
                      value={formData.specialNotes}
                      onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base focus:outline-none focus:border-[#FF6700]"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-[#FF6700] hover:bg-[#E55A00] text-white font-bold py-3.5 px-6 rounded-xl text-base flex items-center justify-center gap-2.5 shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                      <span>Request Free Quote</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-base flex items-center justify-center gap-2.5 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span>Instant WhatsApp Quote</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
