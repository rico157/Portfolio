import { Button, Nav, Navbar } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import { BiMessageSquareAdd } from "react-icons/bi";

export default function MyNavBar({ dim: { phone, tablet } }) {
  const navStyle = {
    // backgroundColor: "#292F36",
    backgroundImage: "linear-gradient(50deg, #0f4667 0%, #2a6973 150%)",
    paddingTop: phone ? "0" : "1rem",
    paddingBottom: phone ? "0" : "1rem",
    paddingRight: tablet ? "2rem" : "3rem",
    minHeight: "70px"
  };

  const linkStyle = {
    outline: "none",
    // backgroundColor: "rgba(31, 68, 74, 0.077)",
    border: "none",
    margin: "0.2rem 1em 0 1em",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "0.9rem",
    color: "white"
  };

  return (
    <Navbar fixed="top" variant="dark" style={navStyle} className="nav-shadow">
      <Nav className={!phone ? undefined : "m-auto"}>
        <SocialIcons dim={{ phone, tablet }} />
      </Nav>
      {/* <Navbar.Brand
        href="#home"
        style={{
          fontSize: "3rem",
          fontWeight: 900,
          lineHeight: phone ? 1.25 : 0
        }}
      >
        R
      </Navbar.Brand> */}
      <Nav className={phone ? undefined : "mr-auto"}></Nav>
      {!phone && (
        <Nav className="centerRow">
          <Link style={linkStyle} to="/">
            HOME
          </Link>
          <Link style={linkStyle} to="/about">
            ABOUT
          </Link>

          {/* <Nav.Link style={linkStyle} href="#about">
            ABOUT
          </Nav.Link> */}
          <Link to="/contact">
            <Button
              variant="outline-light"
              className="main-button"
              style={{ marginLeft: "2em" }}
              // href="/contact"
            >
              CONTACT
            </Button>
          </Link>
        </Nav>
      )}
    </Navbar>
  );
}
