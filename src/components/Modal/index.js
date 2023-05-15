import { useRef } from "react";
import "./style.css";

const Modal = ({ children, show, onClose, title }) => {
  const modalRef = useRef(null);
  const onCloseModal = (event) => {
    onClose();
  };

  return (
    <div
      ref={modalRef}
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
      onClick={onCloseModal}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <span className="close-modal-btn" onClick={onClose}>
            ×
          </span>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
