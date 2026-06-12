import React from "react";
import { useI18n } from "../i18n";

function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 p-6 text-center">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} {t("siteName")} — {t("intelligence_tag")}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        {t("follow")}:
        <a
          href="https://www.linkedin.com/in/lucaspiano"
          target="_blank"
          rel="noreferrer"
          className="text-purple-400 hover:underline ml-1 mr-2"
        >linkedin</a>
        •
        <a
          href="https://www.lucaspiano.com"
          target="_blank"
          rel="noreferrer"
          className="text-purple-400 hover:underline ml-2"
        >lucaspiano.com</a>
      </p>
      <p className="text-sm text-gray-500 mt-2">Founder: <strong>Lucas Piano</strong></p>
    </footer>
  );
}

export default Footer;