import { useState } from 'react'

import styled from "styled-components";

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from "./Theme";
import GlobalStyle from "./GlobalStyle";

import ScoreBoard from "./components/ScoreBoard";

import { Gestures } from "./types";

const Container = styled.main`
    min-width: 100%;
    display: flex;
    justify-content: center;
    padding-block: 1.25rem;
`

function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>

            <ScoreBoard score={12} gestures={[Gestures.rock, Gestures.paper, Gestures.scissors]} />
                
            </Container>

        </ThemeProvider>
    </>
  )
}

export default App
