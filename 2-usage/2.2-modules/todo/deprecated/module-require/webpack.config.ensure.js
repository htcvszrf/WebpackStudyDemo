var path = require("path");
module.exports = {
    entry: "./example.ensure.js",
    output: {
        path: path.join(__dirname, "ensure"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    }
};