import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ParticlesComponent } from "../../components";
import {
  Header,
  Title,
  Timeline,
  FeaturesBlocks,
  Testimonials,
  ContactHome,
  Footer,
  Description,
} from "../../layout";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Headers */}
      <Header />
      <main className="flex-grow pb-20">
        {/* About Content */}
        <Timeline />
      </main>
      <Footer />
      <ParticlesComponent id="tsparticles" />
    </div>
  );
};

export default About;
