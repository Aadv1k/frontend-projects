interface NavButtonProps {
    onClick?: (e: any) => void;
    active: boolean;
    icon: string
}

export default function (props: NavButtonProps) {
    return (
        <button className={`text-xl ${props.active ? "text-light-gray" : "text-blue-gray"}`}>
            {props.icon}
        </button>

    )
}
