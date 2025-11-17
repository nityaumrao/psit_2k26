"use client";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col px-4 text-center">
        <div className="flex-1 flex items-center justify-center text-white text-xl md:text-2xl lg:text-3xl font-semibold">
          Spectacular Parties for People & Brands
        </div>
        <h1 className="pb-0 font-anton text-white font-extrabold text-5xl md:text-7xl lg:text-9xl tracking-[0.1em] leading-none">
          WELCOME TO IGNITIA
        </h1>
      </div>
    </div>
  );
}
