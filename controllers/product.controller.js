const { productService } = require("../services");

// Add a new product
const addProduct = async (req, res) => {
  try {
    const body = req.body;

    // const productExist = await productService.getOneProduct(body.productName);

    // if (productExist) {
    //   throw new Error("Product already exists");
    // }

    const product = await productService.addProduct(body);

    if (!product) {
      throw new Error("Something went wrong");
    }

    res.status(201).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();

    res.status(200).json({
      success: true,
      message: "Successfully fetched all products",
      data: { products },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await productService.deleteProduct(id);

    if (!product) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      message: "Product deleted successfully",
      data: product,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    // const productExist = await productService.getOneProduct(body.productName);

    // if (productExist) {
    //   throw new Error("Product already exists");
    // }

    const product = await productService.updateProduct(id, body);

    res.status(200).json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { addProduct, getAllProducts, deleteProduct, updateProduct };
