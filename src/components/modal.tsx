import { ModalToggleOff } from "./modal-toggle";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <dialog
      id="legal"
      className={`mx-auto my-auto h-3/4 w-3/4 bg-[#0C7158] text-white p-5 rounded-2xl outline-10 outline-offset-10 backdrop:bg-[#0C7158] backdrop:opacity-80`}
      closedby="closerequest"
      open={false}
    >
      <div
        className={`flex flex-col gap-2 justify-between overflow-scroll h-full`}
      >
        {children}
        <ModalToggleOff />
      </div>
    </dialog>
  );
};
