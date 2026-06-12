import React from "react";
import { useI18n } from "../i18n";

export default function I18nDebug() {
  const { lang, t } = useI18n();

  return (
    <div className="fixed right-4 bottom-4 bg-gray-800 text-gray-200 p-3 rounded-lg shadow-lg text-sm z-50">
      <div className="font-semibold mb-1">i18n debug</div>
      <div className="mb-1">lang: <span className="font-mono">{lang}</span></div>
      <div className="text-gray-300">home: {t("home_title")}</div>
      <div className="text-gray-300">about: {t("about")}</div>
      <div className="text-gray-300">who: {t("who")}</div>
    </div>
  );
}
