interface NavButtonProps {
    onClick?: (e: any) => void;
    active: boolean;
    icon: string
}
export default function (props: NavButtonProps) {
    return (
        <button className={`w-[20px] ${props.active ? "fill-light-gray" : "fill-blue-gray"}`}>
            {props.icon}
        </button>

    )
}
