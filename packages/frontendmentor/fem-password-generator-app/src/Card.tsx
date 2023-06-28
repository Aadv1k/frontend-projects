import { FaRegCopy } from 'react-icons/fa';

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
                <span class="card__special">0</span>
            </div>

            <input type="range" id="volume" name="volume"
                   min="0" max="11" />
        </div>
    </div>
  )
}

export { InputCard, OutputCard};
