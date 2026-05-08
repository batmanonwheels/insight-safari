type LegalProps = {
  text: string[];
};

export const Legal = ({ text }: LegalProps) => {
  return (
    <div className="flex flex-col gap-2 text-base p-3 overflow-y-scroll">
      {text.map((t, i) => (
        <p key={i + t}>{t}</p>
      ))}
    </div>
  );
};
