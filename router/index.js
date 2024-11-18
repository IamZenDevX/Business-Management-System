const express = require("express");
const router = express.Router();

const customerRoute = require("./Master/customerRoute");
const EntryRoute = require("./Master/EntryRoute");
const ProductRoute = require("./Master/ProductRoute");
const ServicingRoute = require("./Master/ServicingRoute");
const UserRoute = require("./Master/UserRoute");

router.use(customerRoute);
router.use(EntryRoute);
router.use("/product", ProductRoute);
router.use(ServicingRoute);
router.use(UserRoute);

module.exports = router;
