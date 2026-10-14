import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');

  const sendQuickMessage = (msg) => {
    const text = encodeURIComponent(msg || customText || 'Hello Chris! I would like to inquire about a Kenya safari with SafariDoctor.');
    window.open(`https://wa.me/254734392478?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/assets/logo_icon.png"
                  alt="Chris SafariDoctor"
                  className="w-9 h-9 object-contain rounded-full bg-orange-50 p-1"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-gray-900 font-['Outfit']">Chris | "Black Santa"</h4>
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Online • Direct WhatsApp</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-2.5">
            <div className="bg-emerald-50 text-emerald-950 p-2.5 rounded-xl text-sm leading-relaxed">
              Jambo! 🇰🇪 Welcome to SafariDoctor. How can we help you plan your dream Kenya safari?
            </div>
          </div>

          <div className="space-y-1.5 mb-3">
            {[
              '🦁 3-Day Maasai Mara availability & pricing',
              '🐘 Amboseli & Kilimanjaro safari quote',
              '🏖️ 5-Day Safari & Diani Beach Combo',
              '✨ Tailor-made private safari inquiry'
            ].map((q, i) => (
              <button
                key={i}
                onClick={() => sendQuickMessage(q)}
                className="w-full text-left text-sm bg-gray-50 hover:bg-emerald-50 hover:text-emerald-800 p-2 rounded-lg transition-colors font-semibold border border-gray-100 cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendQuickMessage();
              }}
              className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              onClick={() => sendQuickMessage()}
              className="bg-[#25D366] hover:bg-[#20ba59] text-white p-2 rounded-lg cursor-pointer"
            >
              <Send className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button matching Reference Screenshots 2, 3, 4, 5, 6 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-full shadow-xl shadow-emerald-700/30 transition-all transform hover:scale-105 active:scale-95 cursor-pointer font-['Outfit'] font-bold text-base tracking-wide"
        aria-label="WhatsApp us"
      >
        <span>WhatsApp us</span>
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <MessageCircle className="w-5 h-5 fill-current text-white" />
        </div>
      </button>
    </div>
  );
}
