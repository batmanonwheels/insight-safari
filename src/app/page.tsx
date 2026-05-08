import Link from "next/link";
import { randomPhoto } from "@/lib/randomPhoto";
import Image from "next/image";

export default function Home() {
  const bg = randomPhoto();

  return (
    <main
      className={`relative flex flex-col grow gap-10 items-center justify-center max-w-dvw max-h-dvh overflow-x-scroll text-white`}
    >
      <Image
        height={1920}
        width={1080}
        src="/backgrounds/ferns-1.webp"
        alt=""
        className="absolute top-0 bottom-0 -z-30 object-cover bg-green-800"
      />
      <h1 className="text-8xl font-bold ">INSIGHT SAFARI</h1>
      <nav className="flex flex-wrap justify-center text-4xl gap-10 *:px-15 *:py-10 *:bg-green-800 *:border-10 *:rounded-2xl">
        <Link href="/equity-education">Equity Education</Link>
        {/* <Link href="/communications">Communications</Link>
        <Link href="/financtial-wellness">Financial Wellness</Link>
        <Link href="/platform-support">Platform Support</Link>
        <Link href="/tax-insights">Tax Insights</Link> */}
      </nav>
    </main>
  );
}
