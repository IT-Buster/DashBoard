import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, ButtonGroup, Button,NavDropdown, Form, FormControl,Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

//import {Footer} from 'react-materialize';

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
  .dropdown-item {
    color: black;
  }
  .dropdown-menu {
    background-color: red;
  }
  .dropdown-divider {
    color: black;
  }
  .dropdown-item:hover {
    background-color: green;
  }
  .dropdown-item:focus {
    background-color: blue;
  }

`;



export const NavigationBar = () => (

  <Styles>
    <Navbar bg="dark" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/contact">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/about">Action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/about55">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse> 
  </Navbar>
  </Styles>
)
