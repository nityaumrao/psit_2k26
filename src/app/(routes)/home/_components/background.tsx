"use client";

import Character from "./character";
export function WavyBackgroundDemo() {
  return (
    <>
      {/* Background image layer - place your image at public/assets/ignitia-bg.jpg */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg1.jpg')" }}
        />
        {/* dark gradient overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/80" />
      </div>

      <div className="absolute inset-0 -z-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var  text-center">
          IGNITIA
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Powered by Passion. Fueled by Fire
        </p>
        <div className="absolute" style={{backgroundImage:"url('/bg.jpg')"}}>
            <Character />
        </div>
        
      </div>
    </>
  );
}

export default WavyBackgroundDemo;