const express = require("express");
const models = require("../models");
const router = express.Router();

let connection = models.sequelize;
connection.sync();

// Encrypts the user's password.
require("dotenv").config();
let crypto = require("crypto"),
    algorithm = "aes-256-ctr",
    key = process.env.encrypt_key;

function encrypt(text) {
    let cipher = crypto.createCipher(algorithm, key);
    let crypted = cipher.update(text, "utf8", "hex");
    crypted += cipher.final("hex");
    return crypted;
}

// Redirects the user to the login page from root.
router.get("/", function(req, res) {
    res.redirect("/login");
});

// Renders the login page.
router.get("/login", function(req, res) {
    res.render("login");
});

// Renders the signup page.
router.get("/signup", function(req, res) {
    res.render("signup");
});

// Renders the index page if the user has been authenticated.
let userAuthenticated = false;
router.get("/index", function(req, res) {
    if (userAuthenticated === true) {
        res.render("index");
    } else {
        res.redirect("/login");
    }
});

// Create a new user.
router.post("/users/createUser", function(req, res) {
    let email = req.body.emailInput;
    let encryptedPass = encrypt(req.body.passInput);

    if (email && encryptedPass) {
        // Check if the user already exists.
        models.users
            .findOne({
                where: { user: req.body.emailInput }
            })
            .then(function(data) {
                if (data === null) {
                    models.users
                        .create({
                            user: email,
                            pass: encryptedPass
                        })
                        .then(function() {
                            res.redirect("/login");
                        });
                } else if (data.dataValues.user === req.body.emailInput) {
                    console.log("That user already exists!");
                    res.redirect("/signup");
                }
            });
    } else {
        console.log("The user must enter both an email and password.");
        res.redirect("/signup");
    }
});

router.post("/users/authUser", function(req, res) {
    models.users
        .findOne({
            where: { user: req.body.emailInput1 }
        })
        .then(function(data) {
            let userEmail = data.dataValues.user;
            if (userEmail === req.body.emailInput1) {
                console.log("That user exists!");

                if (encrypt(req.body.passInput1) === data.dataValues.pass) {
                    userAuthenticated = true;
                    res.redirect("/index");
                } else {
                    console.log("The password the user entered is incorrect.");
                    res.redirect("/login");
                }
            }
        })
        .catch(function(err) {
            console.log(err);
            console.log("The email entered doesn't exist.");
            res.redirect("/login");
        });
});

// Export routes.
module.exports = router;
