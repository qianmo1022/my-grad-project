'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-8" onClick={() => router.push('/EV')}><Image src={"/EV.png"} alt="EV" width={1000} height={760} /></div>
      <div onClick={() => router.push('/ER')}><Image src={"/ER.png"} alt="ER" width={1000} height={760} /></div>
    </div>
  );
}
