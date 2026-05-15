/** biome-ignore-all lint/suspicious/useIterableCallbackReturn: <explanation> */
"use client";

import { useEffect } from "react";

export const Timer = ({ seconds = 15 }) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const top: HTMLElement | null = document.querySelector("#top");

    if (!top) return;

    const resetTimer = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const modal: HTMLDialogElement | null =
          document.querySelector("#legal");
        if (!modal) return;
        modal.close();
        document.querySelector("#top")?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
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
        if (!entry.isIntersecting) resetTimer();
      });
    };

    const observer = new IntersectionObserver(callback);

    observer.observe(top);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [seconds]);

  return <div className="h-0 w-0 opacity-0" id="top"></div>;
};
