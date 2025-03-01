import MatchForm from "@/ui/match-form";
import Image from "next/image";
export default async function Page() {
  return (
    <div className="grid grid-cols-10 gap-4">
      <div className="col-span-6">
        <Image src="/ev-purple.png" alt="ev-purple" width={857} height={788} />
      </div>
      <div className="flex flex-col mx-8 col-span-4 overflow-y-auto max-h-screen">
        <MatchForm />
      </div>
    </div>
  );
}