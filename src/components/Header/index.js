import React from "react";
import FilterBar from "../FilterNotesBar";
import CreateNote from "../CreateNote";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <CreateNote />
      <FilterBar />
    </header>
  );
};

export default Header;
