import { useState } from 'react'

import {InputCard, OutputCard} from "./Card";


function App() {
  return (
    <>
        <div className="v-stack">
            <OutputCard password="2d29h09" />
            <InputCard password="2d29h09" />
        </div>
    </>
  )
}

export default App
