"use client";

export const Fullscreen = () => {
  const handleFullscreen = async () => {
    try {
      const element = document.documentElement;

      if (!document.fullscreenElement) {
        await element.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err: any) {
      console.error(`Error attempting to toggle fullscreen: ${err.message}`);
    }
  };

  handleFullscreen();

  return <div className="h-0 w-0 opacity-0 -z-50" id="top"></div>;
};
