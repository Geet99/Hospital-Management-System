const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BedSchema = Schema(
    {
        occupied : {
            covid : {
                type : Number,
                default : 0
            },
            noncovid : {
                type : Number,
                default : 0
            },
            icu : {
                type : Number,
                default : 0
            }
        },
        available : {
            covid : {
                type : Number,
                default : 50
            },
            noncovid : {
                type : Number,
                default : 30
            },
            icu : {
                type : Number,
                default : 20
            }
        }
    }
);

module.exports = mongoose.model("Bed", BedSchema);