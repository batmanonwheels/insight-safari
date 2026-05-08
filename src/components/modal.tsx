import { ModalToggleOff } from "./modal-toggle";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <dialog
      id="legal"
      className={`mx-auto my-auto h-3/4 w-3/4 bg-green-800 text-white p-5 rounded-2xl outline-10 outline-offset-10 backdrop:bg-green-800 backdrop:opacity-80 `}
      closedby="any"
      open={false}
    >
      <div
        className={`flex flex-col gap-4 justify-between overflow-scroll h-full`}
      >
        <h2 className="p-2 text-4xl">Disclaimer</h2>
        {children}
        {/* <ModalToggleOff /> */}
      </div>
    </dialog>
  );
};
