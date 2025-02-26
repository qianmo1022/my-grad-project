import RecRadio from "../items/rec-radio";

export default function Version() {
    return (
        <div className="flex flex-col">
            <div className="text-lg">版本</div>
            <RecRadio {...{ title: "v1.0.0", description: "2023/08/01" }} />
        </div>
    );
}