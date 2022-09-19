import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


import { Header, Footer } from "../../layout";
import { ParticlesComponent, SharedLayout} from "../../components";

function Team() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Headers */}
      <Header />
      <main className="flex-grow pb-20 pt-20 ">
        {/* Team Content */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="h2 mb-4 text-white">{t('Meet the Team')}</h1>
          <p className="text-xl text-white mb-12" data-aos="zoom-y-out">
          {t('well_seasoned')}
          </p>
        </div>
        <div data-aos="zoom-y-out">
          <SharedLayout />
        </div>
      </main>
      <Footer />
      <ParticlesComponent id="tsparticles" />
    </div>

    // <div className="flex flex-col min-h-screen overflow-hidden">
    //   {/*  Site header */}
    //   <Header />
    //   <div className="px-4 sm:px-6">
    //     <div className=" container flex flex-col justify-center mx-auto pt-4 mt-16 md:mt-20 ">
    //       <div className="max-w-3xl mx-auto text-center">
    //         <h1 className="h2 mb-4 text-white">Meet the Team</h1>
    //         <p className="text-xl text-white mb-12" data-aos="zoom-y-out">
    //           With a well-seasoned team made up of global markets traders,
    //           technology specialists & quantitative analysts, we are here to
    //           make blockchain happen for you.
    //         </p>
    //       </div>
    //       <div>
    //         <SharedLayout />
    //       </div>
    //       <Footer />
    //     </div>
    //   </div>
    //   <ParticlesComponent id="tsparticles" />
    // </div>
  );
}

export default Team;
