interface StepLinkParams {
    stepNumber: number;
    stepSubtitle: string;
    focused?: boolean;
}

export default function StepLink({ stepNumber, stepSubtitle, focused }: StepLinkParams) {

    return (
        <div className="flex items-center gap-2 sm:w-[140px]">
            <span
               className={`rounded-full w-[35px] h-[35px] text-gray-100 border border-sm flex items-center justify-center ${focused ? "bg-gray-100 text-blue-600" : ""}`}>
                {stepNumber}
            </span>
            <div className="hidden flex-col justify-center sm:flex">
                <p className="text-gray-400 text-xs">STEP {stepNumber}</p>
                <p className="text-gray-100 text-sm uppercase font-bold">{stepSubtitle}</p>
            </div>
        </div>
    )

}
