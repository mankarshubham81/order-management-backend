const express = require("express");
const cors = require("cors");
const menuRoutes = require("./routes/menu.routes");
const orderRoutes = require("./routes/order.routes");



const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;