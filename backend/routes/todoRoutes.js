const express = require("express");
const todoController = require("../controllers/todoController");
const checkJwtToken = require("../middleware/verifyToken");

const router = express.Router();

router.post("/addCategory", checkJwtToken, todoController.createCategory);
