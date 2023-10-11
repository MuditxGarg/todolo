const mongoose = require("mongoose");
const config = require("../config/loadConfig");

mongoose
  .connect(config.database.mongoURI, {
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
