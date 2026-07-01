import React from "react";
import { useI18n } from "../i18n";

// Componente de ondas sonoras animadas (grande)
function SoundWaves() {
  const bars = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="flex items-center justify-center gap-2 h-full">
      {bars.map((i) => (
        <div
          key={i}
          className="w-1 bg-gradient-to-t from-purple-500 to-pink-400 rounded-full"
          style={{
            height: `${40 + i * 15}px`,
            animation: `soundWave 0.6s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`,
          }}
        ></div>
      ))}
    </div>
  );
}

// Mini animações únicas para cada card
function CardWaves({ index }) {
  const patterns = [
    // Pattern 1: Bounce
    { bars: [10, 20, 30, 20, 10], anim: "bounce 0.8s ease-in-out infinite" },
    // Pattern 2: Wave
    { bars: [15, 25, 30, 25, 15], anim: "wave 1s ease-in-out infinite" },
    // Pattern 3: Pulse
    { bars: [20, 20, 30, 20, 20], anim: "pulse 1.2s ease-in-out infinite" },
    // Pattern 4: Oscillate
    { bars: [12, 18, 28, 18, 12], anim: "oscillate 0.9s ease-in-out infinite" },
  ];

  const pattern = patterns[index % patterns.length];

  return (
    <div className="flex items-end justify-center gap-0.5 mb-4 h-8">
      {pattern.bars.map((height, j) => (
        <div
          key={j}
          className="w-0.5 rounded-full bg-gradient-to-t from-purple-500 to-pink-400"
          style={{
            height: `${height}px`,
            animation: pattern.anim,
            animationDelay: `${j * 0.1}s`,
          }}
        ></div>
      ))}
    </div>
  );
}

// Ilustrações SVG para cada card
function CardIllustration({ index }) {
  const illustrations = [
    // Generative Music Systems - Studio
    <svg viewBox="0 0 200 200" className="w-16 h-16 mx-auto mb-3" key="music-studio">
      {/* Headphones */}
      <circle cx="100" cy="60" r="15" fill="none" stroke="#a855f7" strokeWidth="2" />
      <path d="M 85 75 Q 85 90 100 90 Q 115 90 115 75" fill="none" stroke="#a855f7" strokeWidth="2" />
      {/* Music notes */}
      <g transform="translate(130, 50)">
        <circle cx="0" cy="0" r="2" fill="#ec4899" />
        <line x1="0" y1="0" x2="0" y2="-15" stroke="#ec4899" strokeWidth="2" />
        <path d="M 0 -15 Q 8 -12 8 -5" fill="#ec4899" opacity="0.6" />
      </g>
      {/* Music notes */}
      <g transform="translate(60, 40)">
        <circle cx="0" cy="0" r="2" fill="#ec4899" />
        <line x1="0" y1="0" x2="0" y2="-12" stroke="#ec4899" strokeWidth="2" />
      </g>
      {/* Sound waves */}
      <path d="M 100 130 Q 90 125 85 130" fill="none" stroke="url(#grad1)" strokeWidth="2" />
      <path d="M 100 140 Q 85 130 80 145" fill="none" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.6" />
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>,

    // Cognitive & Behavioral AI - Therapy Session
    <svg viewBox="0 0 200 200" className="w-16 h-16 mx-auto mb-3" key="therapy">
      {/* Psychologist */}
      <circle cx="60" cy="50" r="12" fill="#a855f7" opacity="0.7" />
      <rect x="48" y="65" width="24" height="25" rx="2" fill="#a855f7" opacity="0.6" />
      <line x1="48" y1="75" x2="72" y2="75" stroke="#a855f7" strokeWidth="2" opacity="0.6" />
      {/* Patient */}
      <circle cx="140" cy="50" r="12" fill="#ec4899" opacity="0.7" />
      <rect x="128" y="65" width="24" height="25" rx="2" fill="#ec4899" opacity="0.6" />
      {/* Laptop/App */}
      <rect x="95" y="100" width="30" height="20" fill="none" stroke="#a855f7" strokeWidth="2" rx="2" />
      <path d="M 95 120 L 90 130 L 125 130 L 120 120" fill="none" stroke="#a855f7" strokeWidth="1.5" />
      {/* Connection line */}
      <line x1="110" y1="90" x2="110" y2="100" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" />
    </svg>,

    // Mobile AI Applications - Phone User
    <svg viewBox="0 0 200 200" className="w-16 h-16 mx-auto mb-3" key="mobile">
      {/* Hand holding phone */}
      <g>
        {/* Arm */}
        <line x1="50" y1="80" x2="80" y2="60" stroke="#a855f7" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
        {/* Hand */}
        <circle cx="85" cy="55" r="6" fill="#a855f7" opacity="0.7" />
        {/* Phone */}
        <rect x="100" y="40" width="35" height="60" fill="none" stroke="#ec4899" strokeWidth="2.5" rx="4" />
        <rect x="105" y="50" width="25" height="40" fill="url(#phoneGrad)" rx="2" opacity="0.8" />
        {/* Phone content - waves */}
        <g transform="translate(117, 58)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" />
          <line x1="3" y1="0" x2="3" y2="12" stroke="#a855f7" strokeWidth="1.5" opacity="0.8" />
          <line x1="6" y1="0" x2="6" y2="8" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" />
        </g>
      </g>
      <defs>
        <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#2d1b69" />
        </linearGradient>
      </defs>
    </svg>,

    // Therapeutic Sound Environments - Relaxation
    <svg viewBox="0 0 200 200" className="w-16 h-16 mx-auto mb-3" key="therapy-sound">
      {/* Person sitting */}
      <circle cx="100" cy="50" r="12" fill="#a855f7" opacity="0.7" />
      <rect x="88" y="65" width="24" height="30" rx="2" fill="#a855f7" opacity="0.6" />
      {/* Relaxation aura */}
      <circle cx="100" cy="100" r="35" fill="none" stroke="#ec4899" strokeWidth="1.5" opacity="0.3" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.2" />
      {/* Sound waves around */}
      <g transform="translate(60, 90)">
        <path d="M 0 0 Q -8 -8 0 -15" fill="none" stroke="#ec4899" strokeWidth="1.5" opacity="0.6" />
      </g>
      <g transform="translate(140, 90)">
        <path d="M 0 0 Q 8 -8 0 -15" fill="none" stroke="#ec4899" strokeWidth="1.5" opacity="0.6" />
      </g>
      {/* Music note */}
      <g transform="translate(100, 140)">
        <circle cx="0" cy="0" r="2" fill="#a855f7" opacity="0.8" />
        <line x1="0" y1="0" x2="0" y2="-10" stroke="#a855f7" strokeWidth="1.5" opacity="0.8" />
      </g>
    </svg>,
  ];

  return illustrations[index % illustrations.length];
}

function Home() {
  const { t } = useI18n();

  const coreAreas = t("core_areas") || [];

  return (
    <div className="w-full">
      <style>{`
        @keyframes soundWave {
          0%, 100% {
            height: 40px;
            opacity: 0.5;
          }
          50% {
            height: 120px;
            opacity: 1;
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.4); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-8px); opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes oscillate {
          0%, 100% { transform: scaleY(0.8); }
          50% { transform: scaleY(1.3); }
        }
      `}</style>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[60vh] md:min-h-screen">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 mb-6 sm:mb-8 leading-tight">
            {t("home_title")}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-xl">
            {t("home_sub")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="/about" className="w-full sm:w-auto px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition inline-flex items-center justify-center">
              {t("learn_more") || "Saiba mais"}
            </a>
            <a
              href="/documents/Dissertation%20-%20Final%20-%20Lucas%20-%20English%20-%20Translated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-950 rounded-lg font-semibold transition inline-flex items-center justify-center"
            >
              {t("dissertation_cta") || "Read dissertation"}
            </a>
          </div>
        </div>

        {/* Sound Waves Visual Element: show smaller on mobile */}
        <div className="relative h-56 sm:h-72 md:h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl blur-3xl z-0"></div>
          <div className="relative z-10 w-40 h-40 md:w-80 md:h-80 flex items-center justify-center">
            <SoundWaves />
          </div>
        </div>
      </div>

      {/* Core Areas Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">{t("core_areas_title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreAreas.map((area, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl hover:border-purple-500 transition group cursor-pointer">
              <CardIllustration index={i} />
              <p className="text-gray-200 font-medium text-lg text-center">{area}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research Driven Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-6 text-purple-300">{t("research_driven_title")}</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">{t("research_driven_text")}</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-300">{t("newsletter_title")}</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            {t("newsletter_desc")}
          </p>
          <form className="w-full max-w-full sm:max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert(t("newsletter_success")); }}>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder={t("newsletter_placeholder")}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition cursor-pointer"
              >
                {t("newsletter_button")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;