const mongoose = require("mongoose");
const User = require("./UserModel");

const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
