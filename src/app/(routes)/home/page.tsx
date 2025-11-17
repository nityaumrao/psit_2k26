'use client';

import Background from './_components/background'
import { Navbar } from '@/app/(landing)/_components/Navbar';
import HeroSection from './_components/text';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-[#131010] w-full min-h-screen relative'>
      <div className='absolute inset-0 z-0'>
        <Background />
      </div>
      <div className='relative '>
        <div className='flex left-2'>
          <div className='flex in between w-full px-10 py-6'>
            <Image alt="Ignitia logo" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="/icon.svg"></Image>
          </div>
        </div>
        {/* <Navbar /> */}
        <div className=" items-center left-40 w-full font-sarif text-yellow-400 min-h-screen">
         <HeroSection />
        </div>
      </div>
    </div>
  )
}
