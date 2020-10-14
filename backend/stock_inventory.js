const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = Schema(
  {
      product_id : Number,
      product_name : String,
      product_type : String,
      product_quantity : Number
  },
  {timestamp: true}  
);
 module.exports = mongoose.model("inventorySchema", inventorySchema);