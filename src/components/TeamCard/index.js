import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";

function TeamCard({name, title, linkedin, headshot}) {
  return (
    <div >
      <div className="flex flex-col">
        <img
          className="rounded-2xl drop-shadow-md mx-auto"
          src={headshot}
          alt={`headhot-${name}`}
        />
      </div>
      <div className="text-center mt-6">
        <h1 className="text-xl font-bold mb-1">{name}</h1>

        <div className=" text-grey-100 font-light mb-2">{title}</div>

        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
          <a href={linkedin} target="_blank" className="flex rounded-md hover:bg-teal-400 transition-colors duration-300 h-10 w-10">
            <IoLogoLinkedin className="w-full h-full p-3 text-white hover:text-dark-600 " />
          </a>
        </div>
      </div>
      </div>
  );
}

export default TeamCard;
