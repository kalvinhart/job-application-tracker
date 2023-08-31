import { useRef, useCallback, useEffect } from "react";

type UseModalReturnType = {
  modalRef: React.MutableRefObject<HTMLDialogElement | null>;
  handleKeyDown: (event: React.KeyboardEvent<HTMLDialogElement>) => void;
};
export const useModal = (show: boolean, onClose: () => void): UseModalReturnType => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = useCallback((): void => {
    if (onClose) {
      onClose();
    }
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
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (show) {
      modalElement.show();
    } else {
      console.log("closing");
      modalElement.close();
    }
  }, [show]);

  return {
    modalRef,
    handleKeyDown,
  };
};
