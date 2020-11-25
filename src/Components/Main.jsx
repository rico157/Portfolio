import React from "react";
import SocialIcons from "./SocialIcons";
import BottomPage from "./BottomPage";
import Slides from "./Slides";
import PersonalSlides from "./PersonalSlides";
import avatar from "../assets/avatar.png";
import { Image } from "react-bootstrap";
import ProjectList from "./ProjectList";

export default function Main({ dim: { phone, tablet, desktop } }) {
  const mainStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: !tablet ? "0rem" : "5em",
    marginBottom: "10rem"
  };

  const topStyle = {
    // height: "80vh",
    maxWidth: "100vw",
    width: "100vw",
    paddingTop: "10vh",
    display: "flex",
    flexDirection: tablet ? "column" : "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "7em",
    marginTop: !tablet ? "7em" : "2em"
  };

  const textStyle = {
    fontWeight: 300,
    color: "white",
    lineHeight: 1,
    // height: tablet && "100vh",
    width: tablet ? "80%" : "50vw",
    marginTop: tablet && "1em",
    marginLeft: !tablet && "1em",
    paddingRight: "10%",
    // paddingBottom: "150px",
    borderLeft: !tablet && "3px solid ",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  };
  return (
    <div style={mainStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={topStyle}>
          <div
            style={{
              width: "50vw",
              display: "flex",
              justifyContent: tablet ? "center" : "flex-end"
            }}
          >
            <Image
              src={avatar}
              roundedCircle
              style={{
                marginBottom: tablet && "3em",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                border: "3px solid",
                backgroundColor: "#ffffff99",
                boxShadow:
                  "9px 9px 20px rgba(8, 25, 36, 0.562), -9px -9px 20px rgba(66, 133, 161, 0.452)"
              }}
            />
          </div>
          <div className="text" style={textStyle}>
            <h2 style={{ margin: 0, marginLeft: "1rem", lineHeight: 1 }}>
              Hi{"  "}
              <span role="img" aria-label="down">
                👋
              </span>
              , I'm
            </h2>
            <h1
              style={{
                margin: 0,
                marginLeft: "0.9rem",
                lineHeight: tablet ? 1 : 1
              }}
            >
              Riccardo Cogoni
            </h1>
            <h2
              style={{
                margin: 0,
                marginLeft: "1rem",
                marginTop: "0.7rem",
                marginBottom: "0.7rem",
                lineHeight: tablet ? 1 : 1
              }}
            >
              Software Developer
            </h2>
            <p
              style={{
                margin: 0,
                marginLeft: "1rem",
                lineHeight: tablet ? 1 : 1
              }}
            >
              Motivated, personable Software Developer who loves to learn and
              creatively solve problems.Ambitious and excited to work on new
              projects and other challenging opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* <BottomPage dim={{ phone, tablet }}> */}
      <SocialIcons dim={{ phone, tablet }} />
      <div
        style={{
          marginTop: "10em",
          marginLeft: !tablet && "3em",
          marginRight: !tablet && "3em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // maxWidth: "fit-content",
          backgroundColor: "#00000077",
          borderRadius: "1em",
          height: "fit-content"
          // padding: "2em"
        }}
      >
        <h2 style={{ color: "white", textAlign: "center", marginTop: "1em" }}>
          Recent projects
        </h2>
        <div
          style={{
            display: "flex",
            // flexWrap: "wrap",
            flexDirection: desktop ? "column" : "row",
            justifyContent: "center",
            maxWidth: "100vw"
          }}
        >
          <Slides dim={{ phone, tablet, desktop }} />
          <PersonalSlides dim={{ phone, tablet, desktop }} />
        </div>
        <ProjectList dim={{ phone, tablet, desktop }} />
      </div>
    </div>
  );
}
