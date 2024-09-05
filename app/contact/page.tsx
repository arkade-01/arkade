"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { socials } from '@/data'
import Form from '@/components/Form'
import Navbar from '@/components/Navbar'
import CallToAction from '@/components/CallToAction'

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
          <div className='w-full flex flex-wrap justify-between items-center'>
            {socials.map((social, id) => (
              <Link href={`${social.path}`} key={id}
              className='flex my-3 items-center justify-start xs:w-[47%] xr:[49%]'>
                <div className='bg-black p-2 rounded-md'>
                  <Image src={social.img} alt={`${social.handle}`} className='flex w-6 h-auto'/>
                </div>
                <p className='font-bold mx-2'>{social.dash}</p>
                <p className='text-[#06FDC8] font-medium xs:text-xs xr:text-sm sm:text-base text'>{social.handle}</p>
              </Link>
            ))}
          </div>
        </div>
        <CallToAction />
      </div>
    </>
  )
}

export default Contact