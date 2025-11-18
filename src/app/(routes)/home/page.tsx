'use client';

import Background from './_components/background'
import { Navbar } from '@/app/(landing)/_components/Navbar';
import HeroSection from './_components/text';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-[#131010] w-full min-h-screen relative'>
      <div className='absolute inset-0 z-0'>
        {/* <Background /> */}
      </div>
      <div className='relative '>
        
        {/* <Navbar /> */}
        <div className=" items-center left-40 w-full font-sarif text-yellow-400 min-h-screen">
         <HeroSection />
        </div>
      </div>
    </div>
  )
}
