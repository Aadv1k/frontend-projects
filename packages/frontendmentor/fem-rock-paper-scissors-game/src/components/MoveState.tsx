import styled, { keyframes } from "styled-components";
import Gesture from "./Gesture";

import { useState, useEffect } from "react";

import { MoveStateProps, GameOutcome, Gestures } from "../types";

import { PrimaryButton } from "./Button";


const ANIMATION_DURATION_IN_MS = 1000; 

const MoveContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;

    @media screen and (min-width: 650px) {
      width: 60%;
      max-width: 35rem;
      position: relative; 
    }

`

const statusFadeOut = keyframes`
  from {
    opacity: 0;

  }

  to: {
    opacity: 1;
  }
`

const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;

    > h1 {
      text-transform: uppercase;
      color: ${props => props.theme.white};
      font-size: 2.25rem;
    }

    @media screen and (min-width: 650px) {
      position: absolute; 
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: ${statusFadeOut} ${ANIMATION_DURATION_IN_MS + 1000}ms forwards;
        animation-timing-function: ease-in-out;
    }
`

const gestureGoRight = keyframes`
  from {
      left: 50%;
      transform: translateX(-50%);
  }

  to {
      left: 100%;
      transform: translateX(-50%);

  }
`

const gestureGoLeft = keyframes`
  from {
      left: 50%;
      transform: translateX(-50%);
  }


  to {
      left: 0;
      transform: translateX(-50%);
  }
`



const GestureContainer = styled.div`
    display: flex;
    gap: 1.75rem;
    justify-content: center;
    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    p {
      text-transform: uppercase;
      color: ${props => props.theme.white};
      font-size: .95rem;
      letter-spacing: 1px;
    }

    @media screen and (min-width: 650px) {
        display: block;
        position: relative;
        width: 80%;
        margin-inline: auto;
        height: 200px;

        > div {
            animation-timing-function: ease-in;
        }

        > div:nth-child(2) {
            position: absolute;
            animation: ${gestureGoRight} ${ANIMATION_DURATION_IN_MS}ms forwards;
        }

        > div:nth-child(1) {
            position: absolute;
            animation: ${gestureGoLeft} ${ANIMATION_DURATION_IN_MS}ms forwards;
        }
    }
`;

function getGameOutcome(player: Gestures, house: Gestures): GameOutcome {
  if (
    (player === Gestures.rock && house === Gestures.scissors) ||
    (player === Gestures.paper && house === Gestures.rock) ||
    (player === Gestures.scissors && house === Gestures.paper)
  ) {
    return GameOutcome.PlayerWins;
  } else if (player === house) {
    return GameOutcome.Tie;
  } else {
    return GameOutcome.HouseWins;
  }
}

function getOutcomeMessage(outcome: GameOutcome): string {
  switch (outcome) {
    case GameOutcome.PlayerWins:
      return 'You won!';
    case GameOutcome.HouseWins:
      return 'You lost!';
    case GameOutcome.Tie:
      return 'It\'s a tie!';
    default:
      return '';
  }
}

export default function (props: MoveStateProps) {
    const [message, setMessage] = useState<string>("");
    const [gameOutcome, setGameOutcome] = useState<GameOutcome>("");

    useEffect(() => {
        setGameOutcome(getGameOutcome(props.player, props.house));

        const message = getOutcomeMessage(gameOutcome);
        setMessage(message);

        if (gameOutcome === GameOutcome.PlayerWins) props.setScore(props.score + 3);
        if (gameOutcome === GameOutcome.HouseWins) props.setScore(props.score - 2);
        if (gameOutcome === GameOutcome.Tie) props.setScore(props.score + 1);
    }, [gameOutcome])

    return (
        <MoveContainer>
            <GestureContainer>
                <div>
                    <Gesture type={props.player} isWinner={gameOutcome === GameOutcome.PlayerWins} />
                    <p>you picked</p> 
                </div>

                <div>
                    <Gesture type={props.house} isWinner={gameOutcome === GameOutcome.HouseWins}/>
                    <p>house picked</p> 
                </div>
            </GestureContainer>

            <StatusContainer>
                <h1>{message}</h1> 
                <PrimaryButton onClick={props.onClick}>
                    play again
                </PrimaryButton>
            </StatusContainer>
        </MoveContainer>

    )
}
