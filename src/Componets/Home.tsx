import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthState, IStateType } from "../State/Types";
import { useAction } from "../State/useActions";
import { RouteComp } from "./Routes";
import "../App.css"
import { useEffect } from "react";



const navbar = (user: AuthState, Logout: any, navigate: any) => <Navbar expand="sm" variant="dark" style={{ backgroundColor: '#8a00bd' }}  >
  <Container>
    {console.log("Navbar user --> :", user.data)}
    <Link to="/" style={{ textDecoration: 'none' }} > <Navbar.Brand className="my-logo" as="div" href="/">My Diary</Navbar.Brand></Link>

    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav  ml-5">
      <Nav className="me-auto">
        <NavDropdown title="Diary" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Public Diary</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Private Diary</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">All</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse> */}
    <Navbar.Collapse id="user-navbar" className="justify-content-end" >
      <Nav className="" >
        <NavDropdown title={user.data?.email ? user.data.email : "Register"} id="user-dropdown" className="justify-content-end" >
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
  const signup = useSelector((state: IStateType) => state.SignupReducer);
  const { Login } = useAction();

  
  return <div>
    {/* Navbar render */}
    {console.log("Login Reducer : ", user.data)}
    {console.log("Login Reducer : ", signup.data)}
    {navbar(user, Login, navigate)}
    <div className="container" >
      <RouteComp />
    </div>
  </div>
}