'use client';

import Background from './_components/background';
import HeroSection from './_components/heroSec';
import AboutSection from './_components/AboutSection';
import { FloatingNavDemo } from './_components/floatingNav';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden ">

      <FloatingNavDemo />

      {/* Video */}
      <Background />

      {/* Radial Overlay */}
      <div className="absolute inset-0 z-10 " />

      {/* Vertical Gradient Overlay */}
      <div className="absolute inset-0 z-20 " />

      {/* Content */}
      <div className="relative z-30 min-h-screen">
        <HeroSection />
        <AboutSection />
        <Footer />
      </div>
    </section>
  );
}
