const express = require("express");
const router = express.Router();

const {adduser, deleteuser, getuset, update} = require("../../controller/Master/UserController");



router.post("/adduser",  adduser);

router.delete("/deleteuser/id/:id",  deleteuser);

router.get("/getuser/id/:id",  getuset);

router.put("/update/id/:id",  update);

module.exports = router;