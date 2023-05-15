import React, { useCallback, useState } from "react";
import Modal from "../Modal";
import NoteForm from "../NoteForm";
import { handleAddNote } from "../../store/app/notes";
import { useDispatch } from "react-redux";

const CreateNote = () => {
  const [onShowModal, setOnShowModal] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setOnShowModal(true);
  };

  const closeModal = useCallback(() => {
    setOnShowModal(false);
  }, []);

  return (
    <>
      <button onClick={() => openModal()} className="modal-btn">
        Create new note
      </button>

      <Modal onClose={closeModal} show={onShowModal} title={"Create new note"}>
        <NoteForm
          description={""}
          title={""}
          isCreateNote
          createNewNote={(data) => dispatch(handleAddNote(data))}
        />
      </Modal>
    </>
  );
};

export default CreateNote;
