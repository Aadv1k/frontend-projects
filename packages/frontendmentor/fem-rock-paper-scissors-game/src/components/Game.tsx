import styled from "styled-components";
import { GameProps, Gestures } from "../types";
import Gesture from "./Gesture";
import { useState, useEffect } from "react";
import GameBackground from "../assets/bg-triangle.svg";

import MoveState from "./MoveState";

const GameContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 4.25rem;

    margin-top: 2rem;

    background-image: url(${GameBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;

    @media screen and (max-width: 320px) {
      gap: 2.75rem;
    }
`;


function getMove(): Gestures {
  const gestures = [Gestures.rock, Gestures.paper, Gestures.scissors];
  const previousMove = sessionStorage.getItem('previousMove');
  let randomIndex = Math.floor(Math.random() * gestures.length);
  let move = gestures[randomIndex];


  while (move === previousMove) {
    randomIndex = Math.floor(Math.random() * gestures.length);
    move = gestures[randomIndex];
  }

  sessionStorage.setItem('previousMove', move);

  return move;
}

export default function Game({ setScore, score }: GameProps) {
    const [currentMove, setCurrentMove] = useState<Gestures | null>(null);
    const gestures = [Gestures.rock, Gestures.paper, Gestures.scissors];


    return (
        <>
            {!currentMove ? <GameContainer>
                    {gestures.map(e => (<Gesture key={e} type={e} onClick={() => setCurrentMove(e)} />))}
                </GameContainer> :
        <MoveState score={score} setScore={setScore} player={currentMove} house={getMove()} onClick={() => {setCurrentMove(null)}} />}
        </>
    );
}
