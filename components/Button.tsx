"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import SvgComponent from './SvgComponent';

interface ButtonProps {
  text: string;
  link?: string | null;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ text, link, icon, onClick, type = 'button' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClasses = `border sm:border-[1.5px] rounded-md border-[#06FCD8] text-center text-[#06FCD8] xs:px-5 xr:px-6 xs:py-2 xx:py-[10px] xr:py-3 font-medium xs:text-xs xr:text-sm sm:text-base max-w-max flex justify-center items-center cursor-pointer
    ${isHovered ? "bg-[#06FCD8] text-[#000] transition ease-out duration-300" : ""}`;

  const content = (
    <>
      {text}
      {icon && <SvgComponent
        className={`w-4 h-4 ml-2 my-auto ${isHovered ? "stroke-[#000]" : "stroke-[#06FDC8]"}`}
      />}
    </>
  );

  // If no link, render as button only
  if (!link) {
    return (
      <button
        type={type}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={buttonClasses}
      >
        {content}
      </button>
    );
  }

  // With link, wrap in Link
  return (
    <Link 
      href={link.startsWith('/') || link.startsWith('http') ? link : `/${link}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={buttonClasses}
    >
      {content}
    </Link>
  );
};

export default Button;
