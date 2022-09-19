import React from "react";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        // color: "#BADA55", // this sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: false, // enables the click event
            mode: "push", // adds the particles on click
          },
          // onDiv: {
          //   selectors: "#repulse-div",
          //   enable: true,
          //   mode: "repulse"
          // },
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          bubble: {
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: []
            }
          },
          push: {
            quantity: 4, // number of particles to add on click
          },
          repulse: {
            divs: {
              distance: 100, // distance of the particles from the cursor
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: 'ease-out-quad',
              selectors: []
            }
            
          },
        },
      },
      particles: {
        color: {
          value: '#40C2A7',
          animation: {
            h: {
              speed: 20
            }
          }
        },
        links: {
          color: "#0B6692",
          enable: true, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
          opacity: 0.4
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          path: {},
          speed: { min: 1, max: 2 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
          spin: {},
          vibrate: false,
          outModes: {
            bottom: "out",
            left: "out",
            right: "out",
            top: "out"
          },
        },
        number: {
          density: {
            enable: true
          },
          value: 55
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
          animation: {}
        },
        size: {
          value: { min: 0.1, max: 4 }, // let's randomize the particles size a bit
        },
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
