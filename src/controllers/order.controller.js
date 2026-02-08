const { createOrderSchema } = require("../validators/order.validator");
const {
  createOrder,
  getOrderById,
  updateOrderStatus,
  ORDER_STATUSES
} = require("../services/order.service");

const createOrderHandler = (req, res) => {
  const { error, value } = createOrderSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Invalid order data",
      details: error.details
    });
  }

  // value MUST exist here
  const order = createOrder(value);

  const interval = setInterval(() => {
    updateOrderStatus(order.id);

    const updatedOrder = getOrderById(order.id);
    if (
      updatedOrder &&
      updatedOrder.status === ORDER_STATUSES[ORDER_STATUSES.length - 1]
    ) {
      clearInterval(interval);
    }
  }, 10000);

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