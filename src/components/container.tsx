import Image from "next/image";
import { Legal } from "@/components/legal";
import { Modal } from "@/components/modal";
import { Timer } from "@/components/timer";
import { randomPhoto } from "@/lib/randomPhoto";
import { Switcher } from "./switcher";
import { setTimerDuration, getTimerDuration } from "@/lib/timerDuration";
import { cookies } from "next/headers";

type ContainerProps = {
  questions: string[];
  explained: string[];
  explainedTitle: string;
};

export const Container = async ({
  questions,
  explained,
  explainedTitle,
}: ContainerProps) => {
  const bg = randomPhoto();
  const duration = await getTimerDuration();

  return (
    <main
      id="container"
      className="h-dvh w-dvw max-w-dvw max-h-dvh font-gloriola"
    >
      <Image
        height={1920}
        width={1080}
        src={bg}
        alt=""
        loading="eager"
        className="absolute top-0 bottom-0 w-full h-full -z-30 object-cover bg-[#0C7158]"
      />

      <Switcher
        questions={questions}
        explained={explained}
        explainedTitle={explainedTitle}
        duration={duration}
      />
      <Modal>
        <Legal />
      </Modal>
    </main>
  );
};
