const notesData = require("../db/notesDB");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(notesData);
  });

  app.post("/api/notes", function(req, res) {
    notesData.push(req.body);
    res.json(true);
  });

  app.post("/api/clear", function(req, res) {
    notesData.length = 0;
    res.json({ ok: true });
  });
};
