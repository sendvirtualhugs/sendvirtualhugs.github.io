import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-image: url("/assets/images/hug-background.jpg");
  background-repeat: no-repeat;
  background-position: 0px -200px;
  height: 600px;
  background-size: cover;
  padding: 50px;
  text-align: center;
  padding-top: 200px;
  color: white;
`;

const HeadingTop = styled.h3`
  font-size: 17px;
  font-weight: bold;
`;

const Heading = styled.h2`
  padding: 20px;
  font-size: 51px;
  font-weight: bold;
  text-transform: uppercase;
`;

const SubHeading = styled.h3`
  font-size: 16px;
`;

export default function Component() {
  return (
    <Section>
      <HeadingTop>Connecting with loved ones is so important</HeadingTop>
      <Heading>Send Virtual Hugs</Heading>
      <SubHeading>
        It's cute, but also will help you and your loved ones
      </SubHeading>
    </Section>
  );
}
