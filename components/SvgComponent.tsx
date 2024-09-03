
"use client"
import React from "react";

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = ( props) => {

  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.70471 17.8037L17.3802 6.12817M17.3802 6.12817V17.3366M17.3802 6.12817H6.17173"
        strokeWidth="1.8497"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgComponent;
