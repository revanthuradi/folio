import Hero from "./components/Hero"
import Skills from "./components/Skills"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Projects from "./components/projects"
// import {HoverImageLinks} from './components/Zap'
const App = () => {
  return (
    <div className="relative antialiased overflow-x-hidden">
      {/* <div className="fixed inset-0 bg-cover bg-fixed bg-center bg-img "></div> */}
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
