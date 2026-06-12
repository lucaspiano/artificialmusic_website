import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

function Navbar() {
  const { t, lang, setLang } = useI18n();

  const langs = [
    { code: "pt", label: "PT", flag: "🇧🇷" },
    { code: "es", label: "ES", flag: "🇪🇸" },
    { code: "en", label: "EN", flag: "🇺🇸" },
  ];

  return (
    <nav className="bg-gray-900 p-4 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          {/* Brand Icon */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              {/* Sound wave background circle */}
              <circle cx="20" cy="20" r="18" fill="none" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.5" />
              
              {/* Sound wave bars */}
              <rect x="12" y="14" width="2" height="12" fill="url(#gradient)" rx="1" />
              <rect x="18" y="10" width="2" height="20" fill="url(#gradient)" rx="1" />
              <rect x="24" y="14" width="2" height="12" fill="url(#gradient)" rx="1" />
              
              {/* Center dot */}
              <circle cx="20" cy="20" r="2" fill="url(#gradient)" />
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("siteName")}</span>
        </Link>
        <div className="space-x-6 flex items-center">
          <Link to="/about" className="hover:text-purple-400 transition">{t("about")}</Link>
          <Link to="/products" className="hover:text-purple-400 transition">{t("products")}</Link>
          <Link to="/research" className="hover:text-purple-400 transition">{t("research")}</Link>
          <Link to="/future" className="hover:text-purple-400 transition">{t("future")}</Link>
          <Link to="/contact" className="hover:text-purple-400 transition">{t("contact")}</Link>

          <a
            href="https://www.linkedin.com/in/lucaspiano"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Lucas Piano LinkedIn in new tab"
            className="flex items-center text-sm text-gray-400 hover:text-purple-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.78v2.21h.07c.66-1.25 2.27-2.56 4.68-2.56C22.3 7.65 24 9.73 24 14.17V24h-5v-8c0-2.03-.04-4.64-2.83-4.64-2.83 0-3.26 2.2-3.26 4.48V24H8V8z" />
            </svg>
          </a>

          <a
            href="https://www.lucaspiano.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-400 hover:text-purple-400 ml-3"
          >
            lucaspiano.com
          </a>

          <div className="ml-4 flex items-center space-x-2">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                title={l.label}
                className={`text-xl focus:outline-none ${lang === l.code ? "opacity-100" : "opacity-60"}`}
                aria-label={`Set language ${l.code}`}
              >
                <span>{l.flag}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;