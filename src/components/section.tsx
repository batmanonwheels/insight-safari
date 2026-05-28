import Image from "next/image";
import { ModalToggleOn } from "./modal-toggle";

// type SectionProps = {
//   children: React.ReactNode;
//   type: "question" | "explained" | "splash";
//   first?: boolean;
//   bg: string;
// };

// export const Section = ({ children, type, first, bg }: SectionProps) => {
//   if (type === "explained")
//     return (
//       <section
//         className={`relative min-h-screen min-w-screen flex items-center justify-center gap-80 snap-center snap-always text-white outline-offset-4`}
//       >
//         <Image
//           height={1920}
//           width={1080}
//           src={bg}
//           alt=""
//           loading="eager"
//           className="absolute top-0 bottom-0 w-full h-full -z-30 object-cover bg-[#0C7158]"
//         />
//         {children}
//         <ModalToggleOn />
//       </section>
//     );

//   return (
//     <section
//       className={`relative min-h-screen min-w-screen flex items-center justify-center snap-center snap-always text-white text-7xl font-bold font-gloriola`}
//       id={first ? "first" : undefined}
//     >
//       <Image
//         height={1920}
//         width={1080}
//         src={bg}
//         alt=""
//         loading="eager"
//         className="absolute top-0 bottom-0 w-full h-full -z-30 object-cover bg-[#0C7158]"
//       />
//       {children}
//       <div className="absolute left-0 bottom-0 h-60 flex items-center justify-center opacity-90 font-gloriola mx-auto w-10/12">
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 3208 817"
//           version="1.1"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{
//             fillRule: "evenodd",
//             clipRule: "evenodd",
//             strokeMiterlimit: 10,
//           }}
//           className="min-h-0 min-w-0"
//         >
//           <title>Swipe Arrow</title>
//           <g>
//             <path
//               d="M2799.486,408.276l-2391.21,0"
//               style={{ fill: "none", fillRule: "nonzero" }}
//             />
//             <path
//               d="M567.389,500.872l-99.485,-92.596l99.485,-92.596"
//               style={{
//                 fill: "none",
//                 fillRule: "nonzero",
//                 stroke: "#fff",
//                 strokeWidth: "80px",
//               }}
//             />
//             <path
//               d="M2799.486,408.276l-2331.582,0"
//               style={{
//                 fill: "none",
//                 fillRule: "nonzero",
//                 stroke: "#fff",
//                 // strokeWidth: "81.25px",
//                 strokeWidth: "80px",
//               }}
//             />
//           </g>
//         </svg>
//         <p className="min-h-0 min-w-0 text-6xl text-center font-bold">SWIPE</p>
//       </div>
//     </section>
//   );
// };

type SectionProps = {
  photo: string;
  last: boolean;
};

export const Section = ({ photo, last }: SectionProps) => {
  return (
    <section
      className={`relative min-h-screen min-w-screen flex items-center justify-center snap-center snap-always text-white text-7xl font-bold font-gloriola`}
    >
      <Image
        height={1920}
        width={1080}
        src={photo}
        alt=""
        loading="eager"
        className="absolute top-0 bottom-0 w-full h-full -z-30 object-cover bg-[#0C7158]"
      />
      {last && <ModalToggleOn />}
    </section>
  );
};
