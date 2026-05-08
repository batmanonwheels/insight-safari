"use client";

export const ModalToggleOn = () => {
  const openModal = () => {
    const modal: HTMLDialogElement | null = document.querySelector("#legal");
    if (!modal) return;
    modal.showModal();
  };
  return (
    <button
      type="button"
      onClick={() => openModal()}
      className="absolute bottom-16 text-3xl p-6 bg-green-800 rounded-lg outline-10 outline-offset-10 opacity-70"
    >
      Disclaimer
    </button>
  );
};

export const ModalToggleOff = () => {
  const closeModal = () => {
    const modal: HTMLDialogElement | null = document.querySelector("#legal");
    if (!modal) return;
    modal.close();
  };
  return (
    <button
      type="button"
      onClick={() => closeModal()}
      className="text-2xl p-2 outline outline-offset-1 rounded-lg"
    >
      Close
    </button>
  );
};
