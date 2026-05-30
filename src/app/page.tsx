import Image from "next/image";
import { Fullscreen } from "@/components/fullscreen";
import { TimerCounter } from "@/components/timer";
import { getTimerDuration } from "@/lib/timerDuration";
import { Nav } from "@/components/nav";

export default async function Home() {
  const duration = await getTimerDuration();

  return (
    <main
      className={`relative flex flex-col grow gap-10 items-center justify-center max-w-dvw max-h-dvh overflow-x-scroll text-white font-gloriola font-bold`}
    >
      <Image
        height={1080}
        width={1920}
        src={"/backgrounds/ferns-2.webp"}
        alt=""
        loading="eager"
        className="absolute top-0 bottom-0 w-full h-full -z-30 object-cover bg-[#0C7158]"
      />
      <h1 className="text-7xl p-2">INSIGHT SAFARI</h1>

      <Nav />

      <Fullscreen />
      <TimerCounter seconds={duration ? parseInt(duration, 10) : 10} />
    </main>
  );
}
