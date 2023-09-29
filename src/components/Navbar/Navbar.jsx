 import React from 'react'
 import "./Navbar.css"
  
 const Navbar = () => {
   return (
     <div> 
<nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="mainlogo.PNG" alt="Logo" className="logo" />
        </a>
        <ul className="nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/courses" className="nav-link">
              Courses
            </a>
          </li>
          <li className="nav-item">
            <a href="/notes" className="nav-link">
              Notes
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link signup-button">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="/signup" className="nav-link signup-button">
              Signup
            </a>
          </li>
        </ul>
      </div>
    </nav>

     </div>
   )
 }
 
 export default Navbar