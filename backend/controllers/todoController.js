const jwt = require("jsonwebtoken");
const loadConfig = require("../config/loadConfig"); // Load your configuration with the JWT secret key
const config = loadConfig();
const Task = require("../models/TaskModel");
const Category = require("../models/CategoriesModel");

module.exports = {
  createTask: async (req, res) => {
    const token = req.cookies.token; // Token is stored in a cookie named 'token'

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, config.server.JWT_SECRET);

      const { task } = req.body;

      // Find the category with the provided name and the current user's ID
      // Create a new task and associate it with the obtained category ID
      const newTask = new Task({
        task: task,
        categoryId: req.body.category._id,
      });

      // Save the new task to the database
      const savedTask = await newTask.save();
      res.status(201).json({ message: "Task Added Successfully" });
    } catch (err) {
      return res.status(401).json({ message: "Token Is Not Valid" });
    }
  },
  getTasks: async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, config.server.JWT_SECRET);

      const category = req.query.category;

      // Find the category with the provided name and the current user's ID
      const tasks = await Task.find({ categoryId: category._id });

      res.status(200).json({ tasks: tasks });
    } catch (error) {
      return res.status(401).json({ message: "Token Is Not Valid" });
    }
  },
};
