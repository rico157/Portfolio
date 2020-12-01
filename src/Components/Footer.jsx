import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function Footer() {
  const footer = {
    color: "#CFD8E3"
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
      </Nav>
    </Navbar>
  );
}
