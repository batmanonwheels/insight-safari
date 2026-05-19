import Image from "next/image";
import { ModalToggleOn } from "./modal-toggle";

type SectionProps = {
  children: React.ReactNode;
  type: "question" | "explained" | "splash";
  first?: boolean;
};

export const Section = ({ children, type, first }: SectionProps) => {
  if (type === "explained")
    return (
      <section
        className={`relative min-h-screen min-w-screen flex items-center justify-center gap-80 snap-center snap-always text-white outline-offset-4 `}
      >
        {children}
        <ModalToggleOn />
      </section>
    );

  return (
    <section
      className={`relative min-h-screen min-w-screen flex items-center justify-center snap-center snap-always text-white text-7xl font-bold font-gloriola`}
      id={first ? "first" : undefined}
    >
      {children}
      <div className="absolute left-0 bottom-0 w-screen flex items-center justify-around p-4 opacity-60 font-gloriola animate-pulse ">
        <Image
          height={1000}
          width={1000}
          src={"/svg/line.svg"}
          alt={"Arrow pointing to the left"}
          className="w-5/8"
          loading="eager"
          draggable="false"
        />
        <p className="w-3/8 text-5xl">SWIPE</p>
      </div>
    </section>
  );
};
