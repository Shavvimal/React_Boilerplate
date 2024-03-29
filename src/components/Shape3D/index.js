import "./styles.css";
import React, { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "./Shapes";
import { transition } from "./settings";
import useMeasure from "react-use-measure";

export default function Shape3D({ headshot }) {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <MotionConfig transition={transition}>
      <motion.div
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.3 },
          press: { scale: 1 },
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
        className="image-container appearance-none cursor-pointer rounded-md text-white relative text-center flex items-center border-none outline-none"
      >

        <motion.div
          className="shapes z-10"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >

          <div className="container z-30">
            <Suspense fallback={null}>
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          className="w-full "
        >
        
          <motion.img
            className="z-40 rounded-md rounded-bl-none rounded-br-none drop-shadow-md mx-auto h-96 w-full px-4 object-cover md:w-[30rem] md:h-[33rem] "
            src={headshot}
          />
        
        </motion.div>





      </motion.div>
    </MotionConfig>
  );
}
