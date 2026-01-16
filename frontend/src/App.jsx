import {LoginPage} from './pages/LoginPage'     // No curly braces
import {RegisterPage} from './pages/RegisterPage'  
import {HomePage} from './pages/HomePage'         // No curly braces
import { Routes , Route} from "react-router-dom"
import Dashboard from './pages/DashBoard'
import { Navbar } from './components/Navbar'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/loginpage" element={<LoginPage/>}/>
        <Route path="/registerPage" element={<RegisterPage/>}/> 
        <Route path="/Dashboard"   element={<Dashboard/>}/>
      </Routes>
      </>
      
  )
}

export default App
