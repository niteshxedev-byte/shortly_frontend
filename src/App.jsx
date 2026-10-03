import { Route, Routes } from "react-router-dom"
import { ReactLenis } from "lenis/react" 
import 'lenis/dist/lenis.css'           
import Index from "./pages/Index.jsx"

const App = () => {
  return (
   
    <ReactLenis root>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </ReactLenis>
  )
}

export default App
