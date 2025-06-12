const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const verifyToken = require("./middleware/verifyToken");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://arnavog:<ajkyqeeYYoA8DDKO>@cluster0.wuwffjj.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

app.post("/initialize-user", verifyToken, (req, res) => {
  res.json({ role: req.user.role });
});

app.use("/admin", verifyToken, adminRoutes);
app.use("/user", verifyToken, userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
