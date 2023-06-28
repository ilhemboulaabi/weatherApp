import { CloseButton, ModalContent, ModalWrapper } from "./styles";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <ModalWrapper onClick={handleCloseClick}>
      <ModalContent onClick={handleOverlayClick}>
        {children}
        <CloseButton onClick={handleCloseClick}>Close</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;






