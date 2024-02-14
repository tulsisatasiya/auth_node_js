const express = require("express");
const userRoute = require("./user.route");
const productRoute = require("./product.route");
const orderRouter = require("./order.route");

const route = express.Router();

route.use("/user", userRoute);
route.use("/product", productRoute);
route.use("/order", orderRouter);


module.exports = route;
