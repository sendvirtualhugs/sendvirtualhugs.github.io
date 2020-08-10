import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const LeftColumn = styled.div`
  width: 500px;
  padding-top: 100px;
  padding-left: 200px;
  padding-right: 100px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #000000;
  padding-bottom: 40px;
`;

const Paragraph = styled.p`
  font-size: 20px;
  padding: 15px;
  text-align: justify;
`;

const RightColumn = styled.div`
  background-image: url("/assets/images/hug-basketball-court.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

export default function Component() {
  return (
    <Section id="about">
      <LeftColumn>
        <Title>About Send Virtual Hugs</Title>
        <Paragraph>
          Connecting with loved ones is so important, especially during a hard
          time like this. It's not just a "feel-good" kind of a thing. You and
          your loved ones will be happier and healthier by being connected. But
          what should we do if we cannot meet face to face to give hugs like we
          used to? When you are busy, it is hard to set a time to reach out to
          connect by phone, FaceTime, or Zoom.
        </Paragraph>
        <Paragraph>
          — HERE COMES THE SEND VIRTUAL HUGS! If you put down the contact
          information of your loved ones, we will help you to stay connected
          with them. Don't worry. We will make sure that their information is
          securely saved.
        </Paragraph>
        <Paragraph>
          Social connectedness is often overlooked but is truly crucial in
          psychological health. Would you like to learn more about why being
          connected is important to you?
        </Paragraph>
      </LeftColumn>
      <RightColumn></RightColumn>
    </Section>
  );
}
