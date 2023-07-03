export enum Gestures {
    rock = "rock",
    scissors = "scissors",
    paper = "paper"
}

export interface ScoreBoardProps {
    score: number;
    gestures: Array<string>
}
