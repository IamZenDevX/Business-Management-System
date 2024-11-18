const Entry = require("../../models/Master/EntryModel");

exports.add = async (req, res, next) => {
  const { createdAt, product, quantity, type } = req.body;
  let createdEntry;
  createdEntry = await Entry.create({
    quantity,
    product,
    type,
  });
  res.json(createdEntry);
};

exports.getentry = async (req, res, next) => {
  const { id } = req.params;
  let var_Entry_List;
  var_Entry_List = await Entry.findById(id, "quantity type product ");
  res.json(var_Entry_List);
};

exports.update = async (req, res, next) => {
  const { product, quantity, type } = req.body;
  const { id } = req.params;
  const updatedEntry = await Entry.findByIdAndUpdate(
    id,
    {
      quantity: quantity,
      type: type,
      product: product,
    },
    { new: true }
  );
  res.json(updatedEntry);
};
