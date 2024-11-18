const Product = require('../../models/Master/ProductModel');


exports.create = async(req, res, next) => {
const {code, createdAt, name, rate} = req.body;
let createdProduct;
createdProduct = new Product({
rate, 
code, 
name, 
createdAt, 
});
await createdProduct.save();
res.json(createdProduct);



}

exports.deleteproduct = async(req, res, next) => {
const {id} = req.params;
const deletedProduct = await Product.findByIdAndDelete(id);
//		res
res.json("deleted");




}

exports.getproduct = async(req, res, next) => {
const {id} = req.params;
let var_Product_List;
 var_Product_List = await Product.findById(id,'name rate code createdAt ');
res.json(var_Product_List);



}

exports.updateproduct = async(req, res, next) => {
const {name, rate, code} = req.body;
const {id} = req.params;
const updatedProduct = await Product.findByIdAndUpdate(id,
{
rate: rate,
name: name,
code: code
}
, {new: true} );
res.json(updatedProduct);



}




