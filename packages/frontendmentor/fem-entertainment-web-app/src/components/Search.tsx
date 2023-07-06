
import { ReactComponent as SearchIcon } from  "../assets/icon-search.svg";

interface SearchProps {
    placeholder: string,
    onInput?: (e: any) => void;
}


export default function (props: SearchProps) {
    return (
        <div className="flex gap-1 items-center">

            <SearchIcon className="w-7 h-7 text-white" />

        <input type="text" placeholder={props.placeholder}
               className="bg-transparent w-full p-2 focus:outline-none placeholder:text-gray-500 text-lg text-white"
        />


        </div>
    )
}
