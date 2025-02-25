import NavBar from './Component/Navbar/NavBar'
import Home from './Component/Home/Home'
import About from './Component/About/About'

function App() {
 

  return (
    <>
  <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <NavBar/>
    <Home/>
    <About/>
  </div>
     </>
  )
}

export default App
