import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo";
import { EmailInput } from "../../components";
import { IoLogoLinkedin } from "react-icons/io5";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200 border-opacity-50">
          {/* 1st block */}
          <div className="col-span-2 sm:col-span-12 lg:col-span-3 ">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="block mx-auto " aria-label="Nova Duvera">
                <Logo classname="w-10 h-10 mx-auto md:mx-0" />
              </Link>
            </div>
            <div className="text-sm text-white text-center md:text-left">
              <Link
                to="/privacy-policy"
                className="text-white hover:text-teal-400 hover:underline transition duration-150 ease-in-out"
              >
                Terms
              </Link>{" "}
              ·{" "}
              <Link
                to="/privacy-policy"
                className="text-white hover:text-teal-400 hover:underline transition duration-150 ease-in-out"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-bold mb-2">NDUK</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white hover:text-teal-400 transition duration-150 ease-in-out"
                >
                  {t('Services')}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/team"
                  className="text-white hover:text-teal-400 transition duration-150 ease-in-out"
                >
                  {t('Team')}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about-us"
                  className="text-white hover:text-teal-400 transition duration-150 ease-in-out"
                >
                  {t('About Us')}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact-us"
                  className="text-white hover:text-teal-400 transition duration-150 ease-in-out"
                >
                  {t('Contact us')}
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-bold mb-2">Decentralized Tech</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white hover:text-teal-400 transition duration-150 ease-in-out"
                >
                  Blockchain
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white hover:text-teal-400 transition duration-150 ease-in-out"
                >
                  Web 3.0
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white hover:text-teal-400 transition duration-150 ease-in-out"
                >
                  Digital Assets
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-bold mb-2">Finance</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white hover:text-teal-400 transition duration-150 ease-in-out"
                >
                  Traditional Banking
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white hover:text-teal-400 transition duration-150 ease-in-out"
                >
                  Payments{" "}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white hover:text-teal-400 transition duration-150 ease-in-out"
                >
                  Ce-Fi
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white hover:text-teal-400 transition duration-150 ease-in-out"
                >
                  De-Fi
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-white font-bold mb-2">Subscribe</h6>
            <p className="text-sm text-white mb-4">
              Get quarterly updates to your inbox every month.
            </p>
            <EmailInput />
          </div>
        </div>

        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 border-opacity-50">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0 justify-center md:justify-start">
            <li>
              <a
                href="https://www.linkedin.com/company/duvera-nduk/"
                target="_blank"
                rel="noopener"
                className="flex justify-center items-center text-white hover:text-teal-400 rounded-full shadow transition duration-150 ease-in-out p-2"
                aria-label="Linkedin"
              >
                <IoLogoLinkedin />
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-white md:mr-4 text-center md:text-left">
            © 2022 Nova Duvera UK. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
