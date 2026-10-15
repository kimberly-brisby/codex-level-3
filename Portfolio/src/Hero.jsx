import { useState } from 'react'
import heroPhoto from './heroPhoto.js'
import './hero.css'

function Hero() {
const [sat, setSat] = useState(0)

const showColor = () => {
  setSat(0)
}

const showBlackAndWhite = () => {
  setSat(-100)
}



  const [src,alt] = heroPhoto(1200, 500, sat, "cherry blossoms")


 return (
  <div>
    <div className="hero">
      <img src={src} alt={alt} />
    </div>
    <p>
      <button onClick={showColor}>Color</button>
      &nbsp;
      <button onClick={showBlackAndWhite}>Black and White</button>
    </p>
  </div>
)

} 


export default Hero