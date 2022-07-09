import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import React from "react";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="nav">
      <Container>
        <Logo />
        <NavLink to="/" className="me-3">
          Las Flores Pastelería
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-items-center">
            <NavLink to="/tipo/tortas" className="me-3">
              Tortas
            </NavLink>
            <NavLink to="/tipo/galletas" className="me-3">
              Galletas
            </NavLink>
          </Nav>
          <Nav>
            <Link to="/cart">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
