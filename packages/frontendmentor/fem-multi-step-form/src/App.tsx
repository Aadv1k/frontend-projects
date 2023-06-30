import { useState } from 'react'

import StepLink from "./StepLink";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";

const TOTAL_STEPS = 4;

const stepsIndex = ["your info", "select plan", "add-ons", "summary"]

function getComponentFromStep(step, disabled, setDisabled, processInfo, setProcessInfo) {
    switch (step) { 
        case 1:
            return <PersonalInfo disabled={disabled} setDisabled={setDisabled} processInfo={processInfo} setProcessInfo={setProcessInfo}/>
        case 2:
            return <SelectPlan disabled={disabled} setDisabled={setDisabled} processInfo={processInfo} setProcessInfo={setProcessInfo}
            />
        default:
            return null;
    }
}


function App() {
    const [currentStep, setCurrentStep] = useState(2);
    const [disabled, setDisabled] = useState(false);
    const [processInfo, setProcessInfo] = useState({});

    const nextStep = () => {
        setCurrentStep(currentStep < TOTAL_STEPS ?  currentStep + 1 : currentStep)
    };
    const previousStep = () => setCurrentStep(currentStep > 0 ? currentStep - 1 : currentStep);

    return (
        <>
        <main className=" w-full max-w-5xl flex flex-col util-absolute-center bg-white rounded-lg md:p-4 md:flex-row md:h-[580px] md:shadow-xl">

        <section
        className="hero__navigator rounded-lg flex gap-4 items-center justify-center p-8 md:flex-col md:w-[28%] md:gap-6 md:justify-start md:items-start "
        >

        {stepsIndex.map((sub, index) => {
            return (
                <StepLink stepNumber={index+1} stepSubtitle={sub} focused={currentStep === index+1} />
            )
        })}
        </section>

        <section className="md:relative md:w-[55%] md:mx-auto py-8">
        <div className=" absolute shadow-lg w-[90%] md:w-full -translate-y-12 left-1/2 -translate-x-1/2 rounded-md bg-white px-4 py-6 md:py-12
            md:static md:shadow-none md:-translate-x-0
        "
        >
        {getComponentFromStep(currentStep, disabled, setDisabled, processInfo, setProcessInfo)}
        </div>

        <div className="flex justify-between p-2 py-4 fixed bottom-0 bg-white w-full items-center md:absolute">
                {currentStep > 1 && <button className="btn--secondary py-3 px-6 mr-auto" onClick={previousStep}>Go back</button>}
                {currentStep !== TOTAL_STEPS && <button className={`btn--primary py-3 px-6 ml-auto ${disabled ? "opacity-75 cursor-not-allowed" : ""}`} onClick={!disabled ? nextStep : () => {}}>Next Step</button>}
        </div>
            </section>

        </main>
    </>
    )
}

export default App
true
