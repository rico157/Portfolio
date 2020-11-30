import React from "react";
import SocialIcons from "./SocialIcons";
import avatar from "../assets/avatar.png";
import { Image } from "react-bootstrap";

import news from "../assets/news.jpg";
import matesrates from "../assets/matesrates.jpg";
import ds from "../assets/ds.png";

import Fullpage, {
  FullPageSections,
  FullpageSection
} from "@ap.cx/react-fullpage";
import Footer from "./Footer";

// import BottomPage from "./BottomPage";
// import Slides from "./Slides";
// import PersonalSlides from "./PersonalSlides";
// import ProjectList from "./ProjectList";

export default function Main({
  dim: { phone, smPhone, tablet, desktop, portrait }
}) {
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
    // height: tablet && portrait ? "70%" : portrait ? "80vh" : "100vh",
    // marginBottom: phone && "17rem"
  };
  // const topRowContainer = {
  //   // height: "80vh",
  //   maxWidth: "100vw",
  //   // width: "100vw",
  //   // paddingTop: tablet ? "00vh" : "0vh",
  //   display: "flex",
  //   flexDirection: tablet ? "column" : "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   // marginBottom: "7em",
  //   marginTop: "4em"
  // };

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
    // height: tablet && "100vh",
    // paddingBottom: "150px",
  };

  const leftTextStyle = {
    fontWeight: 300,
    color: "white",
    lineHeight: 1,
    // height: tablet && "100vh",
    width: tablet ? "80%" : "40vw",
    marginTop: tablet && "1em",
    marginRight: !tablet && "2em",

    paddingLeft: "10%",
    // marginBottom: phone && "30vh",
    borderRight: !tablet && "3px solid ",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    textAlign: !phone && "right"
  };
  const avatarContainer = {
    width: "40vw",
    display: "flex",
    justifyContent: tablet ? "center" : "flex-end"
    // marginTop: phone && !tablet && "10%"
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

  const infoContainerStyle = {
    // width: "40vw"
  };

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
          <FullpageSection style={sectionStyle}>
            <Footer />
          </FullpageSection>
        </FullPageSections>
      </div>
    </Fullpage>
  );
}

// const projectsStyle = {
//   marginTop: "10em",
//   marginLeft: !tablet && "3em",
//   marginRight: !tablet && "3em",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   // maxWidth: "fit-content",
//   backgroundColor: "#00000077",
//   borderRadius: "1em",
//   // height: "fit-content",
//   width: phone ? "100%" : tablet ? "90%" : desktop ? "90%" : "80%"
//   // padding: "2em"
// };

{
  /* <div style={projectsStyle}>
        <h2 style={{ color: "white", textAlign: "center", marginTop: "1em" }}>
          Recent projects
        </h2>
        {/* <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: desktop ? "column" : "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            maxWidth: "100vw"
          }}
        >
          <Slides dim={{ phone, tablet, desktop }} />
          <PersonalSlides dim={{ phone, tablet, desktop }} />
        </div> 
      <ProjectList dim={{ phone, tablet, desktop }} /> 
      </div>*/
}

// <FullpageSection style={sectionStyle}>
// <div style={screenStyle} className="centerCol">
//   {/* <div style={topRowContainer}> */}
//   <div style={avatarContainer}>
//     <Image fluid src={avatar} roundedCircle style={avatarStyle} />
//   </div>
//   <div className="text" style={textStyle}>
//     <h2 style={{ margin: 0, marginLeft: "1rem", lineHeight: 1 }}>
//       Hi{"  "}
//       <span role="img" aria-label="down">
//         👋
//       </span>
//       , I'm
//     </h2>
//     <h1
//       style={{
//         margin: 0,
//         marginLeft: "0.9rem",
//         lineHeight: tablet ? 1 : 1
//       }}
//     >
//       Riccardo Cogoni
//     </h1>
//     <h2
//       style={{
//         margin: 0,
//         marginLeft: "1rem",
//         marginTop: "0.7rem",
//         marginBottom: "0.7rem",
//         lineHeight: tablet ? 1 : 1
//       }}
//     >
//       Software Developer
//     </h2>
//     <p
//       style={{
//         margin: 0,
//         marginLeft: "1rem",
//         lineHeight: tablet ? 1 : 1
//       }}
//     >
//       Motivated, personable Software Developer who loves to learn
//       and creatively solve problems.Ambitious and excited to work on
//       new projects and other challenging opportunities.
//     </p>
//   </div>
//   <SocialIcons dim={{ phone, tablet }} />
//   {/* </div> */}

//   {/* <BottomPage dim={{ phone, tablet }}> */}
// </div>
// </FullpageSection>
