import React from "react";
import { Form, Button } from "react-bootstrap";

export default function ContactForm() {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="myemail@email.com" />
        <Form.Text className="text-muted">
          I'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Hi Rico!" />
      </Form.Group>

      <Button variant="outline-light" type="submit" className="main-button">
        SEND
      </Button>
    </Form>
  );
}
