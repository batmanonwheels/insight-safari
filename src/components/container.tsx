import Image from "next/image";
import { Explained } from "@/components/explained";
import { Legal } from "@/components/legal";
import { Modal } from "@/components/modal";
import { Question } from "@/components/question";
import { Timer } from "@/components/timer";
import { Section } from "./section";
import { Splash } from "./splash";
import { getTimerDuration } from "@/lib/timerDuration";
import { randomPhoto } from "@/lib/randomPhoto";

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
      className="flex h-dvh w-dvw max-w-dvw max-h-dvh overflow-x-scroll snap-x snap-mandatory font-gloriola"
    >
      <Image
        height={1920}
        width={1080}
        src={bg}
        alt=""
        loading="eager"
        className="absolute top-0 bottom-0 w-full h-full -z-30 object-cover bg-[#0C7158]"
      />
      <Timer seconds={duration ? parseInt(duration, 10) : undefined} />

      <Section type="splash">
        <Splash text={questions[0]} />
      </Section>

      {questions.map((q, i) => {
        return (
          <Section type="question" key={i + q} first={i === 0}>
            {i % 2 === 0 ? (
              <Question text={q} orientation={"left"} first={i === 0} />
            ) : (
              <Question text={q} orientation={"right"} />
            )}
          </Section>
        );
      })}

      {explained.map((q, i) => {
        return (
          <Section type="explained" key={i + q}>
            <Explained text={q} title={explainedTitle} />
          </Section>
        );
      })}

      <Modal>
        <Legal />
      </Modal>
    </main>
  );
};
