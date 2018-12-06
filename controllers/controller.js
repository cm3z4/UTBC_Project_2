const express = require("express");
const router = express.Router();

// Import the model (index.js) to use its database functions.
const index = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    index.all(function(data) {
        let hbsObject = {
            index: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// NEED TO UPDATE ???? WITH DETERMINED SCHEMA
// router.post("/api/index", function(req, res) {
//   index.create(["????", "?????"], [req.body.????, req.body.?????], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/index/:id", function(req, res) {
//   let condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   index.update(
//     {
//       ?????: req.body.?????
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
//     }
//   );
// });

// Export routes for server.js to use.
module.exports = router;