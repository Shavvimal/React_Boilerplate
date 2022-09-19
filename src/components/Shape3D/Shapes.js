import { motion } from "framer-motion-3d";
import { MotionConfig } from "framer-motion";
import React, { useRef, useLayoutEffect } from "react";
import { transition } from "./settings";
import { Canvas, useThree } from "@react-three/fiber";
import { useSmoothTransform } from "./use-smooth-transform";

export function Shapes({ isHover, isPress, mouseX, mouseY }) {
  const lightRotateX = useSmoothTransform(mouseY, spring, mouseToLightRotation);
  const lightRotateY = useSmoothTransform(mouseX, spring, mouseToLightRotation);

  return (
    <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
      <Camera mouseX={mouseX} mouseY={mouseY} />
      <MotionConfig transition={transition}>
        <motion.group
          center={[0, 0, 0]}
          rotation={[lightRotateX, lightRotateY, 0]}
        >
          <Lights />
        </motion.group>
        <motion.group
          initial={false}
          animate={isHover ? "hover" : "rest"}
          dispose={null}
          variants={{
            hover: { z: isPress ? -0.9 : 0 },
          }}
        >

          <Icosahedron
            position={[1.1, 0, 0]}
            rotation={[0, 0, 0.5]}
            icosargs={[0.7, 0]}
            x={1.8}
            z={0.6}
            y={0.6}
            rotateZ={-0.5}
            rotateX={0}
          />
          <Icosahedron
            position={[-0.8, 0.4, 0]}
            rotation={[-0.5, 0, -0.3]}
            icosargs={[0.3, 0]}
            x={-1.5}
            z={1.1}
            y={0.6}
            rotateZ={0.7}
            rotateX={-0.5}
          />
          <Icosahedron
            position={[0.5, 0.5, 0]}
            rotation={[-0.5, 0, -0.3]}
            icosargs={[0.2, 0]}
            x={1.2}
            z={0.1}
            y={1.7}
            rotateZ={0.7}
            rotateX={-0.5}
          />

          <Icosahedron
            position={[-1.3, -1, -0.3]}
            rotation={[-0.6, 0, -0.7]}
            icosargs={[0.7, 0]}
            x={-1.2}
            z={0.1}
            y={-2}
            rotateZ={0.7}
            rotateX={-0.5}
          />
        </motion.group>
      </MotionConfig>
    </Canvas>
  );
}

export function Lights() {
  return (
    <>
      <spotLight color="#3EA8D7" position={[-10, -10, -10]} intensity={0.2} />
      <spotLight color="#3EA8D7" position={[-10, 0, 15]} intensity={0.8} />
      <spotLight color="#3EA8D7" position={[-5, 20, 2]} intensity={0.5} />
      <spotLight color="#3EA8D7" position={[15, 10, -2]} intensity={2} />
      <spotLight color="#3EA8D7" position={[15, 10, 5]} intensity={1} />
      <spotLight color="#51D5BA" position={[5, -10, 5]} intensity={0.8} />
    </>
  );
}

export function Icosahedron({ position, icosargs, x, z, y, rotateZ, rotateX, rotation }) {
  return (
    <motion.mesh
      position={position}
      rotation={rotation}
      variants={{
        hover: {
          x: x,
          z: z,
          y: y,
          rotateZ: rotateZ,
          rotateX: rotateX,
        },
      }}
    >
      <icosahedronGeometry args={icosargs} />
      <Material />
    </motion.mesh>
  );
}

export function Material() {
  return <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />;
}

// Adapted from https://github.com/pmndrs/drei/blob/master/src/core/PerspectiveCamera.tsx
function Camera({ mouseX, mouseY, ...props }) {
  const cameraX = useSmoothTransform(mouseX, spring, (x) => x / 350);
  const cameraY = useSmoothTransform(mouseY, spring, (y) => (-1 * y) / 350);

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef = useRef();

  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix();
    }
  }, [size, props]);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  useLayoutEffect(() => {
    return cameraX.onChange(() => camera.lookAt(scene.position));
  }, [cameraX]);

  return (
    <motion.perspectiveCamera
      ref={cameraRef}
      fov={90}
      position={[cameraX, cameraY, 3.8]}
    />
  );
}

const spring = { stiffness: 600, damping: 30 };

const mouseToLightRotation = (v) => (-1 * v) / 140;
