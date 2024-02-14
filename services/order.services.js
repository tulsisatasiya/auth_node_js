const { orderSchema } = require("../models");

const getOrders = () => {
  return orderSchema.find().populate('product').populate('user');;
};

const addOrder = (body) => {
  return orderSchema.create(body);
};

const getOneOrder = (order_id) => {
  return orderSchema.findOne({ order_id });
};

const updateOrder = (id, body) => {
  return orderSchema.findByIdAndUpdate(id, { $set: body });
};

const deleteOrder = (id) => {
  return orderSchema.findByIdAndDelete(id);
};

module.exports = {
  getOrders,
  addOrder,
  getOneOrder,
  updateOrder,
  deleteOrder,
};
