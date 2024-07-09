import React from "react";
import { useState, useRef } from "react";
import { Snackbar } from "@mui/material";
import emailjs from "@emailjs/browser";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  ContactForm,
  ContactTitle,
  ContactInput,
  ContactInputMessage,
  ContactButton,
} from "./ContactStyled";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tcd372d",
        "template_682p5ys",
        form.current,
        "cR92Sx79MFvnyiKsp"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <Wrapper>
        <Title>Contact Me 🚀 </Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me</ContactTitle>
          <ContactInput
            placeholder="Your Email"
            id="from_email"
            name="from_email"
          />
          <ContactInput
            placeholder="Your Name"
            id="from_name"
            name="from_name"
          />
          <ContactInput placeholder="Subject" id="subject" name="subject" />
          <ContactInputMessage
            placeholder="Message"
            id="message"
            rows="4"
            name="message"
          />
          <ContactButton type="submit" value="send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={() => setOpen(false)}
          message="email sent successfully!"
          serverity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
