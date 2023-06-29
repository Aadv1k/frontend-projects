import { useState, useEffect } from "react";

import InputCard from "./InputCard";
import OutputCard from "./OutputCard";
import PasswordGenerator from "./utils/PasswordGenerator";

function App() {
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const generator = new PasswordGenerator([false, true, true, false]);
    const password = generator.generatePassword(8);
    setPassword(password);
  }, []);

  return (
    <>
      <main className="v-stack hero">
        <h1 className="hero__title">password generator</h1>
        <OutputCard password={password} setPassword={setPassword} />
        <InputCard
          length={length}
          setLength={setLength}
          password={password}
          setPassword={setPassword}
        />
      </main>
    </>
  );
}

export default App;
