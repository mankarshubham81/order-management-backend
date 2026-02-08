const { createOrderSchema } = require("../validators/order.validator");
const { createOrder, getOrderById } = require("../services/order.service");

const createOrderHandler = (req, res) => {
  const { error, value } = createOrderSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Invalid order data",
      details: error.details
    });
  }

  const order = createOrder(value);
  res.status(201).json(order);
};

const getOrderHandler = (req, res) => {
  const order = getOrderById(req.params.id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.json(order);
};

module.exports = {
  createOrderHandler,
  getOrderHandler
};