var mongoose = require("mongoose");

var TestSchema = mongoose.Schema({
    nameoftest : String,
    result : String,
    testedby : String
});

module.exports = mongoose.model("Test", TestSchema);