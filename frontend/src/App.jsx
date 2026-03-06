import { HomePage } from './pages/HomePage'         // No curly braces
import { Routes, Route } from "react-router-dom"
import Authpage from './pages/AuthPage'
import  Collection  from './pages/Collection.jsx'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Authpage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </>

  )
}

export default App
