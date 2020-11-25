import React from "react";
import { Image } from "react-bootstrap";
import restapi from "../assets/restapi.jpeg";

export default function ProjectList({ dim: { phone, tablet, desktop } }) {
  const cardStyle = {
    padding: phone || tablet ? 0 : desktop ? "2em 5em 2em 5em" : "2em",
    // backgroundColor: "black",
    width: "100%"
  };

  const containerStyle = {
    backgroundColor: "#00000099",
    backgroundImage: "linear-gradient(30deg, #2a6973 0%,  #0f4667 150%)",

    borderRadius: phone || tablet ? 0 : "0.5em",
    width: "100%",
    height: phone || tablet ? "40em" : desktop ? "40em" : "15em",
    // height: "100%",
    marginTop: "2em",
    display: "flex",
    color: "white"
  };

  return (
    <div style={cardStyle}>
      <div style={containerStyle}>
        <Image src={restapi} style={{ height: "100%" }} />
        <div>
          <h3>title</h3>
          <h4>title</h4>
          <p>paragraph</p>
        </div>
      </div>
      <div style={containerStyle}>
        <Image src={restapi} style={{ height: "100%" }} />
      </div>
      <div style={containerStyle}>
        <Image src={restapi} style={{ height: "100%" }} />
      </div>
    </div>
  );
}
