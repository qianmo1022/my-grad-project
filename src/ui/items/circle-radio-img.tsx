import { CircleRadioImgProps } from "@/lib/definitions";

interface CircleRadioImgComponentProps {
    info: CircleRadioImgProps;
    isSelected: boolean;
    onChange: () => void;
}

export default function CircleRadioImg({ info, isSelected ,onChange}: CircleRadioImgComponentProps) {
    const circleStyle = {
        backgroundImage: `url(${info.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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