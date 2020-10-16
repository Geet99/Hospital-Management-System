var mongoose = require("mongoose");

var MedicinegivenSchema = mongoose.Schema({
    time : String,
    nameofmedicine : String,
    dosage : String,
    supervisedby : String    
});

module.exports = mongoose.model("Medicinegiven", MedicinegivenSchema);