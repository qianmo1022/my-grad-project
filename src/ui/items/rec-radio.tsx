import { RecRadioProps } from "../../lib/definitions";

export default function RecRadio(info: RecRadioProps) {
    return (
        <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl font-bold">{info.title}</h1>
        </div>
    );
}