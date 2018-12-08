let express = require("express");
let models = require("../models");
let router = express.Router();

let connection = models.sequelize;
connection.sync();

// Encrypt & Decrypt functions.

let crypto = require("crypto"),
    algorithm = "aes-256-ctr",
    key = "d6F3Efeq";

function encrypt(text) {
    let cipher = crypto.createCipher(algorithm, key);
    let crypted = cipher.update(text, "utf8", "hex");
    crypted += cipher.final("hex");
    console.log(crypted);
    return crypted;
}

function decrypt(text) {
    let decipher = crypto.createDecipher(algorithm, key);
    let dec = decipher.update(text, "hex", "utf8");
    dec += decipher.final("utf8");
    console.log(dec);
    return dec;
}

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

<<<<<<< Updated upstream
//Render Index page.

router.get("/index", function(req, res) {
    res.render("index");
=======
// Create a new user.
router.post("/users/createUser", function(req, res) {
    let encryptedPass = encrypt(req.body.passInput);
    let email = req.body.emailInput;
    let pass = encryptedPass;

    models.users
        .create({
            user: email,
            pass: pass
        })
        .then(function() {
            res.redirect("/login");
        });
});

router.post("/users/authUser", function(req, res) {
    console.log(req.body.emailInput1);
    models.users
        .findOne({
            where: { user: req.body.emailInput1 }
        })
        .then(function(data) {
            let info = data.dataValues.user;
            if (info === req.body.emailInput1) {
                console.log("That user exists!");
                res.redirect("/login");
            }
        })
        .catch(function(err) {
            console.log("Doesn't exist!");
        });

   /* let encryptedPass = decrypt();
    let email = req.body.emailInput;
    let pass = encryptedPass;

    models.users
        .create({
            user: email,
            pass: pass
        })
        .then(function() {
            res.redirect("/login");
        }); */
>>>>>>> Stashed changes
});

// Export routes.
module.exports = router;
