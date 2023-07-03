import styled from "styled-components";

import { GameProps } from "./types";
import Gesture from "./Gesture";

import GameBackground from "../assets/bg-triangle.svg";

const GameContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 4.25rem;

    background-image: url(${GameBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;

    @media screen and (max-width: 320px) {
      gap: 2.75rem;
    }
    
`

export default function ({ setScore, score, gestures }: GameProps )  {
    return (
        <GameContainer>
            {gestures.map(e => <Gesture type={e} />)}
        </GameContainer>
    )
}
