import Version from "./parts/version";
import Appearance from "./parts/appearance";
import Interior from "./parts/interior";

export default function MatchForm() {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold">智界R7</h1>
            <Version />
            <Appearance />
            <Interior />
        </div>
    );
}