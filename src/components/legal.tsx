type LegalProps = {
  text: string[];
};

export const Legal = ({ text }: LegalProps) => {
  return (
    <div className="flex flex-col gap-2 text-sm p-3 overflow-y-scroll h-full">
      {text.map((t, i) => (
        <p key={i + t}>{t}</p>
      ))}
    </div>
  );
};
