import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function SocialIcons({ dim: { phone, tablet } }) {
  const iconStyle = {
    color: "white",
    fontSize: phone ? "2rem" : "4rem",

    padding: phone ? "0.7rem 1rem" : "0.2rem 1rem 0.8rem",
    // paddingTop: "0.5rem",
    borderRadius: phone ? "1rem" : "2rem",
    margin: phone ? "0.7rem" : "1rem",
    lineHeight: 0,
    boxShadow:
      "7px 7px 16px rgba(8, 25, 36, 0.562), -7px -7px 16px rgba(66, 133, 161, 0.452)"
  };
  return (
    <div>
      <a href="#home" style={iconStyle} className="icon">
        <FaGithub />
      </a>
      <a href="#home" style={iconStyle} className="icon">
        <FaTwitter />
      </a>
      <a href="#home" style={iconStyle} className="icon">
        <FaLinkedinIn />
      </a>
    </div>
  );
}
