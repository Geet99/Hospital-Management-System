const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkhourSchema = Schema(
    {
        date: String,
        checkIn : String,
        checOut : String
    }
);

module.exports = mongoose.model("Workhour", WorkhourSchema);