import React from "react";
import { Image } from "react-bootstrap";
import restapi from "../assets/restapi.jpeg";

export default function ProjectList({ dim: { phone, tablet, desktop } }) {
  const cardStyle = {
    padding:
      phone || tablet ? "2em 2em 2em 2em" : desktop ? "2em 5em 2em 5em" : "5em",
    backgroundColor: "black",
    width: "100%"
  };

  const containerStyle = {
    backgroundColor: "#00000099",
    backgroundImage: "linear-gradient(30deg, #2a6973 0%,  #0f4667 150%)",

    borderRadius: phone || tablet ? 0 : "0.5em",
    width: "100%",
    height: phone || tablet ? "10em" : desktop ? "15em" : "15em",
    // height: "100%",
    marginTop: "2em",
    display: "flex",
    color: "white"
  };

  const title = {
    fontSize: "3em",
    lineHeight: 1,
    margin: 0
  };
  const subTitle = {
    fontSize: "2em",
    lineHeight: 1,
    margin: 0
  };
  const paragraph = {
    fontSize: "1.5em",
    lineHeight: 1,
    margin: 0
  };

  return (
    <div style={cardStyle}>
      <div style={containerStyle}>
        <Image src={restapi} style={{ height: "100%" }} className="h-100" />
        <div style={{ marginLeft: "2em" }}>
          <h3 style={title}>title</h3>
          <h4 style={subTitle}>title</h4>
          <p style={paragraph}>paragraph</p>
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
