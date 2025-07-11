import { ChevronLeft, ChevronRight } from "lucide-react";

export function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute z-10 -left-1 top-1/2 transform -translate-y-1/2 bg-background border-border   rounded-full p-1 border-[1px]"
        >
            <ChevronLeft className="w-5 h-5 text-primary" />
        </button>
    );
}

export function NextArrow(props) {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute z-10 -right-2 top-1/2 transform -translate-y-1/2  bg-background border-border  rounded-full p-1 border-[1px]"
        >
            <ChevronRight className="w-5 h-5 text-primary" />
        </button>
    );
}