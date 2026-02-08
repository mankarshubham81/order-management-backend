const { createOrderSchema } = require("../validators/order.validator");
const { createOrder, getOrderById } = require("../services/order.service");

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

  const order = createOrder(value);

  // 🔁 Simulate status updates
  const interval = setInterval(() => {
    updateOrderStatus(order.id);

    const updatedOrder = getOrderById(order.id);
    if (
      updatedOrder &&
      updatedOrder.status === ORDER_STATUSES[ORDER_STATUSES.length - 1]
    ) {
      clearInterval(interval);
    }
  }, 10000); // every 10 seconds

  res.status(201).json(order);
};

module.exports = {
  createOrderHandler,
  getOrderHandler
};