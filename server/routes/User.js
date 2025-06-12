const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const User = require("../models/User");

// View products
router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add to cart
router.post("/cart", async (req, res) => {
  const { productId } = req.body;
  req.user.cart.push(productId);
  await req.user.save();
  res.json({ message: "Added to cart", cart: req.user.cart });
});

module.exports = router;
