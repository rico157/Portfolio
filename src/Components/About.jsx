import React from "react";
import thanks from "../assets/thanks.jpg";
import stack from "../assets/stack.jpg";
import me from "../assets/me.jpg";
import { Image } from "react-bootstrap";

export default function RecentProjects({
  dim: { phone, smPhone, tablet, desktop, portrait }
}) {
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
    height: phone ? "100%" : "100vh",
    width: "100%",
    backgroundColor: "#292F36",
    paddingTop: phone ? "70px" : tablet ? "45px" : 0
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
  const sectionStyle = {};
  const secTitleStyle = {
    margin: 0,
    marginLeft: "0.9rem",
    lineHeight: 1.2,
    fontSize: tablet ? "2.8em" : "3.2em",
    fontWeight: tablet && "600",
    borderBottom: "1px solid #aaa"
  };
  const headTitleStyle = { margin: "0 0 0 1rem", lineHeight: 1 };

  return (
    <>
      {/* Project 1 */}
      <div style={sectionStyle} className="section">
        <div
          style={{ ...secScreenStyle, backgroundColor: "#1D2C36" }}
          className={
            phone ? "topCol" : tablet && portrait ? "spaceCol" : "centerRow"
          }
        >
          <div style={imageContainer}>
            <Image src={me} style={imageStyle} />
          </div>
          <div style={infoContainerStyle}>
            <div className="text" style={textStyle}>
              <h2 style={secTitleStyle}>
                About me...{" "}
                <span role="img" aria-label="down">
                  👀{" "}
                </span>
              </h2>
              <h3
                style={{
                  margin: "0.7rem 0 0.7rem 1rem",
                  lineHeight: 1
                }}
              >
                Software Developer
              </h3>
              <ul
                style={{
                  margin: 0,
                  marginLeft: "1rem",
                  lineHeight: 1.2,
                  listStyle: "none",
                  padding: 0
                }}
              >
                <li>
                  I recently graduated from Northcoders, a multi-award-winning
                  coding bootcamp. I have worked in an agile environment
                  developing multiple projects.
                </li>
                <li>
                  Made my first Android app prototype whilst working as a
                  bartender, that showed a list of cocktail recipes to help my
                  team and I learn new seasonal cocktails.
                </li>
                <li>
                  I wrote my first line of code during my early teenage years
                  and I spent most of them finding new ways to change and
                  improve mobile software such as changing ROMs or using Xposed
                  Framework with community made add-ons.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Project 2 */}
      <div style={sectionStyle} className="section">
        <div
          style={{
            ...secScreenStyle,
            backgroundColor: "#CBDEF2"
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
            <div
              className="text"
              style={{ ...leftTextStyle, color: "#292F36" }}
            >
              <h3
                style={{
                  ...headTitleStyle,
                  marginLeft: tablet && "1rem",
                  marginRight: !phone && "1rem"
                }}
              >
                What I've worked with
              </h3>
              <h2
                style={{
                  ...secTitleStyle,
                  marginRight: "0.9rem",
                  marginLeft: tablet && "0.9rem"
                }}
              >
                Tech Stack
              </h2>
              <p>
                <ul
                  style={{
                    margin: "0 1rem",
                    lineHeight: tablet ? 1.2 : 1,
                    marginLeft: tablet && "1rem",
                    listStyle: "none",
                    padding: 0
                  }}
                >
                  <li className="list-title">Frontend</li>
                  <li>ReactJS • Babel • Bootstrap</li>
                  <li className="list-title">Database</li>
                  <li>PostgreSQL • MongoDB</li>
                  <li className="list-title">Backend</li>
                  <li>Express • NodeJS</li>
                  <li className="list-title">UX / UI</li>
                  <li>Figma • Adobe XD • Photoshop</li>
                </ul>
              </p>
            </div>
          </div>
          <div
            style={{
              ...imageContainer,
              marginLeft: !phone && tablet && "0em",
              marginRight: !phone && tablet && "2em"
            }}
          >
            <Image src={stack} style={imageStyle} />
          </div>
        </div>
      </div>
      {/* Project 3 */}
      <div style={sectionStyle} className="section">
        <div
          style={secScreenStyle}
          className={
            phone ? "topCol" : tablet && portrait ? "spaceCol" : "centerRow"
          }
        >
          <div style={imageContainer}>
            <Image src={thanks} style={imageStyle} />
          </div>
          <div style={infoContainerStyle}>
            <div className="text" style={textStyle}>
              <h3 style={{ margin: 0, marginLeft: "1rem", lineHeight: 1 }}>
                What I used to make this website
              </h3>
              <h2 style={secTitleStyle}>Acknowledgements</h2>
              <h3>
                <ul
                  style={{
                    margin: 0,
                    marginLeft: "1rem",
                    lineHeight: 1.2,
                    listStyle: "none",
                    padding: 0
                  }}
                >
                  <li className="list-title">Images</li>
                  <li>
                    <a
                      href="https://unsplash.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Unsplash
                    </a>{" "}
                    •{" "}
                    <a
                      href="https://www.pexels.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pexels
                    </a>{" "}
                  </li>
                  <li className="list-title">Packages</li>
                  <li>
                    <a
                      href="https://react-icons.github.io/react-icons/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      react-icons
                    </a>{" "}
                    •{" "}
                    <a href="https://react-bootstrap.github.io/">
                      react-bootstrap
                    </a>{" "}
                  </li>
                  <li>
                    <a href="https://create-react-app.dev/docs/getting-started/">
                      create-react-app
                    </a>
                  </li>
                </ul>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
