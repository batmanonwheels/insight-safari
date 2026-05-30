"use client";

import { useState } from "react";

type SplashProps = {
  text: string;
};

export const Splash = ({ text }: SplashProps) => {
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const handleSplash = () => {
    const firstSpeechBubble: HTMLDivElement | null = document.querySelector(
      "#first-speech-bubble",
    );
    if (!firstSpeechBubble) return;

    setIsTouched(true);
  };

  return (
    <div
      className={`@container relative w-3/4 h-auto min-w-0 min-h-0 flex flex-col font-bold items-center justify-center bg-[#0C7158] text-white p-15 rounded-4xl outline-10 animate-pulse`}
    >
      <h2 className={`m-auto w-full h-full text-[15cqi]`}>{text}</h2>
    </div>
  );
};
