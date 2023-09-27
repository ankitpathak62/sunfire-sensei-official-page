import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function CenteredNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-center">
      <Container>
        <Navbar.Brand href="/">Language Selection</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Python</Nav.Link>
            <Nav.Link href="/">C</Nav.Link>
            <Nav.Link href="/">C++</Nav.Link>
            <Nav.Link href="/">Java</Nav.Link>
            <Nav.Link href="/">JavaScript</Nav.Link>
            <Nav.Link href="/">PHP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CenteredNavbar;
