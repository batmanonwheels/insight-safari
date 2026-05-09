import Image from "next/image";
import { randomPhoto } from "@/lib/randomPhoto";
import { ModalToggleOn } from "./modal-toggle";

type ExplainedProps = {
  text: string;
  title: string;
};

export const Explained = ({ text, title }: ExplainedProps) => {
  const bg = randomPhoto();

  return (
    <section
      className={`relative min-h-screen min-w-screen flex flex-col items-center justify-center gap-80 snap-center snap-always text-white outline-offset-4 `}
    >
      <Image
        height={1920}
        width={1080}
        src={bg}
        alt=""
        className="absolute top-0 bottom-0 w-full h-full -z-30 object-cover bg-[#0C7158]"
      />
      <div className="relative w-10/12 flex flex-col gap-2 font-bold p-15">
        <div className="absolute top-0 bottom-0 left-0 right-0 rounded-lg blur-xl bg-[#0C7158] opacity-60 -z-10"></div>
        <h2 className="w-full text-4xl">{title}</h2>
        <hr className="w-full border-2" />
        <p className="w-full text-6xl">{text}</p>
      </div>
      <ModalToggleOn />
    </section>
  );
};
