import { useState } from 'react'
import heroPhoto from './heroPhoto.js'
import './hero.css'

function Hero() {
const [saturation, setSaturation] = useState(0)

const showColor = () => {
  setSaturation(0)
}

const showBlackAndWhite = () => {
  setSaturation(-100)
}

const photos = [
  "photo-1661964177687-57387c2cbd14?",
  "photo-1782665336033-e9754dbabe5f?",
  "photo-photo-1466354424719-343280fe118b?",
]
const descriptions = [
  "cherry blossoms",
  "koi fish in pond",
  "temple in Japan",
  
]




  const [src, alt] = heroPhoto(photos[0], 1200, 500, saturation, descriptions[0])



 return (
  <div>
    <div className="hero">
      <img src={src} alt={alt} />
    </div>
    <p>
      <button onClick={ showColor }>Color</button>
      &nbsp;
      <button onClick={ showBlackAndWhite }>Black and White</button>
    </p>
  </div>
)

} 


export default Hero