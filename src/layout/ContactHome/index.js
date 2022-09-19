import React from 'react';
import { Form } from "../../components";
import { IoSend } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

function ContactHome() {


  const { t } = useTranslation();
  
  return (
    <section id='contactus'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* box */}
          <div className="relative bg-dark-900 backdrop-filter backdrop-blur-lg bg-opacity-5 rounded-md pt-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">




            <div className="relative flex flex-col lg:flex-row items-center justify-center ">

              {/* Contact content */}
              <div className="text-center lg:text-left lg:max-w-xl ">
                <h3 className="h3 text-white mb-2 text-center">{t('Ready to Talk?')}</h3>
                <p className="text-gray-300 text-lg mb-6 text-center">{t('We specialize in leveraging')} <span className="text-white hover:text-teal-400 transition duration-150 ease-in-out underline"><a href={`mailto:${t('email')}`}>{t('email')}</a></span>{" "}{t('or message us directly')}
                </p>
            <Form loc="landing-contact"/>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactHome;
