const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var staffRole = require("./staffJS/staff_role")
var workHours = require("./staffJS/work_hours")

const staffSchema = Schema(
    {
        staffId: Number,
        name : String,
        dob : Date,
        age : Number,
        gender : String,
        address : String,
        joinedOn : Date,
        role: String, 
        isAdmin: Boolean,
        department: String,
        staffRole: [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "staffRole"
            }
        ],
        workHours :[
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "workHours"
            }
        ]
    }
);

module.exports = mongoose.model("staffSchema", staffSchema);