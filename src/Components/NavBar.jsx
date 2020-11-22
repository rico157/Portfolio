import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function MyNavBar() {
  return (
    <Navbar variant="dark">
      <Navbar.Brand href="#home">R</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Nav>
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
        <Nav.Link href="#contact">CONTACT</Nav.Link>
      </Nav>
    </Navbar>
  );
}
