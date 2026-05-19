type ExplainedProps = {
  text: string;
  title: string;
};

export const Explained = ({ text, title }: ExplainedProps) => {
  return (
    <div className="relative min-w-0 min-h-0 w-10/12 flex flex-col gap-2 font-bold p-15">
      <div className="absolute top-0 bottom-0 left-0 right-0 rounded-lg blur-xl bg-[#0C7158] opacity-50 -z-10"></div>
      <h2 className="w-full text-[5cqi]">{title}</h2>
      <hr className="w-full border-2" />
      <p className="w-full text-[7cqi]">{text}</p>
    </div>
  );
};
