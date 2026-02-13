import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { projectImgs } from '@/data'

const MyPortfolio = () => {
  return (
    <>
      <div className="w-full mt-28 mb-10">
        <div className='flex flex-col place-items-start'>
          <h1 className='mb-2 font-bold xs:text-xl xx:text-2xl xr:text-[28px] sm:text-3xl text-[#06FCD8]'>My Portfolio</h1>
          
          <div className='lg:flex lg:flex-1 lg:gap-3 lg:items-center lg:justify-between'>
            <p className='lg:w-[75%] xs:text-xs xr:text-sm sm:leading-5 sm:text-[15px] text-[#9a9a9a]'>Things I&apos;ve shipped.</p>
            <div className='mt-10 lg:mt-0 lg:items-center lg:flex-shrink-0'>
              <Button text='See more!' link='work'/>
            </div>
          </div>
        </div>
        <div className='flex sm:flex-nowrap mt-10 lg:justify-between xs:justify-between items-center w-full'>
          {projectImgs.map((pimg) => (
            <div key={pimg.id}
            className="xs:m-0 m-2">
              <Image src={pimg.img} alt={`Project ${pimg.id}`}
              className='xs:items-center xs:w-full sm:w-auto sm:h-auto'/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MyPortfolio