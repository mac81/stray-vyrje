import React from 'react';
import { Form, Input, Textarea, Button } from "./ContactForm.styled";

const ContactForm = () => (
  <Form>
    <input type="hidden" name="form-name" value="contact" />
    <Input type="text" placeholder="Navn" />
    <Input type="text" placeholder="Epost *" required />
    <Input type="text" placeholder="Telefon" />
    <Textarea placeholder="Melding"></Textarea>
    <Button>Send</Button>
  </Form>
)

export default ContactForm;