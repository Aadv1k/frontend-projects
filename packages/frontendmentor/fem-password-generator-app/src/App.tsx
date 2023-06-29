import { useState } from 'react'

import {InputCard, OutputCard} from "./Card";


function App() {
  const [length, setLength] = useState(0);

  return (
    <>
        <div className="v-stack">
            <OutputCard password="2d29h09"/>
            <InputCard password="2d29h09" length={length} setLength={setLength}/>
        </div>
    </>
  )
}

export default App
