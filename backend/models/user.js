var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var Test = require("../models/test");
var Patienttreatment = require("../models/patienttreatment");
var Workhour = require("../models/workhour");

var UserSchema = new mongoose.Schema({
    password : String,
    username : String,
    isPatient : {
        type: Boolean,
        default : false
    },
    isStaff : {
        type: Boolean,
        default : false
    },
    isAdmin : {
        type: Boolean,
        default : false
    },
    forStaff : {
        name : {
            type : String,
            default : null
        },
        dob : {
            type : String,
            default : null
        },
        age : {
            type : Number,
            default : null
        },
        gender : {
            type : String,
            default : null
        },
        address : {
            type : String,
            default : null
        },
        phone : {
            type : Number,
            default : null
        },
        relievedOn : {
            type : String,
            default : null
        },
        joinedOn : {
            type : String,
            default : null
        },
        role: {
            type : String,
            default : null
        }, 
        department: {
            type : String,
            default : null
        },
        workHours :[
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Workhour"
            }
        ]
    },
    forPatient : {
        name : {
            type : String,
            default : null
        },
        dob : {
            type : String,
            default : null
        },
        address : {
            type : String,
            default : null
        },
        phone : {
            type : Number,
            default : null
        },
        age : {
            type : String,
            default : null
        },
        address : {
            type : String,
            default : null
        },
        gender : {
            type : String,
            default : null
        },
        bloodgroup : {
            type : String,
            default : null
        },
        phone : {
            type : Number,
            default : null
        },
        weight : {
            type : Number,
            default : null
        },
        insuranceno : {
            type : String,
            default : null
        },
        emergencycontact : {
            name:{
                type : String,
                default : null
            },
            phone:{
                type : Number,
                default : null
            }
        },
        allergies : {
            type : String,
            default : null
        },
        history : {
            type : String,
            default : null
        },
        treatment : {
            admitdate : {
                type : String,
                default : null
            },
            bedNo : Number,
            dischargedate : {
                type : String,
                default : null
            },
            treatedby : {
                type : String,
                default : null
            },
            covidpositive : {
                type : String,
                default : false
            },
            tests : [
                {
                    type : mongoose.Schema.Types.ObjectId,
                    ref : "Test"
                }
            ],
            medicinerecord : [
                {
                    type : mongoose.Schema.Types.ObjectId,
                    ref : "Patienttreatment"
                }
            ]
        }
    } 
});

UserSchema.plugin(passportLocalMongoose);
 
module.exports = mongoose.model("User", UserSchema);