var mongoose = require("mongoose");
var Scheme = mongoose.Schema;

var staffRole = Scheme(
    {
        role_type: String,
        role_speciality: String
    }
);

module.exports = mongoose.model("staffRole", staffRole);