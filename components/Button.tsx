import Link from 'next/link'
import React from 'react'

const Button = ({text, link, icon}: {
  text: string;
  link?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Link href={`/${link}`}
    className='border-[1.5px] rounded-md border-[#06FCD8] text-[#06FCD8] hover:bg-[#06FCD8] hover:text-[#000] hover:transition hover:ease-out hover:duration-300 px-7 py-3 font-medium'>
      <button className='w-[100px]'>
        {text} {icon}
      </button>
    </Link>
  )
}

export default Button