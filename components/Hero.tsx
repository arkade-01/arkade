import React from 'react'
import { ArkadeHero } from '@/public/images'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <div className=' w-full mt-7 mb-10'>
      <div className='flex flex-col justify-start'>
        <h1 className='xs:text-2xl xx:text-[28px] xr:text-3xl sm:text-4xl font-bold'>
          <span className='block'>Hi,</span>
          <span className='flex items-center gap-1'>
            I&apos;m
            <span className='flex items-center'>
              <Image 
              src={ArkadeHero} 
              alt="arkade"
              className='xs:w-[1.55rem] xx:w-[1.9rem] xr:w-[2rem] sm:w-[2.2rem] flex ml-1 justify-center xs:mb-[2.4px] xx:mb-[3px] xr:mb-[3.6px] sm:mb-0 h-auto'/>rkade.
            </span>
          </span>
          Blockchain Developer
        </h1>
        <p className='text-[#9a9a9a] xs:text-sm xx:text-[15px] xxr:text-base mb-10'>
          Smart contract engineer
        </p>
          <Button text='Contact Me!' link='contact'/>
      </div>
    </div>
  )
}

export default Hero