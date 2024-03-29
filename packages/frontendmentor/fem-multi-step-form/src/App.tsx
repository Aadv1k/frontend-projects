import { useState } from 'react'
import { ViewProps, ProcessInfo } from "./types";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";


import Success from "./components/Success";
import StepLink from "./components/StepLink";

const TOTAL_STEPS = 4;
const stepsIndex = ["your info", "select plan", "add-ons", "summary"]

function getComponentFromStep(
    step: number,
    {
        disabled, setDisabled, processInfo, setProcessInfo
    }: ViewProps
): any {
    switch (step) { 
        case 1:
            return <Step1 disabled={disabled} setDisabled={setDisabled} processInfo={processInfo} setProcessInfo={setProcessInfo}/>
        case 2:
            return <Step2 processInfo={processInfo} setProcessInfo={setProcessInfo} />
        case 3:
            return <Step3 processInfo={processInfo} setProcessInfo={setProcessInfo} />
        case 4:
            return <Step4 processInfo={processInfo} setProcessInfo={setProcessInfo} />
        default:
            return null;
    }
}


export default function App() {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [processInfo, setProcessInfo] = useState<ProcessInfo>({user: null, selectedPlan: null, isPlanYearly: null, selectedAddOn: null});

    const [success, setSuccess] = useState<boolean>(false);

    const handleSuccessClick = () => {
        setSuccess(true);

        console.info("INFO: in production we would do something here, eg `POST /user/info`");

        setTimeout(() => {
            setSuccess(false);
            setProcessInfo({} as ProcessInfo)
            setCurrentStep(1);
        }, 3000);
    }

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

                    <div className="absolute h-full shadow-lg w-[90%] md:w-full -translate-y-12 left-1/2 -translate-x-1/2 rounded-md bg-white px-4 py-6 md:py-12
                                    md:static md:shadow-none md:-translate-x-0
                                    "
                    >
                        {!success && getComponentFromStep(currentStep, {disabled, setDisabled, processInfo, setProcessInfo})}

                        {success && <Success />}
                    </div>

                    {!success &&

                     <div className="flex justify-between p-2 py-4 fixed bottom-0 bg-white w-full items-center md:absolute">

                         {currentStep > 1 && <button className="btn--secondary py-3 px-8 mr-auto" onClick={previousStep}>Go back</button>}

                         {currentStep !== TOTAL_STEPS ? <button className={`btn--primary py-3 px-8 ml-auto ${disabled ? "opacity-75 cursor-not-allowed" : ""}`} onClick={!disabled ? nextStep : () => {}}>Next Step</button>
                         : <button className="btn--blue py-3 px-8 ml-auto" onClick={handleSuccessClick}>confirm</button>}

                     </div>
                    }

                </section>

            </main>
        </>
    )
}
