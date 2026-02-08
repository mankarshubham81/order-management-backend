const express = require("express");
const {
  createOrderHandler,
  getOrderHandler
} = require("../controllers/order.controller");

const router = express.Router();

router.post("/", createOrderHandler);
router.get("/:id", getOrderHandler);

module.exports = router;