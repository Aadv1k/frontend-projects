import { useState, useEffect } from "react";
import AddOnCard from "./AddOnCard";
import { ViewProps } from "../types";

const productAddOns = [
  {
    title: 'Online service',
    desc: 'Access to multiplayer games',
    monthlyCost: '1',
    yearlyCost: '10'
  },
  {
    title: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
    monthlyCost: '2',
    yearlyCost: '20'
  },
  {
    title: 'Customizable Profile',
    desc: 'Custom theme on your profile',
    monthlyCost: '2',
    yearlyCost: '20'
  },
];
 
export default function ({ processInfo, setProcessInfo }: ViewProps) {
  const [selected, setSelected] = useState(processInfo.selectedAddOns?.map((e: any) => productAddOns.findIndex((i: any) => e.title === i.title)) ?? []);
   useEffect(() => {
        setProcessInfo({
            ...processInfo,
            selectedAddOns: selected.map((e: any) => {
                return {
                    title: productAddOns[e].title,
                    yearlyCost: parseInt(productAddOns[e].yearlyCost, 10),
                    monthlyCost: parseInt(productAddOns[e].monthlyCost, 10),
                }
            }),
        })
   }, [selected])


  return (
    <>
      <div>
        <h1 className="text-2xl heading mb-2 md:text-3xl">Pick add-ons</h1>
        <p className="text-cool-gray">Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="flex flex-col gap-4 my-6 ">

        {productAddOns.map((plan: any, index: any) => (
            <AddOnCard
                title={plan.title}
                description={plan.desc}
                monthlyCost={plan.monthlyCost}
                icon=""
                yearlyCost={plan.yearlyCost}
                isYearly={processInfo.isSelectedPlanYearly}
                onClick={() => {
                    const foundIdx = selected.findIndex((i: number) => i === index);
                    if (foundIdx !== -1) {
                        setSelected(selected.filter((_: any, i: any) => i !== foundIdx));
                        return;
                    }
                    setSelected([...selected, index]);
                }}
            marked={selected.includes(index)}/>
        ))}
      </div>
    </>
  );
}
