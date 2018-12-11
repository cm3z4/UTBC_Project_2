const fileUpload = require("../lib/index.js");

module.exports = function(app) {
    // Used to upload a single image.
    app.use(fileUpload());
    app.post("/upload", function(req, res) {
        let imageId = Math.floor(Math.random() * 1000000000);
        if (Object.keys(req.files).length === 0) {
            return res.status(400).send("No files were uploaded.");
        }

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile = req.files.sampleFile;

        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv("./uploads/" + imageId + ".jpg", function(err) {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect("/index");
            console.log("File uploaded!");
        });
    });
};
