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

const [index, setIndex] = useState(0)

const nextPhoto = () => {
  if (index === photos.length - 1) {
    setIndex(0)
  } else {
    setIndex(index + 1)
  }
}

const previousPhoto = () => {
  if (index === 0) {
    setIndex(photos.length - 1)
  } else {
    setIndex(index - 1)
  }
}





 const [src, alt] = heroPhoto(photos[index], 1200, 500, sat, descriptions[index])




 return (
  <div>
    <div className="hero">
      <img src={src} alt={alt} />
    </div>
    <p>
      <button onClick={previousPhoto}>Previous</button>
      &nbsp;
      <button onClick={nextPhoto}>Next</button>
      &nbsp;
      <button onClick={ showColor }>Color</button>
      &nbsp;
      <button onClick={ showBlackAndWhite }>Black and White</button>
    </p>
  </div>
)

} 


export default Hero