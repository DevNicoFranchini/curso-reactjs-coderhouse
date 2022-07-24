import { Navbar, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import React from "react";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";

import "./Footer.css";

const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className=" footer">
      <Container className="justify-content-center">Las Flores Pastelería</Container>
    </Navbar>
  );
};

export default Footer;
