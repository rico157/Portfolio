import React from "react";

// Images
import avatar from "../assets/avatar.png";
import news from "../assets/news.jpg";
import matesrates from "../assets/matesrates.jpg";
import ds from "../assets/ds.png";

// Packages
import Fullpage, {
  FullPageSections,
  FullpageSection
} from "@ap.cx/react-fullpage";
import { Image } from "react-bootstrap";

// Components
import Footer from "./Footer";

export default function Main({
  dim: { phone, smPhone, tablet, desktop, portrait }
}) {
  // Styles
  const mainStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: phone ? "7rem" : tablet ? "225px" : 0,
    marginBottom: "10rem"
  };
  const screenStyle = {
    height: "100vh",
    width: "100%"
  };

  const textStyle = {
    fontWeight: 300,
    color: "white",
    lineHeight: 1,
    width: tablet ? "80%" : "40vw",
    marginTop: tablet && "1em",
    marginLeft: !tablet && "2em",
    paddingRight: !tablet && "10%",
    paddingLeft: tablet && "10%",
    borderLeft: !tablet && "3px solid ",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  };
  const leftTextStyle = {
    fontWeight: 300,
    color: "white",
    lineHeight: 1,
    width: tablet ? "80%" : "40vw",
    marginTop: tablet && "1em",
    marginRight: !tablet && "2em",

    paddingLeft: "10%",
    borderRight: !tablet && "3px solid ",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    textAlign: !phone && "right"
  };
  const avatarStyle = {
    marginBottom: tablet && "3em",
    width: phone ? "200px" : "300px",
    height: phone ? "200px" : "300px",
    borderRadius: "50%",
    border: "3px solid",
    backgroundColor: "#ffffff99",
    boxShadow:
      "9px 9px 20px rgba(8, 25, 36, 0.562), -9px -9px 20px rgba(66, 133, 161, 0.452)"
  };
  const secScreenStyle = {
    height: "100vh",
    width: "100%",
    backgroundColor: "#292F36"
  };
  const imageContainer = {
    width: phone ? "100%" : "40vw",
    display: "flex",
    justifyContent: tablet ? "center" : "flex-end",
    alignItems: "flex-start"
  };
  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: !phone && "3em",
    boxShadow:
      "7px 7px 12px rgba(20, 20, 20, 1), -7px -7px 12px rgba(100, 100, 100, 0.452)"
  };
  const infoContainerStyle = {};
  const sectionStyle = {
    paddingTop: tablet && "70px"
  };
  const secTitle = {
    margin: 0,
    marginLeft: "0.9rem",
    lineHeight: 1.2,
    fontSize: tablet ? "2.8em" : "3.2em",
    fontWeight: tablet && "600",
    borderBottom: "1px solid #aaa"
  };

  return (
    <Fullpage>
      <div style={mainStyle}>
        <FullPageSections>
          {/* Main */}
          <FullpageSection style={sectionStyle}>
            <div style={screenStyle} className={phone ? "topCol" : "centerRow"}>
              <div style={imageContainer}>
                <Image src={avatar} roundedCircle style={avatarStyle} />
              </div>
              <div style={infoContainerStyle}>
                <div className="text" style={textStyle}>
                  <h3 style={{ margin: 0, marginLeft: "1rem", lineHeight: 1 }}>
                    Hi{"  "}{" "}
                    <span role="img" aria-label="down">
                      👋{" "}
                    </span>
                    , I'm
                  </h3>
                  <h2
                    style={{
                      margin: 0,
                      marginLeft: "0.9rem",
                      lineHeight: 1.2,
                      fontSize: "3.2em",
                      borderBottom: "1px solid #aaa"
                    }}
                  >
                    Riccardo Cogoni
                  </h2>
                  <h3
                    style={{
                      margin: 0,
                      marginLeft: "1rem",
                      marginTop: "0.7rem",
                      marginBottom: "0.7rem",
                      lineHeight: tablet ? 1 : 1
                    }}
                  >
                    Software Developer
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      marginLeft: "1rem",
                      lineHeight: tablet ? 1.2 : 1
                    }}
                  >
                    Motivated, personable Software Developer who loves to learn
                    and creatively solve problems.Ambitious and excited to work
                    on new projects and other challenging opportunities.
                  </p>
                </div>
              </div>
            </div>
          </FullpageSection>

          {/* Project 1 */}
          <FullpageSection style={sectionStyle}>
            <div
              style={secScreenStyle}
              className={phone ? "topCol" : "centerRow"}
            >
              <div style={imageContainer}>
                <Image src={ds} style={imageStyle} />
              </div>
              <div style={infoContainerStyle}>
                <div className="text" style={textStyle}>
                  <h3 style={{ margin: 0, marginLeft: "1rem", lineHeight: 1 }}>
                    Currently workin on...
                  </h3>
                  <h2 style={secTitle}>Desktop Switcher</h2>
                  <h3
                    style={{
                      margin: 0,
                      marginLeft: "1rem",
                      marginTop: "0.7rem",
                      marginBottom: "0.7rem",
                      lineHeight: tablet ? 1 : 1
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
                    Full-Stack social news aggregation, web content rating, and
                    discussion web application developed with React, PostgreSQL
                    and NodeJS.
                  </p>
                </div>
              </div>
            </div>
          </FullpageSection>

          {/* Project 2 */}
          <FullpageSection style={sectionStyle}>
            <div
              style={secScreenStyle}
              className={phone ? "topCol reverse flex-end" : "centerRow"}
            >
              <div style={infoContainerStyle}>
                <div className="text" style={leftTextStyle}>
                  <h3
                    style={{
                      margin: 0,
                      marginRight: "1rem",
                      lineHeight: 1,
                      marginLeft: tablet && "1rem"
                    }}
                  >
                    Made with Northcoders
                  </h3>
                  <h2
                    style={{
                      ...secTitle,
                      marginRight: "0.9rem",
                      marginLeft: tablet && "0.9rem"
                    }}
                  >
                    Mates Rates
                  </h2>
                  <h3
                    style={{
                      margin: 0,
                      marginRight: "1rem",
                      marginTop: "0.7rem",
                      marginBottom: "0.7rem",
                      marginLeft: tablet && "1rem",
                      lineHeight: tablet ? 1 : 1
                    }}
                  >
                    React Native • MongoDB • GraphQL
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      marginRight: "1rem",
                      lineHeight: tablet ? 1.2 : 1,
                      marginLeft: tablet && "1rem"
                    }}
                  >
                    Full-Stack social news aggregation, web content rating, and
                    discussion web application developed with React, PostgreSQL
                    and NodeJS.
                  </p>
                </div>
              </div>
              <div style={imageContainer}>
                <Image src={matesrates} style={imageStyle} />
              </div>
            </div>
          </FullpageSection>

          {/* Project 3 */}
          <FullpageSection style={sectionStyle}>
            <div
              style={secScreenStyle}
              className={phone ? "topCol" : "centerRow"}
            >
              <div style={imageContainer}>
                <Image src={news} style={imageStyle} />
              </div>
              <div style={infoContainerStyle}>
                <div className="text" style={textStyle}>
                  <h3 style={{ margin: 0, marginLeft: "1rem", lineHeight: 1 }}>
                    Made with Northcoders
                  </h3>
                  <h2 style={secTitle}>Rico Fake News</h2>
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
                    discussion web application developed with React, PostgreSQL
                    and NodeJS.
                  </p>
                </div>
              </div>
            </div>
          </FullpageSection>

          {/* Footer */}
          <FullpageSection style={sectionStyle}>
            <Footer />
          </FullpageSection>
        </FullPageSections>
      </div>
    </Fullpage>
  );
}
