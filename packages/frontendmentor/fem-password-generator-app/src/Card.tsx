import { FaRegCopy } from 'react-icons/fa';
import { BsCheckLg } from "react-icons/bs"

import Slider from "./Slider";

function OutputCard({ password }) {
  return (
    <div className="output-card">
        <input className="output-card__input" defaultValue={password} />
        <button className="btn btn--primary">
            <FaRegCopy />
        </button>
    </div>
  )
}

function InputCard({ password, length, setLength}) {
  return (
    <div className="input-card">
        <div className="flex-col">

            <div className="flex justify-between items-center">
                <span className="card__text">character length</span>
                <span className="card__accent">{length}</span>
            </div>
            <Slider min={1} max={33} length={length} setLength={setLength} />

            <ul class="flex flex-col input-card__list">

                <li>
                    <div class="checkbox">
                        <input type="checkbox" name="includeUpperCase" value="includeUpperCase" class="checkbox__input" />
                        <div class="checkbox__box">
                            <span class="checkbox__mark">
                                <BsCheckLg />
                            </span>
                        </div>
                    </div>                </li>

            </ul>
        </div>
    </div>
  )
}

export { InputCard, OutputCard};
