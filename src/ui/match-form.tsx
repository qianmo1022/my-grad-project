import Version from "./parts/version";
import Appearance from "./parts/appearance";
import Interior from "./parts/interior";
import Battery from "./parts/battery";
import Hub from "./parts/hub";

export default function MatchForm() {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold">智界R7</h1>
            <Version />
            <Appearance />
            <Interior />
            <Battery />
            <Hub />
        </div>
    );
}