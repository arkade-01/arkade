import React from 'react'
import Navbar from '@/components/Navbar'
import CallToAction from '@/components/CallToAction'

const page = () => {
  return (
    <div className='overflow-hidden mx-auto sm:px-10 xs:px-3 xx:px-5 max-w-5xl w-full'>
      <Navbar />
      <div className='mt-10 sm:mt-12 mb-12'>
        <h1 className='xs:text-2xl xx:text-[2rem] xs:leading-9 sm:text-4xl font-bold mb-6'>
          Who is <span className='arkade'>Arkade?</span>
        </h1>
        <p className='xs:text-sm xr:text-base sm:text-lg text-[#c0c0c0] mb-8 leading-relaxed'>
          Blockchain dev since 2021. Started deploying tokens, now I build full dApps and smart contracts. 
          Won a couple hackathons (Encode Scaling Web3, Ophir). Graduated from Ayaversity. 
          I ship fast and break things (then fix them).
        </p>
      </div>

      {/* SKILLS - Compact */}
      <h1 className='xs:text-2xl xx:text-[2rem] xs:leading-9 sm:text-4xl font-bold mb-8'>Skills</h1>
      
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-4 mb-12'>
        <div className='bg-[#1a1a1a] rounded-lg p-4'>
          <h3 className='text-[#06FCD8] font-semibold mb-2'>Solidity</h3>
          <p className='text-sm text-[#9a9a9a]'>Smart contracts, EVM, security patterns</p>
        </div>
        <div className='bg-[#1a1a1a] rounded-lg p-4'>
          <h3 className='text-[#06FCD8] font-semibold mb-2'>Rust + Anchor</h3>
          <p className='text-sm text-[#9a9a9a]'>Solana programs, high-performance</p>
        </div>
        <div className='bg-[#1a1a1a] rounded-lg p-4'>
          <h3 className='text-[#06FCD8] font-semibold mb-2'>TypeScript</h3>
          <p className='text-sm text-[#9a9a9a]'>React, Next.js, ethers.js, wagmi</p>
        </div>
        <div className='bg-[#1a1a1a] rounded-lg p-4'>
          <h3 className='text-[#06FCD8] font-semibold mb-2'>Python</h3>
          <p className='text-sm text-[#9a9a9a]'>Backend, scripting, automation</p>
        </div>
      </div>

      {/* Wins */}
      <h2 className='xs:text-xl sm:text-2xl font-bold mb-4 text-[#06FCD8]'>Hackathon Wins</h2>
      <ul className='text-[#c0c0c0] space-y-2 mb-12 xs:text-sm sm:text-base'>
        <li>🏆 Encode Scaling Web3 Hackathon</li>
        <li>🏆 Ophir In-House Hackathon</li>
      </ul>

      <CallToAction />
    </div>
  )
}

export default page
