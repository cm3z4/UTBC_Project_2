let express = require("express");
//let models = require("../models");
let router = express.Router();

//let connection = models.sequelize;
//connection.sync();

// Redirect user to the login page from root.
router.get("/", function(req, res) {
    res.redirect("/login");
});

// Render signup page.
router.get("/login", function(req, res) {
    res.render("login");
});

// Render login page.
router.get("/signup", function(req, res) {
    res.render("signup");
});

//Render Index page.

router.get("/index", function(req, res) {
    res.render("index");
});

// Export routes.
module.exports = router;
