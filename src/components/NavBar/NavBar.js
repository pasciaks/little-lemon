import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import {
  faUserCircle,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary2">
      {/* <ContainerFluid> */}
      <Navbar.Brand href="/">
        <Logo></Logo>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="menu">Menu</Nav.Link>
          <Nav.Link href="reservations">Reservations</Nav.Link>
          <Nav.Link href="order-online">Order Online</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <span className="px-3">
        <Link to="/profile">
          <FontAwesomeIcon title="Profile" icon={faUserCircle} size="xl" />
        </Link>
      </span>
      <span>
        <Link to="/cart">
          <FontAwesomeIcon
            title="Shopping cart"
            icon={faCartShopping}
            size="xl"
          />
        </Link>
      </span>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* </ContainerFluid> */}
    </Navbar>
  );
}

export default NavBar;
