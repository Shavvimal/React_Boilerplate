import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


import { TimelineElement } from '../../components';

import Logo from '../../images/Logo_variable';
import { IoCheckmarkSharp, IoCardOutline } from "react-icons/io5";
import { BiCopyright } from "react-icons/bi";
import { GiMining, GiMaterialsScience } from "react-icons/gi";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
  const { t } = useTranslation();
 


  return (
    <section className="relative" id='our-story'>

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0  pointer-events-none mb-16" aria-hidden="true"></div> */}
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" >
            <h1 className="h2 mb-4 text-white"> {t('Our Story')}</h1>
            <p className="text-xl text-white mb-12" data-aos="zoom-y-out">{t('Nova Duvera is a Digital Consultancy')}</p>
          </div>

          <VerticalTimeline className="" >
            <TimelineElement icon={<BiCopyright />} date="2019" title='Duvera Incorporation' desc={t('Duvera was incorporated as a')} />
            <TimelineElement icon={<IoCardOutline />} date="2020" title='Digital Wallets & Payments' desc={t('Duvera launched one of the')} />
            <TimelineElement icon={<GiMining />} date="2021" title='Duvera US: Crypto Mining Farm' desc={t('The US branch of Duvera is set-up in Oklahoma')} />
            <TimelineElement icon={<GiMaterialsScience />} date="2022" title='Nova Duvera UK' desc={t('Nova Duvera UK starts its Blockchain and decentralized')} />

            <VerticalTimelineElement
              iconStyle={{ background: '#40C2A7', color: '#fff' }}
              icon={<Logo classNameProp="w-16 h-16 fill-current text-white pl-0.5" />}
            />
          </VerticalTimeline>





        </div >
      </div >
    </section >
  );
}

export default Timeline;
