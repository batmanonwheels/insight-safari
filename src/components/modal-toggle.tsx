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
      className="absolute bottom-16 text-2xl font-bold font-gloriola p-5 bg-[#0C7158] rounded-lg outline-5"
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
      className="text-xl p-2 mb-1 font-bold font-gloriola outline-5 rounded-lg w-1/2 h-fit mx-auto"
    >
      CLOSE
    </button>
  );
};
