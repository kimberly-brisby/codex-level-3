import Header from "./Header.jsx"
import Footer from "./Footer"
import About from "./About"
import Fortune from "./Fortune"
import ProjectCount from "./ProjectCount"
import Data from "./Capstone.jsx"
import HelloWorld from "./HelloWorld.jsx"
import './flex-container.css'
import Skills from "./Skills.jsx"
import Contact from "./Contact.jsx"
import Greeting from "./Greeting.jsx"
import Links from "./Links.jsx"



function App() {
  return (
    <div className="container">
      <Header />
      <p>I am learning to code.</p>
      <Greeting />
      <About />
      <Fortune />
      <ProjectCount />
      <Skills />
      <div className="flex-container">
        <Data />
        <HelloWorld />
      </div>
      <Contact />
      <Links />
      <Footer />
    </div>
  )
}

export default App
