import { useState, useEffect } from 'react';

export default function Hero() {
  const fullText = "SAFARI DOCTOR";
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typewriter animation
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayText(fullText);
      return;
    }

    let timeout;

    if (!isDeleting && displayText === fullText) {
      // Pause for 2 seconds when full text is displayed
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText === '') {
      // Small pause before typing again
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    } else if (!isDeleting) {
      // Typing forward (~100ms per character)
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
    } else if (isDeleting) {
      // Deleting backward (~60ms per character)
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }, 60);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText]);

  // Blinking cursor timer
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[680px] sm:min-h-[750px] md:min-h-[850px] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#1A0E08]"
    >
      {/* 2. Hero Background Image using Top-Banner@2x.png */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/Top-Banner@2x.png"
          alt="Majestic African Elephant in Kenya savannah with Mount Kilimanjaro and acacia trees"
          onError={(e) => {
            e.target.src = '/assets/hero_elephants_kili.jpg';
          }}
          className="w-full h-full object-cover object-[center_35%] sm:object-center select-none"
        />
        {/* Subtle, cinematic vignette overlay preserving landscape visibility while ensuring crisp contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* 3. Animated Hero Heading & Subtitle (Centered Horizontally & Vertically) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full text-center flex flex-col items-center justify-center pt-20 sm:pt-24 lg:pt-28 pb-16">
        
        {/* Main Heading with Letter-by-Letter Typewriter Animation */}
        <div className="min-h-[1.25em] flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[88px] font-black uppercase text-white tracking-[0.08em] font-['Outfit'] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)] select-none">
            {displayText}
            <span
              className={`inline-block ml-1 font-light text-white/95 transition-opacity duration-100 ${
                cursorVisible ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden="true"
            >
              |
            </span>
          </h1>
        </div>

        {/* Stationary Thin Elegant Subtitle */}
        <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-lg md:text-2xl lg:text-[28px] font-light tracking-[0.24em] text-white uppercase font-['Outfit'] drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] select-none">
          CAPTURE NATURE AT IT'S BEST
        </p>

      </div>
    </section>
  );
}
