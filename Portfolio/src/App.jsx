import Header from "./Header.jsx"
import Footer from "./Footer"
import About from "./About"

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
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

function ProjectCount(){
  let projects = ["header", "footer", "about"]
  return <p>There are {projects.length} projects in this portfolio.</p>
}



function App() {
  return (
    <div>
      <Header />
      <p>I am learning to code.</p>
      <About />
      <Fortune />
      <ProjectCount />
      <Footer />
    </div>
  )
}

export default App
