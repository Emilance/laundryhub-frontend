import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { getToken, removeToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import "../Styles/Header.css"
function Header() {
  const navigate = useNavigate();

  const isUserLogin = getToken()
  
  const logOut = async () =>{
    await removeToken()
    navigate("/")
  }
  return (
    <div className="header">
      <Navbar
        className="header__container"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container style={{ minHeight: "4rem" , backgroundColor: "rgba(138, 129, 129, 0.041)" }} >
          <Navbar.Brand  className="HeaderLogo" href="/">Laundry<span className="halfPart">Hub</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="header__links" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="header__links" href="/pricing">
                Pricing
              </Nav.Link>
              <Nav.Link className="header__links" href="/contact">
                Contact Us
              </Nav.Link>
              <NavDropdown
                className="header__links"
                title="What we Offer"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="header__links" href="/about">
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item className="header__links" href="/service">
                  Services
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown
                className="header__links"
                title="Account"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="header__links" href="/order">
                  My Orders
                </NavDropdown.Item>

                {!isUserLogin ? (
                  <NavDropdown.Item className="header__links" href="/login">
                    Login
                  </NavDropdown.Item>
                ) : (
                  <>
                  
                  <NavDropdown.Item
                    className="header__links"
                    onClick={() =>navigate("/myschedules")}
                  >
                    myschedules
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="header__links"
                    onClick={() =>logOut()}
                  >
                    logOut
                  </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
