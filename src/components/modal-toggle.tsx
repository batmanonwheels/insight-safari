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
      className="absolute bottom-16 text-3xl p-6 bg-[#0C7158] rounded-lg outline-10 outline-offset-10 active:outline-white"
    >
      Disclaimer
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
      className="text-2xl p-1 mb-1 outline outline-offset-1 rounded-lg w-1/2 h-fit mx-auto"
    >
      Close
    </button>
  );
};
