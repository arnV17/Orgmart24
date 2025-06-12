const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
});

module.exports = mongoose.model("User", userSchema);
