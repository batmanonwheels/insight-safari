import Image from "next/image";
import { randomPhoto } from "@/lib/randomPhoto";

type QuestionProps = {
  text: string;
};

export const Question = ({ text }: QuestionProps) => {
  const bg = randomPhoto();

  return (
    <section
      className={`relative min-h-screen min-w-screen flex items-center justify-center snap-center snap-always text-white text-7xl font-bold font-gloriola`}
    >
      <Image
        height={1920}
        width={1080}
        src={bg}
        alt=""
        className="absolute top-0 bottom-0 w-full h-full -z-30 object-cover bg-[#0C7158]"
      />
      <div className="w-3/4 flex flex-col font-bold items-center justify-center bg-[#0C7158] text-white p-15 rounded-2xl outline-10 outline-offset-10">
        <h2 className="m-auto">{text}</h2>
      </div>
      <div className="absolute left-0 bottom-0 w-screen flex items-center justify-around p-4 opacity-60">
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
