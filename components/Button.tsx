"use client"

import Link from 'next/link'
import React from 'react'
import SvgComponent from './SvgComponent';
import { useState } from 'react';

interface ButtonProps {
    text: string;
    link?: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({text, link, icon, onClick}) => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseHover = () => {
    setIsHovered(true)
  }
  const onMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <Link href={`/${link}`}
    onMouseEnter={onMouseHover}
    onMouseLeave={onMouseLeave}
    className={`border sm:border-[1.5px] rounded-md border-[#06FCD8] text-center text-[#06FCD8] xs:px-5 xr:px-6 xs:py-2 xx:py-[10px] xr:py hover:stroke-inherit-3 font-medium xs:text-xs xr:text-sm sm:text-base max-w-fit flex justify-center items-center
    ${isHovered 
    ? "hover:bg-[#06FCD8] hover:text-[#000] hover:transition hover:ease-out hover:duration-300 " 
    : ""}`}>
      <button className='flex'>
          {text} 
          {icon && <SvgComponent 
            className={`w-4 h-4 ml-2 my-auto 
            ${isHovered 
            ? "stroke-[#000]" 
            : "stroke-[#06FDC8]"}`}
          />}
      </button>
    </Link>
  )
}

export default Button