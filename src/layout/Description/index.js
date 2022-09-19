import React from "react";
import { SVGLine, Pillars } from "../../components";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
function Description() {
  const { t } = useTranslation();

  return (
    <section className="relative" id="services">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-6">
            <SVGLine />
            <p className="text-xl mt-8  text-white mb-12" data-aos="zoom-y-out">
            {t('NDUK_is_a_digital')}
            </p>
            <Pillars />
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
