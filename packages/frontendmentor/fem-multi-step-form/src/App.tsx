import { useState } from 'react'

import StepLink from "./StepLink";
import PersonalInfo from "./PersonalInfo";

const TOTAL_STEPS = 4;

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(currentStep < TOTAL_STEPS ?  currentStep + 1 : currentStep);
  const previousStep = () => setCurrentStep(currentStep > 0 ? currentStep - 1 : currentStep);

  return (
    <>
        <main className=" w-full max-w-5xl flex flex-col util-absolute-center bg-white rounded-lg md:p-4 md:flex-row md:h-[580px] md:shadow-xl">

            <section
                className="hero__navigator rounded-lg flex gap-4 items-center justify-center p-8 md:flex-col md:w-[28%] md:gap-6 md:justify-start md:items-start "
            >

                <StepLink stepNumber={1} stepSubtitle="your info" />
                <StepLink stepNumber={2} stepSubtitle="select plan" />
                <StepLink stepNumber={3} stepSubtitle="add-ons" />
                <StepLink stepNumber={4} stepSubtitle="summary" />
            </section>

            <section className="md:relative md:w-[65%] md:mx-auto">
                <div className="flex justify-between p-2 py-4 fixed bottom-0 bg-white w-full items-center md:absolute">

                {currentStep > 1 && <button className="btn--secondary py-3 px-6 mr-auto" onClick={previousStep}>Go back</button>}
                {currentStep !== TOTAL_STEPS && <button className="btn--primary py-3 px-6 ml-auto" onClick={nextStep}>Next Step</button>}
                </div>
            </section>

        </main>
    </>
  )
}

export default App
