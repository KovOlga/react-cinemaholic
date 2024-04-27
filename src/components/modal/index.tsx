import style from "./style.module.css";
import { useRef, useEffect, FC, ReactNode } from "react";
import ModalOverlay from "../modal-overlay";
import { createPortal } from "react-dom";
import { modalRoot } from "../../constants/constants";

interface IModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<IModalProps> = ({ onClose, children }) => {
  const modalContainer = useRef<HTMLDivElement>(null);

  const close = () => {
    onClose();
  };

  useEffect(() => {
    const handleEscClose = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        close();
      }
    };

    const handleOverlayClose = (evt: MouseEvent) => {
      if (evt.target instanceof Node) {
        if (!modalContainer.current!.contains(evt.target)) {
          close();
        }
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleOverlayClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  }, []);

  return createPortal(
    <ModalOverlay>
      <div ref={modalContainer} className={style.modal}>
        <button
          onClick={close}
          className={style.btn_close}
          type="button"
        ></button>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot!
  );
};

export default Modal;
