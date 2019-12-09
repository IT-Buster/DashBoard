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
`;



export const NavigationBar = () => (

  <div>



  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Navbar expand="lg" variant="tabs" defaultActiveKey="/home" className="bg-dark justify-content-between">
<Nav variant="tabs" defaultActiveKey="/home">
<Nav.Item>
  <Nav.Link href="/home">Active</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="link-1">Option 2</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav.Item>
</Nav>
</Navbar>

    <Navbar expand="lg" variant="tabs" defaultActiveKey="/home" className="bg-dark justify-content-between">
      <Navbar.Brand href="/">InfoPanel</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <ButtonGroup aria-label="Basic example">
            <Nav.Item>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
              <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav.Item>
          </ButtonGroup>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse> 
  </Navbar>





  </div>
)
