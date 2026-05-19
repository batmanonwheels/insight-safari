/** biome-ignore-all lint/suspicious/useIterableCallbackReturn: <explanation> */
"use client";

import { useEffect, useState } from "react";
import { setTimerDuration } from "@/lib/timerDuration";

type TimerProps = {
  seconds?: number;
};

type TimerCounterProps = {
  seconds?: number;
};

export const Timer = ({ seconds = 3 }: TimerProps) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let atTheTop: boolean = true;

    const firstSection: HTMLElement | null = document.querySelector("#timer");
    if (!firstSection) return;

    const resetTimer = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const modal: HTMLDialogElement | null =
          document.querySelector("#legal");
        if (!modal) return;
        modal.close();
        if (!atTheTop) {
          firstSection.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
        }
      }, seconds * 1000);
    };

    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "scroll",
      "touchstart",
    ];

    events.forEach((event) => window.addEventListener(event, resetTimer));

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          atTheTop = false;
        }
      });
    };

    const observer = new IntersectionObserver(callback);

    observer.observe(firstSection);

    resetTimer();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [seconds]);

  return <div className="h-0 w-dvw opacity-0 -z-50" id="timer"></div>;
};

export const TimerCounter = ({ seconds = 10 }: TimerCounterProps) => {
  const [count, setCount] = useState<number>(seconds);

  const handleCount = (operation: "inc" | "dec") => {
    const input: HTMLInputElement | null =
      document.querySelector("input[type=number]");

    if (!input) return;

    let currentCount = count;

    if (operation === "inc") {
      input.stepUp();
      currentCount++;
    } else if (operation === "dec") {
      input.stepDown();
      currentCount--;
    }
    setCount(currentCount);
    setTimerDuration(currentCount);
  };

  return (
    <div
      className="h-10 w-30 flex items-center justify-between gap-2 text-2xl"
      id="timer-counter"
    >
      <button
        type="button"
        className="h-10 w-10 m-auto text-center border rounded-md"
        onClick={() => handleCount("dec")}
      >
        -
      </button>
      <input
        type="number"
        name="seconds"
        className="h-10 w-10 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        defaultValue={count}
      />
      <button
        type="button"
        className="h-10 w-10 m-auto text-center border rounded-md"
        onClick={() => handleCount("inc")}
      >
        +
      </button>
    </div>
  );
};
