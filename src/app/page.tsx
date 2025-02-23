import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={"/EV"} key={"EV"}>
      <div className="mb-8"><Image src={"/EV.png"} alt="EV" width={1000} height={760} /></div>
      </Link>
      <Link href={"/ER"} key={"ER"}>
      <div><Image src={"/ER.png"} alt="ER" width={1000} height={760} /></div>
      </Link>
    </div>
  );
}
