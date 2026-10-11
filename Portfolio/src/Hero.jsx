import heroPhoto from './heroPhoto.js'
import './hero.css'

function Hero() {
  const [src,alt] = heroPhoto(1200, 500, "cherry blossoms")
  return (
    <div className="hero">
      <img src={src} alt={alt} />
    </div>
  )
}

export default Hero
