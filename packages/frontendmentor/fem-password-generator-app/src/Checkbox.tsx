import { HiCheck as CheckIcon } from "react-icons/hi";

export default function Checkbox({ checked, setChecked }) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        defaultChecked={checked}
        onInput={() => setChecked(!checked)}
        className="checkbox__input"
      />
      <div className="checkbox__box">
        <span className="checkbox__mark">
          <CheckIcon />
        </span>
      </div>
    </div>
  );
}
