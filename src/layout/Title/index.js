import React, { useState, useEffect, useRef } from "react";
import { ParticlesComponent } from "../../components";
import "./styleTitle.css";
import { useTranslation } from 'react-i18next';

const Title = () => {
  const { t } = useTranslation();
  return (
    <section className="slide1 " id='nova-duvera'>
      <div className=" w-full min-h-screen flex flex-col justify-center ">
        <div className="w-full md:w-2/3 mx-auto md:py-16 px-2 sm:px-6 mt-10 md:mt-0 ">
          {/* Ttie Content */}
          <div className="pt-12 md:pt-32 pb-12 md:pt-10 md:pb-10">
            <div id="repulse-div" className="text-center">
              <h1
                className="text-3xl md:text-5xl leading-tighter tracking-tight"
                data-aos="zoom-y-out"
              >
                {t('implementing')}{" "}
                <span className="grad-text">
                {t('Distributed_Ledger')}
                </span>{" "}
                {t('and')}{" "}
                <span className="grad-text">
                {t('Blockchain')}
                </span>{" "}
                {t('technologies_to_launch_our_clients_into_the_future')}
              </h1>
            </div>
          </div>
        </div>
        <ParticlesComponent id="tsparticles" />
      </div>
    </section>
  );
};

export default Title;
