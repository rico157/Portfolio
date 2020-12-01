import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ContactForm() {
  const [response, setResponse] = useState({ status: "" });

  const submitForm = (ev) => {
    console.log(ev);
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
        setResponse({ status: "SUCCESS" });
      } else {
        setResponse({ status: "ERROR" });
      }
    };
    xhr.send(data);
  };

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/f/moqpebej"
      method="POST"
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="myemail@email.com" />
        <Form.Text className="text-muted">
          I'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          rows={3}
          placeholder="Hi Rico!"
        />
      </Form.Group>
      {response === "SUCCESS" ? (
        <p>Thanks!</p>
      ) : (
        <Button variant="outline-light" type="submit" className="main-button">
          SEND
        </Button>
      )}
      {response === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
  );
}
