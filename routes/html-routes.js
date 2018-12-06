// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
//const path = require("path");
const express = require("express");
let router = express.Router();
 router.get("/", function(req,res){
        res.render("index");
 });
 module.exports = router;

// Routes
// =============================================================
//module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
 // app.get("/", function (req, res) {
   // res.sendFile(path.join(__dirname, "../public/index.handlebars"));
  //});

  //app.get("/?????", function (req, res) {
    //res.sendFile(path.join(__dirname, "../public/????.html"));
  //});

  // blog route loads blog.html
  //app.get("/?????", function (req, res) {
    //res.sendFile(path.join(__dirname, "../public/?????.html"));
  //});

//};
