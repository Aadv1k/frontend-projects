import Pricing from "./PricingComponent";
import { useState, useEffect } from "react";
import { Switch } from '@headlessui/react'
import { RadioGroup } from '@headlessui/react'

import AddOnComponent from "./AddOnComponent";

const plans = [
  {
    title: 'Online service',
    desc: 'Access to multiplayer games',
    cost: '+$1/mo',
  },
  {
    title: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
    cost: '+$2/mo',
  },
  {
    title: ' Customizable Profile',
    desc: 'Custom theme on your profile',
    cost: '+$2/mo',
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
                cost={plan.cost}
                isYearly={false}
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
