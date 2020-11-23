import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

export default function BottomNavbar({ children, dim: { phone, tablet } }) {
  const footerStyle = {
    position: "absolute",
    left: "auto",
    bottom: phone ? "2rem" : "3rem"
  };
  return <div style={footerStyle}>{children}</div>;
}
