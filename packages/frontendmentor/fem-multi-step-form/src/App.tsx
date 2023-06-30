import { useState } from 'react'

import StepLink from "./StepLink";


function App() {
  return (
    <>
        <main className="shadow-xl w-full max-w-5xl flex flex-col util-absolute-center bg-white rounded-lg md:p-4 md:flex-row md:h-[580px]">

            <section
                className="hero__navigator rounded-lg flex gap-4 items-center justify-center p-8 md:flex-col md:w-[28%] md:gap-8 md:justify-start md:items-start "
            >

                <StepLink stepNumber={1} stepSubtitle="your info" />
                <StepLink stepNumber={2} stepSubtitle="select plan" focused />
                <StepLink stepNumber={3} stepSubtitle="add-ons" />
                <StepLink stepNumber={4} stepSubtitle="summary" />
            </section>
        </main>
    </>
  )
}

export default App
