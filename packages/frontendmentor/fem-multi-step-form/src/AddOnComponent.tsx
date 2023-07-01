import CheckmarkIcon from "./assets/icon-checkmark.svg";

export default function AddOnComponent (
    { title, description, monthlyCost, yearlyCost, isYearly, marked, onClick }
) {
    return (
          <div className={`
                          flex cursor-pointer select-none items-center gap-4 w-full relative border border-light-gray py-4 p-4 rounded-md
                          hover:border-marine-blue hover:bg-magnolia
                          ${marked ? "border-marine-blue bg-magnolia" : ""}
          `}

        onClick={onClick}
          >

              <div className={`${marked ? "bg-purplish-blue" : "border border-light-gray"} w-[20px] h-[20px] rounded-sm flex items-center justify-center`}>
                  {marked && <img alt="checkmark" src={CheckmarkIcon} className="w-[60%] h-full" />}
              </div>

            <div>
                <h3 className="text-marine-blue text-md font-normal">{title}</h3>
                <p className="text-cool-gray">{description}</p>
            </div>

            <p className="text-purplish-blue ml-auto">+${isYearly ? `${yearlyCost}/yr` : `${monthlyCost}/mo`}</p>
          </div>
    )
}
