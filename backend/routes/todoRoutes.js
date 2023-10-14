const express = require("express");
const categoryController = require("../controllers/categoryController");
const todoController = require("../controllers/todoController");
const checkJwtToken = require("../middleware/verifyToken");

const router = express.Router();

router.post("/addCategory", checkJwtToken, categoryController.createCategory);
router.get("/getCategories", checkJwtToken, categoryController.getCategories);
router.post("/addTask", checkJwtToken, todoController.createTask);
router.get("/getTasks", checkJwtToken, todoController.getTasks);
router.delete(
  "/deleteCategory/:categoryId",
  checkJwtToken,
  categoryController.deleteCategory,
);
router.put(
  "/editCategory/:categoryId",
  checkJwtToken,
  categoryController.editCategory,
);
router.delete("/deleteTask/:taskId", checkJwtToken, todoController.deleteTask);
router.put("/editTask/:taskId", checkJwtToken, todoController.editTask);

module.exports = router;
