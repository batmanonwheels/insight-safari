import Image from "next/image";
import { randomPhoto } from "@/lib/randomPhoto";

type SectionProps = {
  children: React.ReactNode;
  type: "question" | "explained";
  first?: boolean;
};

export const Section = ({ children, type, first }: SectionProps) => {
  const bg = randomPhoto();

  if (type === "explained")
    return (
      <section
        className={`relative min-h-screen min-w-screen flex flex-col items-center justify-center gap-80 snap-center snap-always text-white outline-offset-4 `}
      >
        <Image
          height={1920}
          width={1080}
          src={bg}
          alt=""
          loading="eager"
          className="absolute top-0 bottom-0 w-full h-full -z-30 object-cover bg-[#0C7158]"
        />
        {children}
      </section>
    );

  return (
    <section
      className={`relative min-h-screen min-w-screen flex items-center justify-center snap-center snap-always text-white text-7xl font-bold font-gloriola`}
      id={first ? "first" : undefined}
    >
      <Image
        height={1920}
        width={1080}
        src={bg}
        alt=""
        loading="eager"
        className="absolute top-0 bottom-0 w-full h-full -z-30 object-cover bg-[#0C7158]"
      />
      {children}
    </section>
  );
};
