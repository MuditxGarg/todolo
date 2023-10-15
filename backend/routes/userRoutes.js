const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.post("/verifyOtp", userController.verifyOtp);
router.post("/logout", userController.logout);
router.post("/forgotPasswordOtp", userController.forgotPasswordOtp);
router.post("/forgotPasswordOtpVerify", userController.forgotPasswordOtpVerify);
router.post("/resetPassword", userController.resetPassword);
router.get("/getDetails", userController.getDetails);
router.get("/getDetails", userController.getDetails);
router.get("/checkToken", userController.checkToken);

module.exports = router;
