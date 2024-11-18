const express = require("express");
const router = express.Router();

const {add, deleteser, getServicing, update} = require("../../controller/Master/ServicingController");



router.post("/add",  add);

router.delete("/deleteser/id/:id",  deleteser);

router.get("/getServicing/id/:id",  getServicing);

router.put("/updateservicing/id/:id",  update);

module.exports = router;