import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

function Navbar() {
  const { t, lang, setLang } = useI18n();

  const langs = [
    { code: "pt", label: "PT", flag: "/assets/flags/br.svg" },
    { code: "es", label: "ES", flag: "/assets/flags/es.svg" },
    { code: "en", label: "EN", flag: "/assets/flags/us.svg" },
  ];

  const [open, setOpen] = useState(false);

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
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 items-center">
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
                className={`focus:outline-none ${lang === l.code ? "opacity-100" : "opacity-60"}`}
                aria-label={`Set language ${l.code}`}
              >
                <img
                  src={l.flag}
                  alt={l.label}
                  width="24"
                  height="16"
                  loading="lazy"
                  decoding="async"
                  className="w-6 h-4 object-cover rounded-sm shadow-sm border border-gray-700"
                  onError={(e) => {
                    const svg = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 16\"><rect width=\"24\" height=\"16\" fill=\"#374151\"/><text x=\"12\" y=\"12\" font-size=\"10\" font-family=\"Arial, Helvetica, sans-serif\" fill=\"#fff\" text-anchor=\"middle\">${l.label}</text></svg>`;
                    e.currentTarget.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-gray-300 hover:bg-gray-800 focus:outline-none"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link to="/about" onClick={() => setOpen(false)} className="block hover:text-purple-400">{t("about")}</Link>
            <Link to="/products" onClick={() => setOpen(false)} className="block hover:text-purple-400">{t("products")}</Link>
            <Link to="/research" onClick={() => setOpen(false)} className="block hover:text-purple-400">{t("research")}</Link>
            <Link to="/future" onClick={() => setOpen(false)} className="block hover:text-purple-400">{t("future")}</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-purple-400">{t("contact")}</Link>
            <div className="pt-2 border-t border-gray-800">
              <a href="https://www.lucaspiano.com" className="block text-gray-400 hover:text-purple-400">lucaspiano.com</a>
              <div className="flex gap-3 mt-2">
                {langs.map((l) => (
                  <button key={l.code} onClick={() => { setLang(l.code); setOpen(false); }} className={`focus:outline-none ${lang === l.code ? "opacity-100" : "opacity-60"}`}>
                    <img
                      src={l.flag}
                      alt={l.label}
                      width="24"
                      height="16"
                      loading="lazy"
                      decoding="async"
                      className="w-6 h-4 object-cover rounded-sm shadow-sm border border-gray-700"
                      onError={(e) => {
                        const svg = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 16\"><rect width=\"24\" height=\"16\" fill=\"#374151\"/><text x=\"12\" y=\"12\" font-size=\"10\" font-family=\"Arial, Helvetica, sans-serif\" fill=\"#fff\" text-anchor=\"middle\">${l.label}</text></svg>`;
                        e.currentTarget.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;