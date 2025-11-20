import React, { useEffect, useRef, useState } from 'react'

function About() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={
        `relative overflow-hidden bg-[url('bg.jpg')] text-white transition duration-700 ease-out transform ` +
        (visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0')
      }
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_50%)] animate-pulse-slow opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,178,93,0.28),_transparent_60%)] animate-pulse-slow" />
      <div className='relative bg-[#0a000d]/60'>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="space-y-8 md:max-w-xl animate-slide-left">
            <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">about psit</p>
            <h2 className="font-anton text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Pranveer Singh Institute of Technology
            </h2>
            <p className="text-lg text-white/80">
              PSIT is a premier engineering institute dedicated to nurturing the next generation of innovators and leaders.
              With world-class faculty, cutting-edge facilities, and a thriving community, the campus experience celebrates energy,
              creativity, and technical mastery.
            </p>
            <p className="text-sm text-white/70">
              Our legacy stretches over two decades with a relentless focus on empowering students through hands-on learning,
              research, and industry-ready stewardships. Every event, every project, every performance at PSIT reflects that spirit.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative animate-slide-right">
              <div className="relative h-64 w-64 rounded-full border border-yellow-400/80 bg-gradient-to-br from-yellow-500 to-transparent p-4 shadow-2xl md:h-72 md:w-72">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-black via-yellow-900/70 to-black">
                  <span className="text-center text-3xl font-semibold uppercase tracking-[0.5em] text-white">
                    PSIT<br />Kanpur
                  </span>
                </div>
              </div>
              <div className="absolute inset-x-0 mx-auto flex w-full max-w-xs justify-between gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
                  <p className="text-3xl font-bold text-yellow-400">20+</p>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">Years of Excellence</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
                  <p className="text-3xl font-bold text-yellow-400">10k+</p>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 pb-12 pt-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 text-white/80 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">Our Legacy</p>
              <p className="text-sm">
                Established with a vision to provide quality technical education, PSIT has emerged as a leading institution in Uttar Pradesh. With state-of-the-art facilities, experienced faculty, and a focus on practical learning, we prepare students for successful careers in technology and innovation.
              </p>
            </div>
            <div className="space-y-2 animate-slide-right">
              <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">Key Highlights</p>
              <ul className="space-y-1 text-sm text-white/70">
                <li>Technical Events: Coding competitions, hackathons, robotics challenges, and tech quizzes.</li>
                <li>Cultural Events: Dance and music performances, fashion shows, drama competitions, and art exhibitions.</li>
                <li>Literary Events: Debates, elocution contests, poetry slams, and creative writing competitions.</li>
                <li>Workshops & Seminars: Sessions conducted by industry experts and alumni on trending technologies and soft skills.</li>
                <li>Managed by SAHYOG JANKALYAN SAMITI, curating a vibrant, student-led festival calendar.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About