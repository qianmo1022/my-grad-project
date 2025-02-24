import MatchForm from "@/ui/match-form";
import Image from "next/image";
export default async function Page() {
  return (
    <div className="flex items-center justify-center">
      <Image src="/ev-purple.png" alt="ev-purple" width={857} height={788} />
      <div className="flex flex-col items-center justify-center mx-8">
        <MatchForm />
      </div>
    </div>
  );
}
