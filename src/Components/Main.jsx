import React from "react";
import SocialIcons from "./SocialIcons";
import BottomPage from "./BottomPage";
import Slides from "./Slides";

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
    maxWidth: "100vw",
    height: "80vh",
    paddingTop: "10vh",
    display: "flex",
    flexDirection: tablet ? "column" : "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  };

  const textStyle = {
    fontWeight: 300,
    color: "white",
    lineHeight: 1,
    maxWidth: "500px",
    // height: tablet && "100vh",
    width: !tablet && "70%",
    marginTop: tablet && "150px"
  };
  return (
    <div style={mainStyle}>
      <div style={topStyle}>
        <div className="text" style={textStyle}>
          <h2 style={{ margin: "1rem", lineHeight: 0 }}>
            Hi{"  "}
            <span role="img" aria-label="down">
              👋
            </span>
            , I'm
          </h2>
          <h1 style={{ margin: "1rem" }}>Riccardo Cogoni</h1>
          <h2 style={{ margin: "1rem" }}>Software Developer</h2>
          <p style={{ margin: "1rem" }}>
            Motivated, personable Software Developer who loves to learn and
            creatively solve problems.Ambitious and excited to work on new
            projects and other challenging opportunities.
          </p>
        </div>

        <Slides dim={{ phone, tablet }} />
      </div>

      {/* <BottomPage dim={{ phone, tablet }}> */}
      <SocialIcons dim={{ phone, tablet }} />
    </div>
  );
}
