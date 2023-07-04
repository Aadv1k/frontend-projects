import styled from "styled-components";

import { ScoreBoardProps } from "./types";

const Box = styled.div`
    display: flex;
    flex-direction: column;
`

const ScoreContainer = styled.div`
    border: 2px solid ${props => props.theme.headerOutline};
    display: flex;
    border-radius: .5rem;

    z-index: 12;

    padding: .75rem;

    width: 90%;
    max-width: 32rem;
    justify-content: space-between;
    align-items: center;
`

const ScoreBox = styled.div`
    height: 100%;
    width: 85px;

    padding: .85rem;

    display: flex;
    justify-content: center;

    background-color: ${props => props.theme.white};
    border-radius: .5rem;
    position: relative;
`

const Score = styled.h1`
    font-size: 2.5rem;
    color: ${props => props.theme.darkText}
`

const ScoreText = styled.p`
    font-size: .75rem;
    color: ${props => props.theme.scoreText};
    letter-spacing: .1rem;

    position: absolute;
    text-transform: uppercase;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);

`

const Gesture = styled.h2`
    color: ${props => props.theme.white};
    line-height: .95;
    text-transform: uppercase;
    font-size: 1.5rem;
`

export default function ({ score, gestures }: ScoreBoardProps ) {
    return (
        <ScoreContainer>
            <Box>
                {gestures.map(e => <Gesture>{e}</Gesture>)}
            </Box>

            <ScoreBox>
                <ScoreText>score</ScoreText>
                <Score>{score}</Score>
            </ScoreBox>
        </ScoreContainer>
    )
}
