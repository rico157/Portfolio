import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BiMessageSquareAdd, BiHomeSmile } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function SocialIcons({ dim: { phone, tablet } }) {
  const iconStyle = {
    color: "white",
    fontSize: phone ? "2rem" : "2.5rem",

    padding: phone ? "0.7rem 0.5rem" : "0.05em 0.25em 0.2em",
    // paddingTop: "0.5rem",
    borderRadius: "50em",
    margin: "0.1rem",
    lineHeight: 0
  };
  return (
    <div style={{ margin: "0.5em 0 0.5em 1em" }}>
      {phone ? (
        <>
          <Link to="/" style={iconStyle} className="icon">
            <BiHomeSmile />
          </Link>
          <Link to="/contact" style={iconStyle} className="icon">
            <BiMessageSquareAdd />
          </Link>
        </>
      ) : undefined}
      {!phone ? (
        <a href="#home" style={iconStyle} className="icon">
          <FaGithub />
        </a>
      ) : undefined}
      <a href="#home" style={iconStyle} className="icon">
        <FaTwitter />
      </a>
      <a href="#home" style={iconStyle} className="icon">
        <FaLinkedinIn />
      </a>
    </div>
  );
}
