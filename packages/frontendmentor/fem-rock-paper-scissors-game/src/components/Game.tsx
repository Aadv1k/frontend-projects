import styled from "styled-components";

import { GameProps } from "./types";
import Gesture from "./Gesture";

export default function ({ setScore, score, gestures }: GameProps )  {
    return (
        <div>
            {gestures.map(e => <Gesture type={e} />)}
        </div>
    )
}
