import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

export default function MyNavBar({ dim: { phone, tablet } }) {
  const navStyle = {
    backgroundImage: "linear-gradient(50deg, #0f4667 0%, #2a6973 150%)",
    paddingTop: phone ? "0" : "1rem",
    paddingBottom: phone ? "0" : "1rem",
    paddingRight: tablet ? "2rem" : "3rem",
    minHeight: "70px"
  };

  const linkStyle = {
    outline: "none",
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

      <Nav className={phone ? undefined : "mr-auto"}></Nav>
      {!phone && (
        <Nav className="centerRow">
          <Link style={linkStyle} to="/">
            HOME
          </Link>
          <Link style={linkStyle} to="/about">
            ABOUT
          </Link>

          <Link to="/contact">
            <Button
              variant="outline-light"
              className="main-button"
              style={{ marginLeft: "2em" }}
            >
              CONTACT
            </Button>
          </Link>
        </Nav>
      )}
    </Navbar>
  );
}
