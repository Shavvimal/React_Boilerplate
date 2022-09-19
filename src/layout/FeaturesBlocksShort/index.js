import React from "react";
import { ScrollCardComponent } from "../../components";
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function FeaturesBlocks() {
  const { t } = useTranslation();

  const text = [
    [
      t('services1url'),
      t('services1Title'),
      <p>
        {t('services1contnet')} <br />
        <br /> {t('services1contnetPart2')}
      </p>,
    ],
    [
      t('services2url'),
      t('services2Title'),
      t('services2contnet'),
    ],
    [
      t('services3url'),
      t('services3Title'),
      t('services3contnet'),
    ],
  ];

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-dark-900 backdrop-filter backdrop-blur-lg bg-opacity-5 shadow-2xl pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center text-white mb-6 mt-12">
            <h2 className="h2 mb-4 " data-aos="zoom-y-out">
            {t('What_Do_We')}
            </h2>
            <p className="text-xl " data-aos="zoom-y-out">
            {t('we_offer')}{" "}
              <Link
                to="/services"
                className="text-blue-300 hover:text-teal-400 hover:underline transition duration-150 ease-in-out"
              >
                {t('services')}{" "}
              </Link>
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {text.map(([background, title, description]) => (
              <ScrollCardComponent
                background={background}
                title={title}
                description={description}
                key={title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
