import Image from "next/image";
import Link from "next/link";
import { randomPhoto } from "@/lib/randomPhoto";

export default function Home() {
  const bg = randomPhoto();

  return (
    <main
      className={`relative flex flex-col grow gap-10 items-center justify-center max-w-dvw max-h-dvh overflow-x-scroll text-white font-gloriola font-bold`}
    >
      <Image
        height={1080}
        width={1920}
        src={bg}
        alt=""
        loading="eager"
        className="absolute top-0 bottom-0 w-full h-full -z-30 object-cover bg-[#0C7158]"
      />
      <h1 className="text-7xl p-2">INSIGHT SAFARI</h1>
      <nav className="flex flex-wrap justify-center text-3xl gap-10 *:px-15 *:py-10 *:bg-[#0C7158] *:border-10 *:rounded-2xl">
        <Link href="/equity-education">EQUITY EDUCATION</Link>
        <Link href="/communications">COMMUNICATIONS</Link>
        <Link href="/financial-wellness">FINANCIAL WELLNESS</Link>
        <Link href="/platform-support">PLATFORM SUPPORT</Link>
        <Link href="/tax-insights">TAX INSIGHTS</Link>
      </nav>
    </main>
  );
}
