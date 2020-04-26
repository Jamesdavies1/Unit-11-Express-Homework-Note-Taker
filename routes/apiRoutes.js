const notesData = require("../db/notesDB");

module.exports = function(app) {
  //get req
  app.get("/api/notes", function(req, res) {
    res.json(notesData);
  });

  //post req
  app.post("/api/notes", function(req, res) {
    notesData.push(req.body);
    res.json(true);
  });

  //del req
  app.post("/api/clear", function(req, res) {
    notesData.length = 0;
    res.json({ ok: true });
  });
};
