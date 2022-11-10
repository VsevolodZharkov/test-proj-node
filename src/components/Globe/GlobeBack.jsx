import React from 'react';

const GlobeBack = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9010_168)">
        <g filter="url(#filter0_d_9010_168)">
          <path
            d="M0.146485 12.3535L7.64648 19.8535C7.84181 20.0488 8.15822 20.0488 8.3535 19.8535C8.54883 19.6582 8.54883 19.3418 8.3535 19.1465L1.707 12.5L23.5 12.5C23.7764 12.5 24 12.2763 24 12C24 11.7236 23.7764 11.5 23.5 11.5L1.707 11.5L8.3535 4.8535C8.54883 4.65817 8.54883 4.34177 8.3535 4.14649C8.25586 4.04885 8.12789 4 7.99997 4C7.87205 4 7.74413 4.04885 7.64644 4.14649L0.146438 11.6465C-0.0488434 11.8418 -0.0488431 12.1582 0.146485 12.3535Z"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_9010_168"
          x="-4"
          y="4"
          width="32"
          height="24"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9010_168"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9010_168"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_9010_168">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(24 24) rotate(-180)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GlobeBack;
