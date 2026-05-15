import Image from "next/image";

type QuestionProps = {
  text: string;
  orientation: "left" | "right";
};

export const Question = ({ text, orientation }: QuestionProps) => {
  return (
    <>
      <div className="@container relative w-3/4 h-auto min-w-0 min-h-0 flex flex-col font-bold items-center justify-center bg-[#0C7158] text-white p-15 rounded-4xl outline-10 animate-appear">
        <h2 className="m-auto w-full h-full text-[15cqi]">{text}</h2>
        {orientation === "left" ? (
          <svg
            width={200}
            height={200}
            viewBox="-100 -100 200 200"
            className="absolute -bottom-31 left-0 "
          >
            <title>Speech bubble pointer left</title>
            <g>
              <polyline
                points="-1,-18 -30,60 65,-18"
                fill="none"
                stroke="white"
                strokeWidth={"10px"}
                strokeLinecap="round"
              />
              <polyline points="9,-30 -23,50 71,-30" fill="#0C7158" />
            </g>
          </svg>
        ) : (
          <svg
            width={200}
            height={200}
            viewBox="-100 -100 200 200"
            className="absolute -bottom-31 -right-10 -scale-x-100"
          >
            <title>speech bubble pointer right</title>
            <g>
              <polyline
                points="-1,-18 -30,60 65,-18"
                fill="none"
                stroke="white"
                strokeWidth={"10px"}
                strokeLinecap="round"
              />
              <polyline points="9,-30 -23,50 71,-30" fill="#0C7158" />
              {/* <polyline
                points="-1,-18 76,60 65,-18"
                fill="none"
                stroke="white"
                strokeWidth={"10px"}
                strokeLinecap="round"
              />
              <polyline points="-6,-30 69,46 58,-30" fill="#0C7158" /> */}
            </g>
          </svg>
        )}
      </div>
      <div className="absolute left-0 bottom-0 w-screen flex items-center justify-around p-4 opacity-60">
        <Image
          height={1000}
          width={1000}
          src={"/svg/line.svg"}
          alt={"Arrow pointing to the left"}
          className="w-3/4"
          loading="eager"
        />
        <p className="w-1/4 text-5xl">SWIPE</p>
      </div>
    </>
  );
};
