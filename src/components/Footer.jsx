import React from "react";
import { useI18n } from "../i18n";

function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4 text-center md:text-left">
        <div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {t("siteName")} — {t("intelligence_tag")}
          </p>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-500 hidden sm:inline">{t("follow")}:</span>
          <a
            href="https://www.linkedin.com/in/lucaspiano"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:underline"
          >linkedin</a>
          <span className="text-gray-500">•</span>
          <a
            href="https://www.lucaspiano.com"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:underline"
          >lucaspiano.com</a>
        </div>

        <div>
          <p className="text-sm text-gray-500">Founder: <strong>Lucas Piano</strong></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;