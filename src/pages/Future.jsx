import React from "react";
import { useI18n } from "../i18n";

function Future() {
  const { t } = useI18n();
  const items = t("future_items") || [];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-purple-400 mb-6">{t("future")}</h1>

      <ul className="text-gray-400 space-y-4">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

export default Future;