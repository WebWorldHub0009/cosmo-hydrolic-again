import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/ModernNavbar"
import Footer from "./components/Footer"
import Floatingbuttons from "./components/FloatingButtons" 
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
    </Routes>
    <Floatingbuttons/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App