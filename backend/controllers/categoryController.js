const jwt = require("jsonwebtoken");
const loadConfig = require("../config/loadConfig"); // Load your configuration with the JWT secret key
const config = loadConfig();
const Category = require("../models/CategoriesModel");
const Task = require("../models/TaskModel");

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
  getCategories: async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      const userId = decoded.userId;

      // Fetch all categories associated with the userId
      const categories = await Category.find({ userId: userId });

      res.status(200).json({ categories: categories });
    } catch (error) {
      return res.status(401).json({ message: "Token Is Not Valid" });
    }
  },
  deleteCategory: async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      const userId = decoded.userId;
      const categoryId = req.params.categoryId;

      // Find the category by ID and associated user ID
      const category = await Category.findOne({
        _id: categoryId,
        userId: userId,
      });

      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      const tasks = await Task.find({
        categoryId: categoryId,
      });

      if (tasks && tasks.length > 0) {
        await Task.deleteMany({ categoryId: categoryId });
      }

      await Category.deleteOne({ _id: categoryId, userId: userId });

      res.status(200).json({ message: "Deleted Category" });
    } catch (error) {
      return res.status(401).json({ message: "Token Is Not Valid" });
    }
  },
  editCategory: async (req, res) => {
    const categoryId = req.params.categoryId;
    const { category } = req.body;

    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        categoryId,
        { category },
        { new: true },
      );

      if (updatedCategory) {
        res.status(200).json({ message: "Updated Category" });
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch (error) {
      console.error("Error editing category:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  getTotalCategoryAndTask: async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      const userId = decoded.userId;

      const categories = await Category.find({ userId: userId });
      const categoryCount = categories ? categories.length : 0;

      let taskCount = 0;
      for (const category of categories) {
        const tasks = await Task.find({ categoryId: category._id });
        taskCount += tasks ? tasks.length : 0;
      }

      res
        .status(200)
        .json({ categoryCount: categoryCount, taskCount: taskCount });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
