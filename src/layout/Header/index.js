import React, { useState, useEffect, useRef, Fragment } from "react";
import { Transition } from "@headlessui/react";

import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { Popover } from "../../components";
import { useTranslation } from 'react-i18next';



import "./styles.css";
import Logo from "../../images/Logo";

const variants = {
  top: { opacity: 1 },
  notTop: { opacity: 0 },
};

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(true);
  // detect whether user has scrolled the page down by 10px for shadww blur

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const hashNavItems = [
    [t('Services'), "/services"],
    [t('Team'), "/team"],
    [t('About Us'), "/about-us"],
    [t('Contact Us'), "/contact-us"],
  ];

  return (
    <header
      className={`fixed w-full z-30 bg-opacity-80 transition duration-300 ease-in-out bg-dark-800 md:bg-transparent backdrop-filter  backdrop-blur-lg sm:backdrop-blur-none ${
        !top &&
        "md:bg-dark-800 md:backdrop-filter md:backdrop-blur-lg md:shadow-lg md:bg-opacity-80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex flex-grow items-center">
            <div className="flex-shrink-0 mr-4">
              <HashLink
                exact="true"
                to="/#"
                className="block"
                aria-label="Nova Duvera"
              >
                <div className="flex">
                  <div className="flex flex-col justify-center">
                    <Logo classname="w-10 h-10 " />
                  </div>
                  <motion.div
                    className="flex flex-col justify-center text-white transition-all duration-300 ease-in-out ml-1 select-none"
                    animate={top ? "top" : "notTop"}
                    variants={variants}
                  >
                    <div className="font-[isidora-Black] text-[35px] tracking-wide  leading-none nduk-text grad-text">
                      NDUK
                    </div>
                    <div className="font-[isidora-bold] text-[8.9px] leading-none tagline-text grad-text">
                      blockchain
                      <span className="font-[isidora-medium]">
                        , made simple
                      </span>
                    </div>
                  </motion.div>
                </div>
              </HashLink>
            </div>

            {/* Site navigation */}

            <div className="hidden md:flex md:flex-grow justify-end">
              <div className="ml-10 flex items-baseline  space-x-4">
                <Popover />
                {hashNavItems.map(([text, to]) => (
                  <HashLink
                    exact="true"
                    to={to}
                    key={text}
                    className="btn-sm text-white shadow-none hover:bg-teal-400 ml-3"
                  >
                    {text}
                  </HashLink>
                ))}

                {/* <Link
                  to="/signin"
                  className="btn-sm text-white  hover:bg-teal-400 ml-3"
                >
                  <span>Sign In</span>
                  <svg
                    className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link> */}
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            {hashNavItems.map(([text, to]) => (
              <HashLink
                exact="true"
                to={to}
                key={text}
                className="hover:bg-teal-400 text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(!isOpen)}
              >
                {text}
              </HashLink>
            ))}
            <Popover />
            {/* <Link
              to="/Signin"
              className="hover:bg-teal-400 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Sign In
            </Link> */}
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
