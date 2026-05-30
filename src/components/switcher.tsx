"use client";

import { Section } from "./section";
import { Timer } from "./timer";

// import { useState } from "react";
// import { Splash } from "./splash";
// import { Section } from "./section";
// import { Question } from "./question";
// import { Explained } from "./explained";
// import { Timer } from "./timer";
// import { photos } from "@/lib/photos";

type SwitcherProps = {
  // questions: string[];
  // explained: string[];
  // explainedTitle: string;
  duration: string | undefined;
  photos: string[];
};

// export const Switcher = ({
//   questions,
//   explained,
//   explainedTitle,
//   duration,
// }: SwitcherProps) => {
//   const [isInUse, setIsInUse] = useState<boolean>(true);
//   const [reset, setReset] = useState<boolean>(false);

//   if (isInUse && reset) {
//     setReset(false);
//     setIsInUse(false);
//   }

//   return (
//     <div
//       className="flex h-full w-full overflow-x-scroll snap-x snap-mandatory font-gloriola"
//       onTouchStart={() => setIsInUse(true)}
//     >
//       {isInUse ? (
//         <>
//           <Timer
//             seconds={duration ? parseInt(duration, 10) : 10}
//             setReset={setReset}
//           />
//           {questions.map((q, i) => {
//             return (
//               <Section
//                 type="question"
//                 key={i + q}
//                 first={i === 0}
//                 bg={photos[i]}
//               >
//                 {i % 2 === 0 ? (
//                   <Question
//                     text={q}
//                     orientation={"left"}
//                     first={i === 0}
//                     round="rounded-4xl"
//                   />
//                 ) : (
//                   <Question
//                     text={q}
//                     orientation={"right"}
//                     first={i === 0}
//                     round="rounded-[5.5rem]"
//                   />
//                 )}
//               </Section>
//             );
//           })}

//           {explained.map((q, i) => {
//             return (
//               <Section type="explained" key={i + q} bg={photos[0]}>
//                 <Explained text={q} title={explainedTitle} />
//               </Section>
//             );
//           })}
//         </>
//       ) : (
//         <Section type="splash" bg={photos[0]}>
//           <Splash text={questions[0]} />
//         </Section>
//       )}
//     </div>
//   );
// };

export const Switcher = ({ photos, duration }: SwitcherProps) => {
  return (
    <div className="flex h-full w-full overflow-x-scroll snap-x snap-mandatory font-gloriola">
      <Timer seconds={duration ? parseInt(duration, 10) : 10} />
      {photos.map((photo, i) => {
        return (
          <Section photo={photo} last={i === photos.length - 1} key={photo} />
        );
      })}
    </div>
  );
};
