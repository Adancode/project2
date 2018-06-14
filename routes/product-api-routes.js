var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  app.get("/api/products", function(req, res) {
    currentUser = req.user;
    db.Product.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/products", function(req, res) {
    console.log(req.body);
    console.log("REQ");

    db.Product.create({
      UserId: req.user.id,
      vendorName: req.body.vendorName,
      productName: req.body.productName,
      description: req.body.description,
      EventId: req.body.EventId
    }).then(function(result) {
      res.json(result);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

}
