import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Landing,
  SignIn,
  SignUp,
  Team,
  Contact,
  About,
  Services,
  Lost,
  PrivacyPolicy,
} from "./pages";
import gtag from 'ga-gtag'
// import ReactGA from "react-ga4";

import AOS from "aos";
import "./styles/style.scss";

const trackDownloadEvent = (pageTitle) => {
  gtag('event', 'page_navigation', {
    page_title: pageTitle,
  })
}

function App() {
  const location = useLocation();
  // const TRACKING_ID = "G-7T0KPJ138G";

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  // useEffect(() => {
  //   ReactGA.initialize(TRACKING_ID);
  //   ReactGA.pageview('/');
  // }, []); 

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    trackDownloadEvent(String(location.pathname));
    // ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/404" element={<Lost />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
