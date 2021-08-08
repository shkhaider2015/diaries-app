import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteComp } from "./Routes";



const navbar = () => <Navbar  expand="sm" variant="dark" style={{ backgroundColor : '#8a00bd' }}  >
<Container>
  <Link to="/" style={{ textDecoration : 'none' }} > <Navbar.Brand as="div" href="/">React-Bootstrap</Navbar.Brand></Link>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Link to="/signup" style={{ textDecoration : 'none' }} >
        <Nav.Link as="div" href="/signup">
          Signup
          </Nav.Link>
        </Link>
      <Link to="/login" style={{ textDecoration : 'none' }} >
        <Nav.Link as="div" href="/login">Login</Nav.Link>
        </Link>
      
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>

export const Home = () =>
{
  const navigate = useNavigate();
    return <div>
        {/* Navbar render */}
        {navbar()}
        <div className="container" >
        <RouteComp />
        </div>
    </div>
}