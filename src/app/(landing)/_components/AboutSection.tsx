'use client';
import { motion } from "framer-motion";
import FadeUp from "@/components/fadeUp";
import Image from "next/image";


export default function AboutSection() {

  return (
    <section className="flex min-h-screen w-full flex-col items-center text-black px-6 py-2 text-center" >
      <FadeUp>
        <p className="text-[10px] text-black/100 font-semibold uppercase tracking-[0.55em]">
          IGNITIA® / 28·04·2026
        </p>
      </FadeUp>
      <FadeUp delay={0.5}>
        <h2 className="mt-4 font-anton text-4xl leading-tight text-black md:text-6xl lg:text-[5.2rem]">
          ABOUT IGNITIA
        </h2>
      </FadeUp>

      <div className="mt-12 flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:text-left">

        {/* IMAGE LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex w-full justify-center lg:w-1/2"
        >
          <div className="relative h-[420px] w-full max-w-[520px] rotate-1 overflow-hidden rounded-[2.25rem] bg-black/10 shadow-2xl">
            <div className="absolute inset-4 -rotate-2 overflow-hidden rounded-[1.8rem]">
              <Image
                src="/about.jpg"
                alt="Ignitia live performance"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-xl pt-20 text-sm font-semibold leading-relaxed lg:w-1/2"
        >
          <p className="tracking-wide ">
            Ignitia 2025, PSIT&apos;s highly anticipated annual techno-cultural fest, stands as a true reflection of our
            commitment to fostering holistic student development.
          </p>

          <p className="mt-4 tracking-wide ">
            This two-day extravaganza features an exciting mix of events, performances, and competitions, offering
            students unique opportunities to showcase their talents, leadership skills, and creativity.
          </p>

          <p className="mt-4 tracking-wide ">
            Managed by <span className="text-red-500">SAHYOG JANKALYAN SAMITI</span>.
          </p>
        </motion.div>

      </div>


      {/* ----------------------------------------------------------- */}

      <div className="mt-12 flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:text-left">
        <div className="mt-12 flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:text-left">

          {/* TEXT LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-xl pt-20 text-sm font-semibold leading-relaxed lg:w-1/2"
          >
            <p className="tracking-wide ">
              Ignitia 2025, PSIT&apos;s highly anticipated annual techno-cultural fest, stands as a true reflection of our
              commitment to fostering holistic student development.
            </p>
            <p className="mt-4 tracking-wide ">
              This two-day extravaganza features an exciting mix of events, performances, and competitions, offering
              students unique opportunities to showcase their talents, leadership skills, and creativity.
            </p>
            <p className="mt-4 tracking-wide ">
              Managed by <span className="text-red-500">SAHYOG JANKALYAN SAMITI</span>.
            </p>
          </motion.div>

          {/* IMAGE RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="flex w-full justify-center lg:w-1/2"
          >
            <div className="relative h-[420px] w-full max-w-[520px] rotate-1 overflow-hidden rounded-[2.25rem] bg-black/10 shadow-2xl">
              <div className="absolute inset-4 -rotate-2 overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/about.jpg"
                  alt="Ignitia live performance"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
