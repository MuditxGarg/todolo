const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

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
};
