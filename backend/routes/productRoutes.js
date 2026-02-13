const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const protectAdmin = require("../middleware/authMiddleware");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

// GET product by slug
router.get("/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product" });
  }
});

// ✅ POST create new product
router.post("/", protectAdmin, async (req, res) => {
    try {
      const product = new Product(req.body);
      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(400).json({
        message: "Failed to create product",
        error: error.message,
      });
    }
  });
  

module.exports = router;
