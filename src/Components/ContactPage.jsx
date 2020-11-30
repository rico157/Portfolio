import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SimpleForm from "./SimpleForm";

export default function ContactPage({
  dim: { phone, smPhone, tablet, desktop, portrait }
}) {
  const [notSmall, setNotSmall] = useState(!smPhone);

  const leftTextStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "#292F36",
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
    backgroundColor: "#CFD8E3",
    paddingTop: phone ? "70px" : tablet ? "45px" : 0
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
  const formContainer = {
    width: phone ? "100%" : tablet && portrait ? "70vw" : "40vw",
    height: phone ? "100%" : tablet && portrait ? "70vh" : "60vh",
    minHeight: smPhone && "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: !phone && tablet && "2em",
    borderRadius: phone ? 0 : tablet ? "2em" : "3em",
    backgroundColor: "#292F36",
    color: "white"
  };

  return (
    <div style={sectionStyle} className="section">
      <div
        style={secScreenStyle}
        className={
          phone
            ? "topCol flex-end"
            : tablet && portrait
            ? "spaceCol reverse"
            : "centerRow"
        }
      >
        <div
          style={{ height: smPhone && "100%", margin: "3em 0 3em 0" }}
          className={smPhone && "centerCol"}
        >
          <div className="text" style={leftTextStyle}>
            <h3
              style={{
                ...headTitleStyle,
                marginLeft: tablet && "1rem",
                marginRight: !phone && "1rem"
              }}
            >
              Want to
            </h3>
            <h2
              style={{
                ...secTitleStyle,
                marginRight: "0.9rem",
                marginLeft: tablet && "0.9rem"
              }}
            >
              Say Hi 🙋?
            </h2>
            <h3
              style={{
                margin: "0.7rem 1rem 0.7rem",
                marginLeft: tablet && "1rem",
                lineHeight: tablet ? 1 : 1
              }}
            >
              Leave a message and I'll be back to you as soon as possible!
            </h3>
          </div>
          {smPhone && (
            <Button
              variant="dark"
              style={{ margin: "2em 0 2em 0", fontSize: "2rem" }}
              className="main-button  nav-shadow"
              onClick={() => setNotSmall(true)}
            >
              Get in touch!
            </Button>
          )}
        </div>
        {notSmall && (
          <div
            style={{
              ...formContainer,
              marginLeft: !phone && tablet && "0em",
              marginRight: !phone && tablet && "2em",
              boxShadow: "7px 7px 12px rgba(20, 20, 20, 1)"
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "2rem",
                borderBottom: "1px solid #CFD8E3"
              }}
            >
              Get in touch
            </h2>
            <SimpleForm />
          </div>
        )}
      </div>
    </div>
  );
}
