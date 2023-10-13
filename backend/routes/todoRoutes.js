const express = require("express");
const categoryController = require("../controllers/categoryController");
const todoController = require("../controllers/todoController");
const checkJwtToken = require("../middleware/verifyToken");

const router = express.Router();

router.post("/addCategory", checkJwtToken, categoryController.createCategory);
router.get("/getCategories", checkJwtToken, categoryController.getCategories);
router.post("/addTask", checkJwtToken, todoController.createTask);
router.get("/getTasks", checkJwtToken, todoController.getTasks);

module.exports = router;
