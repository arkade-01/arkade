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
        <div className='w-full justify-center space-y-3'>
          <p className='flex sm:leading-5 justify-center xs:text-xs xr:text-sm sm:text-[15px]'>{`Full-stack developer with an unwavering belief in the transformative power of decentralized technology. I'm passionate about leveraging blockchain to build a more equitable, transparent, and efficient future. My coding journey began with a deep dive into JavaScript, Python, and React.js, crafting user-centric web applications.`}</p>

          <p className='flex sm:leading-5 justify-center xs:text-xs xr:text-sm sm:text-[15px]'>{`Now, I'm channeling that experience into creating dApps and smart contracts that address real-world challenges, from supply chain inefficiencies to financial inclusion. I'm constantly expanding my skillset, delving into Rust and Solidity, and staying on the cutting edge of blockchain advancements. If you share my passion for harnessing this technology for positive change, I'd love to collaborate and explore the possibilities together. Let's build something meaningful.`}</p>
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