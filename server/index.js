const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const verifyToken = require("./middleware/verifyToken");

const adminRoutes = require("./routes/Admin");
const userRoutes = require("./routes/User");

const app = express();
app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.post("/initialize-user", verifyToken, (req, res) => {
  res.json({ role: req.user.role });
});

app.use("/admin", verifyToken, adminRoutes);
app.use("/user", verifyToken, userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
