import React from "react";
import { useI18n } from "../i18n";

function Contact() {
  const { t } = useI18n();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-purple-400 mb-6">{t("contact")}</h1>

      <p className="text-gray-400">{t("contact_operates")}</p>

      <p className="mt-4 text-gray-400">{t("contact_email")}</p>
    </div>
  );
}

export default Contact;