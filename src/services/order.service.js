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
    statusIndex: 0, // important for simulation
    createdAt: new Date().toISOString()
  };

  orders.set(orderId, order);
  return order;
};

const getOrderById = (orderId) => {
  return orders.get(orderId);
};

const updateOrderStatus = (orderId) => {
  const order = orders.get(orderId);
  if (!order) return;

  if (order.statusIndex < ORDER_STATUSES.length - 1) {
    order.statusIndex += 1;
    order.status = ORDER_STATUSES[order.statusIndex];
    orders.set(orderId, order);
  }
};

module.exports = {
  createOrder,
  getOrderById,
  updateOrderStatus,
  ORDER_STATUSES
};