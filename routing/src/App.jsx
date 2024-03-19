import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import { Home } from "./components/Home"
import { About } from "./components/About"

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
function Appbar() {
  const navigate = useNavigate();

  return <div>
    <button onClick={() =>{
      navigate("/")
    }}>Home</button>
    <button onClick={() =>{
      navigate("/about")
    }}>About</button>
  </div>
}

export default App
