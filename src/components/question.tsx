import { randomPhoto } from "@/lib/randomPhoto";
import Image from "next/image";

type QuestionProps = {
  text: string;
};

export const Question = ({ text }: QuestionProps) => {
  const bg = randomPhoto();

  return (
    <section
      className={`relative min-h-screen min-w-screen flex items-center justify-center bg-[url(/backgrounds/ferns-1.webp)] bg-green-800 bg-cover snap-center text-white text-7xl font-bold `}
    >
      <div className="w-3/4 flex flex-col items-center justify-center bg-green-800 text-white p-15 rounded-2xl outline-10 outline-offset-10">
        <h2 className="m-auto">{text}</h2>
      </div>
      <div className="absolute left-0 bottom-0 w-screen flex items-center justify-around p-4">
        <Image
          height={1000}
          width={1000}
          src={"/svg/line.svg"}
          alt={"Arrow pointing to the left"}
          className="w-3/4"
        />
        <p className="w-1/4 text-5xl">SWIPE</p>
      </div>
    </section>
  );
};
