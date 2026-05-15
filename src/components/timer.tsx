/** biome-ignore-all lint/suspicious/useIterableCallbackReturn: <explanation> */
"use client";

import { useEffect } from "react";

type TimerProps = {
  seconds?: number;
};

export const Timer = ({ seconds = 3 }: TimerProps) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let atTheTop: boolean = true;

    const firstSection: HTMLElement | null = document.querySelector("#top");
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

  return <div className="h-0 w-dvw opacity-0 -z-50" id="top"></div>;
};
