const User = require('../../models/Master/UserModel');


exports.adduser = async(req, res, next) => {
const {email, name, password, createdat, role} = req.body;
let createdUser;
createdUser = await User.create({
password, 
createdat, 
role, 
name, 
email, 
});
res.json(createdUser);



}

exports.deleteuser = async(req, res, next) => {
const {id} = req.params;
const deletedUser = await User.findByIdAndDelete(id);
//		res
res.json("deleted");




}

exports.getuset = async(req, res, next) => {
const {id} = req.params;
let var_User_List;
 var_User_List = await User.findById(id,'role password createdat name email ');
res.json(var_User_List);



}

exports.update = async(req, res, next) => {
const {name, password, role} = req.body;
const {id} = req.params;
const updatedUser = await User.findByIdAndUpdate(id,
{
name: name,
password: password,
role: role
}
, {new: true} );
//		res
res.json(updateUser);
res.json("updated");




}




