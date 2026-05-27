"use client";

import { useState } from "react";
import { Splash } from "./splash";
import { Section } from "./section";
import { Question } from "./question";
import { Explained } from "./explained";
import { Timer } from "./timer";

type SwitcherProps = {
  questions: string[];
  explained: string[];
  explainedTitle: string;
  duration: string | undefined;
};

export const Switcher = ({
  questions,
  explained,
  explainedTitle,
  duration,
}: SwitcherProps) => {
  const [isInUse, setIsInUse] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);

  if (isInUse && reset) {
    setReset(false);
    setIsInUse(false);
  }

  return (
    <div
      className="flex h-full w-full overflow-x-scroll snap-x snap-mandatory font-gloriola"
      onTouchStart={() => setIsInUse(true)}
    >
      {isInUse ? (
        <>
          <Timer
            seconds={duration ? parseInt(duration, 10) : 10}
            setReset={setReset}
          />
          {questions.map((q, i) => {
            return (
              <Section type="question" key={i + q} first={i === 0}>
                {i % 2 === 0 ? (
                  <Question text={q} orientation={"left"} first={i === 0} />
                ) : (
                  <Question text={q} orientation={"right"} />
                )}
              </Section>
            );
          })}

          {explained.map((q, i) => {
            return (
              <Section type="explained" key={i + q}>
                <Explained text={q} title={explainedTitle} />
              </Section>
            );
          })}
        </>
      ) : (
        <Section type="splash">
          <Splash text={questions[0]} />
        </Section>
      )}
    </div>
  );
};
