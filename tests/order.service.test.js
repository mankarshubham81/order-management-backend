const {
    createOrder,
    updateOrderStatus,
    ORDER_STATUSES
  } = require("../src/services/order.service");
  
  describe("Order Status Simulation", () => {
    it("should progress order status correctly", () => {
      const order = createOrder({
        customer: { name: "Test", address: "Addr", phone: "12345678" },
        items: [{ itemId: "1", quantity: 1 }]
      });
  
      updateOrderStatus(order.id);
      expect(order.status).toBe(ORDER_STATUSES[1]);
  
      updateOrderStatus(order.id);
      expect(order.status).toBe(ORDER_STATUSES[2]);
    });
  });