import React from 'react'
import Image from 'next/image'
import { jrd } from '@/public/images'

const Testimonial = () => {
  return (
    <div className='flex flex-col w-full mt-28 mb-10'>
      <h1 className='mb-3 font-bold xs:text-xl xx:text-2xl xr:text-[28px] sm:text-3xl text-[#06FCD8]'>Testimonial</h1>
      <div className=' bg-[#222222] p-2 rounded-lg'>
        <Image src={jrd} alt='jrd testimonial'
        className='rounded-tl-lg rounded-bl-lg xs:w-[100px] xs:h-[122px]'/>

        <p className='xs:text-xs xr:text-sm sm:text-base xr:text-justify'>“I am delighted to recommend <span className='arkade'>Arkade</span>, who played an instrumental role in the development of ZakatChain. Throughout the project,  <span className='arkade'>Arkade</span> demonstrated exceptional technical expertise, innovative thinking, and a strong commitment to our mission of integrating cryptocurrency with charitable giving. From the outset,  <span className='arkade'>Arkade</span> showcased an impressive ability to understand and implement complex blockchain technologies, ensuring that our platform was secure, efficient, and user-friendly. His skills in smart contract development and wallet integration were particularly valuable, allowing us to offer precise Zakat calculations and seamless donation processes”</p>
      </div>
      <h2 className='xs:text-xl xx:text-2xl xr:text-[28px] sm:text-3xl font-medium text-[#F6224E]'>$JRD</h2>
    </div>
  )
}

export default Testimonial