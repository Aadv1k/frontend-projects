import { FaRegCopy } from 'react-icons/fa';

import Slider from "./Slider";

function OutputCard({ password }) {
  return (
    <div className="output-card">
        <div className="output-card__input"
             suppressContentEditableWarning
             contentEditable
        >{password}</div>
        <button className="btn btn--primary">
            <FaRegCopy />
        </button>
    </div>
  )
}

function InputCard({ password }) {
  return (
    <div className="input-card">
        <div class="flex-col">
            <div className="flex justify-between">
                <span class="card__text">character length</span>
                <span class="card__accent">0</span>
            </div>
            <Slider />
        </div>
    </div>
  )
}

export { InputCard, OutputCard};
