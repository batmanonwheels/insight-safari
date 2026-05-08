"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ModalToggleOff } from "./modal-toggle";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <dialog
      id="legal"
      className={`mx-auto my-auto h-3/4 w-3/4 bg-green-800 text-white p-15 pb-5 rounded-2xl outline-10 outline-offset-10`}
      closedby="any"
      open={false}
    >
      <div className={`flex flex-col gap-4 items-center justify-between`}>
        {children}
        <ModalToggleOff />
      </div>
    </dialog>
  );
};
