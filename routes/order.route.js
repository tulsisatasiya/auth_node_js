const express = require("express");
const validate = require("../middlewares/validate");
const { orderValidation } = require("../validations");
const { orderController } = require("../controllers");


const route = express.Router();

route.post("/add",validate(orderValidation.addodervalid), orderController.addorder);
route.get("/get", orderController.getAllorder);
route.delete("/delete/:id", orderController.deleteorder);
route.put("/update/:id",validate(orderValidation.addodervalid),orderController.updateorder);


module.exports = route;