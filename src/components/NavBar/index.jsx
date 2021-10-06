import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/infos">
              Deputados AVANTE
            </Link>
            <Link className="nav-link" to="/contato">
              Contato
            </Link>
          </Nav>
          <Link className="navbar-brand" to="/">
            Partido AVANTE
          </Link>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavBarComponent;
