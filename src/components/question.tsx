import Image from "next/image";
import { BubblePointer } from "./bubble-pointer";

type QuestionProps = {
  text: string;
  orientation: "left" | "right";
  first?: boolean;
};

export const Question = ({ text, orientation, first }: QuestionProps) => {
  return (
    <>
      <div
        className={`@container relative w-3/4 h-auto min-w-0 min-h-0 flex flex-col font-bold items-center justify-center bg-[#0C7158] text-white p-15 rounded-4xl outline-10`}
        id={first ? "first-speech-bubble" : undefined}
      >
        <h2 className={`m-auto w-full h-full text-[15cqi]`}>{text}</h2>
        <BubblePointer orientation={orientation} />
      </div>
      <div className="absolute left-0 bottom-0 w-screen flex items-center justify-around p-4 opacity-60 animate-pulse ">
        <Image
          height={1000}
          width={1000}
          src={"/svg/line.svg"}
          alt={"Arrow pointing to the left"}
          className="w-3/4 "
          loading="eager"
        />
        <p className="w-1/4 text-5xl">SWIPE</p>
      </div>
    </>
  );
};
