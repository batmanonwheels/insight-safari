/** biome-ignore-all lint/suspicious/useIterableCallbackReturn: <explanation> */
"use client";

import { setTimerDuration } from "@/lib/timerDuration";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

type TimerProps = {
  seconds: number;
  // setReset: Dispatch<SetStateAction<boolean>>;
};

type TimerCounterProps = {
  seconds: number;
};

export const Timer = ({ seconds }: TimerProps) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let timeoutId2: NodeJS.Timeout;
    let atTheTop: boolean = true;

    const firstSection: HTMLElement | null = document.querySelector("#timer");
    if (!firstSection) return;

    const resetTimer = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        if (timeoutId) clearTimeout(timeoutId);
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
          timeoutId2 = setTimeout(() => {
            if (timeoutId2) clearTimeout(timeoutId2);
            // setReset(true);
          }, 2 * 1000);
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

export const TimerCounter = ({ seconds }: TimerCounterProps) => {
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
    <div className="flex flex-col items-center gap-4 opacity-90">
      <h4 className="text-3xl">Reset Timer</h4>
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
    </div>
  );
};
