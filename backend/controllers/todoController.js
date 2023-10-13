const jwt = require("jsonwebtoken");
const loadConfig = require("../config/loadConfig"); // Load your configuration with the JWT secret key
const config = loadConfig();
const Category = require("../models/CategoriesModel");

module.exports = {
  createCategory: async (req, res) => {
    const token = req.cookies.token; // Token is stored in a cookie named 'token'

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, config.server.JWT_SECRET);

      // Token is valid, you can access the decoded information, including user's _id
      const userId = decoded.userId;

      // Create a new category and associate it with the user's _id
      const newCategory = new Category({
        category: req.body.category,
        userId: userId,
      });

      // Save the new category to the database
      const savedCategory = await newCategory.save();
      res.status(201).json({ message: "Added Category" });
    } catch (err) {
      return res.status(401).json({ message: "Token Is Not Valid" });
    }
  },
};
