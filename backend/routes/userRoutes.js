const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.post("/verifyOtp", userController.verifyOtp);
router.post("/logout", userController.logout);
router.get("/getDetails", userController.getDetails);
router.get("/getDetails", userController.getDetails);

module.exports = router;
