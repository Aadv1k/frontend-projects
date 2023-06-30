interface StepLinkParams {
    stepNumber: number;
    stepSubtitle: string;
    focused?: boolean;
}

export default function StepLink({ stepNumber, stepSubtitle, focused }: StepLinkParams) {

    return (
        <div
            className="flex items-center gap-4 md:w-full"
        >
            <span
               className={
               `rounded-full w-[35px] h-[35px] text-white border border-white border-sm flex items-center justify-center ${focused ? "bg-white text-purplish-blue" : ""}`
               }>
                {stepNumber}
            </span>
            <div className="hidden flex-col justify-center md:flex">
                <p className="text-light-gray text-xs">STEP {stepNumber}</p>
                <p className="text-white text-md uppercase font-medium">{stepSubtitle}</p>
            </div>
        </div>
    )

}
