// NavBar.js
import React from 'react';
import { FaHome, FaInfo, FaBook, FaTools, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './Navbar1.css';

const Navbar1 = () => {
  return (
    <nav className="navbar">
      <div className="logo">YourLogo</div>
      <div className="nav-items">
        <ul>
          <li><FaHome /><span>Home</span></li>
          <li><FaInfo /><span>About</span></li>
          <li><FaBook /><span>Courses</span></li>
          <li><FaTools /><span>Resources</span></li>
        </ul>
      </div>
      <div className="auth-buttons">
        <button className="login-button"><FaSignInAlt /><span>Login</span></button>
        <button className="signup-button"><FaUserPlus /><span>Sign up</span></button>
      </div>
    </nav>
  );
};

export default Navbar1;
