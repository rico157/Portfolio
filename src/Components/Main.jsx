import React from "react";
import SocialIcons from "./SocialIcons";
import BottomPage from "./BottomPage";
import Slides from "./Slides";
import PersonalSlides from "./PersonalSlides";
import avatar from "../assets/avatar.png";
import { Image } from "react-bootstrap";

export default function Main({ dim: { phone, tablet } }) {
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
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                border: "3px solid",
                backgroundColor: "#ffffff99"
              }}
            />
          </div>
          <div className="text" style={textStyle}>
            <h2 style={{ margin: "1rem", lineHeight: 0 }}>
              Hi{"  "}
              <span role="img" aria-label="down">
                👋
              </span>
              , I'm
            </h2>
            <h1 style={{ margin: "1rem", lineHeight: tablet && 0 }}>
              Riccardo Cogoni
            </h1>
            <h2 style={{ margin: "1rem", lineHeight: tablet && 0 }}>
              Software Developer
            </h2>
            <p style={{ margin: "1rem", lineHeight: tablet && 1 }}>
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
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "100vw"
        }}
      >
        <Slides dim={{ phone, tablet }} />
        <PersonalSlides dim={{ phone, tablet }} />
      </div>
    </div>
  );
}
