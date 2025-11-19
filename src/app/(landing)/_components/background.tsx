

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="relative w-full h-screen overflow-hidden">

  {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}