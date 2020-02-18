import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = (props) => {
  const userGreeting = () => {
    if (props.currentUser.id) {
      return (
        <>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {props.currentUser.firstname}
            </Navbar.Text>
          </Navbar.Collapse>
        </>
      )
    } else {
      return (
          null
      )
    }
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" style={{color:'#E22D21'}}>Bellbird</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/index">Chirp Index</Nav.Link>
        </Nav>
        {userGreeting()}
      </Navbar>
    </div>
  );
}

export default NavBar;
