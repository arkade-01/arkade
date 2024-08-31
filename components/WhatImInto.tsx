import { stacks } from '@/data'
import React from 'react'
import Image from 'next/image'

const WhatImInto = () => {
  return (
    <div className='w-full mt-28 mb-10'>
      <h1 className='mb-3 font-bold text-3xl text-[#06FCD8]'>
        What I&apos;m into?
      </h1>
      <div className='sm:flex sm:gap-5 sm:justify-between'>
        <div className='sm:w-[80%] lg:w-[60%]'>
          <p className='mb-3'>{`Full-stack developer with an unwavering belief in the transformative power of decentralized technology. I'm passionate about leveraging blockchain to build a more equitable, transparent, and efficient future. My coding journey began with a deep dive into JavaScript, Python, and React.js, crafting user-centric web applications.`}</p>

          <p className=''>{`Now, I'm channeling that experience into creating dApps and smart contracts that address real-world challenges, from supply chain inefficiencies to financial inclusion. I'm constantly expanding my skillset, delving into Rust and Solidity, and staying on the cutting edge of blockchain advancements. If you share my passion for harnessing this technology for positive change, I'd love to collaborate and explore the possibilities together. Let's build something meaningful.`}</p>
        </div>

        <div className='sm:flex sm:items-center xs:justify-center mt-4'>
          <div className='flex xs:justify-around sm:justify-evenly flex-wrap items-center'>
            {stacks.map((stack) => (
              <div key={stack.id} className='flex flex-col justify-center items-center m-2 xr:m-3 sm:justify-evenly'>
                <Image src={stack.img} alt={`${stack.name}`}
                className='xs:w-10 xr:w-16 sm:w-[4.25rem] lg:w-[5rem]'/>
                <p className='text-[#06FCD8]'>{stack.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatImInto