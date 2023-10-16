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
router.post("/resetPasswordViaId", userController.resetPasswordViaId);
router.post("/setAvatar", userController.setAvatar);
router.get("/getDetails", userController.getDetails);
router.get("/getDetails", userController.getDetails);
router.get("/checkToken", userController.checkToken);
router.get("/getAvatar", userController.getAvatar);

module.exports = router;
