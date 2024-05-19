const express = require("express");
const orderController = require("../../Controller/User/orders");
const router = express.Router();

router.post("/addorder", orderController.postOrder);
router.get("/getorder/:id", orderController.getOrderwithId);
router.get("/getallorder", orderController.getallOrder);

module.exports = router;
