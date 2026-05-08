import { Explained } from "@/components/explained";
import { Legal } from "@/components/legal";
import { Timer } from "@/components/timer";
import { Question } from "@/components/question";
import { Modal } from "@/components/modal";

type ContainerProps = {
  questions: string[];
  explained: string[];
  legal: string[];
};

export const Container = ({ questions, explained, legal }: ContainerProps) => {
  return (
    <main className="flex h-dvh w-dvw max-w-dvw max-h-dvh overflow-x-scroll snap-x snap-mandatory">
      <Timer />
      {questions.map((q, i) => {
        return <Question text={q} key={i + q} />;
      })}
      {explained.map((q, i) => {
        return <Explained text={q} key={i + q} />;
      })}
      <Modal>
        <Legal text={legal} />
      </Modal>
    </main>
  );
};
