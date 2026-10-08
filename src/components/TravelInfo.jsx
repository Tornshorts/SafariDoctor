import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Sun, Luggage, DollarSign, HeartPulse, HelpCircle } from 'lucide-react';
import { faqData } from '../data/safariData';

export default function TravelInfo() {
  const [openFaq, setOpenFaq] = useState(0);

  const tips = [
    {
      icon: FileText,
      title: 'Kenya Electronic Travel Authorisation (eTA)',
      desc: 'All international travelers must obtain an approved eTA online before flying to Kenya. Visit the official website etakenya.go.ke at least 2 weeks before departure.'
    },
    {
      icon: Sun,
      title: 'Great Migration Timing',
      desc: 'Over 2 million wildebeests and zebras move into Maasai Mara between July and October for the famous river crossings. Predators are at peak action!'
    },
    {
      icon: Luggage,
      title: 'Soft Duffle Bag Packing',
      desc: 'Safari vehicles and internal bush flights have luggage limits (15kg soft duffles recommended). Pack neutral bush tones (khaki, tan, olive green).'
    },
    {
      icon: DollarSign,
      title: 'USD & M-Pesa Accepted',
      desc: 'US Dollar bills issued from 2013 onwards are widely accepted. Kenya Shillings (KES) and Kenya\'s instant M-Pesa mobile payment are also accepted everywhere.'
    }
  ];

  return (
    <section id="travel-info" className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF6700] text-xs md:text-sm font-black tracking-[0.2em] uppercase block mb-2">
            ESSENTIAL KENYA TRAVEL INFO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#12181F] tracking-tight">
            Planning Your Kenya Safari
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3">
            Practical advice, entry requirements, and answers to common tourist questions for a seamless adventure.
          </p>
        </div>

        {/* 4 Essential Quick Guide Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tips.map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF6700] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{tip.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#FF6700]/10 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-[#FF6700]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900">Frequently Asked Questions</h3>
              <p className="text-xs text-gray-500">Everything you need to know before booking</p>
            </div>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-100 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-[#FF6700] transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#FF6700] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3 bg-orange-50/20 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
