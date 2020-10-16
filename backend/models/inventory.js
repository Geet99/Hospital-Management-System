const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = Schema(
    {
        gloves : {
            type : Number,
            default : 0
        },
        testingkit : {
            type : Number,
            default : 0
        },
        syringes : {
            type : Number,
            default : 0
        },
        salinebottles : {
            type : Number,
            default : 0
        },
        masks : {
            type : Number,
            default : 0
        },
        ppekits : {
            type : Number,
            default : 0
        }
    }
);

module.exports = mongoose.model("Inventory", InventorySchema);