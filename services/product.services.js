const { productSchema } = require("../models");

const getProducts = () => {
  return productSchema.find();
};

const addProduct = (body) => {
  return productSchema.create(body);
};

const getOneProduct = (productName) => {
  return productSchema.findOne({ productName });
};

const updateProduct = (id, body) => {
  return productSchema.findByIdAndUpdate(id, { $set: body });
};

const deleteProduct = (id) => {
  return productSchema.findByIdAndDelete(id);
};

module.exports = {
  getProducts,
  addProduct,
  getOneProduct, 
  updateProduct,
  deleteProduct,
};
