import React from "react";
import { useState } from "react";
import { allPeople as tabs } from "./people";
import { motion, AnimatePresence } from "framer-motion";

import { TeamCard, DetailCard } from "../";
import Logo from "../../images/Logo";

function SharedLayout() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const trackFaceClick = (face) => {
    gtag('event', 'face_click', {
      person: String(face),
    })
  }

  const onClickFace = (item) => {
    setSelectedTab(item)
    trackFaceClick(item.name)
  }
  return (
    <>
      {/* Parent Div*/}
      <div className="w-full select-none">
        {/* div for the grid*/}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mx-auto min-h-screen max-w-7xl  ">
          {/* Left side of the Grid for Cards OR 2 parent Divs for horizontal Scrolling on Mobile*/}
          <div className="flex overflow-x-scroll md:overflow-visible rounded-md md:items-center md:justify-center md:col-span-7">
            {/* Grid for Cards*/}
            <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 ">
              {tabs.map((item) => (
                <motion.div
                  key={item.name}
                  className={`z-10 p-3 w-64 md:w-full rounded-lg mx-4 md:mx-0 relative rounded-bl-none rounded-br-none flex justify-center backdrop-filter backdrop-blur-lg  text-white cursor-pointer select-none              
              ${item === selectedTab
                      ? "bg-teal-100 bg-opacity-10 "
                      : "bg-dark-500 bg-opacity-10 "
                    }`}
                  onClick={() => onClickFace(item)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TeamCard
                    key={item.name}
                    name={item.name}
                    title={item.title}
                    linkedin={item.linkedin}
                    headshot={item.headshot}
                  />

                  {item === selectedTab ? (
                    <motion.div
                      className="w-full h-full border-b-2 absolute -m-3 border-b-teal-400 -z-50"
                      layoutId="underline"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      key={`motion-div-${selectedTab.name}`}
                    />
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side for selected Card */}
          <div className=" rounded-md flex items-center justify-center md:col-span-5">
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedTab ? selectedTab.name : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="p-4 w-full"
              >
                <DetailCard
                  key={selectedTab.name}
                  name={selectedTab.name}
                  title={selectedTab.title}
                  linkedin={selectedTab.linkedin}
                  bio={selectedTab.bio}
                  headshot={selectedTab.headshot}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default SharedLayout;
