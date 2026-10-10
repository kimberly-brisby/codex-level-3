import Header from "./Header.jsx"
import Footer from "./Footer"
import About from "./About"
import Fortune from "./Fortune"
import ProjectCount from "./ProjectCount"
import Data from "./Capstone.jsx"
import HelloWorld from "./HelloWorld.jsx"




function App() {
  return (
    <div className="container">
      <Header />
      <p>I am learning to code.</p>
      <About />
      <Fortune />
      <ProjectCount />
      <div className="grid">
        <Data />
        <HelloWorld />
      </div>
      
      <Footer />
    </div>
  )
}

export default App
