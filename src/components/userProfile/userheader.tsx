import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from 'react-bootstrap';
interface prop {
  name?: string;
  logOut?: () => void;
}
const UserHeader = ({ name, logOut }: prop) => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Music-Box</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/home'>Home</Nav.Link>
              <Nav.Link href='/genres'>Browse</Nav.Link>
              <Nav.Link href=''>Library</Nav.Link>
              <Nav.Link className='accountsetting'>Account / Settings</Nav.Link>
            </Nav>
            <h6></h6>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='mr-2 rounded-pill'
                aria-label='Search'
              />
            </Form>
            <NavDropdown
              title={<span className='text-white my-auto'>{name}</span>}
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <button className='logout' onClick={logOut}>
                  LOG OUT{' '}
                </button>
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default UserHeader;
