import React from "react";
import { Header } from "../../layout";
import { ParticlesComponent, Form } from "../../components";
import { useTranslation } from 'react-i18next';


function SignUp() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="flex justify-center items-center md:h-screen">
          {/* box */}
          <div
            className="mx-3 my-16 relative bg-dark-900 backdrop-filter backdrop-blur-lg bg-opacity-5 rounded-md pt-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            <div className="relative flex flex-col lg:flex-row items-center justify-center ">
              {/* Contact content */}
              <div className="text-center lg:text-left lg:max-w-3xl ">
                <h3 className="h3 text-white mb-2 text-center">
                {t('Ready to Talk?')}
                </h3>
                <p className="text-gray-300 text-lg mb-6 text-center">
                {t('We specialize in leveraging')} <span className="text-white hover:text-teal-400 transition duration-150 ease-in-out underline"><a href={`mailto:${t('email')}`}>{t('email')}</a></span>{" "}{t('or message us directly')}
                </p>
                <Form loc="contact-us-page"/>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ParticlesComponent id="tsparticles" />
    </div>
  );
}

export default SignUp;
