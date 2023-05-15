import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { onFilterNotes, onSearchNotes } from "../../store/app/notes";

const FilterBar = () => {
  const { searchString } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="wrap">
        <button
          className="modal-btn"
          onClick={() => dispatch(onFilterNotes("checked"))}
        >
          Checked
        </button>
        <button
          className="modal-btn"
          onClick={() => dispatch(onFilterNotes("unchecked"))}
        >
          Unchecked
        </button>
        <button
          className="modal-btn"
          onClick={() => dispatch(onFilterNotes("all"))}
        >
          All
        </button>
      </div>
      <div className="custom-input">
        <input
          type="text"
          placeholder="Search note"
          value={searchString}
          onChange={(e) => dispatch(onSearchNotes(e.target.value))}
        />
      </div>
    </div>
  );
};

export default FilterBar;
