import React from 'react'
import Image from 'next/image'
import { jrd, rahman } from '@/public/images'

const Testimonial = () => {
  return (
    <div className='flex flex-col w-full mt-28 mb-10'>
      <h1 className='mb-3 font-bold xs:text-xl xx:text-2xl xr:text-[28px] sm:text-3xl text-[#06FCD8]'>Testimonial</h1>
      <div className="flex md:flex-row xs:flex-col md:overflow-x-auto md:overflow-y-hidden sm:hide-scrollbar max-w-full xs:space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:min-w-[90%]">
          <div className="w-full bg-[#222222] p-2 rounded-lg xs:space-y-1 sm:space-y-0 sm:flex sm:space-x-3">
            <Image
              src={rahman}
              alt="rahman"
              className="rounded-tl-lg rounded-bl-lg xs:rounded-lg sm:rounded-tr-none sm:rounded-br-none xs:w-[6.25rem] sm:w-[7.5rem] lg:w-[8rem]"
            />
            <p className="xs:text-xs xr:text-sm sm:text-[15px]">
              “I&apos;ve had the opportunity to work with many talented developers, but <span className='arkade'>Arkade</span>, truly stands out as the best. He was the only blockchain dev that delivered our Product within the short deadline. <span className='arkade'>Arkade&apos;s</span> expertise in blockchain development is unparalleled, and his ability to navigate complex challenges with ease set him apart from everyone else. Not only is he technically brilliant, but his work ethic, collaboration, and character are second to none. Working with <span className='arkade'>Arkade</span> was an absolute pleasure, and I can say without hesitation that he is the best developer I&apos;ve ever had the privilege of working with.” <span className='sm:hidden font-bold mx-3'>-</span>  <h2 className="xs:inline sm:hidden xs:text-base xx:text-lg xr:text-xl sm:text-2xl font-semibold text-[#F6224E]"> RAHMAN </h2>
            </p>
          </div>
          <h2 className="xs:hidden sm:flex xs:text-base xx:text-lg xr:text-xl sm:text-2xl font-semibold text-[#F6224E]">
            RAHMAN
          </h2>
        </div>
        <div className="md:min-w-full">
          <div className="w-full bg-[#222222] p-2 rounded-lg sm:flex sm:space-x-3 xs:space-y-1 sm:space-y-0">
            <Image
              src={jrd}
              alt="jrd"
              className="rounded-tl-lg rounded-bl-lg xs:rounded-lg sm:rounded-tr-none sm:rounded-br-none xs:w-[6.25rem] sm:w-[7.5rem] lg:w-[7.8rem]"
            />
            <p className="xs:text-xs xr:text-sm sm:text-[15px]">
              “I am delighted to recommend <span className="arkade">Arkade</span>, 
              who played an instrumental role in the development of ZakatChain.
              Throughout the project, <span className="arkade">Arkade </span>
              demonstrated exceptional technical expertise, innovative thinking, and a
              strong commitment to our mission of integrating cryptocurrency with
              charitable giving. From the outset, <span className="arkade">Arkade </span> 
              showcased an impressive ability to understand and implement complex blockchain
              technologies, ensuring that our platform was secure, efficient, and user-friendly.
              His skills in smart contract development and wallet integration were particularly
              valuable, allowing us to offer precise Zakat calculations and seamless donation
              processes.”  <span className='sm:hidden font-bold mx-3'>-</span>  <h2 className="xs:inline sm:hidden xs:text-base xx:text-lg xr:text-xl sm:text-2xl font-semibold text-[#F6224E]">
            $JRD
          </h2>
            </p>
          </div>
          <h2 className="xs:hidden sm:flex xs:text-base xx:text-lg xr:text-xl sm:text-2xl font-semibold text-[#F6224E]">
            $JRD
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Testimonial