import React from 'react'
import Navbar from '@/components/Navbar'
import { pastProjects, workExperience } from '@/data'
import Image from 'next/image'
import CallToAction from '@/components/CallToAction'

const page = () => {
  return (
    <>
      <div className='overflow-hidden mx-auto sm:px-10 xs:px-3 xx:px-5 max-w-6xl w-full'>
        <Navbar />
        <div className='mt-10 mb-12'>
          <h1 className='xs:text-2xl xx:text-[2rem]  xs:leading-9 sm:text-4xl font-bold'>
            Work Experience
          </h1>
          <p className=' xs:text-xs xr:text-sm sm:text-base xr:text-justify'>
          Here is a list of some of the places I’ve worked as a backend developer, blockchain developer and a smart contract developer.
          </p>
        </div>
        <div className='mb-28'>
            {workExperience.map((workE, id) => (
              <div key={id}
              className='my-9'>
                <h4 className='mb-2 font-bold xs:text-base xx:text-[18px] xr:text-[22px] xr:leading-6 sm:text-[25px] sm:leading-6 text-[#06FCD8]'>
                  {workE.title}
                </h4>
                <p className='xs:text-xs xr:text-sm sm:text-base xr:text-justify'>
                  {workE.desc}
                </p>
              </div>
            ))}
        </div>

        <h1 className='mb-7 font-bold xs:text-[22px] xs:leading-9 xx:text-[26px] xx:leading-9 xr:text-[29px] sm:text-3xl text-[#06FCD8]'>Past Projects</h1>
        <div className='flex flex-col items-start'>
          {pastProjects.map((pastP, id) => (
            <div key={id}  className='flex flex-col my-5 xs:w-full md:w-[90%] lg:w-[80%]'>
              <div className='bg-[#111313] flex justify-between rounded-xl pl-5 items-center'>
                <div className="flex flex-col">
                  <Image 
                    src={pastP.logo} 
                    alt={`${pastP.name}`}
                    className='w-28 sm:w-32 lg:w-36 h-auto'
                    />
                    <h2 className='text-[#06FDC8] font-bold text-xs'>
                      {pastP.name}
                    </h2>
                </div>
                  <Image 
                    src={pastP.img} 
                    alt={`${pastP.name}`}
                    className='w-72 sm:w-80 h-auto rounded-tr-xl rounded-br-xl'
                    />
              </div>
                <p className='my-2 xs:text-xs xr:text-sm sm:text-base xr:text-justify'>
                  {pastP.desc}
                </p>
            </div>
          ))}
        </div>
        <CallToAction />
      </div>
    </>
  )
}

export default page