import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "./../../context/CartContext";

import React from "react";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css";

const NavBar = () => {
  const { cantidadTotal } = useCartContext();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="nav">
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-items-center">
            <NavLink to="/tipo/tortas" className="me-3">
              Tortas
            </NavLink>
            <NavLink to="/tipo/galletas" className="me-3">
              Galletas
            </NavLink>
            <NavLink to="/tipo/budines" className="me-3">
              Budines
            </NavLink>
            <NavLink to="/tipo/panaderia" className="me-3">
              Panadería
            </NavLink>
          </Nav>
          <Nav>
            <Link to="/cart">
              {cantidadTotal() !== 0 && cantidadTotal()}
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
