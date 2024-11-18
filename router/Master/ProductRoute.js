const express = require("express");
const router = express.Router();

const {create, deleteproduct, getproduct, updateproduct} = require("../../controller/Master/ProductController");



router.post("/create",  create);

router.delete("/deleteproduct/id/:id",  deleteproduct);

router.get("/getproduct/id/:id",  getproduct);

router.put("/updateproduct/id/:id",  updateproduct);

module.exports = router;