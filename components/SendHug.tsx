import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-image: url("/assets/images/writing-letters.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  text-align: center;
  padding-bottom: 100px;
`;

const Heading = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 40px;
  padding-top: 40px;
`;

export default function Component() {

  return (
    <Section id="send-hugs">
        <Heading>Send Virtual Hugs</Heading>
      <form>
        Title: <br/>    
        <input type="text" name="title"/><br/>
        Email: <br/>
        <input type="text" name="mail"/>
        <br/><br/>
        <input type="submit" value="Send Virtual Hugs"/>
      </form>
    </Section>
  );
}
