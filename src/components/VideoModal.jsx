import React from 'react';
import { X, Play } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="aspect-video w-full relative">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/n42s_fFp0dY?autoplay=1&rel=0"
            title="Kenya Safari Wildlife Documentary & Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-4 bg-[#12181F] text-white flex items-center justify-between">
          <div>
            <h4 className="font-bold text-sm">Experience Kenya With SafariDoctor</h4>
            <p className="text-xs text-gray-400">Maasai Mara, Amboseli, Lake Nakuru & Diani Beach</p>
          </div>
          <a
            href="#packages"
            onClick={onClose}
            className="bg-[#FF6700] hover:bg-[#E55A00] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Explore Tours
          </a>
        </div>
      </div>
    </div>
  );
}
