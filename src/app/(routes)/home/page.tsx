'use client';

import { WavyBackgroundDemo } from './_components/background';
import { Navbar } from './_components/Navbar';
import About from './_components/about';
import Footer from '../_components/footer';

export default function Home() {
  return (
    <>
      <WavyBackgroundDemo />
      {/* <HeroAnimation /> */}
      <Navbar />
      <About />
      <Footer />
    </>
  );
}
