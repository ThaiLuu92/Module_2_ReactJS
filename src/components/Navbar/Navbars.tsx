import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbars.css"

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Kakehashi Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Giới thiệu</Nav.Link>
            <Nav.Link href="#action2">Học Online</Nav.Link>
            <Nav.Link href="#action3">Lớp Online</Nav.Link>
            <Nav.Link href="#action4">Lớp Offline</Nav.Link>
            <Nav.Link href="#action4">Lớp Offline</Nav.Link>
            <NavDropdown title="Danh mục khóa học" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Học Online N5</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Học Online N3
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action5">
                Học Online N4
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className='navbar-btn'>
            <Button variant="outline-success" id='btn-reg'>Đăng Ký</Button>
            <Button variant="outline-success" id='btn-login'>Đăng Nhập</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
