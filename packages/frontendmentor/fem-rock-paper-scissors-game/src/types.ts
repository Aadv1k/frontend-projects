export enum Gestures {
    rock = "rock",
    scissors = "scissors",
    paper = "paper"
}

export interface ScoreBoardProps {
    score: number;
    gestures: Array<Gestures>
}

export interface GameProps {
    setScore: (e: number) => void;
    score: number;
    gestures: Array<Gestures>
}

export interface GestureProps {
    type: Gestures
}
