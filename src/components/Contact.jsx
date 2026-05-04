import React, { useRef, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import {
  getContactDraft,
  setContactDraft,
  clearContactDraft,
} from "../utils/portfolioStorage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 640px;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 15px;
    padding: 0 8px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 28px 24px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 26px;
  margin-bottom: 4px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 17px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 17px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 120px;
  resize: vertical;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const Contact = () => {
  const form = useRef(null);
  const [draftLoaded, setDraftLoaded] = useState(false);

  useEffect(() => {
    emailjs.init("JOMaXEWwnliFiweDe");
  }, []);

  useEffect(() => {
    if (!form.current || draftLoaded) return;
    const d = getContactDraft();
    if (!d) {
      setDraftLoaded(true);
      return;
    }
    const el = form.current;
    const map = [
      ["user_email", d.email],
      ["user_name", d.name],
      ["subject", d.subject],
      ["message", d.message],
    ];
    map.forEach(([name, val]) => {
      const field = el.elements.namedItem(name);
      if (field && val) field.value = val;
    });
    setDraftLoaded(true);
  }, [draftLoaded]);

  const persistDraft = useCallback(() => {
    const el = form.current;
    if (!el) return;
    const fd = new FormData(el);
    setContactDraft({
      email: String(fd.get("user_email") ?? ""),
      name: String(fd.get("user_name") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9o166bu",
        "template_rbrz3wu",
        form.current,
        "JOMaXEWwnliFiweDe"
      )
      .then(() => {
        form.current.reset();
        clearContactDraft();
      })
      .catch(() => {
        /* optional: surface toast */
      });
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc style={{ marginBottom: "36px" }}>
          Tell me the problem, timeline, and stack — I reply with a clear next
          step (even if we are not a fit).
        </Desc>

        <ContactForm
          ref={form}
          onSubmit={sendEmail}
          onChange={persistDraft}
        >
          <ContactTitle>Email me</ContactTitle>
          <ContactInput
            placeholder="Your email"
            name="user_email"
            type="email"
            required
            autoComplete="email"
          />
          <ContactInput
            placeholder="Your name"
            name="user_name"
            required
            autoComplete="name"
          />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={4}
            required
          />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
