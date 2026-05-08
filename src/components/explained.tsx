import { randomPhoto } from "@/lib/randomPhoto";
import { ModalToggleOn } from "./modal-toggle";
import Image from "next/image";

type ExplainedProps = {
  text: string;
};

export const Explained = ({ text }: ExplainedProps) => {
  const bg = randomPhoto();

  return (
    <section
      className={`relative min-h-screen min-w-screen flex flex-col items-center justify-center gap-80 snap-center text-white outline-offset-4`}
    >
      <Image
        height={1920}
        width={1080}
        src="/backgrounds/ferns-1.webp"
        alt=""
        className="absolute top-0 bottom-0 w-full -z-30 object-cover bg-green-800"
      />
      <div className="w-3/4 flex flex-col items-center  justify-center bg-green-800 text-5xl font-bold p-15 rounded-lg outline-10 outline-offset-10">
        <h2 className="m-auto">{text}</h2>
      </div>
      <ModalToggleOn />
    </section>
  );
};
