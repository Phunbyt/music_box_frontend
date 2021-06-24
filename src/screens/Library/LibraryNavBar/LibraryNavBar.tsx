import React from "react";
import "./LibraryNavBar.css";
// import { Route, Link, BrowserRouter as Router, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";
export default function LibraryNavBar() {
    return (
      // <ul className="hello">
      //     <li>
      //         <Link className="nav-links" to="/playlists">Playlists</Link>
      //     </li>
      //     <li>
      //         <Link className="nav-links" to="/albums">Albums</Link>
      //     </li>
      //     <li>
      //         <Link className="nav-links" to="/artists">Artists</Link>
      //     </li>
      //     <li>
      //         <Link className="nav-links" to="/listeningHistory">Listening History</Link>
      //     </li>
      // </ul>

      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Music Box</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="browse">Browse</Nav.Link>
              <Nav.Link href="library">Library</Nav.Link>

              <div className="path">
                <Nav.Link href="playlists">Playlists</Nav.Link>
                <Nav.Link href="albums">Albums</Nav.Link>
                <Nav.Link href="artists">Artists</Nav.Link>
                <Nav.Link href="listeningHistory">Listening History</Nav.Link>
              </div>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2 rounded-pill"
                aria-label="Search"
              />
            </Form>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
