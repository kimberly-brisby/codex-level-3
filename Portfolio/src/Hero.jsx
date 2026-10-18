import { useState } from 'react'
import heroPhoto from './heroPhoto.js'

import './hero.css'

let blur = 0


function Hero() {
const photos = [
  "photo-1522383225653-ed111181a951?",
  "photo-1782665336033-e9754dbabe5f?",
  "photo-1466354424719-343280fe118b?",
]


const descriptions = [
  "cherry blossoms",
  "koi fish in pond",
  "temple in Japan", 
]

const [saturation, setSaturation] = useState(0)
const [index, setIndex] = useState(0)
const [blur, setBlur] = useState(0)

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

const showColor = () => {
  setSaturation(0)
}

const showBlackAndWhite = () => {
  setSaturation(-100)
}

const moreBlur = () => {
  setBlur(blur + 100)
}



 const [src, alt] = heroPhoto(photos[index], 1200, 500, saturation, descriptions[index])

 
 return (
    <>
      <div className="hero">
        <img src={src +"&blur=" + blur} alt={alt} />
      </div>
      <p>
        <p>Photo {index + 1} of {photos.length}</p>
        <button onClick={previousPhoto}>Previous</button>
        &nbsp;
        <button onClick={nextPhoto}>Next</button>
        &nbsp;
        <button onClick={showColor}>Color</button>
        &nbsp;
        <button onClick={showBlackAndWhite}>Black and White</button>
        &nbsp;
        <button onClick={moreBlur}>More Blur</button>
      </p>
    </>
  )

} 


export default Hero