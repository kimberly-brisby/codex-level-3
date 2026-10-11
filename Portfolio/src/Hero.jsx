import imageUrl from './image-url.js'
import './hero.css'

function Hero() {
  const src = imageUrl(1200, 500)
  return (
    <div className="cherry blossoms">
      <img src={src} alt="Cherry Blossom" />
    </div>
  )
}

export default Hero
