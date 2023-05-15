import { createSlice } from "@reduxjs/toolkit";
import { NOTES_DATA } from "../../../mock-data/noteList";

export const notesSlice = createSlice({
  name: "appNotes",
  initialState: {
    notes: NOTES_DATA,
    filterState: "all",
    searchString: "",
  },
  reducers: {
    handleDeleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    handleAddNote: (state, action) => {
      state.notes = [action.payload, ...state.notes];
    },
    handleEditNote: (state, action) => {
      const { id, title, description } = action.payload;

      state.notes = state.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            title,
            description,
          };
        } else {
          return note;
        }
      });
    },
    onUpdateStatus: (state, action) => {
      const { id, status } = action.payload;

      state.notes = state.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            status,
          };
        } else {
          return note;
        }
      });
    },
    onSearchNotes: (state, action) => {
      state.searchString = action.payload;
    },
    onFilterNotes: (state, action) => {
      state.filterState = action.payload;
    },
  },
});

export const {
  handleDeleteNote,
  handleAddNote,
  handleEditNote,
  onUpdateStatus,
  onFilterNotes,
  onSearchNotes,
} = notesSlice.actions;

export default notesSlice.reducer;
