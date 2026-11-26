import React from 'react'
import{ Link} from "react-router-dom"
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav>
        <Link to="/" style={{margin: "10px"}}>Home</Link>
        <Link to="/about" style={{margin: "10px"}}>About</Link>
        <Link to="/contact" style={{margin: "10px"}}>Contact</Link>
      
    </nav>
  )
}