import { CircleRadioProps } from "@/lib/definitions";

interface CircleRadioComponentProps {
    info: CircleRadioProps;
    isSelected: boolean;
    onChange: () => void;
}

export default function CircleRadio({ info, isSelected ,onChange}: CircleRadioComponentProps) {
    const circleStyle = {
        backgroundColor: info.color,
        outline: isSelected ? `8px solid ${info.color}` : 'none',
        outlineOffset: '-8px',
    };
    const containerClass = `flex items-center justify-center ${isSelected? 'border border-[#000000]' : 'border border-transparent'} rounded-full p-2 m-1`;

    return (
        <div className={containerClass} onClick={onChange}>
            <div
                className="rounded-full w-12 h-12"
                style={circleStyle}
            />
        </div>
    );
}