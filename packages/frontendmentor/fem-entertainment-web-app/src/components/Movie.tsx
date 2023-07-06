interface MovieProps {
    title: string;
    src: string;
    rating: string;
    year: number;
    category: string;
}

export default function (props: MovieProps) {
    return <h1 className="text-white">AYO</h1>
}
