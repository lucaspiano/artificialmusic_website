import React from "react";
import { useI18n } from "../i18n";

function Research() {
  const { t } = useI18n();
  const stack = t("tech_stack") || [];
  const pdfUrl = "/documents/Dissertation%20-%20Final%20-%20Lucas%20-%20English%20-%20Translated.pdf";

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-purple-400 mb-6">{t("research")}</h1>

      <p className="text-gray-400 mb-6">{t("research_intro")}</p>

      <div className="mb-10 rounded-2xl border border-purple-500/20 bg-gray-900/70 p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-3 text-purple-300">{t("dissertation_title")}</h2>
        <p className="text-gray-400 mb-5">{t("dissertation_desc")}</p>

        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-purple-600 px-4 py-2 font-medium text-white transition hover:bg-purple-500"
          >
            {t("dissertation_open")}
          </a>
          <a
            href={pdfUrl}
            download
            className="rounded-lg border border-gray-700 px-4 py-2 font-medium text-gray-200 transition hover:bg-gray-800"
          >
            {t("dissertation_download")}
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-800 bg-black/40">
          <iframe
            src={pdfUrl}
            title={t("dissertation_title")}
            className="min-h-[560px] w-full"
            loading="lazy"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">{t("tech_stack_title")}</h2>
      <ul className="text-gray-400 space-y-2">
        {stack.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default Research;