const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Only allow admins
router.use((req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Admins only" });
  next();
});

// Add or update product
router.post("/product", async (req, res) => {
  const { name, price, description, imageUrl } = req.body;
  const product = new Product({ name, price, description, imageUrl });
  await product.save();
  res.json({ message: "Product added", product });
});

// Get all products
router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
