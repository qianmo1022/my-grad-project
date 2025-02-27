import RecRadio from "../items/rec-radio";
import { RecRadioProps } from "../../lib/definitions";

export const version: RecRadioProps[] = [
    { title: "v1.0.0", description: "2023/08/01" },
    { title: "v1.0.1", description: "2023/08/02" }, 
]

export default function Version() {
    return (
        <div className="flex flex-col">
            <p className="text-2xl m-4">版本</p>
            {version.map((item, index) => {
                return <RecRadio key={index} {...item} /> 
            })}
        </div>
    );
}