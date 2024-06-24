import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ContainerFluid from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo/Logo";

import {
  faUserCircle,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary2">
      {/* <ContainerFluid> */}
      <Navbar.Brand href="#home">
        <Logo></Logo>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Menu</Nav.Link>
          <Nav.Link href="#link">Reservations</Nav.Link>
          <Nav.Link href="#link">Order Online</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <span className="px-3">
        <FontAwesomeIcon title="user" icon={faUserCircle} size="xl" />
      </span>
      <span>
        <FontAwesomeIcon title="cart" icon={faCartShopping} size="xl" />
      </span>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* </ContainerFluid> */}
    </Navbar>
  );
}

export default NavBar;
