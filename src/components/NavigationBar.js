import React from 'react';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
  .dropdown-menu {
    background-color: #555 ;
  }  
  .dropdown-item:hover {
    background-color: #ccc;
  }
`;

export const NavigationBar = () => (

  <Styles>
    <Navbar expand="sm" variant="dark" bg="dark">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/charts">Charts</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/about">About</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/about55">NoMatch</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse> 
  </Navbar>
  </Styles>
)
