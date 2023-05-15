import React, { useCallback } from "react";
import NotesItem from "../NotesItem";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteNote,
  handleEditNote,
  onUpdateStatus,
} from "../../store/app/notes";
import { getFilteredNotes, selectNotes } from "../../utils/helpers.ts";

const NotesList = () => {
  const { notes, filterState, searchString } = useSelector(
    (state) => state.notes
  );

  const dispatch = useDispatch();
  const filteredLists = useCallback(
    selectNotes(getFilteredNotes(notes, filterState), searchString),
    [filterState, searchString]
  );

  return (
    <>
      <h2>My Notes</h2>
      <ul className="notes-list">
        {notes &&
          (filterState === "all" && searchString === ""
            ? notes
            : filteredLists
          ).map((note) => {
            return (
              <NotesItem
                key={note.id}
                {...note}
                deleteNote={(id) => {
                  dispatch(handleDeleteNote(id));
                }}
                changeStatus={(data) => dispatch(onUpdateStatus(data))}
                changeNoteData={(data) => dispatch(handleEditNote(data))}
              />
            );
          })}
      </ul>
    </>
  );
};

export default NotesList;
