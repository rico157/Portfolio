import React, { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { TiThMenu } from "react-icons/ti";
import { slide as Menu } from "react-burger-menu";

export default function MyNavBar() {
  const [over, setOver] = useState(false);
  // const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  const phone = width < 450;
  const tablet = width < 800;
  const navStyle = {
    paddingTop: phone ? "0" : "1rem",
    paddingBottom: phone ? "0" : "1rem",
    paddingRight: tablet ? "2rem" : "3rem",
    // backgroundColor: phone && "#0F4667",
    boxShadow:
      !phone &&
      "7px 7px 16px rgba(8, 25, 36, 0.562), -7px -7px 16px rgba(66, 133, 161, 0.452)"
  };

  const linkStyle = {
    outline: "none",
    backgroundColor: "rgba(31, 68, 74, 0.077)",
    border: "none",
    // color: "#e6e6e6",
    margin: "0.2rem",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "0.9rem"
  };

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "26px",
      top: "20px"
    },
    bmBurgerBars: {
      background: "#e6e6e6"
    },
    bmBurgerBarsHover: {
      background: "#a90000"
    },
    bmCrossButton: {
      height: "54px",
      width: "54px"
    },
    bmCross: {
      background: "#bdc3c7"
    },
    bmMenuWrap: {
      position: "fixed",
      top: "0",
      height: "100vh",
      width: "fit-content"
    },
    bmMenu: {
      boxShadow:
        "7px 7px 16px rgba(8, 25, 36, 0.562), -7px -7px 16px rgba(8, 25, 36, 0.562)",
      height: "100vh",

      background: "#0F4667",
      padding: "2.5em 2.5em 0",
      fontSize: "1.15em"
    },
    bmMorphShape: {
      fill: "#373a47"
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em"
    },
    bmItem: {
      marginTop: "0.8rem",
      display: "flex",
      flexDirection: "column",
      color: "white",
      borderTop: "1px solid",
      fontSize: "1.7rem",
      width: "100%"
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)"
    }
  };

  return (
    <Navbar variant="dark" style={navStyle}>
      <Navbar.Brand href="#home">R</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      {phone ? (
        <>
          <Menu right width={80} styles={styles}>
            <a id="home" className="menu-item" href="/">
              HOME
            </a>
            <a id="portfolio" className="menu-item" href="/portfolio">
              PORTFOLIO
            </a>
            <a id="contact" className="menu-item" href="/contact">
              CONTACT
            </a>
            <a id="about" className="menu-item" href="/about">
              ABOUT
            </a>
          </Menu>
        </>
      ) : (
        <Nav>
          <Nav.Link
            style={linkStyle}
            href="#home"
            onMouseEnter={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
          >
            HOME
          </Nav.Link>
          <Nav.Link style={linkStyle} href="#portfolio">
            PORTFOLIO
          </Nav.Link>

          <Nav.Link style={linkStyle} href="#about">
            ABOUT
          </Nav.Link>
          <Button
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
          </Button>
        </Nav>
      )}
    </Navbar>
  );
}
