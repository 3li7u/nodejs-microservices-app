const express = require("express");
const {
  getAllOrders,
  getOneOrder,
  addOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controllers");
const orderRouter = express.Router();

orderRouter.get("/", getAllOrders);
orderRouter.get("/:id", getOneOrder);
orderRouter.post("/", addOrder);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);

module.exports = orderRouter;
