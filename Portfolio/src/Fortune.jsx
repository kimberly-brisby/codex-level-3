 function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomArrow = (min, max) => {
    return math.floor(Math,random() * (max - min + 1)) + min
}

function Fortune() {
  const fortunes = [
    "You will have a great day!",
    "Good things are coming your way.",
    "You will achieve your goals.",
    "Happiness is around the corner.",
  ]


   let index = randomNumber(0, fortunes.length - 1)
  return <p>{fortunes[index]}</p>
  return <p>{ fortunes }  </p>

}

export default Fortune