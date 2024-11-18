const ErrorHandler = require("../../utils/default/errorHandler");
const Customer = require("../../models/Master/CustomerModel");

exports.add = async (req, res, next) => {
  const {
    address,
    amount,
    createdAt,
    due,
    name,
    paid,
    phone,
    profit,
    returnAmount,
    updatedAt,
  } = req.body;
  let createdCustomer;
  createdCustomer = new Customer({
    name,
    amount,
    paid,
    profit,
    phone,
    address,
    returnAmount,
    createdAt,
    updatedAt,
    due,
  });
  if (paid > amount) {
    //		    res.send('error', 'Paid amount cannot exceed more than the total amount.');
    res.send("Paid amount cannot exceed more than the total amount.");
  } else {
    try {
      await createdCustomer.save();
    } catch (err) {
      const error = new ErrorHandler("Error While Saving Data", 400);
      return next(error);
    }
    //		res.send('success', 'New customer has been successfully added!');
    res.send("New customer has been successfully added!");
  }
};

exports.deletecust = async (req, res, next) => {
  const { id } = req.params;
  const deletedCustomer = await Customer.findByIdAndDelete(id);
  //		delete
  res.send("Customer has been deleted successfully!");
};

exports.getCustomer = async (req, res, next) => {
  const { id } = req.params;
  let var_Customer_List;
  var_Customer_List = await Customer.findById(
    id,
    "name paid phone due address amount "
  );
  if (var_Customer_List.name) {
    res.send(var_Customer_List);
  } else {
    //		error
    return res.send("Customer Doesn't Exist");
  }
};

exports.updatecust = async (req, res, next) => {
  const { address, name, phone } = req.body;
  const { id } = req.params;
  const updatedCustomer = await Customer.findByIdAndUpdate(
    id,
    {
      phone: phone,
      name: name,
      address: address,
    },
    { new: true }
  );
  res.json(updatedCustomer);
};
