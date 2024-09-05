"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { arrow } from '@/public/images';
import Navbar from '@/components/Navbar';
import CallToAction from '@/components/CallToAction';
import { pastProjects, workExperience } from '@/data';

const Work = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const onMouseEnter = (id: number) => {
    setIsHovered(id);
  }
  const onMouseLeave = () => {
    setIsHovered(null);
  }
  
  return (
    <>
      <div className='overflow-hidden mx-auto sm:px-10 xs:px-3 xx:px-5 max-w-5xl w-full'>
        <Navbar />
        <div className='mt-10 sm:mt-12 mb-12  md:w-[90%] lg:w-[80%]'>
          <h1 className='xs:text-2xl xx:text-[2rem]  xs:leading-9 sm:text-4xl font-bold'>
            Work Experience
          </h1>
          <p className='xs:text-xs xr:text-sm sm:leading-5 sm:text-[15px]'>
          Here is a list of some of the places I&apos;ve worked as a backend developer, blockchain developer and a smart contract developer.
          </p>
        </div>
        <div className='mb-28 md:w-[90%] lg:w-[80%]'>
            {workExperience.map((workE, id) => (
              <div key={id}
              className='my-9'>
                <h4 className='mb-2 font-bold xs:text-base xx:text-[18px] xr:text-[22px] xr:leading-6 sm:text-[25px] sm:leading-6 text-[#06FCD8]'>
                  {workE.title}
                </h4>
                <p className='xs:text-xs xr:text-sm sm:leading-5 sm:text-[15px]'>
                  {workE.desc}
                </p>
              </div>
            ))}
        </div>

        <h1 className='mb-7 font-bold xs:text-[22px] xs:leading-9 xx:text-[26px] xx:leading-9 xr:text-[29px] sm:text-3xl text-[#06FCD8]'>Past Projects</h1>
        <div className='flex flex-col items-start'>
          {pastProjects.map((pastP, id) => (
            <div key={id}  className='flex flex-col my-5 xs:w-full md:w-[90%] lg:w-[80%]'>
              <Link 
                target='_blank'
                href={`${pastP.path}`} 
                onMouseEnter={() => onMouseEnter(id)}
                onMouseLeave={onMouseLeave}
                className='bg-[#111313] hover:bg-[#222222] flex justify-between rounded-xl pl-5 items-center hover:scale-105 hover:transition hover:duration-500'>
                <div className="flex flex-col">
                  <Image 
                    src={pastP.logo} 
                    alt={`${pastP.name}`}
                    className='xs:w-24 sm:w-32 md:w-36 h-auto'
                    />
                    <div className='flex space-x-1 items-center'>
                      <h2 className='text-[#06FDC8] font-semibold xs:text-xs xr:text-sm md:text-base'>
                        {pastP.name}
                      </h2>
                      {isHovered === id && (<Image 
                        src={arrow} 
                        alt={`${pastP.name}`} 
                        className='w-[14px] h-auto hover:transition hover:duration-500'
                      />)}
                    </div>
                </div>
                  <Image 
                    src={pastP.img} 
                    alt={`${pastP.name}`}
                    className='xs:w-44 xx:w-52 xr:w-72 sm:w-80 md:w-96 h-auto rounded-tr-xl rounded-br-xl'
                    />
              </Link>
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

export default Work