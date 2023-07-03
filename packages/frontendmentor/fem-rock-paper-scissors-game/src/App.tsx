import { useState } from 'react'

import styled from "styled-components";

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from "./Theme";
import GlobalStyle from "./GlobalStyle";

import ScoreBoard from "./components/ScoreBoard";
import Game from "./components/Game";

import { Gestures } from "./types";

const Container = styled.main`
    min-width: 100%;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-block: 1.25rem;
    gap: 1rem;
`

function App() {
  const [score, setScore] = useState<number>(0);
  const gestures = [Gestures.rock, Gestures.paper, Gestures.scissors];

  return (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <ScoreBoard score={score} gestures={gestures} />

                <Game score={score} setScore={setScore} gestures={gestures} />
            </Container>

        </ThemeProvider>
    </>
  )
}

export default App
