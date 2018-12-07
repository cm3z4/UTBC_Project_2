let bodyParser = require("body-parser");
let express = require("express");
let path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({ extended: false }));

let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let router = require("./controllers/controller.js");
app.use("/", router);

// Application is listening...
app.listen(PORT, function() {
    console.log("Application is listening on PORT " + PORT + ".");
});
