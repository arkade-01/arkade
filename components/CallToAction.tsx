import React from 'react'
import Button from './Button'
import SvgComponent from './SvgComponent'
import Image from 'next/image'
import Link from 'next/link'
import { arkade, Arkadenav } from '@/public/images'
import { navSocials } from '@/data'

const CallToAction = () => {
  return (
    <div className=' w-full mt-28 mb-7'>
      <div className='w-full flex flex-col justify-between rounded-lg xs:border-1 sm:border-2 border-[#06FDC8] xs:p-3 xr:p-4'>
        <p className="mt-4 xs:text-xs xx:text-[15px] xr:text-sm font-semibold">Work with me</p>
        <h2 className='my-4 xs:text-base xx:text-lg xr:text-xl sm:text-2xl font-semibold'>
          {`Let's Create Amazing Things Together`}
        </h2>
        <Button text='Hire Me' icon={SvgComponent}/>

        <div className='flex justify-between items-center mt-10'>
          <div className='flex items-center'>
            <Image src={arkade} alt='arkade'
            className='xs:w-14 xs:h-14 sm:w-16 sm:h-16 lg:w-[74px] lg:h-[74px]'/>
            <div className='flex xs:items-center sm:items-baseline'>
              <Image src={Arkadenav} alt='arkade'
                className='xs:w-4 xs:h-4 xr:w-5 xr:h-5 place-self-center xs:mb-[2.7px] sm:mb-0 sm:w-6 sm:h-6 lg:w-7 lg:h-7'/>
                <p className='flex text-white font-medium sm:text-lg lg:text-xl xr:mt-[0.75px] sm:mt-2'>rkade</p>
            </div>
          </div>
          <div className='flex xs:flex-col xs:justify-end xs:items-end sm:flex-row sm:items-center w-full'>
            <Button text='Download CV'/>
            <div className='flex items-center justify-end xs:mt-2 sm:mt-0 sm:ml-2 lg:ml-5'>
                {navSocials.map((navSocial) => (
                  <Link
                  key={navSocial.name}
                  href={`${navSocial.path}`}
                  className='bg-black hover:bg-gray-700 px-2 py-2 items-center justify-center rounded-full xs:mx-1 xr:mx-2 lg:mx-2'>
                    <Image
                    src={navSocial.img}
                    alt={`${navSocial.name}`}
                    className='sm:w-4 sm:h-4 lg:w-5 lg:h-5'/>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction