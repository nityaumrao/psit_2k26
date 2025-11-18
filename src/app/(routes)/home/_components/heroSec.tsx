"use client";

import Image from "next/image";

const navLinks = [
  { label: "see more in gallery", href: "/gallery" },
  { label: "leader border", href: "/leader-border" },
  { label: "team", href: "/team" },
];

const recentItems = [
  "Tec-expo 2025",
  "Hackathon 2025",
];

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col justify-between pb-0 px-6 py-6 text-white">
        <header className="flex items-start justify-between text-[10px] uppercase tracking-[0.4em]">
          <div className="flex items-center gap-3">
            <Image src="/icon.svg" alt="Ignitia logo" width={48} height={48} priority />
          </div>

          <div className="hidden lg:flex flex-col pl-35  text-left w-[80%] md:w-[60%] lg:w-[40%] mx-auto gap-6">
            <div className="flex gap-10 text-[9px] tracking-[0.3em]">
              <div className="flex flex-col items-start gap-1">
                <span className="text-[9px] tracking-[0.45em]">Recent Events</span>
                {recentItems.map((item) => (
                  <span key={item} className="text-[11px] uppercase tracking-[0.2em] text-white/80">
                    {item}
                  </span>
                ))}
                <a href="/about" className="text-[11px] uppercase tracking-[0.2em] text-white underline decoration-white/50">
                  View All
                </a>
              </div>
              <div className="flex flex-col in-between items-start gap-1">
                <span className="text-[9px] tracking-[0.45em]">Get in touch</span>
                <a href="psit.ac.in" className="text-[11px] uppercase tracking-[0.2em]">info@goodnight.co.uk</a>
                <span className="text-[11px] uppercase tracking-[0.2em] underline decoration-white/50">
                  Contact Us
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-[9px] tracking-[0.4em]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* <div className="flex items-center gap-3 text-[10px] tracking-[0.3em]">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-400"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://www.psit.ac.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-400"
              >
                psit.ac.in
              </a>
            </div> */}
          </div>

          <div className="flex flex-col items-end gap-2 text-[10px] tracking-[0.35em]">
            <span>DARK MODE</span>
            <button className="flex items-center gap-2 text-[9px] uppercase tracking-[0.4em]">
              <span className="text-white">Off</span>
              <span className="relative inline-flex h-5 w-10 items-center rounded-full border border-white/60">
                <span className="absolute left-1 h-3 w-3 rounded-full bg-white transition-all" />
              </span>
            </button>
          </div>
        </header>

        <div className=" pl-30 pb-20 leading-[0.82] text-left w-[80%] md:w-[60%] lg:w-[40%] mx-auto">
          <p className="text-white text-[18px] md:text-[24px] lg:text-[32px] font-bold tracking-[0.02em]">
            Spectacular Parties  for People & Brands
          </p>
          {/* <p className="text-white/70 text-sm uppercase tracking-[0.5em] mt-2">Premium Events & Immersive Shows</p> */}
        </div>

        <div className="text-center">
          <h1 className="font-anton text-white font-extrabold md:text-[6rem] lg:text-[8rem] tracking-[0.06em]">
            WELCOME TO IGNITIA
          </h1>
        </div>
      </div>
    </div>
  );
}
