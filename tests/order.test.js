const request = require("supertest");
const app = require("../src/app");

describe("Orders API", () => {
  it("should create an order", async () => {
    const res = await request(app)
      .post("/api/orders")
      .send({
        customer: {
          name: "John Doe",
          address: "123 Street",
          phone: "9999999999"
        },
        items: [
          { itemId: "1", quantity: 2 }
        ]
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.status).toBe("Order Received");
  });

  it("should return order by id", async () => {
    const createRes = await request(app)
      .post("/api/orders")
      .send({
        customer: {
          name: "Jane",
          address: "456 Road",
          phone: "8888888888"
        },
        items: [{ itemId: "2", quantity: 1 }]
      });

    const orderId = createRes.body.id;

    const getRes = await request(app).get(`/api/orders/${orderId}`);
    expect(getRes.statusCode).toBe(200);
    expect(getRes.body.id).toBe(orderId);
  });
});