import { useState } from 'react'

import styled from "styled-components";

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { PrimaryButton } from "./components/Button";

import theme from "./Theme";
import GlobalStyle from "./GlobalStyle";

import ScoreBoard from "./components/ScoreBoard";
import Game from "./components/Game";
import Modal from "./components/Modal";

import { Gestures } from "./types";

const Container = styled.main`
    min-width: 100%;
    display: flex;

    flex-direction: column;
    align-items: center;

    padding-block: 1.25rem;
    gap: 1.25rem;
`

const ModalButton = styled.button`
    all: unset;

    background-color: transparent;
    color: ${props => props.theme.white};
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 6px;
    font-family: ${props => props.theme.font.serif};
    padding: .5rem 1.75rem;
    font-size: .95rem;

    position: absolute;

    bottom: 5%;

    cursor: pointer;
    border: 1px solid white;

    @media screen and (min-width: 650px) {
        right: 10%;
    }
`


function App() {
  const [score, setScore] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const gestures = [Gestures.rock, Gestures.paper, Gestures.scissors];

  return (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />

            {modal && <Modal setModal={setModal} />}

            <Container>
                <ScoreBoard score={score} gestures={gestures} />
                <Game score={score} setScore={setScore} gestures={gestures} />
                <ModalButton onClick={() => setModal(true)}>
                    rules
                </ModalButton>
            </Container>
        </ThemeProvider>
    </>
  )
}

export default App
