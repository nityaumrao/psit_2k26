

export default function Background() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
     <video 
        autoPlay
        loop
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
