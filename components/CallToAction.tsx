import React from 'react'
import Button from './Button'
import SvgComponent from './SvgComponent'
import Image from 'next/image'
import { arkade } from '@/public/images'

const CallToAction = () => {
  return (
    <div className=' w-full mt-40'>
      <div className='w-full flex flex-col rounded-lg xs:border-[1.5px] sm:border-2 border-[#06FDC8] xs:p-3 xr:p-4'>
        <p className="mt-4 xs:text-xs xx:text-[15px] xr:text-sm font-semibold">Work with me</p>
        <h2 className='my-3 xs:text-base xx:text-lg xr:text-xl sm:text-2xl font-semibold'>
          {`Let's Create Amazing Things Together`}
        </h2>
        <Button text='Hire Me' icon={SvgComponent}/>

        <div className='flex justify-between mt-10'>
          <div>
            <Image src={arkade} alt='arkade'/>
          </div>
          <div>
            <Button text='Download CV'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction