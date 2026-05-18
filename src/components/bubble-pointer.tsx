type BubblePointerProps = {
  orientation: "left" | "right";
};

export const BubblePointer = ({ orientation }: BubblePointerProps) => {
  if (orientation === "left")
    return (
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
    );

  return (
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
  );
};
