var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var Item = new Schema({
    title: String,
    location: String,
    description: String,
    date : { type: Date, default: Date.now()}
});

module.exports = mongoose.model("Item", Item);