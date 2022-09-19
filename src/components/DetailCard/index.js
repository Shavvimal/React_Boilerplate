import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { Shape3D } from "../";

function DetailCard({ name, title, linkedin, bio, headshot }) {
  return (<>
        <Shape3D headshot={headshot}/>
    <div className="p-4 w-full">
      <div className="rounded-md bg-dark-500 bg-opacity-10 backdrop-filter backdrop-blur-lg overflow-hidden text-white">
        {/* <img
          className="rounded-md rounded-bl-none rounded-br-none drop-shadow-md mx-auto"
          src={headshot}
        /> */}
        <div className="p-6">
          <h2 className="tracking-widest text-xs mb-3">{title}</h2>
          <div className="flex flex-row justify-between mb-3">
            <h1 className="text-2xl font-['Isidora-Medium'] my-auto pt-0.5 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-400">
              {name}
            </h1>
            <a href={linkedin} target="_blank" className="flex rounded-full h-10 w-10 my-auto">
              <IoLogoLinkedin className="w-full h-full p-3 text-white hover:text-teal-400 transition-colors duration-300 " />
            </a>
          </div>

          <p className="leading-relaxed mb-3">{bio}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default DetailCard;
