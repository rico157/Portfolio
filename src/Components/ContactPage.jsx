import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SimpleForm from "./SimpleForm";

export default function ContactPage({
  dim: { phone, smPhone, tablet, desktop, portrait }
}) {
  const landTablet = !phone && tablet && !portrait;
  const notSmall = !smPhone && !landTablet;

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
    width: phone ? "100%" : tablet && !portrait ? "80vw" : "40vw",
    height: phone ? "100%" : "60vh",

    minHeight: smPhone && "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: phone ? 0 : tablet ? "2em" : "3em",
    backgroundColor: "#292F36",
    color: "#CFD8E3",
    marginLeft: !phone && tablet && "0em",
    marginRight: !phone && "2em",
    boxShadow: "7px 7px 12px rgba(20, 20, 20, 1)"
  };

  return (
    <>
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
          className={smPhone ? "centerCol" : undefined}
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
              Leave a message and I'll get back to you as soon as possible!
            </h3>
          </div>
        </div>
        {smPhone || landTablet ? (
          <Link to="/form">
            <Button
              variant="dark"
              style={{ margin: "2em 0 2em 0", fontSize: "1.5rem" }}
              className="main-button  nav-shadow"
            >
              Get in touch!
            </Button>
          </Link>
        ) : undefined}
        {notSmall && (
          <div style={formContainer}>
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
    </>
  );
}
