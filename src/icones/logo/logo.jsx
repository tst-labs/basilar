import React from 'react';

const ORIGINAL_WIDTH  = 36.450;
const ORIGINAL_HEIGHT = 53.260;
const ASPECT_RATIO    = ORIGINAL_WIDTH / ORIGINAL_HEIGHT;

export const Logo = ({width = ORIGINAL_WIDTH}) => {
  
  let widthNum = Number.parseFloat(width);
  
  return (
    <svg
      width={width}
      height={(widthNum/ASPECT_RATIO).toString()}
      viewBox={`0 0 ${ORIGINAL_WIDTH} ${ORIGINAL_HEIGHT}`}
    >
      <g transform="matrix(1.333333 0 0 -1.333333 -2174.8754 304.52573)">
        <path
          d="M1646.04 220.937a3.73 3.73 0 0 1 3.729 3.729 3.73 3.73 0 0 1-3.729 3.728 3.73 3.73 0 0 1-3.729-3.728 3.73 3.73 0 0 1 3.729-3.729m-6.92-6.24c2.507-.254 4.464-2.372 4.464-4.946v-12.428h4.97v12.428c0 5.5-4.453 9.943-9.943 9.943h-4.97v-4.972h4.97a5.01 5.01 0 0 0 .508-.025"
          fill="#fff"
        />
        <path d="M1641.1 212.238h-9.942v-4.97h9.942z" fill="#077c60" />
        <path d="M1658.498 219.695h-9.942v-4.972h9.942z" fill="#ffce06" />
        <path
          d="M1641.1 203.538v1.243h-4.972v-6.215c0-2.573-1.957-4.7-4.464-4.945-.167-.017-.335-.025-.506-.025v-4.97c5.49 0 9.942 4.45 9.942 9.94z"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  height="53.027"
  width="88.823"
>
  <defs>
    <clipPath id="A">
      <path d="M128.042 319.105a3.73 3.73 0 0 1 3.729-3.729 3.73 3.73 0 0 1 3.728 3.729 3.73 3.73 0 0 1-3.728 3.728 3.73 3.73 0 0 1-3.729-3.728" />
    </clipPath>
    <radialGradient
      id="B"
      spreadMethod="pad"
      gradientTransform="matrix(2.6364512,-2.6364512,2.6364512,2.6364512,129.90657,320.47168)"
      r="1"
      cy="0"
      cx="0"
      fy="0"
      fx="0"
      xlink:href="#S"
    >
      <stop offset="0" stop-color="#0069a3" />
      <stop offset="1" stop-color="#004269" />
    </radialGradient>
    <clipPath id="C">
      <path d="M119.372 314.132v-4.97h4.974a4.97 4.97 0 0 0 4.97-4.97v-12.43h4.97v12.43a9.94 9.94 0 0 1-9.941 9.941z" />
    </clipPath>
    <linearGradient
      id="D"
      spreadMethod="pad"
      y2="291.72"
      x2="126.83"
      y1="308.794"
      x1="126.83"
      xlink:href="#S"
    >
      <stop offset="0" stop-color="#0069a3" />
      <stop offset="1" stop-color="#004269" />
    </linearGradient>
    <clipPath id="E">
      <path d="M119.372 314.132v-4.97h4.974l.507-.025c5.254-.266 9.434-4.598 9.434-9.917v4.972a9.94 9.94 0 0 1-9.941 9.941z" />
    </clipPath>
    <linearGradient
      id="F"
      spreadMethod="pad"
      y2="314.061"
      x2="126.83"
      y1="308.913"
      x1="126.83"
      xlink:href="#S"
    >
      <stop offset="0" stop-color="#004269" />
      <stop offset=".116" stop-color="#004770" />
      <stop offset="1" stop-color="#0069a3" />
    </linearGradient>
    <clipPath id="G">
      <path d="M116.887 301.705h9.942v4.97h-9.942z" />
    </clipPath>
    <linearGradient
      id="H"
      spreadMethod="pad"
      y2="304.19"
      x2="126.674"
      y1="304.19"
      x1="117.054"
      xlink:href="#S"
    >
      <stop offset="0" stop-color="#077c60" />
      <stop offset="1" stop-color="#21ae88" />
    </linearGradient>
    <clipPath id="I">
      <path d="M134.287 309.16h9.943v4.972h-9.943z" />
    </clipPath>
    <linearGradient
      id="J"
      spreadMethod="pad"
      y2="311.647"
      x2="144.178"
      y1="311.647"
      x1="134.35"
      xlink:href="#S"
    >
      <stop offset="0" stop-color="#fbdb65" />
      <stop offset="1" stop-color="#ffce06" />
    </linearGradient>
    <clipPath id="K">
      <path d="M121.86 299.22v-6.213c0-2.746-2.226-4.973-4.972-4.973v-4.97c5.49 0 9.944 4.45 9.944 9.943v6.213z" />
    </clipPath>
    <linearGradient
      id="L"
      spreadMethod="pad"
      y2="289.359"
      x2="121.859"
      y1="299.178"
      x1="121.859"
      xlink:href="#S"
    >
      <stop offset="0" stop-color="#004269" />
      <stop offset="1" stop-color="#0069a3" />
    </linearGradient>
    <clipPath id="M">
      <path d="M117.397 288.06c-.168-.018-.338-.026-.5-.026v-4.97c5.49 0 9.944 4.45 9.944 9.943v4.97c0-5.32-4.182-9.65-9.434-9.918" />
    </clipPath>
    <linearGradient
      id="N"
      spreadMethod="pad"
      y2="289.443"
      x2="121.859"
      y1="283.104"
      x1="121.859"
      xlink:href="#S"
    >
      <stop offset="0" stop-color="#0069a3" />
      <stop offset=".442" stop-color="#005281" />
      <stop offset="1" stop-color="#004269" />
    </linearGradient>
    <clipPath id="O">
      <path d="M149.295 314.122v-2.277h4.135V291.68h2.468v20.166h4.136v2.277z" />
    </clipPath>
    <linearGradient
      id="P"
      spreadMethod="pad"
      y2="314.346"
      x2="166.399"
      y1="291.455"
      x1="166.399"
      xlink:href="#S"
    >
      <stop offset="0" stop-color="#004269" />
      <stop offset="1" stop-color="#0069a3" />
    </linearGradient>
    <clipPath id="Q">
      <path d="M161.477 308.736c0-6.316 7.503-6.797 7.503-11.8 0-2.02-.834-3.206-2.63-3.206s-2.63 1.186-2.63 3.206v1.41h-2.34v-1.283c0-3.398 1.603-5.61 5.033-5.61s5.065 2.21 5.065 5.61c0 6.317-7.533 6.797-7.533 11.83 0 1.987.768 3.174 2.564 3.174s2.565-1.187 2.565-3.206v-.737h2.372v.61c0 3.398-1.603 5.61-5 5.61-3.367 0-4.97-2.15-4.97-5.61" />
    </clipPath>
    <clipPath id="R">
      <path d="M172.763 314.122v-2.277h4.136V291.68h2.468v20.166h4.137v2.277z" />
    </clipPath>
    <linearGradient id="S" gradientUnits="userSpaceOnUse" />
  </defs>
  <g transform="matrix(1.333333 0 0 -1.333333 -155.84933 430.44399)">
    <g clip-path="url(#A)">
      <path
        d="M128.042 319.105a3.73 3.73 0 0 1 3.729-3.729 3.73 3.73 0 0 1 3.728 3.729 3.73 3.73 0 0 1-3.728 3.728 3.73 3.73 0 0 1-3.729-3.728"
        fill="url(#B)"
      />
    </g>
    <g clip-path="url(#C)">
      <path
        d="M119.372 314.132v-4.97h4.974a4.97 4.97 0 0 0 4.97-4.97v-12.43h4.97v12.43a9.94 9.94 0 0 1-9.941 9.941z"
        fill="url(#D)"
      />
    </g>
    <g clip-path="url(#E)">
      <path
        d="M119.372 314.132v-4.97h4.974l.507-.025c5.254-.266 9.434-4.598 9.434-9.917v4.972a9.94 9.94 0 0 1-9.941 9.941z"
        fill="url(#F)"
      />
    </g>
    <g clip-path="url(#G)">
      <path d="M116.887 301.705h9.942v4.97h-9.942z" fill="url(#H)" />
    </g>
    <g clip-path="url(#I)">
      <path d="M134.287 309.16h9.943v4.972h-9.943z" fill="url(#J)" />
    </g>
    <g clip-path="url(#K)">
      <path
        d="M121.86 299.22v-6.213c0-2.746-2.226-4.973-4.972-4.973v-4.97c5.49 0 9.944 4.45 9.944 9.943v6.213z"
        fill="url(#L)"
      />
    </g>
    <g clip-path="url(#M)">
      <path
        d="M117.397 288.06c-.168-.018-.338-.026-.5-.026v-4.97c5.49 0 9.944 4.45 9.944 9.943v4.97c0-5.32-4.182-9.65-9.434-9.918"
        fill="url(#N)"
      />
    </g>
    <g clip-path="url(#O)">
      <path
        d="M149.295 314.122v-2.277h4.135V291.68h2.468v20.166h4.136v2.277z"
        fill="url(#P)"
      />
    </g>
    <g clip-path="url(#Q)">
      <path
        d="M161.477 308.736c0-6.316 7.503-6.797 7.503-11.8 0-2.02-.834-3.206-2.63-3.206s-2.63 1.186-2.63 3.206v1.41h-2.34v-1.283c0-3.398 1.603-5.61 5.033-5.61s5.065 2.21 5.065 5.61c0 6.317-7.533 6.797-7.533 11.83 0 1.987.768 3.174 2.564 3.174s2.565-1.187 2.565-3.206v-.737h2.372v.61c0 3.398-1.603 5.61-5 5.61-3.367 0-4.97-2.15-4.97-5.61"
        fill="url(#P)"
      />
    </g>
    <g clip-path="url(#R)">
      <path
        d="M172.763 314.122v-2.277h4.136V291.68h2.468v20.166h4.137v2.277z"
        fill="url(#P)"
      />
    </g>
  </g>
</svg>;