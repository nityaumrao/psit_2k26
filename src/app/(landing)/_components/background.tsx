"use client";

export default function Background() {
  return (
    <>
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f30] via-[#050a1e] to-black" />
        <div className="absolute inset-x-0 top-16 h-32 bg-gradient-to-b from-white/10 via-transparent to-transparent blur-3xl" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[url('/grid.png')] bg-repeat opacity-5" />
    </>
  );
}
