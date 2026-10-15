 import { useState } from 'react'


 const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min




function Fortune() {
  
  const fortunes = [
    "You will have a great day!",
    "Good things are coming your way.",
    "You will achieve your goals.",
    "Happiness is around the corner.",
  ]
  const [index, setIndex] = useState(0)
  const newFortune = () => {
    setIndex(randomNumber(0, fortunes.length - 1))
  }

  return (
    <div>
      <p>{fortunes[index]}</p>
      <button onClick={newFortune}>New Fortune</button>
    </div>
  )
    
  
}

export default Fortune