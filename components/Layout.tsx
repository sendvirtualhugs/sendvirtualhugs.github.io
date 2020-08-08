import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
  "header"
  "main";
  height: 100vh;
`
const Header = styled.header`
  grid-area: header;
  background-color: blue;
  color: white;
  padding: 15px;
`

const Main = styled.main`
  grid-area: main;
  padding: 15px;
`

type Props = {
  children?: ReactNode
}

export default function Layout({children}: Props) {
  return (
    <Container>
      <Header>
        Send Virtual Hugs
      </Header>
      <Main>
      {children}
      </Main>
    </Container>
  )
}

