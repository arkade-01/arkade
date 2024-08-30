"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { arkade, hamburger, Arkadenav, closenav} from '@/public/images'
import { navLinks, navSocials } from '@/data'
import Link from 'next/link'

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activePath, setActivePath] = useState("")
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
    setActivePath(window.location.pathname);
    }
}, []);

// Check if navItems is defined and is an array before mapping
if (!navLinks || !Array.isArray(navLinks)) {
    return null; // or return a fallback UI
}
  const openNav = () => {
    setIsMobileNavOpen(true);
    setIsAnimating(false)
  }
  const closeNav = () => {
    setIsAnimating(true)

    setTimeout(() => {
      setIsMobileNavOpen(false);
      setIsAnimating(false);
    }, 500)
  }

  return (
    <>
        <div className='lg:hidden flex justify-between xs:py-1 xx:py-2 xr:py-3'>
          <div className='flex'>
            <Image src={arkade} alt='arkade img' width={60}/>
            <Image src={hamburger} alt='hamburger img' width={35} className='cursor-pointer lg:hidden' onClick={openNav}/>
          </div>
        
          <div className='flex justify-center gap-3 items-center mr-2'>
          <span className="w-[10px] h-[10px] bg-[#43DA92] rounded-full"></span>
              <p className="text-[#43DA92] font-bold ">Available</p>
          </div>

          {isMobileNavOpen || isAnimating ? (
            <nav className={`lg:hidden flex flex-col fixed xs:w-[50%] xr:w-[60%] h-screen bg-[#222222] left-0 top-0 z-[999px] transition-opacity duration-500 transform xs:px-3 xr:px-4 py-4 items-center justify-between
            ${isAnimating 
              ? "fade-out" 
              : "fade-in"}`} 
            style={{
              visibility: isMobileNavOpen || isAnimating 
              ? 'visible' 
              : 'hidden',
            }}>
              <div className='w-full'>
                <div 
                onClick={closeNav}
                className='flex justify-end items-center cursor-pointer'>
                  <Image
                  src={closenav}
                  alt="close nav"/>
                </div>
                <div className='flex justify-start items-center gap-2 mb-4'>
                  <Image
                  src={arkade}
                  alt='arkade img'
                  width={60}
                  />
                  <div className='flex justify-center items-center'>
                    <Image src={Arkadenav} alt='arkade'
                    className='w-4 h-4'/>
                    <p className='flex text-white font-medium'>rkade</p>
                  </div>
                </div>
                <ul className='flex flex-col items-center justify-center'>
                    {navLinks.map((nav, id) => (
                      <Link
                      key={id} 
                      href={`${nav.path}`}
                      className={`flex text-white w-full px-10 xs:py-2 xx:py-3 xr:py-5 justify-center cursor-pointer items-center my-3 rounded-xl
                      ${activePath === nav.path
                        ? "bg-black"
                        : "bg-[#2d2d2d]"}`}
                        >
                        {nav.name}
                      </Link>
                    ))}
                  </ul>
              </div>
              <div className='flex items-center justify-center mb-20'>
                {navSocials.map((navSocial) => (
                  <Link
                  key={navSocial.name}
                  href={`${navSocial.path}`}
                  className='bg-black px-2 py-2 items-center justify-center rounded-full xs:mx-1 xr:mx-2'>
                    <Image
                    src={navSocial.img}
                    width={23}
                    height={23}
                    alt={`${navSocial.name}`}/>
                  </Link>
                ))}
              </div>
            </nav>
          ) : null }
        </div>
        <div className='hidden lg:flex justify-between xs:py-1 xx:py-2 xr:py-3 w-full'>
          <div className='flex'>
            <Image src={arkade} alt='arkade img' width={60}/><div className='flex justify-center items-center'>
                    <Image src={Arkadenav} alt='arkade'
                    className='w-4 h-4'/>
                    <p className='flex lg:text-lg text-white font-medium'>rkade</p>
                  </div>
          </div>
          
          <ul className='flex rounded-full bg-[#2d2d2d] items-center justify-center'>
              {navLinks.map((nav, id) => (
                <Link
                key={id} 
                href={`${nav.path}`}
                className={`flex text-white w-full px-8  justify-center cursor-pointer items-center rounded-full
                ${activePath === nav.path
                  ? "bg-black py-4 font-medium"
                  : "bg-[#2d2d2d] "}`}
                  >
                  {nav.name}
                </Link>
              ))}
          </ul>
          <div className='flex justify-center items-center'>
            <div className='flex justify-center gap-3 items-center mr-2'>
              <span className="w-[10px] h-[10px] bg-[#43DA92] rounded-full"></span>
              <p className="text-[#43DA92] font-bold ">Available</p>
            </div>

            <div className='flex items-center justify-center'>
                {navSocials.map((navSocial) => (
                  <Link
                  key={navSocial.name}
                  href={`${navSocial.path}`}
                  className='bg-black px-2 py-2 items-center justify-center rounded-full xs:mx-1 xr:mx-2 lg:mx-1'>
                    <Image
                    src={navSocial.img}
                    width={23}
                    height={23}
                    alt={`${navSocial.name}`}/>
                  </Link>
                ))}
              </div>
          </div>
          
        </div>
    </>
  )
}

export default Navbar