'use client';

import Background from './_components/background';
import HeroSection from './_components/heroSec';
import AboutSection from './_components/AboutSection';
import { FloatingNavDemo } from './_components/floatingNav';
import Footer from './_components/footer';

const Landing = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <FloatingNavDemo />

      {/* Overlay Video */}
      <Background />

      <div className="absolute inset-0 z-10" />
      <div className="absolute inset-0 z-20" />

      <div className="relative z-30 min-h-screen">
        <HeroSection />
        <AboutSection />
        <div className='bg-white text-black'>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Landing;