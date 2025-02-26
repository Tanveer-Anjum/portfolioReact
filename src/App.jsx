import NavBar from './Component/Navbar/NavBar'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Experience from './Component/Experience/Experience'
import Projects from './Component/Projects/Projects'

function App() {
 

  return (
    <>
  <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <NavBar/>
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
  </div>
     </>
  )
}

export default App
