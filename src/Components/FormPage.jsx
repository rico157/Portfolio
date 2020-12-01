import React from "react";
import { Button } from "react-bootstrap";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/moqpebej"
        method="POST"
        style={{
          width: "100%",
          minHeight: "100%",
          padding: "100px 3em 3em 3em ",
          color: "white",
          // backgroundColor: "#292F36",
          color: "#CFD8E3"
        }}
        className="centerCol"
      >
        <h2
          style={{
            margin: " 0 0 1em 0",
            fontSize: "2rem",

            borderBottom: "1px solid #CFD8E3"
          }}
        >
          Get in touch
        </h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            style={{ borderRadius: "3em" }}
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            style={{ borderRadius: "2em" }}
            rows="5"
            type="text"
            name="message"
            className="form-control"
          ></textarea>
        </div>
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <Button variant="outline-light" type="submit" className="main-button">
            SEND
          </Button>
        )}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
