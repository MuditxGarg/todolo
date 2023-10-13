const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const loadConfig = require("./config/loadConfig");
const cookieParser = require("cookie-parser");
const config = loadConfig();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/frontend")));
app.use(
  session({
    secret: config.server.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);

module.exports = app;
