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
  deleteTask: async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      const taskId = req.params.taskId;

      console.log(taskId);

      // Find the category by ID and associated user ID
      const task = await Task.findOne({
        _id: taskId,
      });

      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      await Task.deleteOne({ _id: taskId });

      res.status(200).json({ message: "Deleted Task" });
    } catch (error) {
      return res.status(401).json({ message: "Token Is Not Valid" });
    }
  },
  editTask: async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const taskId = req.params.taskId;
    const { task } = req.body;

    try {
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        { task },
        { new: true },
      );

      if (updatedTask) {
        res.status(200).json({ message: "Updated Task" });
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    } catch (error) {
      console.error("Error editing task:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  taskDone: async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const taskId = req.params.taskId;

    try {
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        { checked: true },
        { new: true },
      );
      res.status(200).json({ message: "Task updated successfully" });
    } catch (error) {
      console.error("Error updating task:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
