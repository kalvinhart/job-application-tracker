import React, { PropsWithChildren } from "react";
import { Dialog, DialogCloseButton } from "./Modal.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "./useModal";

type ModalProps = {
  show: boolean;
  onClose: () => void;
};
const Modal: React.FC<PropsWithChildren<ModalProps>> = ({ children, show, onClose }) => {
  const { modalRef, handleKeyDown } = useModal(show, onClose);

  return (
    <Dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}>
      <DialogCloseButton onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </DialogCloseButton>
      {children}
    </Dialog>
  );
};

export default Modal;
