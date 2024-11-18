const servicing = require('../../models/Master/servicingModel');


exports.add = async(req, res, next) => {
const {address, deliveryDate, name, product, phone, quantity, serviceCharge, status} = req.body;
let createdservicing;
createdservicing = new servicing({
address, 
serviceCharge, 
quantity, 
phone, 
status, 
deliveryDate, 
name, 
product, 
});
await createdservicing.save();
//		`New servicing has been successfully added!`
res.send("New servicing has been successfully added!");




}

exports.deleteser = async(req, res, next) => {
const {id} = req.params;
const deletedservicing = await servicing.findByIdAndDelete(id);
//		send
res.send("Data Deleted Sucessfully!!");




}

exports.getServicing = async(req, res, next) => {
const {id} = req.params;
let var_servicing_List;
 var_servicing_List = await servicing.findById(id,'phone deliveryDate serviceCharge createdAt product status quantity name address ');
res.json(var_servicing_List);



}

exports.update = async(req, res, next) => {
const {address, deliveryDate, name, product, phone, quantity, serviceCharge, status} = req.body;
const {id} = req.params;
const updatedservicing = await servicing.findByIdAndUpdate(id,
{
phone: phone,
deliveryDate: deliveryDate,
name: name,
quantity: quantity,
address: address,
product: product,
serviceCharge: serviceCharge
}
, {new: true} );
res.json(updatedservicing);



}




