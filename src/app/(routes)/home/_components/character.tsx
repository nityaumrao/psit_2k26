import Image from 'next/image'

export const Character = () => {
  return (
    <div className="pointer-events-none absolute inset-0 top-20 z-20">
      <div className="hidden md:block absolute right-8 lg:right-40 top-[12%]">
        <Image
          src="/character.png"
          alt="Ignitia character"
          className="w-32 md:w-48 lg:w-72 animate-bob"
          width={1200}
          height={1600}
          sizes="(max-width: 768px) 14rem, (max-width: 1024px) 28rem, 36rem"
          priority
          quality={90}
        />
      </div>
      <div className="hidden md:block absolute left-8 lg:left-40 top-[12%]">
        <Image
          src="/character_male.png"
          alt="Ignitia character"
          className="w-24 md:w-32 lg:w-48 h-auto animate-bob"
          width={288}
          height={576}
          sizes="(max-width: 768px) 12rem, (max-width: 1024px) 16rem, 20rem"
          priority
          quality={90}
        />
      </div>
    </div>
  )
}

export default Character
