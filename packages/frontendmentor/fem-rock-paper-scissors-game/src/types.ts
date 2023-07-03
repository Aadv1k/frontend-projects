export enum Gestures {
    rock = "rock",
    scissors = "scissors",
    paper = "paper"
}

export enum GameOutcome {
  PlayerWins = 'PlayerWins',
  HouseWins = 'HouseWins',
  Tie = 'Tie',
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
    type: Gestures;
    onClick?: (e: any) => void;
}


export interface MoveStateProps {
    player: Gesture,
    house: Gesture,
    onClick?: (e: any) => void;
    setScore: (e: number) => void;
    score: number
}
