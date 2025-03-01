interface CircleRadioComponentProps {
    color: string;
    isSelected: boolean;
    onChange: () => void;
}

export default function CircleRadio({ color, isSelected ,onChange}: CircleRadioComponentProps) {
    const circleStyle = {
        backgroundColor: color,
        border: isSelected ? `3px solid ${color}` : 'none',
        boxShadow: isSelected ? `0 0 0 3px rgba(0, 0, 0, 0.1)` : 'none'
    };
    const containerClass = `flex items-center justify-center ${isSelected? 'border border-[#000000]' : ''} rounded-full p-2 `;

    return (
        <div className={containerClass} onClick={onChange}>
            <div
                className="rounded-full w-12 h-12"
                style={circleStyle}
            />
        </div>
    );
}