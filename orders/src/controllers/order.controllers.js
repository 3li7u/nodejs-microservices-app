const { Order } = require("../models");

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      success: true,
      message: `${orders.length} orders have been fetched successfully`,
      data: {
        orders,
        total: orders.length,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getOneOrder = async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    if (order)
      res.status(200).json({
        success: true,
        message: `Order: ${order.id} has been fetched successfully`,
        data: order,
      });
    else
      res.status(404).json({
        success: false,
        message: `The requested order: ${id} hasn't been found`,
      });
  } catch (error) {
    next(error);
  }
};

const addOrder = async (req, res, next) => {
  const orderData = req.body;
  try {
    const order = new Order(orderData);
    const addedOrder = await order.save();
    res.status(201).json({
      success: true,
      message: `New order: ${addedOrder.id} has been added successfully`,
      data: addedOrder,
    });
  } catch (error) {
    next(error);
  }
};

const updateOrder = async (req, res, next) => {
  const { id } = req.params;
  const orderData = req.body;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, orderData, {
      new: true,
      runValidators: true,
      context: "query",
    });
    if (updatedOrder)
      res.status(200).json({
        success: true,
        message: `${updatedOrder.id} has been updated successfully`,
        data: updatedOrder,
      });
    else
      res.status(404).json({
        success: true,
        message: `The requested order ${id} hasn't been found`,
      });
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (deletedOrder)
      res.status(200).json({
        success: true,
        message: `${deletedOrder.id} has been deleted successfully`,
        data: deletedOrder,
      });
    else
      res.status(404).json({
        success: true,
        message: `The requested order ${id} hasn't been found`,
      });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllOrders,
  getOneOrder,
  addOrder,
  updateOrder,
  deleteOrder,
};
