"use client";

export const ModalToggleOn = () => {
  const openModal = () => {
    const modal: HTMLDialogElement | null = document.querySelector("#legal");
    if (!modal) return;
    if (modal.open) return;
    modal.showModal();
  };

  return (
    <button
      id="modal-toggle"
      type="button"
      onClick={() => openModal()}
      className="absolute bottom-15 right-20 w-1/4 text-2xl font-bold font-gloriola p-5 bg-[#0C7158] rounded-lg outline-5 opacity-0 cursor-pointer"
    >
      DISCLAIMER
    </button>
  );
};

export const ModalToggleOff = () => {
  const closeModal = () => {
    const modal: HTMLDialogElement | null = document.querySelector("#legal");
    if (!modal) return;
    if (!modal.open) return;
    modal.close();
  };
  return (
    <button
      type="button"
      onClick={() => closeModal()}
      className="absolute w-screen h-screen opacity-0 b"
    ></button>
  );
};
