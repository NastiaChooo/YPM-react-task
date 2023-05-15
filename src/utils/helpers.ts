export const getFilteredNotes = (notes, type) => {
  if (type === "checked") {
    return notes.filter((note) => note.status);
  } else if (type === "unchecked") {
    return notes.filter((note) => !note.status);
  } else {
    return notes;
  }
};

export const selectNotes = (notes, searchQuery) => {
  if (searchQuery.trim() === "") {
    return notes;
  }

  const normalizedSearchQuery = searchQuery.toLowerCase().trim();
  return notes.filter((note) => {
    const normalizedTitle = note.title.toLowerCase();
    const normalizedDescription = note.description.toLowerCase();
    return (
      normalizedTitle.includes(normalizedSearchQuery) ||
      normalizedDescription.includes(normalizedSearchQuery)
    );
  });
};
