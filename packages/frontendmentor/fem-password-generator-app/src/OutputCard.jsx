import {
  BsArrowRightShort as ArrowRight,
  BsCheckLg as CheckMark,
  BsFillClipboard2Fill as ClipboardIcon
} from "react-icons/bs";
import PasswordGenerator from "./utils/PasswordGenerator";

import { useState, useEffect } from "react";

export default function OutputCard({ password, setPassword }) {
  const [copying, setCopying] = useState(false);

  const handleClick = async () => {
    setCopying(true);
    await navigator.clipboard.writeText(password);

    setTimeout(() => {
      setCopying(false);
    }, 1000);
  };

  return (
    <div className="output-card">
      <input
        className="output-card__input"
        value={password}
        onInput={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn--primary" onClick={handleClick}>
        {!copying ? <ClipboardIcon /> : <CheckMark />}
      </button>
    </div>
  );
}
