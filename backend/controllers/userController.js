const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();
const { sendEmail } = require("../email/nodemailer");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);

      if (checkPassword) {
        return res.json({ message: "Successful Login" });
      } else {
        return res.json({ message: "Incorrect Password" });
      }
    } else {
      res.json({ message: "Not Registered" });
    }
  },
  signup: async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email: email });

    const otp = generateOTP;

    if (!user) {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashPass = await bcrypt.hash(password, salt);
      req.session.userName = name;
      req.session.userEmail = email;
      req.session.userPassword = hashPass;
      req.session.otp = otp;

      await sendEmail(email, otp);
      return res.redirect("/otp");
    } else {
      return res.json({ message: "An account with this email already exists" });
    }
  },
  verifyOtp: async (req, res) => {
    const { otp } = req.body;

    if (otp === req.session.otp) {
      const newUser = new User({
        email: req.session.userEmail,
        password: req.session.userPassword,
      });

      // Save the new user to the database, assuming 'User' is a Mongoose model
      try {
        const savedUser = await newUser.save();
        return res.json({ message: "User registered successfully" });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error registering user", error: error.message });
      }
    }
  },
};
