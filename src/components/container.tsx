import { Explained } from "@/components/explained";
import { Legal } from "@/components/legal";
import { Modal } from "@/components/modal";
import { Question } from "@/components/question";
import { Timer } from "@/components/timer";

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
    <main className="flex h-dvh w-dvw max-w-dvw max-h-dvh overflow-x-scroll snap-x snap-mandatory ">
      <Timer />
      {questions.map((q, i) => {
        return <Question text={q} key={i + q} />;
      })}
      {explained.map((q, i) => {
        return <Explained text={q} title={explainedTitle} key={i + q} />;
      })}
      <Modal>
        <Legal />
      </Modal>
    </main>
  );
};
