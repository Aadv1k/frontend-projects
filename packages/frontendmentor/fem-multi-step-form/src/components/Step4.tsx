import React, { useState } from "react";
import { ViewProps } from "../types";

export default function Summary({ processInfo, setProcessInfo }: ViewProps) {
    const [isYearly, setYearly] = useState<boolean>(processInfo.isPlanYearly);

    const subType = isYearly ? "yr" : "mo"
    let totalCost = processInfo.selectedPlan[isYearly ? "yearlyCost" : "monthlyCost"];

    for (let i = 0; i < processInfo.selectedAddOns.length; i++) {
       totalCost += processInfo.selectedAddOns[i][isYearly ? "yearlyCost" : "monthlyCost"];
    }
    

    return (
        <>
        <div>
            <h1 className="text-2xl heading mb-2 md:text-3xl">
  Finishing up
            </h1>
            <p className="text-cool-gray">
                Double-check everything looks OK before confirming.
            </p>
        </div>

        <div className="px-6 py-4 bg-magnolia rounded-lg my-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="heading">{processInfo.selectedPlan.title} ({isYearly ? "Yearly" : "Monthly"})</p>
                    <button className="text-cool-gray underline" onClick={() => setYearly(!isYearly)}>Change</button>
                </div>

                <p className="text-marine-blue font-bold">
                    ${isYearly ? processInfo.selectedPlan.yearlyCost : processInfo.selectedPlan.monthlyCost}/{subType}
                </p>
            </div>

            <hr className="w-full h-[1px] bg-light-gray border-none my-4" />

            <div className="flex flex-col gap-4">
                {processInfo.selectedAddOns.reverse().map(e =>
                <div className="flex justify-between items-center">
                    <p className="text-cool-gray text-sm">{e.title}</p>
                    <p className="text-marine-blue text-sm">+${isYearly ? e.yearlyCost : e.monthlyCost}/{subType} </p>
                </div>
                )}
            </div>
        </div>




                <div className="flex justify-between items-center px-6">
                    <p className="text-cool-gray text-sm">Total (per {isYearly ? "year" : "month"})</p>
                    <p className="text-purplish-blue text-lg font-bold">+${totalCost}/{subType} </p>
                </div>

        </>
    )
}
