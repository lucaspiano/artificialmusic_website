import React from "react";
import { useI18n } from "../i18n";

function About() {
  const { t } = useI18n();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-12">{t("about")}</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-300 mb-4">{t("siteName")}</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{t("about_desc")}</p>
      </div>

      <div className="mb-12 border-t border-gray-800 pt-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">{t("who")}</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">{t("who_p1")}</p>
        <p className="text-gray-300 mb-4 leading-relaxed">{t("who_p2")}</p>
      </div>

      <div className="border-t border-gray-800 pt-8">
        <p className="text-gray-400 mb-4">
          {t("see_profile")}:
          <a
            href="https://www.linkedin.com/in/lucaspiano"
            className="text-purple-400 hover:text-pink-400 underline ml-1 mr-2 transition"
            target="_blank"
            rel="noreferrer"
          >linkedin.com/in/lucaspiano</a>
          •
          <a
            href="https://www.lucaspiano.com"
            className="text-purple-400 hover:text-pink-400 underline ml-2 transition"
            target="_blank"
            rel="noreferrer"
          >lucaspiano.com</a>
        </p>

        <p className="text-gray-300 mt-4">
          Founder: <span className="text-purple-300 font-semibold">Lucas Piano</span>
        </p>
      </div>
    </div>
  );
}

export default About;