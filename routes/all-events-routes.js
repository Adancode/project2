var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  app.get("/api/all-events/:id", function (req, res) {
    var currentUserId = req.user.id;
    db.Event.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  app.delete("/api/all-events/:deleteId", function(req, res) {
    db.Event.destroy({
      where: {
        id: req.params.deleteId
      }
    })
      .then(function(results) {
        res.json(results);
      });
  });

  app.put("/api/all-events", function(req, res) {
    db.Event.update(req.body, {
      where: {
        id: req.body.id
      }
      // eventName: req.body.eventName,
      // date: req.body.date,
      // location: req.body.location,
      // description: req.body.description
    }).then(function(results) {
      res.json(results);
    }).catch(function(err) {
      res.json(err);
  });
  });

}