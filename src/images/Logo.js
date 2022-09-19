import React from "react";

function Logo({classname}) {
  return (
    <svg className={classname} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.01 141.47">
      <defs>
        <linearGradient
          id="a"
          x1="29.55"
          x2="29.55"
          y1="2.19"
          y2="143.65"
          gradientTransform="matrix(1 0 0 -1 0 144.07)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4ca585"></stop>
          <stop offset="0.03" stopColor="#49a386"></stop>
          <stop offset="0.45" stopColor="#218890"></stop>
          <stop offset="0.79" stopColor="#097896"></stop>
          <stop offset="1" stopColor="#007298"></stop>
        </linearGradient>
        <linearGradient
          id="b"
          x1="4.92"
          x2="112.26"
          y1="132.17"
          y2="57.02"
          gradientTransform="matrix(1 0 0 -1 0 144.07)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4ca585"></stop>
          <stop offset="0.03" stopColor="#49a386"></stop>
          <stop offset="0.46" stopColor="#218890"></stop>
          <stop offset="0.79" stopColor="#097896"></stop>
          <stop offset="1" stopColor="#007298"></stop>
        </linearGradient>
        <linearGradient
          id="c"
          x1="4.89"
          x2="113"
          y1="14.45"
          y2="90.15"
          gradientTransform="matrix(1 0 0 -1 0 144.07)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1" stopColor="#007298"></stop>
          <stop offset="1" stopColor="#4ca585"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M29.53 141.46A29.51 29.51 0 01.05 112V29.5a29.5 29.5 0 0159 0V112a29.49 29.49 0 01-29.52 29.46zm0-126.87a14.75 14.75 0 00-14.9 14.61v82.88a14.91 14.91 0 1029.82 0V29.5a14.94 14.94 0 00-14.92-14.91z"
      ></path>
      <path
        fill="url(#b)"
        d="M89.48 100.24a29.28 29.28 0 01-15.91-4.7l-60.1-41.32a29.47 29.47 0 0132-49.5L105.58 46a29.46 29.46 0 01-12 53.91 28 28 0 01-4.1.33zM29.54 14.58A14.92 14.92 0 0021.43 42l60.08 41.3a14.78 14.78 0 008 2.36 14.75 14.75 0 003.18-.34 15 15 0 004.92-27.21L37.54 16.93a15.09 15.09 0 00-8-2.35z"
      ></path>
      <path
        fill="url(#c)"
        d="M29.56 141.47a29.47 29.47 0 01-16.14-54.16L73.6 45.94a29.34 29.34 0 0115.88-4.67 29.85 29.85 0 014.13.29 29.46 29.46 0 0112 53.87L45.44 136.8a29.12 29.12 0 01-15.88 4.67zm60-85.65a14.88 14.88 0 00-7.93 2.3L21.4 99.5a14.91 14.91 0 0016.06 25.12l60.17-41.37a14.92 14.92 0 00-8.12-27.43z"
      ></path>
    </svg>
  );
}

export default Logo;
