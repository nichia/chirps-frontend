import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Bellbird</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/index">Chirp Index</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
