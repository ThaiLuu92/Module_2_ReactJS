import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbars.css"

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-navbar ">
      <Container>
        <Navbar.Brand href="#" id='navbar-title'>Kakehashi Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="navbar-font"><h5>Giới thiệu</h5></Nav.Link>
            <Nav.Link href="#action2" className='navbar-font'><h5>Học Online</h5></Nav.Link>
            <Nav.Link href="#action3" className='navbar-font'><h5>Lớp Online</h5></Nav.Link>
            <Nav.Link href="#action4" className='navbar-font'><h5>Lớp Offline</h5></Nav.Link>
            <Nav.Link href="#action5" className='navbar-font'><h5>Danh mục khóa học</h5></Nav.Link>
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
