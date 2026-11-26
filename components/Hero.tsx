import React from 'react'
import { ArkadeHero } from '@/public/images'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <div className=' w-full mt-7 mb-10'>
      <div className='flex flex-col justify-start'>
        <h1 className='xs:text-2xl xx:text-[28px] xr:text-3xl sm:text-4xl font-bold mb-4'>
          <span className='flex items-center gap-1 mb-2'>
            I&apos;m
            <span className='flex items-center'>
              <Image
              src={ArkadeHero}
              alt="arkade"
              className='xs:w-[1.55rem] xx:w-[1.9rem] xr:w-[2rem] sm:w-[2.2rem] flex ml-1 justify-center xs:mb-[2.4px] xx:mb-[3px] xr:mb-[3.6px] sm:mb-0 h-auto'/>rkade.
            </span>
          </span>
          <span className='block max-w-[44rem] leading-tight'>
            I build production backend systems — <span className='text-[#06FCD8]'>APIs, real-time tools, and payment infrastructure.</span>
          </span>
        </h1>
        <p className='text-[#c0c0c0] xs:text-sm xx:text-[15px] xxr:text-base max-w-[40rem] mb-2'>
          I&apos;ve shipped payment gateways, real-time bots, data pipelines, and on-chain tooling.
        </p>
        <p className='text-[#9a9a9a] xs:text-xs sm:text-sm max-w-[40rem] mb-6'>
          Tech: NestJS, Python, and modern backend stacks. Blockchain integrations when needed.
        </p>
        <p className='flex items-center gap-2 text-[#43DA92] xs:text-xs sm:text-sm font-semibold mb-8'>
          <span className="w-[8px] h-[8px] bg-[#43DA92] rounded-full animate-blink"></span>
          Currently taking on backend and systems projects.
        </p>
        <div className='flex flex-wrap gap-3'>
          <Button text='Start a Project' link='https://t.me/arkkkade'/>
          <Button text='View Services' link='/#services'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
