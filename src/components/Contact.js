import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

class Contact extends React.Component {
  render() {
    return (
        <Container>
            <h1>Contact</h1>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="name" name="name" id="name" placeholder="Fizz Buzz" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder='fizz@buzz.com' />
                </FormGroup>
                <FormGroup>
                    <Label for="Message">Message</Label>
                    <Input type="textarea" name="text" id="text" />
                </FormGroup>
            </Form>
        </Container>
    );
  }
}

export default Contact;
