const express = require("express");
const router = express.Router();

const {add, deletecust, getCustomer, updatecust} = require("../../controller/Master/customerController");



router.post("/add",  add);

router.delete("/deletecust/id/:id",  deletecust);

router.get("/getCustomer/id/:id",  getCustomer);

router.put("/updatecust/id/:id",  updatecust);

module.exports = router;