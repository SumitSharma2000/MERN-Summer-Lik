const { products } = require("../database/db");

const getProduct = async (req, res) => {
  try {
    const pr = await products.find().toArray();
    res.json({
      status: "success",
      data: {
        products: pr,
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

const createProduct = async (req, res) => {
  const body = req.body;
  if (!body.price || !body.name) {
    res.status(400).json({
      status: "fail",
      message: "name and price are required",
    });
    return;
  }

  try {
    const product = await products.insertOne(body);
    res.status(201).json({
      status: "success",
      data: {
        product: product,
      },
    });
  } catch (error) {
    console.error("Error inserting product:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getProduct,
  createProduct,
};
