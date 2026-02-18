import {HomePage} from './pages/HomePage'         // No curly braces
import { Routes , Route} from "react-router-dom"
import Dashboard from './pages/DashBoard'
import { Navbar } from './components/layout/Navbar'
import Authpage from './pages/AuthPage'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Authpage/>}/>
        <Route path="/signup" element={<Authpage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Dashboard"   element={<Dashboard/>}/>
      </Routes>
      </>
      
  )
}

export default App
