import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthState, IStateType } from "../State/Types";
import { useAction } from "../State/useActions";
import { RouteComp } from "./Routes";



const navbar = (user: AuthState, Logout:any, navigate:any) => <Navbar expand="sm" variant="dark" style={{ backgroundColor: '#8a00bd' }}  >
  <Container>
    <Link to="/" style={{ textDecoration: 'none' }} > <Navbar.Brand as="div" href="/">React-Bootstrap</Navbar.Brand></Link>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/signup" style={{ textDecoration: 'none' }} >
          <Nav.Link as="div" href="/signup">
            Signup
          </Nav.Link>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }} >
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
    {/* <Navbar.Toggle aria-controls="user-navbar" /> */}
    <Navbar.Collapse id="user-navbar" className="justify-content-end" >
      <Nav className="" >
      <NavDropdown title={user.data?.username ? user.data.username : "Register"} id="user-dropdown" className="justify-content-end" >
        {
          user.data
          ? <NavDropdown.Item onClick={() => Logout(user, false)} >Logout</NavDropdown.Item>
          : <div>
              <NavDropdown.Item onClick={() => navigate("/signup")} >Signup</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/login")} >Login</NavDropdown.Item>
            </div>
        }
      </NavDropdown>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

export const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state: IStateType) => state.LoginReducer);
  const { Login } = useAction();

  return <div>
    {/* Navbar render */}
    {navbar(user, Login, navigate)}
    <div className="container" >
      <RouteComp />
    </div>
  </div>
}