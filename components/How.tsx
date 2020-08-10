import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-image: url("/assets/images/mountains.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  background-position: 0px 0px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
  padding-top: 100px;
`;

const TextSection = styled.div`
  text-align: center;
`;

const Heading = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 20px;
`;

const StepHeader = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 40px;
  padding-bottom: 20px;
`;

export default function Component() {
  return (
    <Section>
      <div></div>
      <TextSection>
        <Heading>How to do send virtual hugs</Heading>
        <StepHeader>Step 1. Think about your loved ones.</StepHeader>
        <StepHeader>Step 2. Write their contact information</StepHeader>
        <StepHeader>Step 3. Click Send Virtual Hugs!</StepHeader>
      </TextSection>
      <div></div>
    </Section>
  );
}
