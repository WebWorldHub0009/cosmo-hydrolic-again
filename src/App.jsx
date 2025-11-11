import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/ModernNavbar"
import Footer from "./components/Footer"
import Floatingbuttons from "./components/FloatingButtons" 

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Floatingbuttons/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App