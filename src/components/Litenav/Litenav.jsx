// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Litenav.css"

// function CenteredNavbar() {
//   return (
//     <Navbar bg="light" expand="lg" className="justify-content-center">
//       <Container>
//         <Navbar.Brand href="/">Language Selection</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto">
//             <Nav.Link href="/">Python</Nav.Link>
//             <Nav.Link href="/">C</Nav.Link>
//             <Nav.Link href="/">C++</Nav.Link>
//             <Nav.Link href="/">Java</Nav.Link>
//             <Nav.Link href="/">JavaScript</Nav.Link>
//             <Nav.Link href="/">PHP</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container> 
//     </Navbar>
//   );
// }

// export default CenteredNavbar;

import React, { useState } from 'react';
// import './NavBar.css'; // Import your CSS file for styling

const NavBar1 = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isMobile ? 'open' : ''}`}>
        <li><a href="#">Python</a></li>
        <li><a href="#">C</a></li>
        <li><a href="#">C++</a></li>
        <li><a href="#">Java</a></li>
        <li><a href="#">JavaScript</a></li>
        <li><a href="#">PHP</a></li>
      </ul>
    </nav>
  );
};

export default NavBar1;

