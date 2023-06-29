import { BsArrowRightShort as ArrowRight } from "react-icons/bs";

import PasswordGenerator from "./utils/PasswordGenerator";

import { useState, useEffect } from "react";

const RATING = 4;

import Slider from "./Slider";
import Checkbox from "./Checkbox";

const getRatingTitle = (rating) => {
  switch (rating) {
    case 1:
      return "weak";
    case 2:
    case 3:
      return "medium";
    case 4:
      return "strong";
    default:
      return "";
  }
};

const getPasswordStrength = (password, max) => {
  const criteria = [
    { regex: /[a-z]/, description: "Lowercase letter" },
    { regex: /[A-Z]/, description: "Uppercase letter" },
    { regex: /[0-9]/, description: "Digit" },
    { regex: /[^a-zA-Z0-9]/, description: "Special character" },
  ];

  let rating = 1;

  for (const criterion of criteria) {
    if (password.match(criterion.regex)) {
      rating++;
    }
  }

  if (length <= 8) rating--;
  return Math.min(rating, max);
};

export default function InputCard({
  password,
  setPassword,
  length,
  setLength,
}) {
  const [upperCase, setUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLower] = useState(true);
  const [includeNumber, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    setPasswordStrength(getPasswordStrength(password, RATING));
  }, [passwordStrength, password]);

  const handleClick = () => {
    const options = [
      upperCase,
      includeLowerCase,
      includeNumber,
      includeSymbols,
    ];
    const generator = new PasswordGenerator(options);
    const password = generator.generatePassword(length);
    setPassword(password);
  };

  return (
    <div className="input-card">
      <div className="flex-col">
        <div className="flex justify-between items-center">
          <span className="card__text">character length</span>
          <span className="card__accent">{length}</span>
        </div>

        <Slider
          min={1}
          max={33}
          length={length}
          setLength={setLength}
          value={8}
        />
      </div>

      <ul className="input-card__list">
        <li>
          <Checkbox checked={upperCase} setChecked={setUpperCase} />
          <p>Include Uppercase Letters</p>
        </li>

        <li>
          <Checkbox checked={includeLowerCase} setChecked={setIncludeLower} />
          <p>Include Lowercase Letters</p>
        </li>

        <li>
          <Checkbox checked={includeNumber} setChecked={setIncludeNumbers} />
          <p>Include Numbers</p>
        </li>

        <li>
          <Checkbox checked={includeSymbols} setChecked={setIncludeSymbols} />
          <p>Include Symbols</p>
        </li>
      </ul>

      <div className="input-card__rating flex items-center justify-between">
        <span>Strength</span>

        <div
          className="bars"
          data-label={getRatingTitle(passwordStrength).toUpperCase() || ""}
        >
          {Array.from({ length: RATING }).map((e, index) => (
            <span
              key={index}
              className={`bar__item ${
                index < passwordStrength
                  ? "bar__item--" + getRatingTitle(passwordStrength)
                  : ""
              }`}
            />
          ))}
        </div>
      </div>

      <button className="btn btn--secondary" onClick={handleClick}>
        Generate
        <ArrowRight />
      </button>
    </div>
  );
}
