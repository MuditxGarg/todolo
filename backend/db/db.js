const mongoose = require("mongoose");
const loadConfig = require("../config/loadConfig");
const config = loadConfig();

mongoose
  .connect(config.database.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
  });

module.exports = mongoose.connection;
