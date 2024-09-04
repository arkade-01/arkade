"use client"

import React from 'react'
import Image from 'next/image'
import { socials } from '@/data'
import Navbar from '@/components/Navbar'
import CallToAction from '@/components/CallToAction'
import Form from '@/components/Form'

const Contact = () => {
  return (
    <>
      <div className='overflow-hidden mx-auto sm:px-10 xs:px-3 xx:px-5 max-w-5xl w-full'>
        <Navbar />
        <div className='mt-10 sm:mt-12 mb-12'>
          <h1 className='xs:text-2xl xx:text-[2rem]  xs:leading-9 sm:text-4xl font-bold mb-3'>
            Contact Me
          </h1>
          <p className='xs:text-xs xr:text-sm sm:text-base xr:text-justify'>
            Lets Create Amazing Things Together!
          </p>
        </div>
        <Form 
          initialName=""
          initialEmail=""
          initialSubject=""
          initialMessage=""
        />
        <div>
          <h1 className='xs:text-2xl xx:text-[2rem]  xs:leading-9 sm:text-4xl font-bold mb-7'>
            Socials
          </h1>
          <div className='w-full'>
            {socials.map((social, id) => (
              <div key={id}
              className='flex flex-wrap my-3 items-center w-full'>
                <div className='bg-black p-2 rounded-md'>
                  <Image src={social.img} alt={`${social.handle}`} className='flex w-6 h-auto'/>
                </div>
                <p className='font-bold mx-3'>{social.dash}</p>
                <p className='text-[#06FDC8] font-medium'>{social.handle}</p>
              </div>
            ))}
          </div>
        </div>
        <CallToAction />
      </div>
    </>
  )
}

export default Contact