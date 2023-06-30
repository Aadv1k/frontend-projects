import Pricing from "./PricingComponent";
import { useState, useEffect } from "react";
import { Switch } from '@headlessui/react'

import arcadeIcon from "./assets/icon-arcade.svg";
import proIcon from "./assets/icon-pro.svg";
import advancedIcon from "./assets/icon-advanced.svg";

const productPlans = [
    {
        title: "arcade",
        yearlyCost: "90",
        monthlyCost: "9",
        icon: arcadeIcon
    },
    {
        title: "advanced",
        yearlyCost: "120",
        monthlyCost: "12",
        icon: advancedIcon,
    },
    {
        title: "pro",
        yearlyCost: "150",
        monthlyCost: "15",
        icon: proIcon,
    }
]


export default function SelectPlan({ disabled, setDisabled, processInfo, setProcessInfo}) {
    const [isYearly, setYearly] = useState(processInfo.isSelectedPlanYearly ?? false);
    const [marked, setMarked] = useState(processInfo.markedIdx ?? 1);

    useEffect(() => {
        setProcessInfo({
            ...processInfo,
            selectedPlan: productPlans[marked],
            markedIdx: marked,
            isSelectedPlanYearly: isYearly, 
        })
    }, [marked, isYearly])

    const handleClick = (e) => {
        setMarked(e);
    }

    return (
            <>
                <div>
                    <h1 className="text-2xl heading mb-2 md:text-3xl">
                        Select your plan
                    </h1>
                    <p className="text-cool-gray">
                        You have the option of monthly or yearly billing.
                    </p>
                </div>

                <div className="flex flex-col gap-4 my-6 md:flex-row">
                    {productPlans.map((e, i) =>
                        <Pricing
                            title={e.title}
                            monthlyCost={e.monthlyCost}
                            yearlyCost={e.yearlyCost}
                            isYearly={isYearly}
                            icon={e.icon}
                            marked={marked === i}
                            onClick={() => handleClick(i)}
                        />
                    )}
                </div>

                <div className="w-full py-4 bg-magnolia rounded-md flex items-center justify-center gap-6">
                    <p className={`${!isYearly ? "text-marine-blue" : "text-cool-gray"}`}>Monthly</p>
                    <Switch
                        checked={isYearly}
                        onChange={setYearly}
                        className={`bg-marine-blue relative inline-flex h-6 w-11 items-center rounded-full`}>
                        <span className="sr-only">Yearly plan</span>
                        <span className={`${isYearly ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                    </Switch>
                    <p className={`${isYearly ? "text-marine-blue" : "text-cool-gray"}`}>Yearly</p>
                </div>
            </>
        
    )
}
