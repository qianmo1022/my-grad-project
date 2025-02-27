import RecRadio from "../items/rec-radio";

export default function Version() {
    return (
        <div className="flex flex-col">
            <p className="text-2xl m-4">版本</p>
            <RecRadio {...{ title: "v1.0.0", description: "2023/08/01" }} />
        </div>
    );
}