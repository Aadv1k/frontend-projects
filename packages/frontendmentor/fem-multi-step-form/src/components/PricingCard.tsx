import { CardProps } from "../types";

export default function ({ title, monthlyCost, yearlyCost, isYearly, icon, marked, onClick }: CardProps ) {
    return (
        <div
            className={`p-4 flex gap-2 border border-light-gray rounded-lg transition cursor-pointer select-none
                       md:flex-col md:w-1/3 md:gap-12
                       hover:bg-magnolia hover:border-marine-blue
                       ${marked ? "bg-magnolia border-marine-blue" : ""}
            `}

            onClick={onClick}
        >
            <span>
                <img alt={`${title} icon`} src={icon} />
            </span>

            <div>
                <h3 className="heading text-lg">{title}</h3>

                {!isYearly ?
                 <p className="text-cool-gray">${monthlyCost}/mo</p>
                : <p className="text-cool-gray">${yearlyCost}/yr</p>
                }
            </div>
        </div>
    )
}
