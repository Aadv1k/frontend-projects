import styled from "styled-components";
import { GestureProps, Gestures } from "../types";
import RockIcon from "../assets/icon-rock.svg";
import PaperIcon from "../assets/icon-paper.svg";
import ScissorsIcon from "../assets/icon-scissors.svg";

const GestureBase = styled("div")<GestureProps>`
  width: 120px;
  height: 120px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 250ms ease, opacity 500ms ease-out;

  z-index: ${props => props.isWinner ? `-1` : ""};

  box-shadow: ${props => props.isWinner ? `
      0 0 0 40px hsl(214, 47%, 23%),
      0 0 0 80px hsl(214, 47%, 21%)` : "none"};


  &:active {
    opacity: 0.75;
  }

  @media screen and (min-width: 650px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 320px) {
    width: 100px;
    height: 100px;
  }
`;

const GestureInnerBase = styled.div`
  width: 75%;
  height: 75%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 55%;
  border-radius: 100px;
  background-color: ${props => props.theme.white};
`;

const GestureRock = styled(GestureBase)`
  background-image: linear-gradient(
    180deg,
    ${props => props.theme.rockGradient.from},
    ${props => props.theme.rockGradient.to}
  );

  @media (hover: hover) {
    &:hover {
      box-shadow: ${props =>
        `${props.theme.rockGradient.from} 0px 5px 15px 0px`};
    }
  }
`;

const GestureInnerRock = styled(GestureInnerBase)`
  background-image: url(${RockIcon});
`;

const GesturePaper = styled(GestureBase)`
  background-image: linear-gradient(
    180deg,
    ${props => props.theme.paperGradient.from},
    ${props => props.theme.paperGradient.to}
  );

  @media (hover: hover) {
    &:hover {
      box-shadow: ${props =>
        `${props.theme.paperGradient.from} 0px 5px 15px 0px`};
    }
  }
`;

const GestureInnerPaper = styled(GestureInnerBase)`
  background-image: url(${PaperIcon});
`;

const GestureScissors = styled(GestureBase)`
  background-image: linear-gradient(
    180deg,
    ${props => props.theme.scissorsGradient.from},
    ${props => props.theme.scissorsGradient.to}
  );
  grid-column: span 2;

  @media (hover: hover) {
    &:hover {
      box-shadow: ${props =>
        `${props.theme.scissorsGradient.from} 0px 5px 15px 0px`};
    }
  }
`;

const GestureInnerScissors = styled(GestureInnerBase)`
  background-image: url(${ScissorsIcon});
`;

function getGestureComponentFromType(props: GestureProps) {
  switch (props.type) {
    case Gestures.rock:
      return (
        <GestureRock {...props}>
          <GestureInnerRock />
        </GestureRock>
      );
    case Gestures.paper:
      return (
        <GesturePaper {...props}>
          <GestureInnerPaper />
        </GesturePaper>
      );
    case Gestures.scissors:
      return (
        <GestureScissors {...props}>
          <GestureInnerScissors />
        </GestureScissors>
      );
    default:
      return null;
  }
}

export default function Gesture(props: GestureProps) {
  return <>{getGestureComponentFromType(props)}</>;
}
