import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
  isCheck: boolean;
};

const ContactFormEmail = ({
  name,
  email,
  contactNumber,
  message,
  isCheck,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from carestaff website</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>
                You received a meesage from Carestaff website Contact Us Page.
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's name is: {name}</Text>
              <Text>The sender's email is: {email}</Text>
              <Text>The sender's contact number is: {contactNumber}</Text>
              {isCheck ? (
                <Text>The sender's agree to the Site Terms of Use.</Text>
              ) : (
                <Text>The sender's didn't agree to the Site Terms of Use.</Text>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
