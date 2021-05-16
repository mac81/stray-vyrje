import React from "react"
import { Form, Input, Textarea, Button } from "./ContactForm.styled"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const ContactForm = () => {
  const intl = useIntl()
  return (
    <Form>
      <input type="hidden" name="form-name" value="contact" />
      <Input
        type="text"
        placeholder={intl.formatMessage({ id: "contactForm.name" })}
      />
      <Input
        type="text"
        placeholder={intl.formatMessage({ id: "contactForm.email" })}
        required
      />
      <Input
        type="text"
        placeholder={intl.formatMessage({
          id: "contactForm.telephone",
        })}
      />
      <Textarea
        placeholder={intl.formatMessage({
          id: "contactForm.message",
        })}
      ></Textarea>
      <Button>Send</Button>
    </Form>
  )
}

export default ContactForm
