import React from "react";
import { useI18n } from "../i18n";

function Products() {
  const { t } = useI18n();

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-purple-400 mb-10">{t("products")}</h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">{t("product_sonifya_title")}</h2>
          <p className="text-gray-400">{t("product_sonifya_desc")}</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">{t("product_pulsegarden_title")}</h2>
          <p className="text-gray-400">{t("product_pulsegarden_desc")}</p>
        </div>
      </div>
    </div>
  );
}

export default Products;