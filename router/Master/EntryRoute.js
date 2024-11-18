const express = require("express");
const router = express.Router();

const {add, getentry, update} = require("../../controller/Master/EntryController");



router.post("/addentry",  add);

router.get("/getentry/id/:id",  getentry);

router.put("/update/id/:id",  update);

module.exports = router;