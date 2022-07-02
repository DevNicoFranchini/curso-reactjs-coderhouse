import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="nav">
      <Container>
        <CartWidget />
        <Navbar.Brand href="#home">Las Flores Pastelería</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
