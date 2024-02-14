const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order_id: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "productSchema",
    required: true,
  },
  quantity: {
    type: String,
  
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("orderSchema", orderSchema);

module.exports = Order;
