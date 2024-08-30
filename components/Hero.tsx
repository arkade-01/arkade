import React from 'react'
import { ArkadeHero } from '@/public/images'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <div className=' w-full mt-7 mb-10'>
      <div className='flex flex-col justify-start'>
        <h1 className='text-4xl font-bold'>
          <span className='block'>Hi,</span>
          <span className='flex items-center gap-1'>
            I&apos;m
            <span className='flex items-center'>
              <Image 
              src={ArkadeHero} 
              alt="arkade"
              className='w-[2.2rem] flex ml-1 justify-center'/>rkade.
            </span>
          </span>
          Blockchain Developer
        </h1>
        <p className='text-[#9a9a9a]'
        >
          Smart contract engineer
        </p>
      
        <div className='mt-10'>
          <Button text='Contact Me!' link='contact' />
        </div>
      </div>
    </div>
  )
}

export default Hero