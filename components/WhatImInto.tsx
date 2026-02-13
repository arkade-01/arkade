import { stacks } from '@/data'
import React from 'react'
import Image from 'next/image'

const WhatImInto = () => {
  return (
    <div className='w-full mt-28 mb-10'>
      <h1 className='mb-3 font-bold  xs:text-xl xx:text-2xl xr:text-[28px] sm:text-3xl text-[#06FCD8]'>
        What I&apos;m into?
      </h1>
      <div className='sm:flex sm:gap-5 sm:justify-between'>
        <div className='w-full justify-center'>
          <p className='flex sm:leading-6 justify-center xs:text-sm xr:text-base sm:text-[17px] text-[#c0c0c0]'>
            I build smart contracts and dApps. Started with web dev, now I ship onchain.
          </p>
        </div>

        <div className='sm:flex sm:items-center xs:justify-center mt-4'>
          <div className='flex justify-evenly flex-wrap items-center'>
            {stacks.map((stack) => (
              <div key={stack.id} className='flex flex-col justify-center items-center xs:m-3 sm:justify-evenly'>
                <Image src={stack.img} alt={`${stack.name}`}
                className='xs:w-14 xx:w-16 h-auto'/>
                <p className='xs:text-xs xr:text-sm sm:text-base mt-2 text-[#06FCD8]'>{stack.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatImInto