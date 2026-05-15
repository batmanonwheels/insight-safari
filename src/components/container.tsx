import { Explained } from "@/components/explained";
import { Legal } from "@/components/legal";
import { Modal } from "@/components/modal";
import { Question } from "@/components/question";
import { Timer } from "@/components/timer";
import { Section } from "./section";
import { Fullscreen } from "./fullscreen";

type ContainerProps = {
  questions: string[];
  explained: string[];
  explainedTitle: string;
};

export const Container = ({
  questions,
  explained,
  explainedTitle,
}: ContainerProps) => {
  return (
    <main
      id="container"
      className=" flex h-dvh w-dvw max-w-dvw max-h-dvh overflow-x-scroll snap-x snap-mandatory font font-gloriola"
    >
      <Timer />
      <Fullscreen />
      {questions.map((q, i) => {
        return (
          <Section type="question" key={i + q} first={i === 0}>
            {i % 2 === 0 ? (
              <Question text={q} orientation={"left"} />
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
