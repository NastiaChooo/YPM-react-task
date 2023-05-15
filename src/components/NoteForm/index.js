import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const NoteForm = ({
  id,
  title,
  description,
  isCreateNote,
  changeNoteData,
  createNewNote,
}) => {
  const [noteData, setNoteData] = useState({
    title: title,
    description: description,
  });

  const onChangeNote = (e) => {
    e.preventDefault();
    changeNoteData &&
      noteData.title !== "" &&
      noteData.description !== "" &&
      changeNoteData({
        id,
        title: noteData.title,
        description: noteData.description,
      });
  };

  const onCreateNote = (e) => {
    e.preventDefault();
    createNewNote &&
      noteData.title !== "" &&
      createNewNote({
        id: uuidv4(),
        title: noteData.title,
        description: noteData.description,
      });

    setNoteData({ title: "", description: "" });
  };

  return (
    <form className="note-form">
      <span className="note-form__title">Title:</span>
      <input
        className="note-form__field"
        value={noteData.title}
        onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
        placeholder={"Title"}
        type="text"
        minLength={5}
      />
      <span className="note-form__title">Description:</span>
      <textarea
        className="note-form__field note-form__area"
        value={noteData.description}
        onChange={(e) =>
          setNoteData({ ...noteData, description: e.target.value })
        }
        placeholder={"Description"}
        type="text"
        minLength={5}
      />
      {isCreateNote ? (
        <button className="modal-update-btn" onClick={onCreateNote}>
          Create new note
        </button>
      ) : (
        <button className="modal-update-btn" onClick={onChangeNote}>
          Update note
        </button>
      )}
    </form>
  );
};

export default NoteForm;
