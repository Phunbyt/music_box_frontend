import React from 'react'

import { Navbar, Nav, Button, NavDropdown,Container, Form, FormControl } from 'react-bootstrap';
import './Navbar.css'
const NavigationBar= () => {
  return (
   <Navbar bg="dark" expand="lg" className="navbar">
  
     <Navbar.Brand href="/">Music-Box</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
       <Nav.Link href="#home" className="navlink bg-none">
        Home
       </Nav.Link>
       <Nav.Link href="#link" className="navlink">
        Library
       </Nav.Link>
       <Nav.Link href="/genres" className="navlink" id="browse-tab">
        Browse
       </Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2 searchbar" />
      </Form>
     </Navbar.Collapse>
   </Navbar>
  );
}
 
export default NavigationBar;