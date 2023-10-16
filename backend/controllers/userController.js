const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();
const { sendEmail } = require("../email/nodemailer");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const loadConfig = require("../config/loadConfig");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    const config = loadConfig();

    const user = await User.findOne({ userEmail: email });

    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);

      if (checkPassword) {
        const payload = { userId: user._id };
        const token = jwt.sign(payload, config.server.JWT_SECRET, {
          expiresIn: "1h",
        });

        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", token, {
            httpOnly: true,
            maxAge: 3600,
            path: "/",
          }),
        );

        return res.json({ message: "Successful Login" });
      } else {
        return res.json({ message: "Incorrect Password" });
      }
    } else {
      return res.json({ message: "Not Registered" });
    }
  },
  logout: async (req, res) => {
    res.clearCookie("token", { path: "/" });
    return res.json({ message: "Logout successful" });
  },
  signup: async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email: email });

    const otp = generateOTP();

    if (!user) {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashPass = await bcrypt.hash(password, salt);
      req.session.userName = name;
      req.session.userEmail = email;
      req.session.userPassword = hashPass;
      req.session.otp = otp;
      console.log(req.session.otp);
      // await sendEmail(email, otp);
      return res.json({ redirectTo: "/otp" });
    } else {
      return res.json({ message: "An account with this email already exists" });
    }
  },
  forgotPasswordOtp: async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ userEmail: email });

    const otp = generateOTP();

    if (user) {
      req.session.otp = otp;
      console.log(req.session.otp);
      // await sendEmail(email, otp);
      return res.json({ message: "Otp sent" });
    } else {
      return res.json({ message: "Could not generate OTP" });
    }
  },
  forgotPasswordOtpVerify: async (req, res) => {
    const { otp } = req.body;

    if (otp === req.session.otp) {
      res.status(200).json({ message: "Otp verified" });
    }
  },
  resetPassword: async (req, res) => {
    const { email, newPassword } = req.body;

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPass = await bcrypt.hash(newPassword, salt);

    const updatedUser = await User.findOneAndUpdate(
      { userEmail: email },
      { password: hashPass },
      { new: true },
    );

    if (updatedUser) {
      res.status(200).json({ message: "Password updated" });
    }
  },
  resetPasswordViaId: async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      // Verify the token
      const config = loadConfig();
      const decoded = jwt.verify(token, config.server.JWT_SECRET);

      // Token is valid, you can access the decoded information, including user's _id
      const userId = decoded.userId;

      const { newPassword } = req.body;

      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashPass = await bcrypt.hash(newPassword, salt);

      const updatedPassword = await User.findOneAndUpdate(
        { _id: userId },
        { password: hashPass },
        { new: true },
      );

      return res.status(200).json({ message: "Password updated" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  verifyOtp: async (req, res) => {
    const { otp } = req.body;

    if (otp === req.session.otp) {
      const newUser = new User({
        name: req.session.userName,
        userEmail: req.session.userEmail,
        password: req.session.userPassword,
      });

      // Save the new user to the database, assuming 'User' is a Mongoose model
      try {
        const savedUser = await newUser.save();
        return res.json({ message: "User Registered Successfully" });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error registering user", error: error.message });
      }
    } else {
      return res.json({ message: "Incorrect OTP" });
    }
  },
  getDetails: async (req, res) => {
    const token = req.cookies.token; // Token is stored in a cookie named 'token'

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      // Verify the token
      const config = loadConfig();
      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      const userId = decoded.userId;

      const user = await User.findOne({
        _id: userId,
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(201).json({ name: user.name, email: user.userEmail });
    } catch (err) {
      return res.status(401).json({ message: "Token Is Not Valid" });
    }
  },
  getAvatar: async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const config = loadConfig();
      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      const userId = decoded.userId;
      const user = await User.findOne({
        _id: userId,
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(201).json({ avatar: user.avatar });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  setAvatar: async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const config = loadConfig();
      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      const userId = decoded.userId;
      const { avatarImage } = req.body;
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { avatar: avatarImage },
        { new: true },
      );
      if (updatedUser) {
        res.status(200).json({ message: "Avatar updated" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  checkToken: async (req, res) => {
    const token = req.cookies.token;

    if (token) {
      return res.status(200).json({ message: "Token exists" });
    }
  },
};
