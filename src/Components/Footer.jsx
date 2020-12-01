import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

export default function Footer() {
  const footer = {
    color: "#CFD8E3"
    // boxShadow: "inset 15px 15px 20px rgba(8, 25, 36, 0.562)"
  };

  const textStyle = {};
  return (
    <Navbar style={footer} className="m-auto sticky-top">
      <Nav className="flex-column m-auto" style={textStyle}>
        <h1 style={{ margin: "2em 0 0 0" }}>Thank you for your time, </h1>
        <h2 style={{ margin: "0 0 2em 1em" }}>
          {" "}
          have a nice day!{" "}
          <span role="img" aria-label="down">
            😌{" "}
          </span>
        </h2>
        {/* <Button
          variant="outline-light"
          style={{
            borderRadius: "2rem",
            display: "flex",
            alignItems: "center",
            marginLeft: "1.5rem"
          }}
          href="#contact"
        >
          CONTACT
        </Button> */}
      </Nav>
      {/* <Nav className="m-auto">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
        <Nav.Link href="#about">ABOUT</Nav.Link>
      </Nav> */}
    </Navbar>
  );
}
