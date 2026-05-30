import Image from "next/image";

import { ModalToggleOff } from "./modal-toggle";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <dialog
      id="legal"
      className={`relative min-h-screen min-w-screen bg-transparent backdrop:opacity-35 backdrop:backdrop-blur-2xl`}
      closedby="closerequest"
      open={false}
    >
      <Image
        height={1920}
        width={1080}
        alt="Safari background"
        src={"/backgrounds/ferns-4.webp"}
        className="h-0 w-0"
      />
      {children}
      <ModalToggleOff />
    </dialog>
  );
};

// import { ModalToggleOff } from "./modal-toggle";

// export const Modal = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <dialog
//       id="legal"
//       className={`relative min-h-screen min-w-screen bg-none backdrop:bg-none`}
//       closedby="closerequest"
//       open={false}
//     >
//       {/* {children} */}
//       {/* <ModalToggleOff /> */}
//     </dialog>
//   );
// };
