import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import brFlag from "../assets/flags/br.svg";
import esFlag from "../assets/flags/es.svg";
import usFlag from "../assets/flags/us.svg";
import dissertationPdf from "../assets/documents/Dissertation - Final - Lucas - English - Translated.pdf";

function Navbar() {
  const { t, lang, setLang } = useI18n();
  const pdfUrl = dissertationPdf;

  const langs = [
    { code: "pt", label: "PT-BR", flag: brFlag, emoji: "🇧🇷" },
    { code: "es", label: "ES-ES", flag: esFlag, emoji: "🇪🇸" },
    { code: "en", label: "EN-US", flag: usFlag, emoji: "🇺🇸" },
  ];

  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <nav className="bg-gray-900 p-4 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
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
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/70 px-3 py-1 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400/10"
          >
            <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em]">PDF</span>
            <span>{t("dissertation_title")}</span>
          </a>
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

          <div className="ml-4 relative" ref={langRef}>
            {(() => {
              const current = langs.find((x) => x.code === lang) || langs[0];
              return (
                <>
                  <button
                    onClick={() => setLangOpen((s) => !s)}
                    aria-haspopup="true"
                    aria-expanded={langOpen}
                    className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-800 focus:outline-none"
                  >
                    <span className="text-lg leading-none" aria-hidden="true">{current.emoji}</span>
                    <img src={current.flag} alt={current.label} width="24" height="16" loading="lazy" decoding="async" className="w-6 h-4 object-cover rounded-sm shadow-sm border border-gray-700" />
                    <span className="text-sm text-gray-300 hidden md:inline">{current.label}</span>
                    <svg className="w-3 h-3 text-gray-400 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {langOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-800 rounded-md shadow-lg z-50 py-1">
                      {langs.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            setLang(l.code);
                            setLangOpen(false);
                          }}
                          className={`w-full text-left flex items-center px-3 py-2 hover:bg-gray-800 ${lang === l.code ? "opacity-100" : "opacity-90"}`}
                        >
                          <span className="text-lg leading-none" aria-hidden="true">{l.emoji}</span>
                          <img src={l.flag} alt={l.label} width="24" height="16" loading="lazy" decoding="async" className="w-6 h-4 object-cover rounded-sm shadow-sm border border-gray-700 ml-2" />
                          <span className="ml-3 text-sm">{l.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              );
            })()}
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
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/70 px-3 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-400/10"
            >
              <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em]">PDF</span>
              <span>{t("dissertation_title")}</span>
            </a>
            <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-purple-400">{t("contact")}</Link>
            <div className="pt-2 border-t border-gray-800">
              <a href="https://www.lucaspiano.com" className="block text-gray-400 hover:text-purple-400">lucaspiano.com</a>
              <div className="flex flex-col gap-2 mt-2">
                {langs.map((l) => (
                  <button key={l.code} onClick={() => { setLang(l.code); setOpen(false); }} className={`flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded ${lang === l.code ? "opacity-100" : "opacity-90"}`}>
                    <span className="text-lg leading-none" aria-hidden="true">{l.emoji}</span>
                    <img src={l.flag} alt={l.label} width="24" height="16" loading="lazy" decoding="async" className="w-6 h-4 object-cover rounded-sm shadow-sm border border-gray-700" />
                    <span className="text-sm">{l.label}</span>
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