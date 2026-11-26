import { useState } from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
function App(){
  return(
    <>
  <BrowserRouter>
    
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>

        {/*404 Page */}
        <Route path ="*" element={<NotFound />} />
      </Routes>
    
  </BrowserRouter>
  </>
  )
}
export default App