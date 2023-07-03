import styled from "styled-components";
import { GestureProps, Gestures } from "../types";

import RockIcon from "../assets/icon-rock.svg";
import PaperIcon from "../assets/icon-paper.svg";
import ScissorsIcon from "../assets/icon-scissors.svg";


const GestureBase = styled.div`
    width: 120px;
    height: 120px;

    border-radius: 999px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: opacity 100ms ease;

    @media (hover: hover) {
        &:hover {
            opacity: 0.8;
        }
    }

    @media screen and (max-width: 320px) {
        width: 100px;
        height: 100px;
    }


`

const GestureInnerBase = styled.div`
  width: 75%;
  height: 75%;


    background-repeat: no-repeat;
    background-position: center;
    background-size: 55%;
    border-radius: 100px;
  background-color: ${props => props.theme.white};
`

const GestureRock = styled(GestureBase)`
    background-image: linear-gradient(180deg, ${props => props.theme.rockGradient.from}, ${props => props.theme.rockGradient.to}); `;

const GestureInnerRock = styled(GestureInnerBase)`
  background-image: url(${RockIcon});
`;


const GesturePaper = styled(GestureBase)`
    background-image: linear-gradient(180deg, ${props => props.theme.paperGradient.from}, ${props => props.theme.paperGradient.to});
`;

const GestureInnerPaper = styled(GestureInnerBase)`
  background-image: url(${PaperIcon});
`;

const GestureScissors = styled(GestureBase)`
    background-image: linear-gradient(180deg, ${props => props.theme.scissorsGradient.from}, ${props => props.theme.scissorsGradient.to});
    grid-column: span 2;
`;

const GestureInnerScissors = styled(GestureInnerBase)`
  background-image: url(${ScissorsIcon});
`;


function getGestureComponentFromType(props: GestureProps) {
    switch (props.type) {
            case Gestures.rock:
              return (
                  <GestureRock >
                      <GestureInnerRock />
                  </GestureRock>
              )
            case Gestures.paper:
              return (
                  <GesturePaper>
                      <GestureInnerPaper />
                  </GesturePaper>
              )
            case Gestures.scissors:
              return (
                  <GestureScissors>
                      <GestureInnerScissors />
                  </GestureScissors>
              )
    }


}

export default function (props: GestureProps) {
    return (
        <>
            {getGestureComponentFromType(props)}
        </>

    )
}
