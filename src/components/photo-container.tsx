import Image from "next/image";
import { Modal } from "@/components/modal";
import { Switcher } from "./switcher";
import { getTimerDuration } from "@/lib/timerDuration";

type PhotoContainerProps = {
  photos: string[];
};

export const PhotoContainer = async ({ photos }: PhotoContainerProps) => {
  const duration = await getTimerDuration();

  return (
    <main
      id="container"
      className="h-dvh w-dvw max-w-dvw max-h-dvh font-gloriola"
    >
      <Switcher photos={photos} duration={duration} />
      <Modal>
        <Image
          height={1920}
          width={1080}
          src={"/flows/disclaimer/disclaimer.png"}
          alt="Legal disclaimer"
          loading="eager"
          className="absolute  bg-none"
        />
      </Modal>
    </main>
  );
};
