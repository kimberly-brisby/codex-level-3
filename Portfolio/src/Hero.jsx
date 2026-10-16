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



  const [src, alt] = heroPhoto("photo-1661964177687-57387c2cbd14?",1200, 500, saturation, "cherry blossoms")


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