import React from "react";
// Images
import avatar from "../assets/avatar.png";
import news from "../assets/news.jpg";
import matesrates from "../assets/matesrates.jpg";
import ds from "../assets/ds.png";
// Icons
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
// Components
import { Button, Image } from "react-bootstrap";
import Footer from "./Footer";
import ContactPage from "./ContactPage";
import { Link } from "react-router-dom";

export default function Main({
  dim: { phone, smPhone, tablet, desktop, portrait }
}) {
  const screenStyle = {
    minHeight: "100vh",
    width: "100%",
    paddingTop: phone ? "80px" : tablet ? "90px" : 0
  };
  const avatarStyle = {
    marginBottom: tablet && "3em",
    width: phone
      ? "200px"
      : tablet && portrait
      ? "400px"
      : tablet
      ? "200px"
      : "300px",
    height: phone
      ? "200px"
      : tablet && portrait
      ? "400px"
      : tablet
      ? "200px"
      : "300px",
    borderRadius: "50%",
    border: "3px solid",
    backgroundColor: "#ffffff99",
    boxShadow:
      "9px 9px 20px rgba(8, 25, 36, 0.562), -9px -9px 20px rgba(66, 133, 161, 0.452)"
  };
  const textStyle = {
    fontWeight: 300,
    color: "white",
    lineHeight: 1,
    width: phone ? "80%" : tablet ? "65vw" : "40vw",
    marginTop: phone && "1em",
    marginLeft: !phone && "2em",
    paddingRight: !tablet && "10%",
    paddingLeft: phone && "10%",
    borderLeft: !phone && "3px solid ",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
    // alignItems: "center"
  };
  const imageContainer = {
    width: phone ? "100%" : tablet && portrait ? "70vw" : "40vw",
    display: "flex",
    justifyContent: tablet ? "center" : "flex-end",
    alignItems: "flex-start",
    marginLeft: !phone && tablet && "2em"
  };
  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: phone ? 0 : tablet ? "2em" : "3em",
    boxShadow:
      "7px 7px 12px rgba(20, 20, 20, 1), -7px -7px 12px rgba(100, 100, 100, 0.452)"
  };
  const infoContainerStyle = {};
  const secTitleStyle = {
    margin: 0,
    marginLeft: "0.9rem",
    lineHeight: 1.2,
    fontSize: tablet ? "2.8em" : "3.2em",
    fontWeight: tablet && "600",
    borderBottom: "1px solid #aaa"
  };
  const headTitleStyle = { margin: "0 0 0 1rem", lineHeight: 1 };
  const subTitleStyle = {
    margin: "0.7rem 0 0.7rem 1rem",
    lineHeight: 1
  };
  const paragraphStyle = {
    margin: "0 0 0 1rem",
    lineHeight: tablet ? 1.2 : 1
  };

  const leftTextStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "white",
    lineHeight: 1,
    width: phone ? "80%" : tablet ? "65vw" : "40vw",
    marginTop: tablet && "1em",
    marginRight: !phone && "2em",
    paddingLeft: "10%",
    borderRight: !phone && "3px solid ",
    fontWeight: 300,
    textAlign: !phone && "right"
  };
  const secScreenStyle = {
    height: "100vh",
    width: "100%",
    backgroundColor: "#292F36",
    paddingTop: phone ? "70px" : tablet ? "45px" : 0
    // marginTop: phone ? "70px" : tablet ? "45px" : 0
  };

  return (
    <>
      {/* Main */}
      <div
        style={screenStyle}
        className={
          phone ? "topCol" : tablet && portrait ? "spaceCol" : "centerRow"
        }
      >
        <div style={imageContainer}>
          <Image src={avatar} roundedCircle style={avatarStyle} />
        </div>
        <div style={infoContainerStyle}>
          <div className="text" style={textStyle}>
            <h3 style={headTitleStyle}>
              Hi{" "}
              <span role="img" aria-label="down">
                👋{" "}
              </span>
              , I'm
            </h3>
            <h2 style={secTitleStyle}>Riccardo Cogoni</h2>
            <h3 style={subTitleStyle}>Software Developer</h3>
            <p style={paragraphStyle}>
              Motivated, personable Software Developer who loves to learn and
              creatively solve problems.Ambitious and excited to work on new
              projects and other challenging opportunities.{" "}
              <Link to="/about">More about me...</Link>
            </p>
            <Link to="/contact">
              <Button
                variant="dark"
                style={{
                  fontSize: "1rem",
                  width: "fit-content",
                  margin: "1em"
                }}
                className="main-button  shadow"
              >
                Get in touch!
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{ ...secScreenStyle, backgroundColor: "#1D2C36" }}
        className={
          phone ? "topCol" : tablet && portrait ? "spaceCol" : "centerRow"
        }
      >
        <div style={imageContainer}>
          <Image src={ds} style={imageStyle} />
        </div>
        <div style={infoContainerStyle}>
          <div className="text" style={textStyle}>
            <h3 style={headTitleStyle}>Currently working on...</h3>
            <h2 style={secTitleStyle}>Desktop Switcher</h2>
            <h3
              style={{
                margin: "0.7rem 0 0.7rem 1rem",
                lineHeight: 1
              }}
            >
              Electron • Express • NodeJS
            </h3>
            <p
              style={{
                margin: 0,
                marginLeft: "1rem",
                lineHeight: tablet ? 1.2 : 1
              }}
            >
              I'm currently working on an app that allows the user to scan a QR
              code with a smartphone and being redirected to a local webpage
              with controls on screen to switch between MacOS desktops.
              <br />
              Repository coming soon!
            </p>
          </div>
        </div>
      </div>
      {/* Project 2 */}
      <div
        style={{
          ...secScreenStyle,
          backgroundColor: "#CBDEF2",
          marginTop: 0
        }}
        className={
          phone
            ? "topCol reverse flex-end"
            : tablet && portrait
            ? "spaceCol reverse"
            : "centerRow"
        }
      >
        <div style={infoContainerStyle}>
          <div className="text" style={{ ...leftTextStyle, color: "#292F36" }}>
            <h3
              style={{
                ...headTitleStyle,
                marginLeft: tablet && "1rem",
                marginRight: !phone && "1rem"
              }}
            >
              Made with Northcoders
            </h3>
            <h2
              style={{
                ...secTitleStyle,
                marginRight: "0.9rem",
                marginLeft: tablet && "0.9rem"
              }}
            >
              Mates Rates
            </h2>
            <h3
              style={{
                margin: "0.7rem 1rem 0.7rem",
                marginLeft: tablet && "1rem",
                lineHeight: tablet ? 1 : 1
              }}
            >
              React Native • MongoDB • GraphQL
            </h3>
            <p
              style={{
                margin: "0 1rem",
                lineHeight: tablet ? 1.2 : 1,
                marginLeft: tablet && "1rem"
              }}
            >
              Agile • MVP • Team Project
              <br />
              MatesRates allows users to search restaurants around the country
              and see reviews and ratings made by only their close friends. This
              way the user knows the reviews they read are trustworthy and
              meaningful.
            </p>
            <div
              style={{
                marginLeft: tablet && "2rem",
                fontSize: tablet && "0.7em"
              }}
              className="startRow flex-end"
            >
              <Button
                variant="dark"
                style={{
                  fontSize: "1rem",
                  width: "fit-content",
                  margin: tablet ? "1em 0.3em 1em 0.3em" : "1em"
                }}
                className="main-button  shadow"
                href="https://github.com/rico157/MatesRates"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub style={{ marginRight: "0.5em" }} /> MOBILE
              </Button>
              <Button
                variant="dark"
                style={{
                  fontSize: "1rem",
                  width: "fit-content",
                  margin: tablet ? "1em 0.3em 1em 0.3em" : "1em"
                }}
                className="main-button  shadow"
                href="https://github.com/rico157/BE-Mates-Rates-1"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub style={{ marginRight: "0.5em" }} /> BACKEND
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            ...imageContainer,
            marginLeft: !phone && tablet && "0em",
            marginRight: !phone && tablet && "2em"
          }}
        >
          <Image src={matesrates} style={imageStyle} />
        </div>
      </div>
      {/* Project 3 */}
      <div
        style={secScreenStyle}
        className={
          phone ? "topCol" : tablet && portrait ? "spaceCol" : "centerRow"
        }
      >
        <div style={imageContainer}>
          <Image src={news} style={imageStyle} />
        </div>
        <div style={infoContainerStyle}>
          <div className="text" style={textStyle}>
            <h3 style={{ margin: 0, marginLeft: "1rem", lineHeight: 1 }}>
              Made with Northcoders
            </h3>
            <h2 style={secTitleStyle}>Rico Fake News</h2>
            <h3
              style={{
                margin: 0,
                marginLeft: "1rem",
                marginTop: "0.7rem",
                marginBottom: "0.7rem",
                lineHeight: tablet ? 1 : 1
              }}
            >
              React • PostgreSQL • NodeJS
            </h3>
            <p
              style={{
                margin: 0,
                marginLeft: "1rem",
                lineHeight: tablet ? 1.2 : 1
              }}
            >
              Full-Stack social news aggregation, web content rating, and
              discussion web application developed with React, PostgreSQL and
              NodeJS.
            </p>
            <div style={{ margin: "0 1rem" }} className="startRow">
              <Button
                variant="light"
                style={{
                  fontSize: "1rem",
                  width: "fit-content",
                  margin: "1em"
                }}
                className="main-button  shadow"
                href="https://rico-fake-news.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <BiWorld style={{ marginRight: "0.5em" }} /> LIVE
              </Button>
              <Button
                variant="light"
                style={{
                  fontSize: "1rem",
                  width: "fit-content",
                  margin: "1em"
                }}
                className="main-button  shadow"
                href="https://github.com/rico157/rico-fake-news"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub style={{ marginRight: "0.5em" }} /> REPO
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <ContactPage dim={{ phone, smPhone, tablet, desktop, portrait }} />
      {/* Footer */}
      <Footer />
    </>
  );
}
