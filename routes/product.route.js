const express = require("express");
const validate = require("../middlewares/validate");
const { productValidation } = require("../validations");
const { productController } = require("../controllers");

const route = express.Router();

route.post("/add",validate(productValidation.addProduct), productController.addProduct);
route.get("/get", productController.getAllProducts);
route.delete("/delete/:id", productController.deleteProduct);
route.put("/update/:id",validate(productValidation.addProduct),productController.updateProduct);


module.exports = route;