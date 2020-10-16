var mongoose = require("mongoose");
var Medicinegiven = require("../models/medicinegiven");

var PatienttreatmentSchema = mongoose.Schema({
    date : String,
    symptoms : String,
    medicine : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Medicinegiven"
        }
    ]
});

module.exports = mongoose.model("Patienttreatment", PatienttreatmentSchema);