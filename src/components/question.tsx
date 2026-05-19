import { BubblePointer } from "./bubble-pointer";

type QuestionProps = {
  text: string;
  orientation: "left" | "right";
  first?: boolean;
};

export const Question = ({ text, orientation, first }: QuestionProps) => {
  return (
    <div
      className={`@container relative w-3/4 h-auto min-w-0 min-h-0 flex flex-col font-bold items-center justify-center bg-[#0C7158] text-white p-15 rounded-4xl outline-10`}
      id={first ? "first-speech-bubble" : undefined}
    >
      <h2 className={`m-auto w-full h-full text-[15cqi]`}>{text}</h2>
      <BubblePointer orientation={orientation} />
    </div>
  );
};
