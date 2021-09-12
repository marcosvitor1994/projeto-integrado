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
              Saiba mais
            </Link>
            <Link className="nav-link" to="/contato">
              Contato
            </Link>
          </Nav>
        </Container>
        <Link className="navbar-brand" to="/">
          Projeto Integrado
        </Link>
      </Navbar>
      <br />
    </>
  );
};

export default NavBarComponent;
