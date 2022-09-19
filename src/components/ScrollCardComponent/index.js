import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { motion } from "framer-motion";
import "./ScrollCard.css";

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "Inertia",
      bounce: 0.4,
      duration: 0.5,
    },
  },
};

function ScrollCardComponent({ background, title, description }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      {/* Top Section  */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div onClick={openModal} variants={cardVariants} className="z-10 p-3 w-full rounded-lg  relative flex flex-col backdrop-filter backdrop-blur-lg  text-white cursor-pointer select-none bg-dark-400 bg-opacity-5 shadow-2xl "
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img
            className="h-40 md:h-full w-full rounded-2xl drop-shadow-md mx-auto aspect-[2/1] object-cover"
            src={background}
            alt={`slide-card-${title}`}
          />
          <div className="text-center mt-6">
            <h1 className="text-xl font-bold mb-1">{title}</h1>
          </div>
        </motion.div>
      </motion.div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default ScrollCardComponent;
