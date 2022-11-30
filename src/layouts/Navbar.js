import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import icon1 from "../assets/img/icon1.png";
import LogoutButton from "../components/LogoutButton";

const HeaderBar = () => {
  return (
    <>
      <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
          <img src={icon1} alt="" className="nav-icon" />
          <Navbar.Brand as={Link} to="/">
            MusicDev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Bands">
                Bands
              </Nav.Link>
              <Nav.Link as={Link} to="/Albums">
                Albums
              </Nav.Link>
            </Nav>
            <LogoutButton />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default HeaderBar;
