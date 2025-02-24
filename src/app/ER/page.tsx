import MatchForm from "@/ui/match-form";

export default async function Page() {
    return (
      <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">This is ER Page</h1>
          <MatchForm />
      </div>
    );
  }