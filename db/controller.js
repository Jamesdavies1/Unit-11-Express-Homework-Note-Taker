// import notesArray from "./notesDB";
const fs = require("fs");
const path = require("path");
const uuidv1 = require("uuid").v1;

const writeToDB = note => {
  try {
    fs.writeFileSync(path.resolve(__dirname, "db.json"), JSON.stringify(note), {
      encoding: "utf8"
    });
  } catch (error) {
    throw new Error(error);
  }
  return true;
};

const deleteNote = noteID => {
  const availableNotes = getNotes();

  const filteredNotes = availableNotes.filter(({ id }) => id !== noteID);

  writeToDB(filteredNotes);
  return;
};

const addNote = (title, text) => {
  const existingNotes = getNotes();
  const createdNote = { title, text, id: uuidv1() };
  const updatedNotes = [createdNote, ...existingNotes];
  console.log("updated notes: ", updatedNotes);
  writeToDB(updatedNotes);
  return createdNote;
};

const getNotes = () => {
  const availableNotes = fs.readFileSync(path.resolve(__dirname, "db.json"));
  return JSON.parse(availableNotes.toString("utf8"));
};

module.exports = {
  addNote,
  getNotes,
  deleteNote
};
