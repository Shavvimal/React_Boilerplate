import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { PrivacyContent } from "./PrivacyContent";

function Acordian() {
  return (
    <>
      <AnimateSharedLayout >
        <motion.ul
          className="m-0 p-0 list-none flex flex-col glass-div p-5"
          layout
          initial={{ borderRadius: 25 }}
        >
          {PrivacyContent.map((item) => (
            <Item key={item.title} title={item.title} detail={item.detail} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </>
  );
}

function Item({ title, detail }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      className="p-2 mb-5 overflow-hidden cursor-pointer border last:mb-0"
    >
      <motion.div className="w-full rounded-full" layout>
        <h2 className="text-2xl text-white text-center">{title}</h2>
      </motion.div>
      <AnimatePresence>{isOpen && <Content detail={detail} />}</AnimatePresence>
    </motion.li>
  );
}

function Content({ detail }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-white px-3 py-2">{detail}</div>
    </motion.div>
  );
}


export default Acordian;
