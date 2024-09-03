import Link from 'next/link'
import React from 'react'
import SvgComponent from './SvgComponent';

interface ButtonProps {
    text: string;
    link?: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({text, link, icon, onClick}) => {
  return (
    <Link href={`/${link}`}
    className='border-[1.5px] rounded-md border-[#06FCD8] text-center text-[#06FCD8] hover:bg-[#06FCD8] hover:text-[#000] hover:transition hover:ease-out hover:duration-300 xs:px-4 xr:px-5 sm:px-6 xs:py-2 xx:py-[10px] xr:py-3 font-medium xs:text-xs xr:text-sm sm:text-base xs:w-[105px] xr:w-[120px] sm:w-[143px]'>
      <button className=''>
        <div className='flex'>
          {text} {icon && <SvgComponent className='ml-1 xs:w-4 h-auto' />}
        </div>
      </button>
    </Link>
  )
}

export default Button