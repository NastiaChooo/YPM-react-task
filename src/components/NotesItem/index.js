import React, { useCallback, useState } from "react";
import Modal from "../Modal";
import "./style.css";
import NoteForm from "../NoteForm";

const NotesListItem = ({
  title,
  status,
  description,
  deleteNote,
  id,
  changeStatus,
  changeNoteData,
}) => {
  const [showNoteModal, setShowModal] = useState(false);
  const [openEditMode, setOpenEditMode] = useState(false);

  const onShowNoteModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const onEditModeToggle = () => {
    setOpenEditMode(!openEditMode);
  };

  return (
    <>
      <li onClick={() => setShowModal(true)} className="note-item">
        <h2
          className="note-item__title"
          style={{ textDecoration: status && "line-through" }}
        >
          {title}
        </h2>
        <p
          className="note-item__description"
          style={{ textDecoration: status && "line-through" }}
        >
          {description}
        </p>
      </li>
      <Modal
        show={showNoteModal}
        onClose={onShowNoteModal}
        title={"Notes # " + id}
      >
        <div className="modal-bnt__wrapper">
          <button
            className="modal-btn"
            onClick={() => {
              deleteNote(id);
            }}
          >
            Delete note
          </button>
          <button className="modal-btn" onClick={onEditModeToggle}>
            {openEditMode ? "Show mode" : "Edit mode"}
          </button>
        </div>
        {!openEditMode ? (
          <div>
            <h4
              className="show-mode__title"
              style={{ textDecoration: status && "line-through" }}
            >
              {title}
            </h4>
            <p style={{ textDecoration: status && "line-through" }}>
              {description}
            </p>
            <div className="checkboxWrap">
              Done:{" "}
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={status}
                  onChange={(e) => {
                    changeStatus({ id, status: e.target.checked });
                  }}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        ) : (
          <div>
            <NoteForm
              description={description}
              title={title}
              id={id}
              changeNoteData={changeNoteData}
            />
          </div>
        )}
      </Modal>
    </>
  );
};

export default NotesListItem;
