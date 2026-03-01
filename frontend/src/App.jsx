import { HomePage } from './pages/HomePage'         // No curly braces
import { Routes, Route } from "react-router-dom"
// import Co from './pages/DashBoard'
import Authpage from './pages/AuthPage'
import  Sidebar  from './components/layout/sidebar/Sidebar.jsx'
const App = () => {
  return (
    <>
    <Sidebar />
      <Routes>
        <Route path="/login" element={<Authpage />} />
        <Route path="/signup" element={<Authpage />} />
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Dashboard"   element={<Dashboard/>}/> */}
      </Routes>
    </>

  )
}

export default App
