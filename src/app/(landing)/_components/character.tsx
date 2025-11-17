import Image from 'next/image'


export const Character = () => {
  return (
    <>
    <div className="fixed right-40 top-1/5 z-20 hidden md:block pointer-events-none">
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
    <div className="fixed left-50 top-1/5 z-20 hidden md:block pointer-events-none">
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
    </>
    
  )
}

export default Character
