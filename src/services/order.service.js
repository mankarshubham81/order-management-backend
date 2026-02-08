const { orders } = require("../data/order.store");
const { v4: uuidv4 } = require("uuid");

const ORDER_STATUSES = [
  "Order Received",
  "Preparing",
  "Out for Delivery",
  "Delivered"
];

const createOrder = ({ customer, items }) => {
  const orderId = uuidv4();

  const order = {
    id: orderId,
    customer,
    items,
    status: ORDER_STATUSES[0],
    createdAt: new Date().toISOString()
  };

  orders.set(orderId, order);
  return order;
};

const getOrderById = (orderId) => {
  return orders.get(orderId);
};

module.exports = {
  createOrder,
  getOrderById,
  ORDER_STATUSES
};