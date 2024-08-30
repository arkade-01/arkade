import React from 'react'
import Button from './Button'
import Image from 'next/image'

const MyPortfolio = () => {
  return (
    <>
      <div className="w-full mt-28 mb-10 ">
        <div className='flex flex-col place-items-start'>
          <h1 className='mb-2 font-bold text-3xl text-[#06FCD8]'>My Portfolio</h1>
          
          <div className='lg:flex lg:gap-3 lg:items-center'>
            <p className=''>{`Here's a collection of some recent projects that I've worked on alongside talented individuals from various companies around. While these projects represent only a small fraction of my overall portfolio, they showcase the collaborative effort and diverse expertise that went into their creation.`}</p>
            <div className='mt-10 lg:mt-0'>
              <Button text='See more!' link='work'/>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}

export default MyPortfolio