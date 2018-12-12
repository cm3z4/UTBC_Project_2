const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
const db = require("./models");

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const router = require("./controllers/controller.js");
app.use("/", router);

// Require routing files.
require("./routing/apiRoutes.js")(app);

// Application is listening...
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Application is listening on PORT " + PORT + ".");
    });
});
