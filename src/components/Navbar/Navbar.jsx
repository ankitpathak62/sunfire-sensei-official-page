//  import React from 'react'
 import "./Navbar.css"
  
//  const Navbar = () => {
//    return (
//      <div> 
// <nav className="navbar">
//       <div className="container">
//         <a href="/" className="navbar-brand">
//           <img src="mainlogo.PNG" alt="Logo" className="logo" />
//         </a>
//         <ul className="nav">
//           <li className="nav-item">
//             <a href="/" className="nav-link">
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="/courses" className="nav-link">
//               Courses
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="/notes" className="nav-link">
//               Notes
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#contact" className="nav-link" >
//               Contact
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="/login" className="nav-link signup-button">
//               Login
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="/signup" className="nav-link signup-button">
//               Signup
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>

//      </div>
//    )
//  }
 
//  export default Navbar

import React, { useState } from 'react';
// import './NavBar.css'; // Import your CSS file for styling

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="mainlogo2.PNG" alt="Logo" />
      </div>
      <div className={`menu-icon ${isMobile ? 'open' : ''}`} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isMobile ? 'open' : ''}`}>
        <li><a href="#" className="li1">Home</a></li>
        <li><a href="#" className="li1">Courses</a></li>
        <li><a href="#" className="li1">Notes</a></li>
        <li><a href="#" className="li1">Contact</a></li>
        <li><a href="#" className="login-btn">Login</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
