import { randomPhoto } from "@/lib/randomPhoto";
import { ModalToggleOn } from "./modal-toggle";

type ExplainedProps = {
  text: string;
};

export const Explained = ({ text }: ExplainedProps) => {
  const bg = randomPhoto();

  return (
    <section
      className={`relative min-h-screen min-w-screen flex flex-col items-center justify-center gap-80 bg-[url(/backgrounds/ferns-1.webp)] bg-green-800 bg-cover snap-center text-white  outline-offset-4`}
    >
      <div className="w-3/4 flex flex-col items-center  justify-center bg-green-800 text-7xl font-bold p-15 rounded-lg outline-10 outline-offset-10">
        <h2 className="m-auto">{text}</h2>
      </div>
      <ModalToggleOn />
    </section>
  );
};
