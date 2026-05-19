"use client";

export const Fullscreen = () => {
  const handleFullscreen = async () => {
    try {
      const element = document.documentElement;

      if (!document.fullscreenElement) {
        await element.requestFullscreen();
      } else if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch (err: any) {
      console.error(`Error attempting to toggle fullscreen: ${err.message}`);
    }
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: <explanation>
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className="h-10 w-auto flex items-center gap-6 opacity-75"
      id="fullscreen"
      onClick={() => handleFullscreen()}
      onTouchStart={() => handleFullscreen()}
    >
      <h1 className="text-2xl">Toggle Fullscreen</h1>
      <svg
        fill="white"
        height="200px"
        width="200px"
        version="1.1"
        id="Capa_1"
        viewBox="0 0 489.001 489.001"
        className="h-full w-10"
      >
        <title>fullscreen button</title>
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M2.2,168.151l-2.1-151.3c-0.1-7.7,6.2-14,13.9-13.9l151.3,2.2c12.1,0.2,18.1,14.8,9.5,23.4l-42.1,42.1l70,70l-65,65 l-70-70l-42.1,42.1C17.1,186.251,2.4,180.251,2.2,168.151z"></path>{" "}
              <path d="M421.3,136.551l42.1,42.1c8.6,8.6,23.2,2.6,23.4-9.5l2.2-151.3c0.1-7.7-6.2-14-13.9-13.9l-151.3,2.2 c-12.1,0.2-18.1,14.8-9.5,23.4l42,41.9l-70,70l65,65L421.3,136.551z"></path>{" "}
              <path d="M314.2,460.451c-8.6,8.6-2.6,23.2,9.5,23.4l151.3,2.2c7.7,0.1,14-6.2,13.9-13.9l-2.2-151.3c-0.2-12.1-14.8-18.1-23.4-9.5 l-42.1,42.1l-70-70l-65,65l70,70L314.2,460.451z"></path>{" "}
              <path d="M14,485.051l151.3-2.2c12.1-0.2,18.1-14.8,9.5-23.4l-42.1-42l70-70l-65-65l-70,70l-42.1-42.1c-8.6-8.6-23.2-2.6-23.4,9.5 L0,471.151C0,478.851,6.3,485.151,14,485.051z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
};
