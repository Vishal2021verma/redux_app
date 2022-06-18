import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../App.css";
function Navigation() {
  return (
    <>
      <Navbar>
        <Container>
          <NavbarBrand>LOGO</NavbarBrand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Courses</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about"> About</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/login">LogIn</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup">SignUp</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
