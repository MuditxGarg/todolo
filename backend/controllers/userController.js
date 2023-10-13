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
};
