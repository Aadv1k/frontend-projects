import Pricing from "./PricingComponent";
import { useState, useEffect } from "react";
import { Switch } from '@headlessui/react'
import { RadioGroup } from '@headlessui/react'

import AddOnComponent from "./AddOnComponent";

const plans = [
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
 
export default function PickAddOns({ disabled, setDisabled, processInfo, setProcessInfo }) {
  const [selected, setSelected] = useState(processInfo.selectedAddOnsIndex ?? []);
   useEffect(() => {
        setProcessInfo({
            ...processInfo,
            selectedAddOns: selected.map(e => plans[e]),
            selectedAddOnsIndex: selected
        })
   }, [selected])

  const handleClick = (elem, index) => {
      const foundIdx = selected.findIndex((i) => i === idx);
      if (foundIdx) {
          setSelected(selected.splice(foundIdx, 1));
          return;
      }
      setSelected([...selected, idx]);
  }

  return (
    <>
      <div>
        <h1 className="text-2xl heading mb-2 md:text-3xl">Pick add-ons</h1>
        <p className="text-cool-gray">Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="flex flex-col gap-4 my-6 ">

        {plans.map((plan, index) => (
            <AddOnComponent
                title={plan.title}
                description={plan.desc}
                monthlyCost={plan.monthlyCost}
                yearlyCost={plan.yearlyCost}
                isYearly={processInfo.isSelectedPlanYearly}
                onClick={(elem) => {
                    const foundIdx = selected.findIndex((i) => i === index);
                    if (foundIdx !== -1) {
                        setSelected(selected.filter((e, i) => i !== foundIdx));
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
