import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { userlogout } from "./react_redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
function CollapsibleExample(props) {
  const navigate = useNavigate();
  const [auth, setAuth] = useState();

  useEffect(() => {
    const authtoken = localStorage.getItem("developers");
    setAuth(authtoken);
  });

  const logout = () => {
    localStorage.clear();
    props.userlogout();
    navigate("/login");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="" onClick={() => navigate("/")}>
          <img src={require("./Homepage/KillMyBug.jpeg")} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="" onClick={() => navigate("/profile")}>
              Profile
            </Nav.Link>
            <Nav.Link href="" onClick={() => navigate("/demo")}>
              Demo
            </Nav.Link>
            {/* <Nav.Link
              href=""
              onClick={() => {
                navigate("/login");
                if (localStorage.developers) {
                  localStorage.clear();
                }
              }}
            >
              Login
              {localStorage.developers ? "Logout" : "Login"}
            </Nav.Link> */}

            {auth ? (
              <Nav.Link onClick={() => logout()} to="/signup">
                Logout
              </Nav.Link>
            ) : (
              <>
                <Nav.Link href="" onClick={() => navigate("/signup")}>
                  {" "}
                  Signup
                </Nav.Link>
                <Nav.Link href="" onClick={() => navigate("/login")}>
                  Login
                </Nav.Link>
              </>
            )}
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
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              Welcome {localStorage.getItem("developers")}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Button 2
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    userlogout: () => dispatch(userlogout()),
  };
};
export default connect(null, mapDispatchToProps)(CollapsibleExample);
