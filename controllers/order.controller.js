const { orderService } = require("../services");



// Add a new product
const addorder = async (req, res) => {
  try {
    const body = req.body;

    const orderExist = await orderService.getOneOrder(body.order_id);

    if (orderExist) {
      throw new Error("order already exists");
    }

    const order = await orderService.addOrder(body);

    if (!order) {
      throw new Error("Something went wrong");
    }

    res.status(201).json({
      message: "order successfully done",
      data: order,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Get all products
const getAllorder = async (req, res) => {
  try {
    const order = await orderService.getOrders();

    res.status(200).json({
      success: true,
      message: "Successfully fetched all order",
      data: { order },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a product
const deleteorder = async (req, res) => {
  try {
    const id = req.params.id;

    const order = await orderService.deleteOrder(id);

    if (!order) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      message: "order deleted successfully",
      data: order,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Update a product
const updateorder = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const orderExist = await orderService.getOneOrder(body.order_id);

    if (orderExist) {
      throw new Error("Product already exists");
    }

    const order = await productService.updateProduct(id, body);

    res.status(200).json({
      message: "order updated successfully",
      data: order,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { addorder, getAllorder, deleteorder, updateorder };

