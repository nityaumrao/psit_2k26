"use client";

import FadeUp from "@/components/fadeUp";
import Image from "next/image";

const recentItems = [
  "Chopstick Marble Race",
  "Battle of Bands",
];

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen px-6 py-6 text-white md:px-10 lg:px-16">
      <div className="flex min-h-screen flex-col justify-between gap-10">
        <header className="flex items-start justify-between text-[9px] uppercase tracking-[0.45em]">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/10">
              <Image src="/icon.svg" alt="Goodnight emblem" width={40} height={40} priority />
            </div>
            <span className="text-[8px] tracking-[0.6em] text-white/70">IGNITIA</span>
          </div>

          <div className="hidden flex-1 flex-col gap-8 text-[9px] text-center tracking-[0.4em] uppercase lg:flex lg:flex-row lg:items-center lg:justify-center">
            <div className="flex flex-col items-start gap-1 text-left text-white/80">
              <span className="text-[7px] tracking-[0.7em] text-white/60">Explore Events</span>
              {recentItems.map((item) => (
                <span key={item} className="text-[10px] uppercase tracking-[0.25em]">
                  {item}
                </span>
              ))}
              <a
                href="/events"
                className="text-[10px] uppercase tracking-[0.3em] text-white underline decoration-white/60"
              >
                View All
              </a>
            </div>
            
          </div>

          <div className="flex flex-col items-end gap-2 text-[9px] tracking-[0.35em]">
              <span className="text-[7px] tracking-[0.7em] text-white/60">Get in Touch</span>
              <a className="text-[10px] uppercase tracking-[0.2em]">PSIT</a>
              <a href="https://www.psit.ac.in/" className="text-[10px] uppercase tracking-[0.35em] underline decoration-white/60">
                Contact Us
              </a>
    
          </div>
        </header>

        <main className="flex flex-1 flex-col items-center justify-end bottom-10 gap-6 text-center">
          <FadeUp>
            <p className="text-[10px] uppercase tracking-[0.7em] text-white/70">
            Spectacular Parties for People & Brands
          </p>
          </FadeUp>
              <FadeUp delay={0.2}>
          <div className="flex items-end justify-center gap-2">
            <h1 className="font-anton text-[5.5rem] leading-[0.9] text-white md:text-[7rem] lg:text-[9rem]">
              WELCOME TO IGNITIA
            </h1>
            <span className="text-[2rem] uppercase tracking-[0.4em] text-white/60">®</span>
          </div></FadeUp>
          <p className="text-[12px] uppercase tracking-[0.4em] text-white/60">
            For People & Brands
          </p>
        </main>
      </div>
    </div>
  );
}
