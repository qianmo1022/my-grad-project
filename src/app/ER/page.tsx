import MatchForm from "@/ui/match-form";

export default async function Page() {
  return (
    <div className="flex">
      <h1 className="text-3xl font-bold">This is ER Page</h1>
      <div className="flex flex-col mx-8">
        <MatchForm />
      </div>
    </div>
  );
}
