import React from "react";
import { useI18n } from "../i18n";

function Research() {
  const { t } = useI18n();
  const stack = t("tech_stack") || [];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-purple-400 mb-6">{t("research")}</h1>

      <p className="text-gray-400 mb-6">{t("research_intro")}</p>

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