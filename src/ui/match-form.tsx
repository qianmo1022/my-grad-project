import Radio from "./items/radio";

export default async function MatchForm() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">This is Match Form</h1>
            <Radio />
            <Radio />
            <Radio />
        </div>
    );
}