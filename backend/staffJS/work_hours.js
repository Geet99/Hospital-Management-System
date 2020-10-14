const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workHours = Schema(
    {
        checkIn = Date,
        checOut = Date
    }
);

module.exports = mongoose.model("workHours", workHours);