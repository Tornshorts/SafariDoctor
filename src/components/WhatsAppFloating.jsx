import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');

  const sendQuickMessage = (msg) => {
    const text = encodeURIComponent(msg || customText || 'Hello SafariDoctor! I would like to inquire about a Kenya safari.');
    window.open(`https://wa.me/254712345678?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/assets/logo_icon.png"
                  alt="Chris SafariDoctor"
                  className="w-10 h-10 object-contain rounded-full bg-orange-50 p-1"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Chris | SafariDoctor</h4>
                <p className="text-[11px] text-emerald-600 font-semibold">Online • Typically replies in 5m</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3">
            <div className="bg-emerald-50 text-emerald-950 p-3 rounded-2xl text-xs leading-relaxed">
              Jambo! 🇰🇪 Welcome to SafariDoctor. How can we help you plan your Kenya safari today?
            </div>
          </div>

          <div className="space-y-1.5 mb-3">
            {[
              '🦁 3-Day Maasai Mara availability & price',
              '🐘 Amboseli & Kilimanjaro safari inquiry',
              '🏖️ 5-Day Safari & Diani Beach Combo quote',
              '✨ Custom private itinerary request'
            ].map((q, i) => (
              <button
                key={i}
                onClick={() => sendQuickMessage(q)}
                className="w-full text-left text-xs bg-gray-50 hover:bg-orange-50 hover:text-[#FF6700] p-2 rounded-xl transition-colors font-medium border border-gray-100"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your question..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendQuickMessage();
              }}
              className="flex-1 bg-gray-100 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              onClick={() => sendQuickMessage()}
              className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-xl"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-700/40 transition-all transform hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <span className="hidden sm:inline font-bold text-xs">Chat with Chris</span>
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
      </button>
    </div>
  );
}
