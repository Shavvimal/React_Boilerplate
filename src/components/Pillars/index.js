import React, { useState } from "react";
import { threePillars as tabs } from "./threePillars";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const { t } = useTranslation();
  return (
    <div className="glass-div text-white overflow-hidden flex flex-col w-full h-full shadow-lg rounded-md md:h-96 md:overflow-scroll" data-aos="zoom-y-out">
      <nav className="rounded-bl-none rounded-br-none rounded-md border-b-2 border-teal-500 ">
        <ul className="flex md:flex-row flex-col w-full">
          {tabs.map((item) => (
            <li
              key={item.title}
              className={`text-xl font-['Isidora-Medium'] list-none py-6 md:rounded-lg rounded-bl-none rounded-br-none w-full relative  cursor-pointer h-6 flex justify-between items-center min-w-0 select-none flex ${
                item === selectedTab ? "bg-teal-400 backdrop-filter backdrop-blur-lg bg-opacity-5 md:rounded-lg shadow-2xl " : "glass-div"
              }`}
              onClick={() => setSelectedTab(item)}
            >
              <p className="w-full mx-auto px-4 ">{`${t(item.title)}`}</p>
              {item === selectedTab ? (
                <motion.div
                  className="w-full h-full border-l-2 md:border-b-2 absolute border-l-teal-400 md:border-b-teal-400 md:border-l-0"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex text-lg justify-center items-center flex-grow select-none p-10">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.detail : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {t(selectedTab.detail)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
