import { useRef, useState, useCallback, useEffect } from "react";

type UseModalReturnType = {
  modalRef: React.MutableRefObject<HTMLDialogElement | null>;
  handleKeyDown: (event: React.KeyboardEvent<HTMLDialogElement>) => void;
};
export const useModal = (show: boolean, onClose: () => void): UseModalReturnType => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [showModal, setShowModal] = useState(show);

  const handleCloseModal = useCallback((): void => {
    if (onClose) {
      onClose();
    }

    setShowModal(false);
  }, [onClose]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDialogElement>): void => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (showModal) {
      modalElement.showModal();
    } else modalElement.close();
  }, [showModal]);

  return {
    modalRef,
    handleKeyDown,
  };
};
