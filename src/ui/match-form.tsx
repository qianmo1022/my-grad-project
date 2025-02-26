import Version from "./parts/version";

export default async function MatchForm() {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold">智界R7</h1>
            <Version />
        </div>
    );
}