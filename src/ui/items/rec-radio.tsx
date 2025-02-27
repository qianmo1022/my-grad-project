import { RecRadioProps } from "../../lib/definitions";

export default function RecRadio(info: RecRadioProps) {
    return (
        <div className="flex flex-col border border-[#000000] rounded-lg p-4 mt-4">
            <p className="text-xl font-bold">{info.title}</p>
            <p className="text-lg">{info.description}</p>
        </div>
    );
}