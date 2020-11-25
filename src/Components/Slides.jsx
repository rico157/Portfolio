import React from "react";
import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import iphone from "../assets/iphone.jpeg";
import reactPic from "../assets/react.jpeg";
import restapi from "../assets/restapi.jpeg";
import { FaGithub, FaMobile, FaGlobe } from "react-icons/fa";

export default function Slides({ dim: { phone, tablet, desktop } }) {
  const backgroundOverlay = {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    borderRadius: !tablet && "0.5em"
  };
  const boxStyle = {
    // minWidth: tablet && "100vw"
    maxWidth: tablet ? "100vw" : "500px",
    minWidth: tablet ? "100vw" : "500px"
    // minHeight: phone ? "400px" : "350px",
    // marginRight: !tablet && "1rem"
  };
  const iconStyle = {
    color: "white",
    display: "flex",
    justifyContent: "space-evenly",

    borderRadius: "50%",
    margin: phone ? "0.7rem" : "1rem",

    boxShadow:
      "7px 7px 16px rgba(8, 25, 36, 0.562), -7px -7px 16px rgba(66, 133, 161, 0.452)"
  };

  return (
    <div
      style={{
        margin:
          phone || tablet
            ? "2em 0 2em 0 "
            : desktop
            ? "2em 5em 2em 5em "
            : "2em 1em 2em 2em "
      }}
    >
      <Carousel style={boxStyle}>
        <Carousel.Item interval={5000} style={backgroundOverlay}>
          <Image
            style={{
              borderRadius: !tablet && "1em",
              opacity: 0.3
            }}
            className="d-block w-100"
            src={iphone}
            alt="First slide"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              margin: "1rem",
              color: "white",
              lineHeight: 0,
              fontSize: "2.5rem",
              display: "flex"
            }}
          >
            <a
              href="#home"
              style={{
                ...iconStyle,
                borderRadius: "100%",
                width: "30px"
              }}
            >
              <FaMobile />
            </a>
            <a href="#home" style={iconStyle}>
              <FaGithub />
            </a>
          </div>
          <Carousel.Caption>
            <h4 style={{ margin: 0 }}>
              Made with <a href="https://northcoders.com/">Northcoders</a>
            </h4>
            <h2 style={{ margin: 0 }}>Mobile App</h2>
            <p style={{ margin: 0, fontSize: phone && "0.8rem" }}>
              TripAdvisor inspired app
            </p>
            <p style={{ margin: 0, fontSize: phone && "0.8rem" }}>
              React Native / GraphQL / MongoDB
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} style={backgroundOverlay}>
          <Image
            style={{
              borderRadius: !tablet && "1em",
              opacity: 0.3
            }}
            className="d-block w-100"
            src={reactPic}
            alt="First slide"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              margin: "1rem",
              color: "white",
              lineHeight: 0,
              fontSize: "2.5rem",
              display: "flex"
            }}
          >
            <a href="#home" style={iconStyle}>
              <FaGlobe />
            </a>
            <a href="#home" style={iconStyle}>
              <FaGithub />
            </a>
          </div>
          <Carousel.Caption>
            <h4 style={{ margin: 0 }}>
              Made with <a href="https://northcoders.com/">Northcoders</a>
            </h4>
            <h2>React App</h2>
            <p style={{ margin: 0 }}>News aggregator app</p>
            <p>React / PostgreSQL / Express.js</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} style={backgroundOverlay}>
          <Image
            style={{
              borderRadius: !tablet && "1em",
              opacity: 0.3
            }}
            className="d-block w-100"
            src={restapi}
            alt="First slide"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              margin: "1rem",
              color: "white",
              lineHeight: 0,
              fontSize: "2.5rem",
              display: "flex"
            }}
          >
            <a href="#home" style={iconStyle}>
              <FaGlobe />
            </a>
            <a href="#home" style={iconStyle}>
              <FaGithub />
            </a>
          </div>
          <Carousel.Caption>
            <h4 style={{ margin: 0 }}>
              Made with <a href="https://northcoders.com/">Northcoders</a>
            </h4>
            <h2>RESTful API</h2>
            <p style={{ margin: 0 }}>News aggregator API</p>
            <p>PostgreSQL / Express.js / Jest</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
