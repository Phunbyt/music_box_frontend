import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from 'react-bootstrap';
interface prop {
  firstName?: string;
  logOut?: () => void;
}
const HistoryHeader = ({ firstName, logOut }: prop) => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Music-Box</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/genres'>Browse</Nav.Link>
              <Nav.Link href=''>Library</Nav.Link>
              <Nav.Link href='/home'>Home</Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='mr-2 rounded-pill'
                aria-label='Search'
              />
            </Form>
            <NavDropdown
              title={<span className='text-white my-auto'>{firstName}</span>}
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <button
                  className='logout'
                  onClick={logOut}
                  style={{ color: 'black' }}
                >
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
export default HistoryHeader;
