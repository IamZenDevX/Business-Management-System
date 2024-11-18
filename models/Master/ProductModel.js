const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
{
name: {
type: String, 
required: true, 
},
code: {
type: String, 
},
rate: {
type: Number, 
},
createdAt: {
type: Date, 
},
},
);





module.exports = mongoose.model("Product", ProductSchema);
