import { useState } from 'react'

import StepLink from "./StepLink";


function App() {
  return (
    <>
        <main className="shadow-xl w-full max-w-4xl flex flex-col util-absolute-center bg-white rounded-lg sm:p-4 sm:flex-row sm:h-[560px]">

            <section
                className="hero__navigator rounded-lg flex gap-4 items-center justify-center p-8 sm:flex-col sm:w-1/3 sm:gap-8 sm:justify-start sm:items-start "
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
