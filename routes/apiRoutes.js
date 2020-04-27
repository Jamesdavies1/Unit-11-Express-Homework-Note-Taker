const addNoteToJson = require("../db/controller");
const { addNote, getNotes, deleteNote } = require("../db/controller");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    const availableNotes = getNotes();
    return res.json(availableNotes);
  });

  app.post("/api/notes", function(req, res) {
    const { title, text } = req.body;

    const createdPost = addNote(title, text);

    return res.json(createdPost);
  });

  app.delete("/api/notes:id", function(req, res) {});

  //   app.post("/api/notes", function(req, res) {
  //     notesData.push(req.body);
  //     res.json(true);
  //   });

  //   app.post("/api/clear", function(req, res) {
  //     notesData.length = 0;
  //     res.json({ ok: true });
  //   });
};
